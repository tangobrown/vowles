/* Shared config for the cookie-consent banner and Google Analytics loading.

   Analytics only ever runs when NEXT_PUBLIC_GA_ID is set (a GA4 Measurement
   ID like "G-XXXXXXXXXX"), configured in the Vercel dashboard. With it unset,
   the consent banner and GA both stay dormant, so the site behaves exactly as
   it did before. */
export const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

/* localStorage key holding the visitor's choice: "granted" | "denied". */
export const CONSENT_KEY = "vowles-cookie-consent";
