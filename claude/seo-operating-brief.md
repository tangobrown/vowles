# SEO Operating Brief — Vowles Carpentry

The operating manual for the ongoing SEO programme on this site. A session
running the monthly loop should read this first.

This file is the **durable** copy. The same content lives as a Linear document
in project *Vowles Carpentry SEO* (P-TAN-2), but a scheduled run may have no
Linear connector, so this repo copy is the source of truth when they disagree
about process. Linear remains the source of truth for *what work exists*.

---

## 0. Site configuration

| Key | Value |
|---|---|
| Brand | Vowles Carpentry & Building Ltd |
| Site URL | `https://www.paulvowlescarpentry.co.uk` — **www, not apex** |
| Repo | `tangobrown/vowles` |
| Stack | Next.js 14 App Router + TypeScript + Tailwind |
| Prod branch | `main` (auto-deploys to Vercel) |
| Dev branch | `claude/vowles-site-connection-l2f364` |
| Work tracker | Linear — Tangobrown team, project **Vowles Carpentry SEO** (P-TAN-2) |
| Locations | Bishopsteignton, Torquay, Teignmouth, Newton Abbot, Torbay, Exeter |
| Byline | "By Vowles Carpentry & Building" — the brand, never a person |
| Research tool | DataForSEO (paid per call) |
| Analytics | Search Console verified. GA4 **status unconfirmed** — see §9 |

Canonical host is `www`. Getting this wrong breaks internal links and schema `@id`s.

### The eight service slugs, verified against the live site

Read these from `Object.keys(SERVICE_PAGES)` in `lib/services.ts`, never from
the display names. One of them does not match its label:

```
loft-conversions   extensions        kitchens     media-walls
cut-roofs          flooring-decking  maintenance  windows-doors
```

**`maintenance` is the trap.** The page is titled "Maintenance Contracts" but
the URL is `/services/maintenance`. Writing `/services/maintenance-contracts`
produces a 404 and a broken internal link. The kickoff audit of 6 November
2026 caught exactly this error in its own run instructions.

---

## 1. Standing instruction: ship to live

Completed work goes live — merge to `main`, which auto-deploys. Don't pause for
sign-off on routine edits. Surface anything irreversible, or any claim that
can't be substantiated, **before** it ships (§4).

Per batch:

1. Branch off latest `main` → `claude/vowles-site-connection-l2f364`
2. Make changes, build clean (§6)
3. Commit clearly, push the dev branch
4. Fast-forward `main` to it and push → live
5. Mark the Linear issue **Done**, with a comment recording what shipped and
   any open client questions

Never push to any other branch without permission. **Do not open pull requests
unless asked.** If the dev branch's PR was already merged, restart the dev
branch from latest `main` rather than stacking on merged history.

---

## 2. The monthly loop

1. **Research** (DataForSEO) — keyword opportunities, SERP positions,
   competitor gaps, cannibalisation. Budget-aware: each call costs, keep pulls
   small, state what they cost.
2. **Decide the batch** — deliberately small and high quality. Do **not**
   mass-generate pages; thin or near-duplicate content hurts rankings.
3. **Write briefs** into Linear, one issue per task, in the §7 format.
4. **Implement** — follow each brief, ship live, mark Done.
5. **Report** — monthly client report (§8).

### Cannibalisation rule

When a parent category page has 2–3 live child pages, move the parent's
`metaTitle` to the **category term** and hand the specific terms to the
children. Only hand a term to a child that **actually exists**.

---

## 3. Content conventions

- Byline is the brand, not an individual.
- **No em-dashes in visible body copy.** Commas, colons, or rewrite. Does not
  apply to meta titles/descriptions or a title template.
- **Meta titles: counted, never estimated.** The rendered title must be under
  **70 characters**. This site's template is `%s | Vowles Carpentry & Building`
  — a **30**-character suffix, so the source budget is **39 characters** to
  land under 70. (The kickoff audit estimated 32 and 37; counted on
  13 November 2026 it is 30 and 39. Count it, do not carry either number
  forward on trust.)
  That is tighter than most sites. Count every time, and never repeat the brand
  in the source.
- **Meta descriptions: 120–170 characters**, counted.
- One `<h1>` per page, everything else `<h2>`. Blog body 800–1200 words;
  sub-service page body 500–800 words.
- **Internal linking is an acceptance criterion.** Every new page needs **at
  least 3 inbound internal links from distinct live pages**, verified by
  counting them in the **built HTML**, not the source. Never link to a page
  that isn't live; leave a dated TODO instead.
- Write inline links into the prose, not bolted-on "read more" links.

---

## 4. Accuracy and claims discipline — the most important rule

The site must only claim what the business actually does. Enquiries generated
by a claim that can't be fulfilled cost more than they earn, and false
aggregate claims are a compliance risk.

- **If a capability or factual claim is unconfirmed, it comes out — it does not
  get hedged.** No "up to X", no weasel wording.
- **Never fabricate numbers.** Review counts, ratings, prices, percentages. If
  a rating can't be verified, remove the number and any platform logo beside
  it. An unsubstantiated `aggregateRating` in JSON-LD is a Google policy
  violation.
- Ask the client the capability questions a draft raises, and record the
  answers as a comment on the issue whether or not they arrive before shipping.
  **Ship the version that claims strictly less** if an answer doesn't arrive.
- Given "keep it vague": write honest-but-unspecific. State what is true, omit
  what isn't, don't draw attention to the gap.

---

## 5. Technical and schema expectations

- Each service/sub-service page carries its own `Service` JSON-LD with a stable
  `@id` tied to its URL; a child's `isPartOf` points at the parent's `@id`.
  Blog posts carry `BlogPosting`. **Every page below the root carries one
  `BreadcrumbList`.** The homepage deliberately has none: a single-item
  breadcrumb on a root URL has no consumer. Verified 13 November 2026 as one
  per page on all twelve non-root pages, zero on `/`.
- `og:type` is `website` for pages, `article` for blog posts.
- **No `aggregateRating`** unless genuinely substantiated. Verified absent
  across all 13 live pages as of 6 November 2026 — keep it that way.
- **`FAQPage` is a documented exception on this site. Do not remove it.**
  Decided by Tim on 8 November 2026 (TAN-62, closed): the FAQs in
  `lib/services.ts` are real questions with real answers, shown to users in
  the accordion on each service page, so the schema describes content that
  genuinely exists. That is what the substantiation rule asks for. Worth
  knowing that Google restricted FAQ rich results to government and health
  sites in August 2023, so the markup probably earns no SERP feature either
  way — but it is honest, and the decision is to keep it. **Do not re-raise
  this and do not strip `faqPageJsonLd`.**
- Every new URL appears in the sitemap (`app/sitemap.ts` generates it at build;
  confirm in built output and note the before/after count). Canonicals use the
  www host exactly.
- Images go through `next/image`, never a raw `<img>`. Note `Footer.tsx` and
  `Header.tsx` currently use a raw `<img>` for the logo behind an
  eslint-disable; that is pre-existing, not a new violation.
- Don't introduce a dead code path; when you remove the last user of one,
  remove the path — after verifying nothing else references it.

---

## 6. Verification discipline

- **Counted, not estimated** — every character and word count actually counted.
- **Build must pass** (`npm run build`). The type-check is the real gate.
- **Verify acceptance criteria in the built output**, not the source: titles,
  inbound-link counts, schema `@id` resolution, sitemap entries, `og:type`,
  absence of `aggregateRating`.
- Keep the diff to exactly the intended change. Two repo-specific traps:
  - This repo does **not** track `package-lock.json`. `npm install` generates
    one — delete it before committing.
  - The build rewrites `next-env.d.ts`. Revert it before committing.

---

## 7. Per-task brief format

Each Linear issue should let an implementer act without guessing:

```
## Why this matters
## Guard — read before editing      (exact current values, quoted, file + line)
## Files                            (table: file -> change)
## Metadata — counted, not estimated
## Content                          (full body copy, em-dashes removed)
## Internal links — acceptance criteria, not suggestions
## Image brief                      (checked against the real folder)
## Questions for the client
## Acceptance criteria              (checklist)
## Commit message                   (one conventional-commit line)
```

### Labels (shared with the Devon Joinery programme)

`website` · `blog` · `gbp` · `client-report` · `high-impact`

The `website` label's description names the Devon Joinery repo. Labels are
shared workspace-wide; the **project** is what scopes an issue to this site.

### Issue naming, mirroring Devon Joinery

- `Sub-service page #N — Name (/path)`
- `Blog draft #N — Title`
- `Client report email — Month Year (ready to send)`
- `Cannibalisation: rewrite the /path title …`
- Findings: a plain descriptive sentence stating the problem

---

## 8. Monthly client report (1st of the month)

- **Total visits**, and **desktop vs mobile** split — from GA4 / Search
  Console, **not** the research tool, which gives market data rather than this
  site's own traffic.
- **Contact-form / enquiry submissions.** This site sends enquiries through
  `/api/enquiry` to **Postmark**. Postmark's Activity feed is the source for
  how many came in.
- **Tasks performed** this month. Source from git history on `main`
  (`git log --since/--until --first-parent main`) and Linear issues moved to
  Done. Translate each into the business benefit in plain English, never the
  technical name.
- Anything else genuinely useful.

**Traffic figures are switched off by decision.** Tim decided on 8 November
2026 (TAN-63, parked at Low) that traffic figures are not needed for now, so
`NEXT_PUBLIC_GA_ID` stays unset and GA4 collects nothing.

So **omit the "Traffic at a glance" section entirely** rather than printing
`[ FILL ]` fields nobody can ever fill. State once, plainly, that analytics is
off by choice. The report then leads on enquiries and on what shipped, both of
which are real.

Enquiry counts are unaffected: they come from Postmark Activity, not GA4.
Search Console is verified and still collecting independently, so query,
impression and click data remain available if a search signal is wanted.

Never guess numbers, and never substitute market data for site traffic.

---

## 9. Site-specific state and open questions

Things true of this site that differ from Devon Joinery:

1. **No blog exists.** There is no `/blog` route and no `BlogPosting` schema. A
   blog post is not a content-only task here; the route has to be built first.
2. **No sub-service pages.** The eight `/services/[slug]` pages are the deepest
   level. Sub-service pages mean a new routing depth.
3. **`FAQPage` — DECIDED 8 Nov 2026, keep it.** The FAQs substantiate the
   schema. See §5. TAN-62 closed. Do not re-raise.
4. **GA4 — DECIDED 8 Nov 2026, stays off.** Confirmed by inspection of the
   live bundle that no measurement ID is present: GA4 collects nothing, and
   that is deliberate. See §8. TAN-63 parked at Low. Do not re-raise. Note
   there is no backfill — history before it is ever switched on is lost, which
   is a known and accepted cost.
5. **Enquiry delivery is Postmark**, moved from Formspree. Enquiry counts come
   from Postmark Activity.
6. **No Google Business Profile workstream** is scoped yet, unlike Devon
   Joinery.
7. **TAN-61 (`/about` accreditation claims) is ON HOLD by Tim's decision of
   8 November 2026. Do not action it.** This one needs stating explicitly
   because §4's default points the other way: *"ship the version that claims
   strictly less if an answer doesn't arrive"* would, read literally by an
   unattended run, mean going and stripping the CSkills and CITB entries
   unprompted. **That default is suspended for TAN-61** until Paul answers the
   five questions on the issue. Do not edit
   `components/AccreditationTabs.tsx`, do not edit `app/about/page.tsx:176`,
   and do not delete anything from `public/badges/`. The finding itself still
   stands: parked is not resolved.

---

## 10. First-month ramp — not yet done

Before the normal loop begins:

1. Crawl and audit the live site — structure, titles, descriptions, headings,
   schema, canonicals, internal linking, image alt text, page speed.
2. Pull baseline rankings and obvious keyword gaps from DataForSEO.
3. Write the backlog as Linear issues, prioritised: **accuracy and compliance
   risks first**, then high-intent page gaps, then cannibalisation, then
   cleanups.
4. Agree the §3–§4 standing rules with the client — brand voice, byline, what
   can and cannot be claimed.

**The crawl requires network access to the live site.** A session must run on
the `vowles` cloud environment, which allows `www.paulvowlescarpentry.co.uk`
and the apex. The Default environment refuses both, and the audit cannot run
there — a repo-source read is not a site audit and must not be reported as one.

---

## 11. Environment constraints for scheduled runs

- **Connectors may be missing.** A Routine created from inside a session cannot
  carry connector grants on this organization, so a scheduled run may have no
  Linear and no DataForSEO. Check at the start and say so at the top of the
  output if they are absent. Fall back to writing the batch to
  `claude/YYYY-MM-batch.md` in this repo so the work survives.
- **Outbound HTTP is restricted.** Only hosts allowed by the environment are
  reachable. On the `vowles` environment that is the site's own two hostnames.
- **The container may start empty.** `node_modules` is not guaranteed; run
  `npm install` before building. The `vowles` environment's setup script does
  this automatically.
- Clone or work from absolute paths; the shell working directory resets between
  commands.
