# SMD Detailing — Wireframes

Production-quality HTML wireframes for SMD Detailing (Shay McDevitt, Glencovitt / Ballybofey, Co. Donegal).

## Files

| File | Purpose |
|------|---------|
| `index.html` | Homepage — hero, packages overview, why SMD, process, gallery, reviews, coverage, CTA |
| `services.html` | Full services page — every package in full, add-ons table, FAQ accordion |
| `about.html` | Shay's story — mini-company year, All-Ireland win, North Macedonia, craft philosophy |
| `book.html` | Booking enquiry form with reassurance sidebar |
| `styles.css` | Single shared stylesheet (mobile-first) |

Open `index.html` in a browser. No build step, no dependencies, vanilla HTML/CSS plus tiny JS for mobile nav, form pre-selection and accordion behaviour.

## Design system

- **Palette**
  - Background: `#0a0c0b` deep charcoal (with `#111513` and `#161b18` elevations)
  - Accent: `#0fae6a` deep emerald green — used for CTAs, "Most popular" ribbon, focused inputs, badge dot
  - Award accent: `#d4a13b` warm gold — used only for trophy / All-Ireland references
  - Text: `#f5f7f5` primary, `#a4b0a8` dim, `#6f7a72` muted
  - Borders: `#232a26`
- **Typography**: Manrope (400/500/600/700/800) via Google Fonts. Tight `letter-spacing: -0.02em` on headings; large `clamp()` scale so it sings on both mobile and desktop without media queries everywhere.
- **Radius**: 14px (cards), 10px (buttons), 8px (small)
- **Spacing**: 64px section padding (mobile), generous on desktop. Single `--maxw: 1180px` container.
- **Mobile breakpoints**: 600 (form rows), 720 (most grids go 2- or 3-col), 880 (nav links, hero side-by-side, booking grid), 1000 (4-col where useful).
- **Hover/focus**: subtle `translateY(-2px)` on cards and primary button; accent border on focused inputs.

## Information architecture

```
Homepage (index)
├── Sticky header (nav + phone + Book CTA)
├── Hero (headline + trust badges)
├── Stats strip (3 hero numbers)
├── Services overview (3 cards, Full Valet ribboned "Most popular")
├── Why SMD (4 differentiators)
├── Process (4 steps)
├── Gallery (8 placeholder shots)
├── Reviews (6 testimonials with package tag)
├── Coverage (towns list + map placeholder)
├── Final CTA
└── Footer

Services
├── Page hero
├── 3 detailed package cards (anchor links #mini, #full, #deluxe)
├── Add-ons table (6 bolt-ons)
├── FAQ accordion (7 questions)
├── Final CTA
└── Footer

About
├── Page hero (lead paragraph)
├── Long-form story (4 sections + photo sidebar)
├── Final CTA
└── Footer

Book
├── Page hero
├── Form (name, phone, email, vehicle, package select, drop-off vs mobile, dates, area, notes)
├── Reassurance sidebar (4 steps + 4-week heads-up + award note)
└── Footer
```

## Key design decisions (the "why")

1. **Booked-4-weeks-ahead as the dominant trust signal.** It appears in the header CTA's neighbouring eyebrow, in the hero, in the stats strip, in the final CTA on every page, and as a callout in the booking sidebar. Repetition without redundancy — different wording each time.

2. **Award credentials as the credibility engine, not the headline.** The hero leads on craft ("I take more care of your car than I do my own"), not on the trophy. Trophy lives in trust badges, stats, About story, footer tagline and a gold-tinted booking sidebar note. This stops the site reading as boastful while keeping the credibility on every page.

3. **Price anchoring with Deluxe Detail.** The €400–600 tier sits beside the €60–80 Mini on the homepage, which is the whole point — Deluxe makes Mini and Full feel like a steal without us ever calling them cheap. The Full Valet is ribboned "Most popular" so the price-anchor doesn't push everyone to the cheapest tier.

4. **"Featured" Full Valet on services page** mirrors the homepage emphasis with an emerald border + soft gradient. It's the bread-and-butter package.

5. **Owner-operator framing throughout.** Every section that could veer into "small business" language is rewritten in first-person — "I detail", "I take more care", "I'll text you back". This is the differentiator vs AutoNerd and the bigger valeting outfits, and it costs nothing to maintain in copy.

6. **Mobile-first sizing.** Hero text uses `clamp(2.1rem, 6vw, 4.2rem)` so a 375px iPhone shows ~2.1rem and a 1440px desktop shows ~4.2rem with no breakpoint juggling. Touch targets are 44px+ throughout. The mobile menu is a real progressive enhancement — the page works without JS.

7. **Wireframe honesty.** Every image is a labelled solid block (`[Photo: Shay polishing a black Audi…]`). No stock photo placeholders, no Unsplash leakage. Joseph / Shay can swap each one for a real photo without touching layout.

8. **Form does work without JS.** Required fields use native HTML validation. The `onsubmit` swap to a thank-you state is progressive; if JS fails, the user still sees a normal browser submit attempt.

9. **Irish/UK English throughout.** "Valeting", "tyres", "kerb", "honest pricing", "the diary", "lads". No corporate filler. No apology for the prices.

10. **One stylesheet, no framework.** ~800 lines of vanilla CSS with custom properties. Easy to hand to a developer to drop into Webflow / Astro / Next without rewriting.

## What's deliberately not in here

- Live booking calendar / Stripe deposit flow — booking is form-only for now, sized correctly for a 16-year-old running it manually.
- Blog / content marketing — not the stage of the business.
- Live chat — Shay's a student, manual SMS reply is the right channel.
- Reviews from Google — uses placeholder testimonials. Real ones swap in 1:1 with the same card structure.

## Build (added 15 Jul 2026)

The .jsx sources are precompiled to `bundle.js` — run `./build.sh` after any .jsx edit, then `vercel deploy --prod`. index.html loads production React from `/vendor` plus the bundle; Babel-standalone is gone. Pages have real URLs (pushState + vercel.json rewrites) with per-page titles/descriptions defined in `app.jsx` (PAGE_META).
