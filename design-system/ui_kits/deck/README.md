# Iron — Fundraising deck template

A seed-deck template in the Iron brand: 1920×1080, dark, Bodoni headlines,
mono eyebrows, the I-beam mark and a static gunmetal card.

## Run it
Open `index.html`. Arrow keys / click to navigate; a thumbnail rail lets you
jump, reorder and skip slides. Print → Save as PDF gives one page per slide.

## Slide types (reuse as a kit)
1. **Title** — mark + Iron + one-line promise.
2. **Statement** — the thesis in big Bodoni.
3. **Problem** — two-column, numbered.
4. **The card** — split layout with the gunmetal card render.
5. **How it works** — four ruled steps.
6. **Trust / metrics** — three big numbers (0% / 50% / Open).
7. **Market** — full-bleed statement number.
8. **The ask** — mark + "Have iron in you" + the raise.

## Notes
- Slides are static HTML (direct-editable). Headlines use `.iron-display`
  (Bodoni), eyebrows use mono. Entrance animations move only transform, so
  print and static thumbnails always show content.
- The card on slide 4 is a simplified static gunmetal card (the live
  `IronCard` component is React; the deck stays plain HTML for editability).
- Built on `deck-stage.js` (scaling, nav, rail, print).
