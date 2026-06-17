# urban_web1 — URBN_ZN (THE DROP)

## Overview
A static, multi-page **underground streetwear / "zine" collective website** for a fictional brand called **URBN_ZN** ("THE DROP — Urban Zine Collective"). Bold, gritty, anti-corporate, brutalist tone — part streetwear shop, part counter-culture manifesto. Front-end demo only (each page notes *"This is a demo website created for example purposes only."*).

## Tech Stack
- **Plain static HTML/CSS/JS** — no framework or build step.
- Shared `styles.css` (CSS variables) and `script.js`.
- **Fonts:** Archivo Black (heavy display) + JetBrains Mono (mono accents) via Google Fonts.
- Images are stylized placeholders ([IMG_X], mockups); forms simulated client-side (no backend).

## Design System
- **Palette (`:root`):** pure black `#000000`, white `#FFFFFF`, acid neon-lime `#BBFF00` accent, dark grey `#121212`.
- Brutalist "zine" rules: thick 4px borders, hard offset shadows (`8px 8px 0 black`), rotated/"pasted" collage cards, `mix-blend-mode` text, stepped glitch transitions.
- Container width 1200px; raw, high-contrast, intentionally rough layout.

## Pages
| File | Title | Purpose |
|------|-------|---------|
| `index.html` | THE DROP | Landing — "THE REBEL GRID" hero, latest product drops (Graffiti_Hoodie / streetwear ltd 50 units, Signal_Block_Cap / RF-shielded accessory, Zine_Issue_04 / 84-page print) each with a "SNAG_IT" button, plus a drop-alert signup ("Join the Void"). |
| `culture.html` | THE UNDERGROUND | Manifesto/about page — the collective's origin and philosophy ("Noise is clarity"), a numbered list of "PROTOCOLS", and fictional system specs (Berlin node, encrypted zine feed). |
| `lookbook.html` | THE VISION | Photo lookbook grid of stylized shots (CONCRETE_FLOW.png, NEON_NIGHTS.raw, VOID_STATIC.jpg, etc.) and a "Want to contribute?" submission call-out. |

Nav on every page: **DROP · CULTURE · VISION**. Footer carries Channels / Logs link columns and the tagline *"MADE_IN_THE_SHADOWS."*

## JavaScript Behavior (`script.js`, ~44 lines)
- **Mobile hamburger menu** toggle.
- **Industrial glitch/strobe effect** on hover.
- **Form submission** simulation for the zine signup (no real network call).

## Notes
- Products, issues, and "specs" are placeholder flavor content; no cart, checkout, or real subscriptions.
- The most stylistically distinctive of the set — a brutalist/zine template for a streetwear or art-collective brand.
