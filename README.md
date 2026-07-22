# AFX Frames — Studio Portfolio (Next.js)

A portfolio website for AFX Frames, a photography & motion studio, built with
Next.js 14 (App Router), TypeScript, and Tailwind CSS. Structure and feature
set (fixed nav, responsive design, forms, blog/journal, custom 404) are
inspired by the Feastria Webflow template's layout conventions, reworked from
a restaurant menu concept into a studio portfolio concept.

## Design concept

- **Palette**: near-black studio background, warm paper-white text, and a
  deep crimson accent sampled from the real AFX Frames logo mark.
- **Type**: Fraunces (display, incl. italic) paired with Inter (body) and
  JetBrains Mono (frame counters / labels).
- **Signature motif**: the studio's name — *Frames* — is taken literally.
  Portfolio tiles are bordered like film-strip sprockets, each carries an
  `f/0000`-style frame number, and the hero includes a live ticking frame
  counter.

## Pages

- `/` — Home (hero, statement, selected work, testimonials, CTA)
- `/work` — Full portfolio grid ("contact sheet")
- `/studio` — About, capabilities, team
- `/journal` — Blog / journal listing
- `/contact` — Enquiry form
- Custom 404 page

## Content & images

Real portfolio photography wasn't provided, so project tiles use generated
gradient placeholders (styled as film frames) standing in for real images —
swap them out in `components/FrameTile.tsx` / individual pages with
`next/image` once real photos and video are available. The one real asset,
the AFX Frames logo, was recovered from the uploaded files and lives at
`public/afx-logo.png`.

## Getting started

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Build

```bash
npm run build
npm start
```
