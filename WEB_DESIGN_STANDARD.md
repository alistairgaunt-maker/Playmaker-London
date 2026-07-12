# Playmaker London — Web Design Standard
## Version 1.0 — July 2026
## STATUS: LOCKED

This document governs all Playmaker London website pages.
Every page must mirror this standard exactly.

---

## 1. Design Tokens

const C = {
  black:   '#111111',
  navy:    '#0D2340',
  blue:    '#1A5CA8',
  white:   '#FFFFFF',
  grey:    '#CCCCCC',
  greyDim: '#888888',
};
const serif = { fontFamily: "'EB Garamond', serif" };
const sans  = { fontFamily: "'Montserrat', sans-serif" };

---

## 2. Typography

| Element | Font | Size | Weight | Colour |
|---|---|---|---|---|
| Page H1 hero | EB Garamond | 36-60px responsive | Bold | #FFFFFF |
| Section H2 | EB Garamond | 30-44px responsive | Bold | #FFFFFF |
| Card H3 | Montserrat | 16-20px | Bold | #FFFFFF |
| Body paragraph | Montserrat | 15-17px | Normal | #CCCCCC |
| Section label | Montserrat | 13px | Bold | #1A5CA8 |
| Microcopy footer | Montserrat | 13-14px | Normal | #888888 |
| CTA button text | Montserrat | 13px | Bold | #FFFFFF |
| Italic accent hero | EB Garamond | same as H1 | Normal Italic | #CCCCCC |

Line heights: Headings 1.1-1.25. Body 1.7-1.75. Labels 1.0.
Letter spacing: Labels 0.12em. Hero tagline 0.2em. CTAs 0.08-0.1em. Numbered labels 0.06em.

---

## 3. Section Backgrounds

| Section type | Background |
|---|---|
| Standard content | #111111 |
| Belief interstitial | #0D2340 |
| Closing CTA | #0D2340 |
| Card backgrounds | #161616 |
| Card on navy | rgba(255,255,255,0.05) |
| Footer | #111111 with border rgba(255,255,255,0.08) |

RULE: Navy used for max 2 sections per page. Never as general content background.

---

## 4. Spacing

| Element | Value |
|---|---|
| Section horizontal padding | px-6 md:px-16 lg:px-[80px] |
| Section vertical padding | py-28 md:py-40 |
| Max content width | max-w-[1100px] mx-auto |
| H2 to first body line | mb-8 |
| Label to H2 | mb-6 |
| Between body paragraphs | mb-6 |
| Card internal padding | p-7 to p-10 |
| Grid gap cards | gap-8 to gap-10 |
| Grid gap columns | gap-x-16 |
| Numbered item gap | gap-4 |

---

## 5. Buttons

Primary: px-9 py-4 text-[13px] font-bold uppercase rounded-sm
style: backgroundColor #1A5CA8, color #FFFFFF, letterSpacing 0.1em

Secondary: px-9 py-4 text-[13px] font-bold uppercase rounded-sm border
style: borderColor rgba(255,255,255,0.35), color #FFFFFF, letterSpacing 0.1em

---

## 6. Reusable Components

const ease = [0.22, 1, 0.36, 1];
const rv = { hidden:{opacity:0,y:24}, visible:{opacity:1,y:0,transition:{duration:0.75,ease}} };

Reveal: motion.div, initial hidden, whileInView visible, viewport once margin -8%
Label: 13px bold uppercase #1A5CA8 letterSpacing 0.12em mb-6
Section: w-full px-6 md:px-16 lg:px-[80px] py-28 md:py-40, max-w-[1100px] mx-auto inside

---

## 7. Hero Pattern

- Full screen min-h-screen
- Image: objectPosition right center, brightness 1.05
- Gradient left to right: rgba(17,17,17,0.97) 0%, rgba(17,17,17,0.9) 28%, rgba(17,17,17,0.55) 48%, rgba(17,17,17,0.12) 100%
- Text left-aligned max-w-[620px]
- Structure: blue label, H1, subtext, CTAs

---

## 8. Numbered Item Pattern

Always padded numerals. Never HTML bullets.
String(i + 1).padStart(2, '0')
Color #1A5CA8, Montserrat, 13px bold

---

## 9. Card Patterns

Standard: p-8 rounded-sm, backgroundColor #161616
On navy: p-9 rounded-sm, backgroundColor rgba(255,255,255,0.05), border 1px solid rgba(255,255,255,0.1)

---

## 10. Brand Copy Rules

- No em dashes. Use commas or full stops.
- No guaranteed outcome language
- No scholarship promises
- No physical attendance language Phase 1
- Playmaker London always in full never Playmaker alone
- Tagline: Development done seriously. Always full stop. Always sentence case.

---

## 11. Pages Phase 1

Homepage / — Complete
Assessment /assessment — In progress
Development /development — Not started
Resources /resources — Not started
Pathways — Phase 2 not in nav

---

Playmaker London. Web Design Standard v1.0. July 2026.
Development done seriously.
