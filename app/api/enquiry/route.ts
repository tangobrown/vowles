import { NextResponse } from "next/server";
import {
  HONEYPOT_FIELD,
  LIMITS,
  isSafeEmail,
  validateEnquiry,
  type Enquiry,
} from "@/lib/enquiry";
import { PostmarkError, readPostmarkConfig, sendEmail } from "@/lib/postmark";

// Relays a website enquiry to Paul via Postmark. Runs on every request (never
// prerendered) because it reads the Postmark secret at request time.
export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const SITE = "paulvowlescarpentry.co.uk";

/* Shown to the visitor whenever the real cause is ours, not theirs. The
   specifics go to the server log instead — a misconfigured token is not the
   visitor's problem and not their business. */
const GENERIC_FAILURE =
  "Sorry, we couldn't send that just now. Please try again, or give Paul a call.";

const escapeHtml = (s: string) =>
  s.replace(
    /[&<>"']/g,
    (c) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
      })[c] as string,
  );

/* Trims and hard-caps a field, so an oversized payload can't reach Postmark
   even if validation somehow lets it through. */
const clean = (v: unknown, max: number): string =>
  typeof v === "string" ? v.trim().slice(0, max) : "";

type Row = { label: string; value: string };

function buildRows(enquiry: Enquiry): Row[] {
  const shared: Row[] = [
    { label: "Name", value: enquiry.name },
    { label: "Phone", value: enquiry.phone },
    { label: "Email", value: enquiry.email },
  ];

  return enquiry.formType === "contact"
    ? [
        ...shared,
        { label: "Service", value: enquiry.service },
        { label: "Message", value: enquiry.message },
      ]
    : [
        ...shared,
        { label: "Postcode", value: enquiry.postcode },
        { label: "Project", value: enquiry.description },
      ];
}

function buildBodies(enquiry: Enquiry, rows: Row[]) {
  const kind =
    enquiry.formType === "contact" ? "message" : "quote enquiry";

  const textBody = [
    `New ${kind} from ${SITE}`,
    "",
    ...rows.map((r) => `${r.label}: ${r.value || "—"}`),
  ].join("\n");

  const htmlBody = `<!doctype html>
<html><body style="font-family:-apple-system,Segoe UI,Helvetica,Arial,sans-serif;color:#151617">
  <h2 style="margin:0 0 16px">New ${kind} from ${SITE}</h2>
  <table cellpadding="0" cellspacing="0" style="border-collapse:collapse">
    ${rows
      .map(
        (r) =>
          `<tr>
      <td style="padding:6px 16px 6px 0;vertical-align:top;color:#5c5f63;white-space:nowrap">${escapeHtml(r.label)}</td>
      <td style="padding:6px 0;vertical-align:top;white-space:pre-wrap">${escapeHtml(r.value) || "&mdash;"}</td>
    </tr>`,
      )
      .join("\n    ")}
  </table>
</body></html>`;

  return { textBody, htmlBody };
}

export async function POST(request: Request) {
  let raw: Record<string, unknown>;
  try {
    raw = (await request.json()) as Record<string, unknown>;
  } catch {
    return NextResponse.json({ error: "Malformed request." }, { status: 400 });
  }

  // Honeypot: a filled hidden field means a bot. Return success without
  // sending so it can't tell it was dropped. Logged rather than silent —
  // a browser autofilling the trap is the one way a real enquiry lands here,
  // and that needs to be diagnosable.
  if (clean(raw[HONEYPOT_FIELD], 200)) {
    console.warn(
      `[enquiry] Dropped as spam: honeypot "${HONEYPOT_FIELD}" was filled. ` +
        `Name field was "${clean(raw.name, LIMITS.name) || "(empty)"}".`,
    );
    return NextResponse.json({ ok: true });
  }

  const formType = raw.formType === "quote" ? "quote" : "contact";
  const base = {
    name: clean(raw.name, LIMITS.name),
    email: clean(raw.email, LIMITS.email),
    phone: clean(raw.phone, LIMITS.phone),
  };

  const enquiry: Enquiry =
    formType === "contact"
      ? {
          formType: "contact",
          ...base,
          service: clean(raw.service, LIMITS.service),
          message: clean(raw.message, LIMITS.body),
        }
      : {
          formType: "quote",
          ...base,
          postcode: clean(raw.postcode, LIMITS.postcode),
          description: clean(raw.description, LIMITS.body),
        };

  // Re-validate server-side: the browser checks are for feedback, not trust.
  const errors = validateEnquiry(enquiry);
  if (Object.keys(errors).length > 0) {
    return NextResponse.json(
      { error: "Please check the form and try again.", errors },
      { status: 400 },
    );
  }

  const config = readPostmarkConfig();
  if (!config.ok) {
    console.error(
      `[enquiry] Postmark is not configured — missing: ${config.missing.join(", ")}. ` +
        `Enquiry from "${enquiry.name}" was NOT delivered.`,
    );
    return NextResponse.json({ error: GENERIC_FAILURE }, { status: 500 });
  }

  const rows = buildRows(enquiry);
  const { textBody, htmlBody } = buildBodies(enquiry, rows);
  const subject =
    enquiry.formType === "contact"
      ? `New message from ${SITE}, from ${enquiry.name}`
      : `New quote enquiry from ${SITE}, from ${enquiry.name}`;

  try {
    const { messageId } = await sendEmail(
      {
        From: config.config.from,
        To: config.config.to,
        Subject: subject,
        TextBody: textBody,
        HtmlBody: htmlBody,
        // Lets Paul hit reply and reach the customer directly. From stays a
        // verified sender — sending *as* the visitor would fail Postmark's
        // signature check and their domain's DMARC policy.
        ...(isSafeEmail(enquiry.email) ? { ReplyTo: enquiry.email } : {}),
        MessageStream: config.config.stream,
      },
      config.config,
    );
    console.log(`[enquiry] Sent ${formType} enquiry via Postmark (${messageId}).`);
    return NextResponse.json({ ok: true });
  } catch (err) {
    if (err instanceof PostmarkError) {
      console.error(
        `[enquiry] Postmark rejected the send (HTTP ${err.status}, ErrorCode ${err.errorCode ?? "?"}): ${err.message}`,
      );
    } else {
      console.error("[enquiry] Unexpected failure sending via Postmark:", err);
    }
    return NextResponse.json({ error: GENERIC_FAILURE }, { status: 500 });
  }
}
