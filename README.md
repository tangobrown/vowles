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

## Contact form

Client-side validation only. On valid submit it shows a success state — **no email is sent yet**. To wire it up, change the `submit` handler in `components/ContactForm.tsx` to POST to a Next.js API route (`app/api/contact/route.ts`) that forwards via Resend, Postmark, or a `mailto:` fallback.

## What's not done

- Real photography (slots are placeholders).
- Contact form does not actually send mail.
- Privacy / Terms pages are placeholder `#` links in the footer.
- Social links in the footer are `#` placeholders.
