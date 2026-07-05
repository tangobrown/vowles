/* Map of slot ID → processed photo path under /public. ImageSlot renders
   next/image when the slot appears here, and falls back to the striped
   placeholder otherwise. Add entries as photos are processed. */

export const SLOT_PHOTOS: Record<string, string> = {
  // Home gallery bento
  "gal-1": "/images/shaker-kitchen-fit-torquay.jpg",
  "gal-2": "/images/cedar-clad-extension-teignmouth.jpg",
  "gal-3": "/images/cedar-garden-building-torbay.jpg",
  "gal-4": "/images/bespoke-fitted-wardrobes-exeter.jpg",
  "gal-5": "/images/timber-frame-build.jpg",

  // Gallery page extras
  "gal-6": "/images/heritage-staircase-panelling.jpg",
  "gal-7": "/images/gable-end-glazing-install.jpg",
  "gal-8": "/images/oak-floor-slatted-wall.jpg",
  "gal-9": "/images/vaulted-extension-bifolds.jpg",
  "gal-10": "/images/timber-clad-house.jpg",
  "gal-11": "/images/timber-driveway-gates.jpg",
  "gal-12": "/images/bespoke-oak-staircase.jpg",
  "gal-13": "/images/oak-panelling-detail.jpg",
  "gal-14": "/images/timber-clad-house-mid-build.jpg",
  "gal-15": "/images/cut-roof-rafters.jpg",
  "gal-16": "/images/cut-roof-interior.jpg",
  "gal-17": "/images/steel-timber-junction.jpg",
  "gal-18": "/images/paul-vowles-carpentry-van.jpg",
  "gal-19": "/images/roof-valley-carpentry.jpg",
  "gal-20": "/images/slatted-office-fit-out.jpg",

  // Home service cards + service page heroes share the same photo per service.
  "svc-kit": "/images/shaker-kitchen-fit.jpg",
  "kit-hero": "/images/shaker-kitchen-fit.jpg",
  "svc-loft": "/images/dormer-loft-conversion.jpg",
  "loft-hero": "/images/dormer-loft-conversion.jpg",
  "svc-doors": "/images/timber-french-doors.jpg",
  "doors-hero": "/images/timber-french-doors.jpg",
  "svc-roof": "/images/cut-roof-carpentry.jpg",
  "roof-hero": "/images/cut-roof-carpentry.jpg",
  "svc-ext": "/images/home-extension-build.jpg",
  "ext-hero": "/images/home-extension-build.jpg",
  "svc-media": "/images/media-wall-exminster.jpg",
  "media-hero": "/images/media-wall-exminster.jpg",
  "svc-floor": "/images/raised-deck-build.jpg",
  "floor-hero": "/images/raised-deck-build.jpg",
};
