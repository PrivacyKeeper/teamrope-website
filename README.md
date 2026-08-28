# TeamRope.pro — Website

Marketing site for the TeamRope.pro mobile app. Built to the same pattern as
the other Rodeo Apps sites (BullRider.pro, BreakawayRoping.pro, BarrelConnect):
Next.js App Router, Tailwind v4, Resend for the waitlist, no database and no
auth.

## Commands

- `npm run dev` — development server (http://localhost:3000)
- `npm run build` — production build
- `npm start` — serve the production build
- `npx eslint .` — lint

## Stack

Next.js 16 (App Router, Turbopack), React 19, TypeScript, Tailwind CSS v4,
Resend. Path alias `@/*` maps to `./src/*`.

## Required assets

`public/logo.png` is referenced by the header, the hero, and the OG/Twitter
card, and is **not** in the repo yet. Drop the TeamRope crest in before
deploying or those three places render a broken image.

`public/cross.jpg` and `public/backgrounds/arena-1.jpg` / `arena-2.jpg` are
already here, carried over from the other Rodeo Apps sites.

## Environment

| Variable | Purpose |
| --- | --- |
| `RESEND_API_KEY` | Waitlist confirmation + team notification email |

Copy `.env.example` to `.env.local` for local development, and set the same
variable in the hosting provider's project settings for preview and production.

Without it, `POST /api/waitlist` returns 503 and the form shows an error. The
build and every other page work fine without it.

The sending domain `teamrope.pro` must also be verified in Resend, otherwise
every send fails and the route answers 502 rather than reporting a signup that
never actually went out. The
build and every other page work fine without it.

## Structure

```
src/app/
  page.tsx                  Landing — 15 feature groups, pricing, waitlist
  rules/                    Full team roping rules reference (SEO + authority)
  events/                   Formats, entries, draws, producer console pitch
  blog/                     8 SEO posts; index reads from blog/posts.ts
  support/                  Support topics
  terms/ privacy/ refund/   Legal
  api/waitlist/route.ts     Resend handler
  robots.ts  sitemap.ts     SEO
  components/
    SchemaMarkup.tsx        JSON-LD: SoftwareApplication, WebSite, FAQPage
    CrossQuote.tsx          Rotating verse, matches the other sites
    Footer.tsx
  data/quotes.json
```

## Brand

Per the build map: **copper and cream on deep saddle brown**. Defined in
`src/app/globals.css` — copper `#d2803f`, cream `#f3e7d3`, on near-black
saddle brown `#150e09`. The secondary accent is verdigris `#74b39c` — aged
copper — chosen so the two accents are related rather than arbitrary.

## Rules content, and why it is tagged by association

Team roping is the one event in the portfolio where the same question has
different correct answers depending on the sanctioning body. The barrier
penalty is 10 seconds under PRCA and 5 under USTRC. The crossfire call is
judged on the release under USTRC and on control plus direction change under
PRCA. Tie-on thresholds differ too.

Rather than asserting one answer, `/rules` tags every varying rule with the
body it comes from, using the `.assoc-tag` class. PRCA values come from the
2026 PRCA Rule Book; USTRC and WSTR values come from the TeamRope build map
(rules-verified 24 July 2026). Keep that convention when editing — a flat
universal claim on this page would be wrong for half the audience.

## Adding a blog post

1. Create `src/app/blog/<slug>/page.tsx` with a `metadata` export and an
   `<article className="prose-arena">` body.
2. Add the entry to `src/app/blog/posts.ts` (drives the index).
3. Add the slug to `blogSlugs` in `src/app/sitemap.ts`.
