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
| `hero-photo` | Home hero slide 1 (also reused as gallery banner) | **placeholder: shaker kitchen · Torquay** |
| `hero-photo-2` | Home hero slide 2 | **placeholder: Paul Vowles Carpentry van + build** |
| `hero-photo-3` | Home hero slide 3 | **placeholder: gable-end glazing install** |
| `hero-photo-4` | Home hero slide 4 | **placeholder: cut roof carpentry** |
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

### Gallery — extra (15, `/gallery` only) — done

| Slot ID | Label | Status |
|---|---|---|
| `gal-6` | Heritage staircase and wall panelling | ✅ |
| `gal-7` | Installing gable-end glazing | ✅ |
| `gal-8` | Oak floor and slatted feature wall | ✅ |
| `gal-9` | Vaulted extension with bi-fold doors | ✅ |
| `gal-10` | Three-gable timber-clad house | ✅ |
| `gal-11` | Bespoke timber driveway gates | ✅ |
| `gal-12` | Bespoke oak staircase | ✅ |
| `gal-13` | Oak trim and tongue-and-groove panelling | ✅ |
| `gal-14` | Timber-clad house mid-build | ✅ |
| `gal-15` | Cut roof rafters and breather membrane | ✅ |
| `gal-16` | Inside a cut roof structure | ✅ |
| `gal-17` | Steel and timber structural junction | ✅ |
| `gal-18` | On site with the Paul Vowles Carpentry van | ✅ |
| `gal-19` | Roof valley carpentry from the scaffold | ✅ |
| `gal-20` | Slatted office fit-out with signage | ✅ |

### Service page heroes (8)

Each hero slot uses the same photo as the corresponding home service card
(via a shared entry in `lib/photos.ts`) — so the photo you approve for
`svc-loft` also becomes the `loft-hero` background, etc. Change one, both
update.

| Slot ID | Service page |
|---|---|
| `loft-hero` | Loft Conversions ✅ (shares `svc-loft`) |
| `ext-hero` | Extensions ✅ (shares `svc-ext`) |
| `kit-hero` | Kitchens ✅ (shares `svc-kit`) |
| `media-hero` | Media Walls ✅ (shares `svc-media`) |
| `roof-hero` | Cut Roofs ✅ (shares `svc-roof`) |
| `floor-hero` | Flooring & Decking ✅ (shares `svc-floor`) |
| `maint-hero` | Maintenance Contracts |
| `doors-hero` | Windows & Doors ✅ (shares `svc-doors`) |

### Service page carousels (48)

Each service has 6 carousel slides: `<key>-gal-1` through `<key>-gal-6`, where `<key>` is one of `loft`, `ext`, `kit`, `media`, `roof`, `floor`, `maint`, `doors`. Full labels are in [`lib/services.ts`](../lib/services.ts) under each service's `gallerySlots`.

Examples: `loft-gal-1` (Dormer conversion · Torquay), `kit-gal-3` (Handleless modern kitchen · Teignmouth), `roof-gal-5` (Valley & link roof · Torbay).

## Tips

- You don't have to fill every slot at once — drop what you have, process, drop more later.
- Reused slot ids should get the same photo. `hero-photo` shows on both home hero and gallery banner; `about-paul` shows on both home about section and the About page.
- If a photo doesn't quite fit a slot (wrong orientation, hero photo is landscape but the file is a portrait), just say — I can re-crop or pick a different target.
