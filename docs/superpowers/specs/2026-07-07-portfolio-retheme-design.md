# Portfolio re-theme — "Blue team, end of shift"

**Date:** 2026-07-07
**Request:** Optimize the portfolio for a cybersecurity student. Remove the
stereotypical hacker theme, be creative, and handle the floating hero image.

## Problem

The current site is the textbook "hacker" look: acid green `#7CFF00` on pure
black, a Matrix-rain CRT terminal image, glowing padlock shields, scanlines, a
perspective grid floor, and contact-form copy like "payload", "identity", and
"Transmit Secure Message". It reads as cosplay rather than competence. The hero
portrait (a 3D head PNG on a black background) floats disembodied mid-screen
using `mix-blend-mode: lighten`, drifts with a magnet effect, and on mobile is
absolutely centered over the heading with an `!important` hack.

## Concept

Raj's own tagline is the brief: *"building calmer, sharper security
operations."* He is blue team — SOC, SIEM, incident response, defensive
research. The design leans into that: the calm of a well-run operations room at
the end of a quiet shift. Discipline instead of theater.

## Tokens

**Palette — "blue team, end of shift"**
- `--ink` `#0E131B` — deep blue-black page ground (never pure black)
- `--ink-2` `#161E29` — raised surfaces on ink
- `--paper` `#ECEFF3` — cool slate paper for the light band
- `--ink-on-paper` `#1A222E` — text on paper
- `--cobalt` `#4D7CFF` — accent on ink (blue-team blue)
- `--cobalt-deep` `#2B50D8` — accent on paper
- `--amber` `#E5A93D` — SOC triage amber; micro-details only (status dot)
- `--mist` `#8E9BAD` — secondary text on ink

**Type**
- Display: **Bricolage Grotesque** 700/800 — characterful humanist grotesk;
  breaks the techno-mono cliché (this is the one aesthetic risk)
- Body/UI: **Instrument Sans** 400–600
- Utility: **IBM Plex Mono** 400/500 — small log-style labels only

**Layout rhythm** — keep the existing section flow, change the color rhythm:
hero (ink) → marquee (ink) → about + skills (one continuous paper band) →
projects (ink, rounded top) → contact (ink).

**Signature** — the hero portrait as a **badge cameo**: the head sits inside a
rounded-arch plate (like a credential photo), anchored to the hero's bottom
edge. The black PNG background disappears into the dark plate — no blend-mode
hack, no mobile `!important` override. A mono status line
(`● all clear — monitoring since 2022`) with a breathing amber dot sits with
the tagline.

## Changes by surface

1. **Hero** — two-tone giant heading (paper + cobalt "RAJ"), badge cameo
   portrait, gentler magnet (strength 8), status line, nav in mist/cobalt.
2. **Marquee** — drop the four cyber-icon images; project screenshots only;
   hairline borders in the new palette.
3. **About** — remove the four glowing corner PNGs; replace with registration
   crop-marks framing the text block + a three-fact stat line (internship,
   certifications, projects). Section sits on paper.
4. **Skills** — merge visually with About's paper band; drop the giant
   non-semantic numbers; editorial rows (title left, tool chips right,
   hairline dividers).
5. **Projects** — keep the stacked-card scroll effect; hairline borders
   instead of neon; **add description + stack chips** from constants (they
   exist but were never shown — recruiters need context).
6. **Contact** — plain-language copy ("Name / Email / Message / Send
   message"), no terminal bar, no "packet delivered". Form restyled on ink.
7. **Buttons** — cobalt pill (primary), hairline pill (secondary).
8. **Legacy pages** (`/about`, `/projects`, …, reachable by direct URL only) —
   light-touch: green → cobalt token swap in `index.css`, calm BackgroundFX
   (no scanlines/grid floor/radar), worst copy fixed. No layout rework.

## Out of scope

- No new pages or routing changes; no content rewrites beyond de-theming copy.
- `public/cyber-*.png` files stay on disk (just unreferenced).
- Legacy page layout rebuilds.

## Accessibility floor

Visible `:focus-visible` rings, `prefers-reduced-motion` respected (already
present), contrast ≥ 4.5:1 for body text on both ink and paper.
