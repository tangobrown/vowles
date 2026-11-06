# Kickoff Audit — Vowles Carpentry & Building

**Run date:** 2026-11-06
**Scope:** First-month ramp, section 10 of `claude/seo-operating-brief.md`
**Site audited:** `https://www.paulvowlescarpentry.co.uk` (live, fetched)
**Output:** 8 Linear issues in project *Vowles Carpentry SEO* (P-TAN-2), TAN-61 to TAN-68

This run audited and wrote the backlog. It shipped no site changes. This file is
the durable record.

---

## 0. What this run could and could not reach

| Capability | Status |
|---|---|
| Live site fetch | **Available.** All 13 HTML routes fetched, HTTP 200 each. Plus `/sitemap.xml` and `/robots.txt`. |
| Linear connector | **Available.** Workspace Tangobrown, project P-TAN-2 resolved, 8 issues created. |
| DataForSEO | **Available.** Authenticated, 2 paid pulls made. |
| Third-party verification hosts | **Not available.** The environment allows only the site's own two hostnames, so `findacraftsman.com`, `guildmc.com` and similar could not be fetched. This limits the accreditation finding, as noted below. |

This was a genuine site audit against fetched HTML, not a repo-source read.

### Two corrections to the brief and the run instructions

1. **The maintenance service slug is `/services/maintenance`, not
   `/services/maintenance-contracts`.** The run instructions named the latter,
   which returns a hard 404. The page title and `<h1>` both read "Maintenance
   Contracts" while the URL is `/services/maintenance`. The page is live and
   correct; only the instruction was wrong. Section 9 of the brief should carry
   the real slug list so this does not recur.

2. **The site has 13 HTML routes, not 19.** Five top-level pages plus eight
   service pages. With `/sitemap.xml` and `/robots.txt` that is 15 addressable
   URLs. The sitemap's 13 `<loc>` entries match the 13 HTML routes exactly.

---

## 1. Highest-priority findings

Ordered as the brief orders them: accuracy and compliance first.

### 1.1 Four accreditation claims on /about have no evidence on file — TAN-61

The About page displays four trade-body logos with these claims, verbatim from
the rendered HTML:

- "The Guild of Master Craftsmen — Accredited member"
- "City & Guilds — Qualified"
- "CSkills — Approved centre"
- "CITB — Construction skills"

plus, at `app/about/page.tsx:176`:

> "Paul is fully qualified, insured and a member of the relevant trade bodies, so
> you're properly covered and the work always meets the standards it should."

Two of these name a status an individual tradesman cannot hold. A **CSkills
"Approved centre"** is an organisation licensed to deliver and assess
qualifications, meaning a college or training provider, not a sole trader.
**CITB** is the industry training board and levy body, not a membership or
qualification. Both read as logo-dropping rather than real credentials.

The Guild of Master Craftsmen claim is the one with a verification path: the
page links to `https://www.findacraftsman.com/listing/paul-vowles-carpentry`.
**This run could not fetch that URL** because of the network policy, so the
Guild membership is linked but not independently confirmed here. It should not
be removed on the strength of this audit.

Displaying a trade body's logo against a status not held is a
misleading-advertising exposure, not only a ranking question. That is why it
leads the backlog.

### 1.2 Verified clean: no aggregateRating anywhere

The brief anticipated an unsubstantiated `aggregateRating` as the likely
top-priority compliance finding. **It does not exist on this site.** Counted
across all 13 live pages: 0 occurrences of `aggregateRating`, 0 of
`reviewCount`, 0 of `ratingValue`. No star ratings, no review counts, no
platform badges beside a number in visible copy either.

Recording this explicitly because a clean result is a finding.

### 1.3 Near-zero organic visibility

DataForSEO `ranked_keywords` for the domain returns `total_count: 1`. The
entire measured organic footprint is:

```
keyword:        carpenters paignton
rank_group:     60
rank_absolute:  66
url:            https://www.paulvowlescarpentry.co.uk/
etv:            0.013          (estimated monthly visits)
search_volume:  70
rank_changes:   {"is_new": true}
```

`is_new: true` is consistent with a recently launched or recently indexed site.
There is no ranking history to lose, which makes this a clean starting point
rather than a recovery job.

### 1.4 GA4 is not collecting — TAN-63

Confirmed absent, not merely unconfirmed as the brief had it. On the live
homepage: 0 `googletagmanager` references, 0 occurrences of `gtag`, 0 strings
matching `G-[A-Z0-9]{6,}`. All nine client chunks were fetched and searched
individually: no measurement ID in any of them.

Because `NEXT_PUBLIC_*` variables are inlined at build time, their total absence
from every chunk is conclusive. `NEXT_PUBLIC_GA_ID` was unset when the current
production build ran. Deployment id `dpl_HpKK7RdtCu18stWKLRp8iK2kct4f`.

The `CookieConsent` component is present in the React tree but renders nothing,
which is the designed behaviour when `GA_ID` is undefined.

**Consequence:** section 8 of the brief cannot report visits or the
desktop/mobile split. Those fields must carry `[ FILL ]` until this is fixed,
and every month it stays unset is unrecoverable traffic history.

---

## 2. Per-page audit

### 2.1 Titles — counted

Template is `%s | Vowles Carpentry & Building` at `app/layout.tsx:38`, a
**32-character** suffix, so the source budget is **37 characters** to stay under
70. Four pages exceed the limit.

| Route | Rendered len | Verdict |
|---|---|---|
| `/privacy` | 74 | **over**, and brand rendered twice |
| `/about` | 81 | **over by 11** |
| `/contact` | 85 | **over by 15** |
| `/gallery` | 87 | **over by 17** |
| `/` | 58 | ok |
| `/services/kitchens` | 53 | ok |
| `/services/cut-roofs` | 54 | ok |
| `/services/extensions` | 55 | ok |
| `/services/media-walls` | 56 | ok |
| `/services/windows-doors` | 60 | ok |
| `/services/loft-conversions` | 61 | ok |
| `/services/flooring-decking` | 63 | ok |
| `/services/maintenance` | 66 | ok, 4 characters of headroom |

The `/privacy` title in full, verbatim:

> `Privacy Policy | Vowles Carpentry & Building | Vowles Carpentry & Building`

The source at `app/privacy/page.tsx:12` already ends with the brand and the
template appends it again. This breaks the explicit rule that the brand is never
repeated in the source title.

Raised as **TAN-67**.

### 2.2 Meta descriptions — counted

Target is 120 to 170. **Twelve of thirteen are over.** None are under.

| Route | Length | Over by |
|---|---|---|
| `/services/kitchens` | 241 | 71 |
| `/about` | 239 | 69 |
| `/contact` | 228 | 58 |
| `/services/extensions` | 227 | 57 |
| `/services/windows-doors` | 221 | 51 |
| `/` | 218 | 48 |
| `/services/loft-conversions` | 214 | 44 |
| `/gallery` | 202 | 32 |
| `/services/media-walls` | 202 | 32 |
| `/services/maintenance` | 190 | 20 |
| `/services/flooring-decking` | 188 | 18 |
| `/services/cut-roofs` | 183 | 13 |
| `/privacy` | 163 | **in range** |

Mean of the twelve over-length descriptions is 212. Verbatim current values are
recorded in TAN-66 so they can be compared after editing.

Raised as **TAN-66**.

### 2.3 Headings

Exactly one `<h1>` on all 13 pages. No page has zero, none has more than one.

| Route | h1 | h2 | h3 |
|---|---|---|---|
| `/` | 1 | 6 | 8 |
| `/about` | 1 | 7 | 5 |
| `/gallery` | 1 | 1 | 0 |
| `/contact` | 1 | 3 | 0 |
| `/privacy` | 1 | 12 | 0 |
| each `/services/*` | 1 | 6 | 0 |

H1 values, verbatim:

- `/` — "An experienced carpenter who treats your home like his own."
- `/about` — "20+ years on the tools, built on word of mouth"
- `/gallery` — "Recent work"
- `/contact` — "Let's talk about your project"
- `/privacy` — "Privacy policy"
- service pages — the service name, e.g. "Loft Conversions", "Maintenance Contracts"

No defect found.

### 2.4 Canonicals

Present on all 13 pages, all using the `www` host exactly. Each matches its own
route. No cross-canonical errors, no apex-host canonicals.

Homepage canonical is `https://www.paulvowlescarpentry.co.uk` with no trailing
slash, which is consistent with the sitemap's first `<loc>`.

No defect found.

### 2.5 Structured data

JSON-LD block counts and types, from a recursive `@type` walk of every
`application/ld+json` block.

| Route | Blocks | BreadcrumbList | FAQPage | aggregateRating |
|---|---|---|---|---|
| `/` | 1 | **0** | 0 | 0 |
| `/about` | 3 | 1 | 0 | 0 |
| `/gallery` | 2 | 1 | 0 | 0 |
| `/contact` | 2 | 1 | 0 | 0 |
| `/privacy` | 2 | 1 | 0 | 0 |
| each `/services/*` | 4 | 1 | **1** | 0 |

Full type inventory:

- `/` — `GeneralContractor`, `Person`, `PostalAddress`, 5x `City`
- `/about` — `Person`; `BreadcrumbList` + 2x `ListItem`; the `GeneralContractor` block
- `/gallery`, `/contact`, `/privacy` — `BreadcrumbList` + 2x `ListItem`; the `GeneralContractor` block
- `/services/*` — `Service` + 5x `City`; `FAQPage` + 6 `Question`/`Answer` pairs; `BreadcrumbList` + 3x `ListItem`; the `GeneralContractor` block

Three observations:

1. **`FAQPage` is live on all eight service pages**, against the section 5 rule.
   Six question/answer pairs each. The content behind it is genuine visible page
   copy, so the substantiation concern does not really bite; the issue is
   carrying schema that earns nothing, since Google restricted FAQ rich results
   in August 2023 to government and health sites. Raised as **TAN-62** with a
   recommendation to remove the markup and keep the visible accordion.
2. **The homepage has no `BreadcrumbList`.** All twelve other pages have exactly
   one. Arguable for a root URL, where a single-item trail has no consumer.
   Raised in **TAN-68** as a decision rather than a reflexive fix.
3. No page emits more than one `BreadcrumbList`. No duplication to fix.

### 2.6 Open Graph

`og:type` is present on the homepage only, with value `website`. It is **absent
on the other twelve pages**.

Cause: `app/layout.tsx:61-62` sets `openGraph.type: "website"` correctly, but
every child page declares its own `openGraph` object and Next.js replaces the
parent rather than deep-merging, so inherited fields are dropped.

Five tags are lost per child page, not just `og:type`:

```
homepage: og:title og:description og:url og:site_name og:locale
          og:image og:image:width og:image:height
children: og:title og:description og:url
```

The lost `og:image` is arguably more costly than the lost `og:type`, since it
governs whether a shared link shows a preview picture.

Raised as **TAN-68**.

### 2.7 Images and alt text

**Zero images missing `alt` across all 13 pages.**

| Route | Images | Missing alt | Empty alt |
|---|---|---|---|
| `/` | 31 | 0 | 0 |
| `/about` | 23 | 0 | 5 |
| `/gallery` | 32 | 0 | 0 |
| `/contact` | 10 | 0 | 0 |
| `/privacy` | 10 | 0 | 0 |
| `/services/*` | 13 to 17 | 0 | 0 |

The five `alt=""` images on `/about` are all accreditation badge logos
(`guild-of-master-craftsmen.png`, `city-and-guilds.png`, `cskills.png`,
`citb.png`). Empty alt is **correct** here, because the adjacent visible text
names each body, so the images are decorative. Not a defect.

No defect found. This is the cleanest area of the site.

---

## 3. Redirects, sitemap and robots

### 3.1 Redirects — all confirmed working

| From | Status | To |
|---|---|---|
| `https://paulvowlescarpentry.co.uk/` | 308 | `https://www.paulvowlescarpentry.co.uk/` |
| `/services` | 308 | `/` |
| `/reviews` | 308 | `/about` |
| `/services/maintenance-contracts` | 404 | (no redirect; slug does not exist) |

Apex to `www` works. Both configured 308s in `next.config.mjs` work as intended.

The 404 is the run instruction's wrong slug, not a site defect. No redirect is
needed, since that URL was never live and has no inbound equity.

### 3.2 Sitemap — 13 entries, matching the 13 live routes

```
 1  https://www.paulvowlescarpentry.co.uk
 2  https://www.paulvowlescarpentry.co.uk/about
 3  https://www.paulvowlescarpentry.co.uk/gallery
 4  https://www.paulvowlescarpentry.co.uk/contact
 5  https://www.paulvowlescarpentry.co.uk/privacy
 6  https://www.paulvowlescarpentry.co.uk/services/loft-conversions
 7  https://www.paulvowlescarpentry.co.uk/services/extensions
 8  https://www.paulvowlescarpentry.co.uk/services/kitchens
 9  https://www.paulvowlescarpentry.co.uk/services/media-walls
10  https://www.paulvowlescarpentry.co.uk/services/cut-roofs
11  https://www.paulvowlescarpentry.co.uk/services/flooring-decking
12  https://www.paulvowlescarpentry.co.uk/services/maintenance
13  https://www.paulvowlescarpentry.co.uk/services/windows-doors
```

All use the `www` host. No orphans, no missing routes, no non-canonical URLs.

**Baseline `<loc>` count is 13.** Future page work must record the before and
after count against this number.

### 3.3 robots.txt — correct

```
User-Agent: *
Allow: /

Host: https://www.paulvowlescarpentry.co.uk
Sitemap: https://www.paulvowlescarpentry.co.uk/sitemap.xml
```

Points at the sitemap, declares the canonical host, blocks nothing. No defect.

---

## 4. Internal linking

Counted in rendered HTML, with `application/ld+json` blocks stripped first so
schema URLs could not be miscounted as links. The `<main>` region was found on
every page, so the body versus chrome split is reliable rather than heuristic.

| Service page | Total inbound | In-body inbound |
|---|---|---|
| `/services/loft-conversions` | 12 | 1 (from `/`) |
| `/services/extensions` | 12 | 1 (from `/`) |
| `/services/kitchens` | 12 | 1 (from `/`) |
| `/services/media-walls` | 12 | 1 (from `/`) |
| `/services/cut-roofs` | 12 | 1 (from `/`) |
| `/services/flooring-decking` | 12 | 1 (from `/`) |
| `/services/maintenance` | 12 | 1 (from `/`) |
| `/services/windows-doors` | 12 | 1 (from `/`) |

**The brief's standard of at least 3 inbound links from distinct live pages is
met.** Every service page has 12. Reporting that accurately matters.

But all 12 are sitewide header and footer nav. The uniformity is itself the
evidence: an editorial pattern would vary by page. Genuine in-content inbound
links number exactly **one** per service page, all from the homepage.

And the service pages emit almost nothing. The complete link set inside `<main>`
on a service page is:

```
/#services
/#top
tel:+447866599043
```

No link to `/contact`, which is the enquiry page. No link to `/gallery`, which
holds the proof of the work described. No link to a related service. The
commercial pages are editorial dead ends.

This is not a failure of the acceptance criterion as written. It is a real
weakness the criterion did not catch, which is worth stating rather than
reporting the site as compliant and moving on.

Raised as **TAN-65**.

---

## 5. Baseline keyword data

Two paid DataForSEO pulls. Account balance `$50.80908` of `$51.00` at audit
time. Both pulls together are well under `$0.10` at list prices
(`ranked_keywords/live` is `$0.01` plus `$0.001` per result;
`google_ads/search_volume/live` is a flat per-task charge). The two
`appendix/user_data` calls are free.

### 5.1 Current rankings

`dataforseo_labs/google/ranked_keywords/live`, target `paulvowlescarpentry.co.uk`,
`location_code: 2826` (United Kingdom), limit 100.

**Result: `total_count: 1`.** See section 1.3. One keyword, position 60,
estimated 0.013 visits per month.

### 5.2 Keyword gaps

`keywords_data/google_ads/search_volume/live`, 50 terms submitted,
`location_code: 2826`. The response returned the first 10 items; those are
below. The remaining 40 were not re-pulled, to keep spend down.

| Term | Volume/mo | Competition | CPC |
|---|---|---|---|
| builder exeter | 590 | MEDIUM (43) | £2.24 |
| carpenter exeter | 320 | MEDIUM (51) | £4.28 |
| builder torquay | 210 | **LOW (32)** | £1.67 |
| carpenter torquay | 140 | MEDIUM (44) | £1.53 |
| builder newton abbot | 110 | MEDIUM (56) | £4.62 |
| loft conversion exeter | 90 | MEDIUM (52) | £5.11 |
| carpenter newton abbot | 70 | MEDIUM (45) | £8.37 |
| loft conversion torquay | 30 | **LOW (14)** | £2.80 |
| carpenter teignmouth | 20 | MEDIUM (52) | £1.22 |
| builder teignmouth | no data | — | — |

**The clearest gap: every page on the site targets "South Devon", and not one
targets a town.** The demand is overwhelmingly town-specific and splits between
`builder <town>` and `carpenter <town>`. The business is genuinely both, and the
homepage title already says "Local Builder in South Devon", so the positioning
exists without a page to rank.

`builder torquay` is the standout: 210 searches a month at competition index 32,
in core service area.

Terms not yet sized, worth a second small pull: the media-wall, decking,
flooring, window/door, property-maintenance and bespoke-joinery variants, plus
`carpenter bishopsteignton`, `carpenter torbay`, `builder torbay` and
`loft conversion torbay`.

Raised as **TAN-64**.

### 5.3 A note on the local pack

The SERP for `carpenters paignton` includes `local_pack` and `google_reviews`
features. For `carpenter <town>` queries the local pack tends to dominate, which
is a Google Business Profile lever rather than an on-page one. Section 9 of the
brief records that **no GBP workstream is scoped for this site**, unlike Devon
Joinery. That gap may matter as much as any on-page issue here and deserves its
own scoping conversation.

### 5.4 Cannibalisation: none found

Checked and found nothing, so nothing was raised.

The cannibalisation rule applies when a parent category page has live child
pages competing for the same term. This site has no such structure: `/services`
is a 308 redirect to `/`, there are no sub-service pages, and the eight service
pages carry distinct non-overlapping titles ("Loft Conversions in South Devon",
"Extensions in South Devon", and so on) against a homepage targeting "Local
Builder in South Devon".

No two pages compete for the same term. A cannibalisation issue would have been
invented work.

---

## 6. The backlog

Eight issues, in the brief's priority order. No padding: these are the genuine
findings.

| ID | Priority | Title |
|---|---|---|
| **TAN-61** | Urgent | Four accreditation claims on /about have no evidence on file, and two name credential types a sole trader cannot hold |
| **TAN-62** | High | FAQPage schema is live on all eight service pages, against the no-FAQPage rule |
| **TAN-63** | High | GA4 is not collecting: no measurement ID in the live bundle, so the monthly report has no traffic data |
| **TAN-64** | High | No page targets a town name, and the highest-volume commercial terms are all town-specific |
| **TAN-65** | Medium | Service pages carry no in-body links to /contact, /gallery or sibling services |
| **TAN-66** | Medium | Twelve of thirteen meta descriptions exceed the 170-character ceiling |
| **TAN-67** | Medium | Four meta titles exceed 70 characters, and /privacy renders the brand name twice |
| **TAN-68** | Low | og:type is missing on twelve pages, and the homepage has no BreadcrumbList |

Priority groups map to the brief's order: accuracy and compliance (TAN-61,
and TAN-62 as the rule conflict), then high-intent page gaps (TAN-64, TAN-65),
then cleanups (TAN-66, TAN-67, TAN-68). TAN-63 sits high because it blocks the
monthly report and loses data every month it waits.

---

## 7. Decisions needed from a human

### 7.1 Accreditation evidence — blocking TAN-61

Five client questions, listed in full on the issue. The two that matter most:
what was **CSkills "Approved centre"** meant to say, and what is being claimed
by the **CITB** badge? Both name statuses a sole trader does not hold. Also
needed: the City & Guilds qualification and year, and whether public liability
insurance is in force and with whom.

Per section 4, if answers do not arrive, ship the version that claims strictly
less.

### 7.2 FAQPage: remove or substantiate — TAN-62

Recommendation: **remove the JSON-LD, keep the visible accordion.** The markup
has earned no rich result since Google's August 2023 restriction, the visible
FAQs are genuine content worth keeping, and removing the markup brings the site
into line with the brief instead of carrying a standing exception.

If the decision is to keep it, section 5 of the brief should record the
exception and why, so the next audit does not re-raise it.

### 7.3 GA4 measurement ID — TAN-63

Does a GA4 property exist for the domain? If not, who creates it and under whose
Google account? Ownership matters if the relationship ends. Note that enabling
this makes the cookie consent banner start appearing, since it is currently
dormant.

### 7.4 No /blog route and no sub-service pages

Both are build tasks, not content tasks, and **neither has been started**.

- There is no `/blog` route and no `BlogPosting` schema anywhere on the site.
  The monthly loop's blog cadence cannot begin until the route, the listing page,
  the post template and the schema exist. Nothing in this backlog builds it.
- There are no sub-service pages. The eight `/services/[slug]` pages are the
  deepest level. Sub-service pages mean new routing depth.

TAN-64 introduces a comparable new routing depth for location pages, so whoever
takes it should consider whether one routing pattern can serve both locations
and sub-services rather than building two.

**Decision needed:** does the blog get built, and when? Until it does, the
monthly loop has no content workstream and the `blog` label has nothing to
attach to.

### 7.5 Homepage BreadcrumbList — TAN-68

Recommendation: leave the homepage without one and amend section 5 of the brief
to read "every page below the root carries one". A single-item breadcrumb on a
root URL has no consumer.

### 7.6 Google Business Profile scope

Not scoped for this site. The local pack dominates the SERPs these services
compete in. Worth deciding whether a GBP workstream is added, as it is for
Devon Joinery.

---

## 8. Not raised, and why

Recording these so a later audit does not treat them as missed.

- **`aggregateRating`** — absent sitewide. Nothing to fix.
- **Image alt text** — zero images missing `alt`. The five `alt=""` badges on
  `/about` are correctly decorative.
- **Canonicals** — all 13 correct, all `www`.
- **One h1 per page** — all 13 correct.
- **Sitemap and robots** — both correct.
- **Redirects** — apex to `www`, `/services`, `/reviews` all working as 308s.
- **Cannibalisation** — no competing pages exist. See 5.4.
- **Raw `<img>` in `Header.tsx` and `Footer.tsx`** — pre-existing and documented
  in section 5 of the brief as not a new violation. Left alone.
- **Page speed** — not measured in this run. The brief's section 10 lists it;
  it needs a Lighthouse or PageSpeed Insights run, and the external host was not
  reachable under this environment's network policy. **Outstanding.**
