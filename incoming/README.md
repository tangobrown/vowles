# Photo drop folder

Drop raw photos into this folder named by their **slot ID** (e.g. `hero-photo.jpg`, `gal-6.jpg`, `svc-loft.jpg`). Any common format is fine — `.jpg`, `.jpeg`, `.png`, `.heic`, `.webp`. Then tell Claude "photos uploaded, process them" and they'll be:

1. Resized to max **1600px wide**
2. Re-encoded as JPEG at a quality that halves the file size
3. Renamed to an SEO-friendly slug based on the label already in the code (e.g. `gal-1` → `kitchen-renovation-torquay.jpg`)
4. Written to `public/images/`
5. Wired into `ImageSlot` via `next/image` so they actually appear

This folder is gitignored (except this README) — photos never get committed to the repo.

## Slot ID cheat sheet

### Home page (11)

| Slot ID | Where it shows | Label / usage |
|---|---|---|
| `hero-photo` | Home hero slide 1 (also reused as gallery banner) | Main project photo |
| `hero-photo-2` | Home hero slide 2 | |
| `hero-photo-3` | Home hero slide 3 | |
| `about-paul` | Home + About page, image of Paul | Friendly photo of Paul |
| `svc-loft` | Home service card | Loft Conversions ✅ |
| `svc-ext` | Home service card | Extensions ✅ |
| `svc-kit` | Home service card | Kitchens ✅ |
| `svc-media` | Home service card | Media Walls ✅ |
| `svc-roof` | Home service card | Cut Roofs ✅ |
| `svc-floor` | Home service card | Flooring & Decking ✅ |
| `svc-maint` | Home service card | Maintenance Contracts |
| `svc-doors` | Home service card | Windows & Doors ✅ |

### Gallery — home bento (5) — done

| Slot ID | Label | Status |
|---|---|---|
| `gal-1` | Shaker kitchen fit in Torquay | ✅ |
| `gal-2` | Cedar-clad extension in Teignmouth | ✅ |
| `gal-3` | Cedar garden building in Torbay | ✅ |
| `gal-4` | Bespoke fitted wardrobes in Exeter | ✅ |
| `gal-5` | Timber-frame build in progress | ✅ |

### Gallery — extra (8, `/gallery` only)

| Slot ID | Label |
|---|---|
| `gal-6` | Loft conversion in Torquay |
| `gal-7` | Slatted media wall in Exeter |
| `gal-8` | Bi-fold garden doors in Shaldon |
| `gal-9` | Bedroom built-in storage in Dawlish |
| `gal-10` | Hardwood deck in Bishopsteignton |
| `gal-11` | Front door replacement in Teignmouth |
| `gal-12` | Engineered oak flooring in Topsham |
| `gal-13` | Vaulted oak ceiling in Newton Abbot |

### Service page heroes (8)

| Slot ID | Service page |
|---|---|
| `loft-hero` | Loft Conversions |
| `ext-hero` | Extensions |
| `kit-hero` | Kitchens |
| `media-hero` | Media Walls |
| `roof-hero` | Cut Roofs |
| `floor-hero` | Flooring & Decking |
| `maint-hero` | Maintenance Contracts |
| `doors-hero` | Windows & Doors |

### Service page carousels (48)

Each service has 6 carousel slides: `<key>-gal-1` through `<key>-gal-6`, where `<key>` is one of `loft`, `ext`, `kit`, `media`, `roof`, `floor`, `maint`, `doors`. Full labels are in [`lib/services.ts`](../lib/services.ts) under each service's `gallerySlots`.

Examples: `loft-gal-1` (Dormer conversion · Torquay), `kit-gal-3` (Handleless modern kitchen · Teignmouth), `roof-gal-5` (Valley & link roof · Torbay).

## Tips

- You don't have to fill every slot at once — drop what you have, process, drop more later.
- Reused slot ids should get the same photo. `hero-photo` shows on both home hero and gallery banner; `about-paul` shows on both home about section and the About page.
- If a photo doesn't quite fit a slot (wrong orientation, hero photo is landscape but the file is a portrait), just say — I can re-crop or pick a different target.
