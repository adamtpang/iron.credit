# Iron — Website UI kit

The Iron marketing site: *Keep your bitcoin. Spend dollars.* Built from the
design-system primitives, dark by default with a working light toggle.

## Run it
Open `index.html`. It boots the DS bundle (or transpiles the component sources
as a fallback) and renders the page with a theme toggle and smooth-scroll CTAs.

## Sections
- **Hero** — Bodoni headline, engraved stamp eyebrow, the tilted gunmetal card.
- **Trust strip** — the four non-negotiables in mono.
- **How it works** — deposit → borrow → spend → repay, four steps.
- **The terms, in the open** — APR, max LTV, fees and the example liquidation
  price shown plainly, with the live LTV gauge ("a serious lender shows its math").
- **Trust** — non-custodial, open proof of reserves, no predatory tricks.
- **Who it is for** — the ones who refuse to sell; the ones the banks rejected.
- **The card** — forged-metal feature panel.
- **Waitlist** — "Have iron in you" capture (fake submit).

## Files
| File | Role |
|---|---|
| `index.html` | Theme + smooth scroll; mounts Nav + Landing |
| `Nav.jsx` | Sticky nav, logo, links, theme toggle, CTA |
| `Landing.jsx` | All page sections (`window.IronLanding`) |
| `Icon.jsx` | Lucide glyph helper |
| `../dsboot.js` | Loads the DS primitives |

## Composition
Logo, IronCard, Button, Card, Badge, DataRow, LTVGauge and Stat all come from
the design-system namespace. The kit only adds layout and copy.
