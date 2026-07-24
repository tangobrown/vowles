"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Script from "next/script";
import { GA_ID, CONSENT_KEY } from "@/lib/consent";

type Consent = "granted" | "denied";

export function CookieConsent() {
  // `null` = no choice made yet (show banner). Undefined-until-mounted avoids
  // an SSR/hydration mismatch, since the choice lives in localStorage.
  const [mounted, setMounted] = useState(false);
  const [consent, setConsent] = useState<Consent | null>(null);

  useEffect(() => {
    setMounted(true);
    try {
      const stored = localStorage.getItem(CONSENT_KEY);
      if (stored === "granted" || stored === "denied") setConsent(stored);
    } catch {
      /* localStorage blocked (e.g. private mode) — treat as undecided */
    }
  }, []);

  // Let the footer "Cookie settings" link reopen the banner without a reload.
  useEffect(() => {
    const reopen = () => setConsent(null);
    window.addEventListener("vowles:cookie-settings", reopen);
    return () => window.removeEventListener("vowles:cookie-settings", reopen);
  }, []);

  const decide = (value: Consent) => {
    setConsent(value);
    try {
      localStorage.setItem(CONSENT_KEY, value);
    } catch {
      /* ignore write failures */
    }
    // If they decline after previously accepting, stop GA sending any further
    // hits this session, even though its script may already be loaded.
    if (value === "denied" && GA_ID) {
      (window as unknown as Record<string, boolean>)[`ga-disable-${GA_ID}`] = true;
    }
  };

  // Analytics not configured, or not mounted yet: render nothing at all.
  if (!GA_ID || !mounted) return null;

  return (
    <>
      {consent === "granted" && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
            strategy="afterInteractive"
          />
          <Script id="ga-init" strategy="afterInteractive">
            {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA_ID}');`}
          </Script>
        </>
      )}

      {consent === null && (
        <div
          role="dialog"
          aria-label="Cookie choices"
          className="fixed inset-x-0 bottom-0 z-[100] border-t border-white/10 bg-surface2/95 backdrop-blur"
        >
          <div className="mx-auto flex max-w-[1200px] flex-col gap-4 px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:gap-8 sm:px-8">
            <p className="text-[14px] leading-relaxed text-white/70">
              We use a little analytics to see how the site is used, which helps us make it better.
              You can accept or decline. Read more in our{" "}
              <Link
                href="/privacy"
                className="font-semibold text-brand underline-offset-4 hover:underline"
              >
                privacy policy
              </Link>
              .
            </p>
            <div className="flex shrink-0 gap-3">
              <button
                type="button"
                onClick={() => decide("denied")}
                className="border border-white/25 px-5 py-2.5 text-[14px] font-semibold text-white transition-colors hover:border-brand hover:text-brand"
              >
                Decline
              </button>
              <button
                type="button"
                onClick={() => decide("granted")}
                className="bg-brand px-5 py-2.5 text-[14px] font-semibold text-ink transition-[filter] duration-200 hover:brightness-95"
              >
                Accept
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
