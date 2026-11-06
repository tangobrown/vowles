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
  — a 32-character suffix — so the source budget is about **37 characters**.
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
  Blog posts carry `BlogPosting`. Every page carries one `BreadcrumbList`.
- `og:type` is `website` for pages, `article` for blog posts.
- **No `FAQPage` and no `aggregateRating`** unless genuinely substantiated.
  **Note: this site currently emits `FAQPage`** on service pages, generated
  from the FAQs in `lib/services.ts`. This conflicts with the rule and needs a
  decision — see §9.
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

If GA4 or Search Console aren't connected, **say so plainly** and leave the
figures as clearly-marked `[ FILL ]` fields. Do not guess numbers and do not
substitute market data for site traffic.

---

## 9. Site-specific state and open questions

Things true of this site that differ from Devon Joinery:

1. **No blog exists.** There is no `/blog` route and no `BlogPosting` schema. A
   blog post is not a content-only task here; the route has to be built first.
2. **No sub-service pages.** The eight `/services/[slug]` pages are the deepest
   level. Sub-service pages mean a new routing depth.
3. **`FAQPage` schema is live** on service pages, against the §5 rule. Decide:
   remove it, or confirm the FAQs justify it.
4. **GA4 may not be collecting.** `lib/consent.ts` loads analytics only when
   `NEXT_PUBLIC_GA_ID` is set in Vercel *and* the visitor accepts the cookie
   banner. If unset, there is no traffic data at all and §8 cannot report
   visits.
5. **Enquiry delivery is Postmark**, moved from Formspree. Enquiry counts come
   from Postmark Activity.
6. **No Google Business Profile workstream** is scoped yet, unlike Devon
   Joinery.

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
