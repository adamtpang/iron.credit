---
name: iron-design
description: Use this skill to generate well-branded interfaces and assets for Iron (iron.credit), the non-custodial bitcoin credit card, either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the README.md file within this skill, and explore the other available files.

Iron is the bitcoin credit card: keep your bitcoin, spend dollars. Borrow against
BTC and spend on a Visa, non-custodial, no credit check. The brand is a sovereign
private bank that runs on bitcoin (Iron Bank of Braavos energy), the opposite of
a crypto casino. The look is dark, metallic, premium and fully monochrome:
iron-grey, near-black and platinum white, gunmetal and brushed steel used
sparingly. No colour accent (no bitcoin gold) — the primary action is the
brightest metal (platinum on dark, ink on light). Bodoni Moda display, Hanken
Grotesk body, IBM Plex Mono data.
The logo is the I-beam monogram (the letter I forged as a structural iron beam).

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy
assets out and create static HTML files for the user to view. Link `styles.css`
for tokens; use the Lucide icon helper pattern in `ui_kits/website/Icon.jsx`. If
working on production code, copy assets and read the rules here to design with
this brand like an expert.

Key files:
- `readme.md` — full design guide: voice, color, type, motion, iconography, manifest.
- `styles.css` + `tokens/` — the token system (the one file consumers link).
- `components/` — reusable React primitives (Logo, IronCard, Button, Card, Badge, Input, Stat, DataRow, LTVGauge).
- `ui_kits/` — website, web app (credit console), mobile app, and a fundraising deck.
- `assets/` — the I-beam mark (solid / steel / core).

House rules to honor: plain, confident, transparent copy (no hype, no jargon, no
emoji); always show the real numbers (rate, LTV, liquidation price) openly;
sentence case headlines, UPPERCASE mono only for engraved eyebrows; monochrome
only (no colour accent, no bitcoin gold); finance health uses desaturated
near-greys; small machined radii and hairline borders; dark is the default,
light is supported.

If the user invokes this skill without any other guidance, ask them what they
want to build or design, ask some questions, and act as an expert designer who
outputs HTML artifacts or production code, depending on the need.
