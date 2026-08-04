/* Map of slot ID → processed photo path under /public. ImageSlot renders
   next/image when the slot appears here, and falls back to the striped
   placeholder otherwise. Add entries as photos are processed. */

export const SLOT_PHOTOS: Record<string, string> = {
  // Home hero slideshow — landscape shots: on-site work, action, craft and a
  // finished kitchen. (hero-photo, below, backs the gallery page banner and is
  // no longer part of the slideshow.)
  "hero-photo-2": "/images/paul-vowles-carpentry-van.jpg",
  "hero-photo-3": "/images/gable-end-glazing-install.jpg",
  "hero-photo-4": "/images/cut-roof-carpentry.jpg",
  "hero-photo-5": "/images/fitted-shaker-kitchen-island.jpg",
  "hero-photo-6": "/images/bespoke-fitted-wardrobes-exeter.jpg",
  // Gallery page banner background (heavily overlaid).
  "hero-photo": "/images/home-extension-build.jpg",

  // Paul — home page teaser (Guild of Master Craftsmen shot) and About page
  // portrait (on-site in Torbay). Two different photos.
  "about-paul-home": "/images/paul-vowles-guild-of-master-craftsmen.jpg",
  "about-paul": "/images/paul-vowles-carpenter-torbay.jpg",

  // Home gallery bento
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
  "gal-21": "/images/media-wall-exminster.jpg",
  "gal-22": "/images/fitted-shaker-kitchen-island.jpg",

  // Home service cards + service page heroes share the same photo per service.
  "svc-kit": "/images/fitted-shaker-kitchen-island.jpg",
  "kit-hero": "/images/fitted-shaker-kitchen-island.jpg",
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
  "svc-maint": "/images/timber-driveway-gates.jpg",
  "maint-hero": "/images/timber-driveway-gates.jpg",

  // Service page carousels
  // Loft Conversions
  "loft-gal-1": "/images/dormer-loft-conversion.jpg",
  "loft-gal-2": "/images/bespoke-oak-staircase.jpg",
  "loft-gal-3": "/images/pine-staircase-loft.jpg",
  "loft-gal-4": "/images/loft-structural-steel.jpg",
  "loft-gal-5": "/images/steel-timber-junction.jpg",
  "loft-gal-6": "/images/oak-staircase-loft-conversion.jpg",

  // Extensions
  "ext-gal-1": "/images/home-extension-build.jpg",
  "ext-gal-2": "/images/vaulted-extension-bifolds.jpg",
  "ext-gal-3": "/images/gable-end-glazing-install.jpg",
  "ext-gal-4": "/images/cedar-clad-extension-teignmouth.jpg",
  "ext-gal-5": "/images/vaulted-extension-plaster.jpg",
  "ext-gal-6": "/images/timber-frame-build.jpg",

  // Kitchens (short — 2 of 6)
  "kit-gal-1": "/images/shaker-kitchen-fit.jpg",
  "kit-gal-2": "/images/fitted-shaker-kitchen-island.jpg",

  // Media Walls (short — 4 of 6)
  "media-gal-1": "/images/media-wall-exminster.jpg",
  "media-gal-2": "/images/slatted-office-fit-out.jpg",
  "media-gal-3": "/images/oak-floor-slatted-wall.jpg",
  "media-gal-4": "/images/oak-panelling-detail.jpg",

  // Cut Roofs
  "roof-gal-1": "/images/cut-roof-carpentry.jpg",
  "roof-gal-2": "/images/cut-roof-rafters.jpg",
  "roof-gal-3": "/images/cut-roof-interior.jpg",
  "roof-gal-4": "/images/roof-valley-carpentry.jpg",
  "roof-gal-5": "/images/steel-truss-timber-rafters.jpg",
  "roof-gal-6": "/images/structural-steel-rafters.jpg",

  // Flooring & Decking (short — 3 of 6)
  "floor-gal-1": "/images/raised-deck-build.jpg",
  "floor-gal-2": "/images/oak-floor-slatted-wall.jpg",
  "floor-gal-3": "/images/bespoke-oak-staircase.jpg",

  // Maintenance Contracts (short — 4 of 6)
  "maint-gal-1": "/images/timber-driveway-gates.jpg",
  "maint-gal-2": "/images/heritage-staircase-panelling-detail.jpg",
  "maint-gal-3": "/images/hallway-panelling-bench.jpg",
  "maint-gal-4": "/images/heritage-staircase-panelling.jpg",

  // Windows & Doors
  "doors-gal-1": "/images/timber-french-doors.jpg",
  "doors-gal-2": "/images/summerhouse-garden-french-doors.jpg",
  "doors-gal-3": "/images/white-summerhouse-french-doors.jpg",
  "doors-gal-4": "/images/summerhouse-frame-build.jpg",
  "doors-gal-5": "/images/vaulted-extension-bifolds.jpg",
  "doors-gal-6": "/images/gable-end-glazing-install.jpg",
};
