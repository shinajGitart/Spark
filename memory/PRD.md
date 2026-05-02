# SPARK / Sharara Renewable Energy Co. — PRD

## Original Problem Statement
Rebuild the SPARK / Sharara Renewable Energy Co. homepage as a premium 2026 modern animated React + Tailwind landing page (dark hero, red-blue glow, lightning/spark motion, glass cards, marquee, scroll reveal). Capabilities must be single animated showcase rows (not cards). Replace existing PDF/brochure layout entirely.

## Architecture
- **Frontend**: React 19 + Tailwind + Framer Motion + lucide-react (hot reload via craco)
- **Backend**: untouched
- **Routing**: single `/` homepage rebuild

## Brand
- BG `#090B1A`, Indigo `#2F347D`, Royal `#27306B`, Red `#A92A2E`, Bright Spark `#C63A3A`, Silver `#D9D9DE`, White `#F8F9FB`
- Display font: Sora · Body font: Manrope

## Implementation (2026-01)
- `/src/index.css` rebuilt with brand tokens, grain, glow, marquee, sweep, draw-bolt, hue-shift keyframes
- `/src/components/spark/`
  - `TubeCursor.jsx` — canvas-based glowing cursor trail (initial+light colors as specified)
  - `SparkMark.jsx` — animated SVG lightning-bolt logo (gradient, rotating ring, pulse)
  - `Navbar.jsx` — sticky glass navbar with scroll blur, mobile menu
  - `Hero.jsx` — full-screen hero, gradient glows, drifting blobs, lightning SVG paths, particles, grid mask, animated headline gradient, stats
  - `About.jsx` — slideshow background (gradient fallbacks since `/homepic*` missing) with #090B1A overlay, 3 glass cards, scroll reveal
  - `Capabilities.jsx` — 8 single animated showcase rows (NOT cards); alternating sides, big numerals, orbiting rings, lightning sweep, icon orb
  - `Sectors.jsx` — 8 sector chips, staggered reveal
  - `Partners.jsx` — two marquee tracks (forward + reverse) with mask-fade, glass pills
  - `CtaFooter.jsx` — gradient-bordered CTA card + footer with contact details
- `App.js` simplified to render `<Home>` with TubeCursor + sections
- `public/index.html` title + theme-color updated

## What Works
- Hero, About slideshow, Capabilities showcase rows, Sectors, Partners marquee, CTA, Footer all render and animate
- Mobile responsive (mobile menu, stacked layouts, font scale)
- Smooth scroll anchors, sticky navbar w/ blur
- No build errors; lint clean

## Notes
- `/src/logo-1.png` and `/src/components/homepic[1-5].*` were NOT present; elegant CSS gradient fallbacks are used and image `<url>` is still tried (drop the files into `/app/frontend/public/` as `homepic1.jpg`…`homepic5.jpg` and `logo-1.png` to use real assets).
- TubeCursor is a custom lightweight canvas implementation (no external dep).

## Backlog / Next
- P1: Replace gradient placeholders with real homepic photos when provided
- P1: Wire actual SPARK logo PNG into Navbar/Footer if preferred over the SVG SparkMark
- P2: Build out internal pages (`/services`, `/about`, `/contact` forms)
- P2: Add WhatsApp / quick contact float button (lead-gen)
- P2: Add bilingual EN/AR toggle (audience is Saudi)
