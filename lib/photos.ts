/* Map of slot ID → processed photo path under /public. ImageSlot renders
   next/image when the slot appears here, and falls back to the striped
   placeholder otherwise. Add entries as photos are processed. */

export const SLOT_PHOTOS: Record<string, string> = {
  "gal-1": "/images/shaker-kitchen-fit-torquay.jpg",
  "gal-2": "/images/cedar-clad-extension-teignmouth.jpg",
  "gal-3": "/images/cedar-garden-building-torbay.jpg",
  "gal-4": "/images/bespoke-fitted-wardrobes-exeter.jpg",
  "gal-5": "/images/oak-floor-slatted-wall-newton-abbot.jpg",
};
