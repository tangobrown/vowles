/* Shared contract between the two forms and the /api/enquiry route.

   Safe to import from client components — it holds no secrets. The Postmark
   transport lives in lib/postmark.ts and is server-only. */

export const ENQUIRY_ENDPOINT = "/api/enquiry";

/* The hidden honeypot input's name. Bots that fill every field fill this too. */
export const HONEYPOT_FIELD = "website";

export type ContactEnquiry = {
  formType: "contact";
  name: string;
  phone: string;
  email: string;
  service: string;
  message: string;
};

export type QuoteEnquiry = {
  formType: "quote";
  name: string;
  email: string;
  phone: string;
  postcode: string;
  description: string;
};

export type Enquiry = ContactEnquiry | QuoteEnquiry;

/* Upper bounds, enforced server-side too. Generous enough that no real
   enquiry hits them; tight enough that the endpoint can't be used to relay
   bulk text through Paul's Postmark account. */
export const LIMITS = {
  name: 200,
  email: 320,
  phone: 50,
  postcode: 20,
  service: 200,
  body: 5000,
} as const;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/* Rejects anything with a CR or LF. Postmark takes JSON so classic header
   injection doesn't apply, but a newline in ReplyTo is never legitimate and
   keeps the address clean for anything downstream. */
export function isSafeEmail(value: string): boolean {
  const v = value.trim();
  return (
    v.length > 0 &&
    v.length <= LIMITS.email &&
    !/[\r\n]/.test(v) &&
    EMAIL_RE.test(v)
  );
}

export type EnquiryErrors = Record<string, string>;

/* The single source of truth for what counts as a valid enquiry. The forms
   run it for inline feedback; the route runs it again because a client can
   send anything it likes. */
export function validateEnquiry(input: Enquiry): EnquiryErrors {
  const er: EnquiryErrors = {};
  const name = (input.name ?? "").trim();
  const email = (input.email ?? "").trim();
  const phone = (input.phone ?? "").trim();

  if (!name) er.name = "Please tell us your name.";
  else if (name.length > LIMITS.name) er.name = "That name is too long.";

  if (!phone && !email) {
    er.phone = "Add a phone or email so Paul can reply.";
    er.email = "Add a phone or email so Paul can reply.";
  } else if (email && !isSafeEmail(email)) {
    er.email = "That email doesn't look right.";
  } else if (phone.length > LIMITS.phone) {
    er.phone = "That phone number is too long.";
  }

  if (input.formType === "contact") {
    const message = (input.message ?? "").trim();
    if (!message) er.message = "A few words about the job, please.";
    else if (message.length > LIMITS.body) er.message = "That message is too long.";
  } else {
    const description = (input.description ?? "").trim();
    if (!description) er.description = "A few words about the project, please.";
    else if (description.length > LIMITS.body)
      er.description = "That description is too long.";
  }

  return er;
}

/* POSTs an enquiry to our own API route, which relays it via Postmark.
   Throws with a message suitable for showing to the visitor. */
export async function submitEnquiry(
  enquiry: Enquiry,
  honeypot: string,
): Promise<void> {
  let res: Response;
  try {
    res = await fetch(ENQUIRY_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ ...enquiry, [HONEYPOT_FIELD]: honeypot }),
    });
  } catch {
    // Network-level failure: offline, DNS, connection dropped.
    throw new Error(
      "Couldn't reach the server. Check your connection and try again, or give Paul a call.",
    );
  }

  if (res.ok) return;

  const json = (await res.json().catch(() => null)) as {
    error?: string;
  } | null;

  throw new Error(
    json?.error ??
      "Sorry, we couldn't send that just now. Please try again, or give Paul a call.",
  );
}
