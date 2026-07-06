export type Service = {
  id: string;
  name: string;
  blurb: string;
  slot: string;
};

export const SERVICES: Service[] = [
  { id: "loft-conversions", name: "Loft Conversions", blurb: "Turn that unused roof space into a bright, welcoming room you'll love.", slot: "svc-loft" },
  { id: "extensions", name: "Extensions", blurb: "Add the space your family needs, looked after from start to finish.", slot: "svc-ext" },
  { id: "kitchens", name: "Kitchens", blurb: "The heart of the home, fitted beautifully and built to last.", slot: "svc-kit" },
  { id: "media-walls", name: "Media Walls", blurb: "Bespoke feature walls with lovely carpentry on show.", slot: "svc-media" },
  { id: "cut-roofs", name: "Cut Roofs", blurb: "Traditional roof carpentry, cut by hand on site with real care.", slot: "svc-roof" },
  { id: "flooring-decking", name: "Flooring & Decking", blurb: "Quality floors indoors and decking made to enjoy outdoors.", slot: "svc-floor" },
  { id: "maintenance", name: "Maintenance Contracts", blurb: "Reliable, friendly care for homes and businesses, all year round.", slot: "svc-maint" },
  { id: "windows-doors", name: "Windows & Doors", blurb: "Supply and fit, with the everyday jobs done properly.", slot: "svc-doors" },
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
  { slot: "gal-1", label: "Shaker kitchen fit in Torquay", span: "lg" },
  { slot: "gal-2", label: "Cedar-clad extension in Teignmouth" },
  { slot: "gal-3", label: "Cedar garden building in Torbay" },
  { slot: "gal-4", label: "Bespoke fitted wardrobes in Exeter" },
  { slot: "gal-5", label: "Timber-frame build in progress", span: "wide" },
];

/* Extra items shown only on the full /gallery page (appended after GALLERY). */
export const GALLERY_EXTRA: GalleryItem[] = [
  { slot: "gal-6", label: "Heritage staircase and wall panelling" },
  { slot: "gal-7", label: "Installing gable-end glazing" },
  { slot: "gal-8", label: "Oak floor and slatted feature wall" },
  { slot: "gal-9", label: "Vaulted extension with bi-fold doors" },
  { slot: "gal-10", label: "Three-gable timber-clad house" },
  { slot: "gal-11", label: "Bespoke timber driveway gates" },
  { slot: "gal-12", label: "Bespoke oak staircase" },
  { slot: "gal-13", label: "Oak trim and tongue-and-groove panelling" },
  { slot: "gal-14", label: "Timber-clad house mid-build" },
  { slot: "gal-15", label: "Cut roof rafters and breather membrane" },
  { slot: "gal-16", label: "Inside a cut roof structure" },
  { slot: "gal-17", label: "Steel and timber structural junction" },
  { slot: "gal-18", label: "On site with the Paul Vowles Carpentry van" },
  { slot: "gal-19", label: "Roof valley carpentry from the scaffold" },
  { slot: "gal-20", label: "Slatted office fit-out with signage" },
  { slot: "gal-21", label: "Slatted media wall with recessed TV in Exminster" },
];

export const GALLERY_FULL: GalleryItem[] = [...GALLERY, ...GALLERY_EXTRA];

export const PHONE_DISPLAY = "07866 599 043";
export const PHONE_HREF = "tel:+447866599043";
export const EMAIL = "paul@vowlescarpentry.co.uk";
