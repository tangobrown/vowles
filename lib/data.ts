export type Service = {
  id: string;
  name: string;
  blurb: string;
  slot: string;
};

export const SERVICES: Service[] = [
  { id: "loft-conversions", name: "Loft Conversions", blurb: "Turn unused roof space into a bright, usable room.", slot: "svc-loft" },
  { id: "extensions", name: "Extensions", blurb: "Add the space your family needs, managed end to end.", slot: "svc-ext" },
  { id: "kitchens", name: "Kitchens", blurb: "The heart of the home, fitted and built right.", slot: "svc-kit" },
  { id: "media-walls", name: "Media Walls", blurb: "Bespoke feature builds with the carpentry on show.", slot: "svc-media" },
  { id: "cut-roofs", name: "Cut Roofs", blurb: "Traditional roof carpentry, cut by hand on site.", slot: "svc-roof" },
  { id: "flooring-decking", name: "Flooring & Decking", blurb: "Quality floors indoors and decking that lasts outdoors.", slot: "svc-floor" },
  { id: "maintenance", name: "Maintenance Contracts", blurb: "Reliable, ongoing care for homes and businesses.", slot: "svc-maint" },
  { id: "windows-doors", name: "Windows & Doors", blurb: "Supply and fit — the everyday jobs done properly.", slot: "svc-doors" },
];

export const servicePath = (id: string) => `/services/${id}`;

export const TOWNS = ["Torquay", "Teignmouth", "Torbay", "Exeter", "Newton Abbot"];

export const TRUST = [
  { big: "20+", label: "Years on the tools" },
  { big: "Fully", label: "Insured & qualified" },
  { big: "Local", label: "South Devon born & based" },
  { big: "Free", label: "No-obligation quotes" },
];

export type Testimonial = { quote: string; name: string; town: string };

export const TESTIMONIALS: Testimonial[] = [
  { quote: "Paul fitted our media wall and it turned out better than we could have imagined! Reasonably priced, quality work and amazing service. Highly recommended!", name: "Tim B.", town: "Exeter" },
  { quote: "We had our loft converted into a proper double bedroom. Paul talked us through what was possible, kept us in the loop the whole way and the finish is spot on.", name: "Dave & Lou", town: "Torquay" },
  { quote: "Honest, reliable and genuinely good at what he does. He treated our little kitchen job with the same care you'd expect on a much bigger build.", name: "Helen R.", town: "Exeter" },
];

export type GalleryItem = { slot: string; label: string; span?: "lg" | "wide" };

/* Curated set shown on the home page bento preview. The `span` values assume
   exactly five items — don't add more here; add to GALLERY_EXTRA instead. */
export const GALLERY: GalleryItem[] = [
  { slot: "gal-1", label: "Kitchen renovation in Torquay", span: "lg" },
  { slot: "gal-2", label: "Fitted wardrobes in Teignmouth" },
  { slot: "gal-3", label: "Extension in Newton Abbot" },
  { slot: "gal-4", label: "Garden building in Newton Abbot" },
  { slot: "gal-5", label: "Kitchen renovation in Kenn", span: "wide" },
];

/* Extra items shown only on the full /gallery page (appended after GALLERY). */
export const GALLERY_EXTRA: GalleryItem[] = [
  { slot: "gal-6", label: "Loft conversion in Torquay" },
  { slot: "gal-7", label: "Slatted media wall in Exeter" },
  { slot: "gal-8", label: "Bi-fold garden doors in Shaldon" },
  { slot: "gal-9", label: "Bedroom built-in storage in Dawlish" },
  { slot: "gal-10", label: "Hardwood deck in Bishopsteignton" },
  { slot: "gal-11", label: "Front door replacement in Teignmouth" },
  { slot: "gal-12", label: "Engineered oak flooring in Topsham" },
  { slot: "gal-13", label: "Vaulted oak ceiling in Newton Abbot" },
];

export const GALLERY_FULL: GalleryItem[] = [...GALLERY, ...GALLERY_EXTRA];

export const PHONE_DISPLAY = "07866 599 043";
export const PHONE_HREF = "tel:+447866599043";
export const EMAIL = "paul@vowlescarpentry.co.uk";
