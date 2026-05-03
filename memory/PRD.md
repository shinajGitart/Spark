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
- Added `scroll-behavior: smooth` + reduced-motion media query + global ambient glow pseudo-element for slight brightness lift
- Glass cards brightened (background 0.06→0.085 strong, border 0.12→0.16) for better visibility without losing premium dark feel
- `/src/components/spark/`
  - `TubeCursor.jsx` — lightweight DPR-aware canvas trail, disabled on coarse-pointer (mobile) for battery, pauses on tab hidden
  - `SparkMark.jsx` — GPU-friendly: static soft radial halo + subtle scale breathing, single dashed orbit ring, `will-change: transform`, no `filter: blur` animation
  - `SectionLabel.jsx` — replaces all pill/capsule badges site-wide with accent-line + uppercase micro-label treatment
  - `Navbar.jsx` — sticky glass navbar with scroll blur, mobile menu
  - `Hero.jsx` — hero with gradient glows, drifting blobs, lightning SVG paths, particles (reduced 28→18), grid mask, smooth circular orbit (rotate-based, GPU)
  - `About.jsx` — slideshow background + each card now has a relevant Unsplash image (served locally from `/public/card-*.jpg`) at 50% opacity with dark gradient overlay for readability
  - `Capabilities.jsx` — 8 single animated showcase rows (not cards); alternating sides, big numerals, orbiting rings, icon orb
  - `Sectors.jsx` — 8 sector chips, staggered reveal
  - `Partners.jsx` — rebuilt with `BrandTile` component (monogram badge + name + accent bar), forward + reverse marquees, mask-fade edges
  - `CtaFooter.jsx` — gradient-bordered CTA card + footer
- `App.js` renders `<Home>` with TubeCursor + sections
- `public/index.html` title + theme-color updated
- `public/card-{industrial,quality,oilgas}.jpg` — local Unsplash-sourced card imagery

## Polish / refinements (2026-01 pass 2)
- All capsule/pill badges replaced with clean `│ SECTION LABEL` treatment (accent line + uppercase)
- Body text contrast lifted (`/75 /80` → `/85 /90`) for readability
- Ambient radial blue/red body glow lifts overall brightness while preserving dark premium aesthetic
- Marquee/animation easings unified; reduced-motion support
- Reverted WebGL cursor to lightweight canvas version for performance (no framebuffer/GPU stall issues)

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
