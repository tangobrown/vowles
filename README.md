# Vowles Carpentry & Building — site

Production port of the design handoff into **Next.js 14 (App Router) + Tailwind CSS + TypeScript**.

Lightweight on purpose: no runtime CSS-in-JS, no client-side data fetching, no global store. Fonts are self-hosted via `next/font`. Interactive bits (header, hero slideshow, carousel, FAQ accordion, lightbox, contact form) are isolated client components; everything else is a server component.

## Getting started

```bash
npm install
npm run dev
```

Then open <http://localhost:3000>.

```bash
npm run build   # production build
npm run start   # serve the production build
```

## Project structure

```
app/
  layout.tsx           # root layout + next/font (Inter, Bricolage Grotesque)
  globals.css          # tailwind + reveal/lightbox keyframes + scrollbar
  page.tsx             # home
  gallery/page.tsx     # gallery
  contact/page.tsx     # contact
  services/[slug]/page.tsx  # one template, 8 service pages via generateStaticParams
components/
  Header.tsx, Footer.tsx
  Hero.tsx, Sections.tsx (Services, About, GalleryPreview, Testimonials, FinalCTA)
  ServiceCarousel.tsx, ServiceFaq.tsx
  GalleryView.tsx, ContactForm.tsx
  ImageSlot.tsx        # dark striped photo placeholder
  ui.tsx, icons.tsx
lib/
  data.ts              # SERVICES, TOWNS, TESTIMONIALS, GALLERY, contact constants
  services.ts          # SERVICE_PAGES (all 8) + SERVICE_SLUGS
public/
  vowles-logo.png
```

## Design tokens

Tailwind theme (in `tailwind.config.ts`):

| Token | Hex | Usage |
|---|---|---|
| `ink` | `#151617` | Page bg, dark buttons |
| `surface` | `#1b1c1e` | Alternating section bg, cards |
| `surface2` | `#212325` | Dropdowns & mobile menu panel |
| `brand` | `#ffde59` | Primary yellow |
| `brandDark` | `#ecca47` | Primary button hover |

Square corners are the default: the Tailwind `borderRadius` scale is `0` for all sizes, with `full` kept for circles (avatars, icon chips, the 20+ badge).

## Photos (replacing the placeholders)

Each `<ImageSlot id="…">` is a dark striped placeholder. To swap one in for a real photo, edit `components/ImageSlot.tsx` to use `next/image` when a file exists at `/public/images/<id>.jpg`, or replace individual call sites directly. Reused slot ids (`hero-photo`, `gal-1…5`) should resolve to the same file so the home and gallery match.

Recommended approach for production:

```tsx
// In components/ImageSlot.tsx
import Image from "next/image";

export function ImageSlot({ id, label, fit = "cover" }: Props) {
  return (
    <Image
      src={`/images/${id}.jpg`}
      alt={label}
      fill
      sizes="(max-width: 768px) 100vw, 50vw"
      style={{ objectFit: fit }}
    />
  );
}
```

## SEO

Central config lives in [`lib/seo.ts`](lib/seo.ts) — site URL, business info, and JSON-LD generators.

- **Canonical domain**: `SITE_URL` in `lib/seo.ts` defaults to `https://www.paulvowlescarpentry.co.uk`. Override at build time via the `NEXT_PUBLIC_SITE_URL` env var in the Vercel dashboard if the site ever moves to a different domain.
- **Metadata**: root `app/layout.tsx` sets `metadataBase`, a title template (`%s | Vowles Carpentry & Building`), Open Graph + Twitter card defaults, robots directives, viewport theme colour, and application category. Each page overrides `title`, `description`, and `alternates.canonical`.
- **Structured data (JSON-LD)**:
  - Site-wide: `GeneralContractor` LocalBusiness with address, service area, phone/email, and services.
  - Service pages: `Service` (linked to the business), `FAQPage` (from the FAQs already in `SERVICE_PAGES`), and `BreadcrumbList`.
  - About page: `Person` (Paul) linked to the business, plus a `BreadcrumbList`.
  - Gallery and Contact pages: `BreadcrumbList`.
- **`app/robots.ts`** allows all crawlers and points at the sitemap. **`app/sitemap.ts`** generates `/sitemap.xml` at build with all static and service pages.
- **Favicon**: `app/icon.svg` — a yellow "V" on dark background, picked up automatically by Next.

## Analytics & cookies

Google Analytics is wired up but **off by default**. It loads only when both:

1. `NEXT_PUBLIC_GA_ID` is set (a GA4 Measurement ID like `G-XXXXXXXXXX`) in the Vercel dashboard, **and**
2. the visitor clicks **Accept** on the cookie banner.

With `NEXT_PUBLIC_GA_ID` unset (the default), neither the banner nor GA render — the site behaves exactly as if analytics didn't exist. Config lives in [`lib/consent.ts`](lib/consent.ts); the banner + GA loader is [`components/CookieConsent.tsx`](components/CookieConsent.tsx).

- **Consent model**: prior consent — GA is not loaded at all until the visitor accepts, which is the approach UK PECR/GDPR expects for analytics cookies. The choice is stored in `localStorage` under `vowles-cookie-consent`.
- **Withdrawing consent**: a "Cookie settings" link appears in the footer (only when GA is configured) and reopens the banner. Declining after having accepted also sets GA's `ga-disable-<id>` flag so tracking stops immediately, not just on the next page load.
- **Google Search Console**: needs no code — verify the domain via a DNS record (recommended), or add a `verification` meta tag if preferred (not currently wired). It sets no visitor cookies.
- The `/privacy` page already documents both Google Analytics and Search Console.

## Contact + quote forms

Both the `/contact` form and the slide-out `<QuotePanel>` submit to **Formspree**. The endpoint lives in `lib/formspree.ts` — change it there once (not per form) to move to a different provider or a new inbox.

Client-side validation runs first (name required, phone or email required, etc.); on valid submit both forms POST JSON to Formspree, disable the button while sending, show any error message inline, and switch to a success state on 200. The success screen offers a "send another" reset.

## What's not done

- Privacy / Terms pages are placeholder `#` links in the footer.
- Social links in the footer are `#` placeholders.
- Some service-page carousels are shorter than 6 slides until more photography arrives (Kitchens, Media Walls, Flooring & Decking, Maintenance Contracts).
