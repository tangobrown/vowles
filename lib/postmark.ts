/* Server-side Postmark transport.

   This module must never be imported from a client component: it reads the
   Postmark server token, which is a secret. The token is deliberately not
   prefixed `NEXT_PUBLIC_`, so Next will refuse to inline it into the browser
   bundle — but keeping this import server-only is the real guard. */

const POSTMARK_API = "https://api.postmarkapp.com/email";

export type PostmarkMessage = {
  From: string;
  To: string;
  Subject: string;
  TextBody: string;
  HtmlBody?: string;
  ReplyTo?: string;
  MessageStream: string;
};

export type PostmarkConfig = {
  token: string;
  from: string;
  to: string;
  stream: string;
};

/* Reads and validates the Postmark environment. Returns a readable list of
   what's missing rather than throwing, so the route can log the real cause
   while still showing the visitor a generic message. */
export function readPostmarkConfig():
  | { ok: true; config: PostmarkConfig }
  | { ok: false; missing: string[] } {
  const token = process.env.POSTMARK_SERVER_TOKEN?.trim();
  const from = process.env.POSTMARK_FROM_EMAIL?.trim();
  const to = process.env.POSTMARK_TO_EMAIL?.trim();

  const missing: string[] = [];
  if (!token) missing.push("POSTMARK_SERVER_TOKEN");
  if (!from) missing.push("POSTMARK_FROM_EMAIL");
  if (!to) missing.push("POSTMARK_TO_EMAIL");
  if (missing.length) return { ok: false, missing };

  return {
    ok: true,
    config: {
      token: token as string,
      from: from as string,
      to: to as string,
      // Transactional stream. Postmark rejects sends to a stream that doesn't
      // exist, so this must match a stream ID on the server (default:
      // "outbound"). Broadcast streams are for bulk mail and are wrong here.
      stream: process.env.POSTMARK_MESSAGE_STREAM?.trim() || "outbound",
    },
  };
}

export class PostmarkError extends Error {
  constructor(
    message: string,
    readonly status: number,
    readonly errorCode?: number,
  ) {
    super(message);
    this.name = "PostmarkError";
  }
}

/* POSTs a single message to Postmark. Throws PostmarkError carrying
   Postmark's own ErrorCode, which is what distinguishes a misconfiguration
   (unverified sender, bad token) from a transient failure. */
export async function sendEmail(
  msg: PostmarkMessage,
  config: PostmarkConfig,
): Promise<{ messageId: string }> {
  const res = await fetch(POSTMARK_API, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      "X-Postmark-Server-Token": config.token,
    },
    body: JSON.stringify(msg),
    // Don't let a hanging Postmark request hold the function open.
    signal: AbortSignal.timeout(10_000),
  });

  const json = (await res.json().catch(() => null)) as {
    MessageID?: string;
    ErrorCode?: number;
    Message?: string;
  } | null;

  if (!res.ok || (json?.ErrorCode ?? 0) !== 0) {
    throw new PostmarkError(
      json?.Message ?? `Postmark returned HTTP ${res.status}.`,
      res.status,
      json?.ErrorCode,
    );
  }

  return { messageId: json?.MessageID ?? "" };
}
