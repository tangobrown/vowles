"use client";

import { CONSENT_KEY } from "@/lib/consent";

/* Footer link that reopens the cookie banner so a visitor can change their
   mind. Clears the stored choice and asks CookieConsent to show the banner
   again (no page reload needed). */
export function CookieSettingsButton({ className }: { className?: string }) {
  const open = () => {
    try {
      localStorage.removeItem(CONSENT_KEY);
    } catch {
      /* ignore */
    }
    window.dispatchEvent(new Event("vowles:cookie-settings"));
  };

  return (
    <button type="button" onClick={open} className={className}>
      Cookie settings
    </button>
  );
}
