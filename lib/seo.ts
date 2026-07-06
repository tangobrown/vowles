import { PHONE_HREF, EMAIL, TOWNS } from "@/lib/data";

/* Canonical origin used for absolute URLs in metadata + JSON-LD. Override at
   build time via `NEXT_PUBLIC_SITE_URL` (set in the Vercel dashboard) once
   the real domain is live. */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://vowlescarpentry.co.uk"
).replace(/\/$/, "");

export const SITE_NAME = "Vowles Carpentry & Building";
export const SITE_TAGLINE = "Local Builder in South Devon";
export const SITE_DESCRIPTION =
  "Friendly, skilled carpentry and building across Torquay, Teignmouth, Newton Abbot, Torbay and Exeter. Run by Paul Vowles in Bishopsteignton, where no job is ever too small. Free, no-obligation quotes and honest advice.";

/* Default social preview image (the shaker kitchen finished shot works well
   as a hero). Absolute URL so it renders on Slack, Facebook, LinkedIn and X. */
export const OG_IMAGE = `${SITE_URL}/images/shaker-kitchen-fit-torquay.jpg`;
export const OG_IMAGE_ALT = `${SITE_NAME}, a recent kitchen fit-out`;

export const OWNER_NAME = "Paul Vowles";
export const BUSINESS_LOCALITY = "Bishopsteignton";
export const BUSINESS_REGION = "Devon";
export const BUSINESS_COUNTRY = "GB";

/* Absolute URL helper — pass a leading-slash path, returns SITE_URL + path. */
export const absoluteUrl = (path: string) =>
  `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;

/* ─────────────────────────── JSON-LD payloads ──────────────────────────── */

const BUSINESS_ID = `${SITE_URL}#business`;

/* Site-wide LocalBusiness (GeneralContractor is the closest schema.org type
   for a carpenter/builder). Injected once from the root layout. */
export function localBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "GeneralContractor",
    "@id": BUSINESS_ID,
    name: SITE_NAME,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    telephone: PHONE_HREF.replace(/^tel:/, ""),
    email: EMAIL,
    image: absoluteUrl("/vowles-logo.png"),
    logo: absoluteUrl("/vowles-logo.png"),
    priceRange: "££",
    founder: { "@type": "Person", name: OWNER_NAME },
    address: {
      "@type": "PostalAddress",
      addressLocality: BUSINESS_LOCALITY,
      addressRegion: BUSINESS_REGION,
      addressCountry: BUSINESS_COUNTRY,
    },
    areaServed: TOWNS.map((town) => ({ "@type": "City", name: town })),
    knowsAbout: [
      "Loft conversions",
      "House extensions",
      "Kitchen fitting",
      "Media walls",
      "Cut roofs",
      "Flooring and decking",
      "Property maintenance",
      "Window and door fitting",
    ],
  };
}

/* Per-service Service schema. Links to the LocalBusiness by @id so search
   engines can associate them. */
export function serviceJsonLd(opts: {
  name: string;
  description: string;
  slug: string;
  image?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: opts.name,
    description: opts.description,
    provider: { "@id": BUSINESS_ID },
    areaServed: TOWNS.map((t) => ({ "@type": "City", name: t })),
    serviceType: opts.name,
    url: absoluteUrl(`/services/${opts.slug}`),
    ...(opts.image ? { image: absoluteUrl(opts.image) } : {}),
  };
}

/* FAQPage schema — Google shows these as rich results with expandable
   questions in search. Big win for the service pages. */
export function faqPageJsonLd(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

/* BreadcrumbList — helps Google show the breadcrumb path in search results. */
export function breadcrumbJsonLd(items: { name: string; path?: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      ...(item.path ? { item: absoluteUrl(item.path) } : {}),
    })),
  };
}

/* Person schema for Paul on the About page. */
export function personJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${SITE_URL}#paul`,
    name: OWNER_NAME,
    jobTitle: "Carpenter & Builder",
    worksFor: { "@id": BUSINESS_ID },
    url: absoluteUrl("/about"),
    image: absoluteUrl("/images/vowles-logo.png"),
    description:
      "Paul Vowles is a friendly South Devon carpenter and builder based in Bishopsteignton, with over twenty years on the tools across loft conversions, extensions, kitchens, media walls and bespoke joinery.",
  };
}
