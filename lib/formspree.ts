export const FORMSPREE_ENDPOINT = "https://formspree.io/f/xrewjpwz";

type FormspreeError = { message?: string };

/* POSTs the given data to Formspree as JSON, and throws with a readable
   message on failure (parsing Formspree's `errors[]` array when available). */
export async function submitToFormspree(
  data: Record<string, unknown>,
): Promise<void> {
  const res = await fetch(FORMSPREE_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(data),
  });

  if (res.ok) return;

  let msg = `Something went wrong (HTTP ${res.status}).`;
  try {
    const json = (await res.json()) as {
      error?: string;
      errors?: FormspreeError[];
    };
    if (Array.isArray(json.errors) && json.errors.length) {
      const combined = json.errors
        .map((e) => e.message ?? "")
        .filter(Boolean)
        .join(", ");
      if (combined) msg = combined;
    } else if (typeof json.error === "string") {
      msg = json.error;
    }
  } catch {
    /* fall through to default msg */
  }
  throw new Error(msg);
}
