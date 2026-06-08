# Iron Design System

> **Iron is the bitcoin credit card. Keep your bitcoin, spend dollars.**
> Borrow dollars against your BTC and spend anywhere on a Visa, without selling
> and without a credit check. A private bank that runs on bitcoin.

This is the design system for **iron.credit** — tokens, brand assets, reusable
React primitives, foundation cards, and full UI-kit recreations of the website,
the web app, the mobile app and a fundraising deck.

---

## The brand world

Iron evokes **hard money, strength, and resolve** — the Iron Bank of Braavos,
the most powerful private bank, the one that always collects its due. *"Have
iron in you."* It is a serious, credible, sovereign financial institution: the
opposite of a crypto casino. Flagship-fintech polish (Ramp, Mercury, Linear),
forged in gunmetal.

**Two audiences, one product:**
1. **The ones who refuse to sell** — bitcoiners who want liquidity without giving up a sat or the upside.
2. **The ones the banks rejected** — people frozen out of credit who hold real, verifiable collateral.

Both value control, transparency, and independence from the old system.

---

## CONTENT FUNDAMENTALS

How Iron writes. **Plain, confident, transparent. No hype, no jargon.** The
voice of a serious lender that shows its math.

- **Person & address:** speaks to **"you"**; refers to itself as **"Iron"** or
  **"we"**. "*Keep your* bitcoin. *Spend* dollars." "*We cannot* move your coins."
- **Confidence without hype:** declarative, weighty, a little severe. "A bank
  that cannot run off with your coins." "Verify, do not trust." "Have iron in
  you." Never exclamation marks, never "🚀 to the moon", never "revolutionary".
- **Radical transparency:** the rate, the max LTV, and the exact liquidation
  price are stated **before** you borrow. "A serious lender shows its math."
  "No hidden spreads. No fine print."
- **Show the real numbers:** APR 9.5%, 50% max LTV, liquidation $42,180, 0%
  origination. Numbers are concrete, tabular, and always in the open.
- **Casing:** sentence case for headlines and buttons; **UPPERCASE mono** only
  for engraved eyebrow labels (the "bank stamp"). Bodoni headlines are never all-caps.
- **Sovereign register:** occasional Braavosi gravitas ("the bank that always
  collects its due", "have iron in you") used sparingly, never cute.
- **Honesty about risk:** liquidation and volatility stated plainly, framed as
  control, not fear. "No surprise liquidations." "Borrowing carries liquidation risk."
- **No emoji.** Ever. Icons are line glyphs; emphasis comes from type, weight and the platinum accent.

**Do:** "Borrow against your bitcoin, without selling and without a credit check."
**Don't:** "Unlock INSANE liquidity on your BTC 🚀 — apply now!!"

---

## VISUAL FOUNDATIONS

**Dark, metallic, premium.** Iron-grey and near-black surfaces, brushed metal
used sparingly, one restrained accent. Confident, with lots of negative space.

### Color
- **Monochrome by design. No colour accent.** The palette is iron-grey,
  near-black and **platinum white** — premium, old-money, the opposite of a
  casino. The single "accent" is the brightest metal: in dark mode the primary
  action is a **platinum** button (dark text); in light mode it is **ink**
  (white text). Used with restraint on the key CTA, active states, the LTV fill
  and the mark's seam.
- **Cool iron neutral ramp** (dark default): near-black `#0a0b0d` page,
  `#121418`/`#181b20`/`#20242b` surfaces, `#282d35` hairlines, off-white
  `#f3f5f7` ink, `#939aa4` muted. Cool, never warm; never pure black.
- **Brushed steel** (`--steel-sheen`) and **gunmetal** (`--gunmetal`) gradients
  for the card, the logo's steel variant, and rare premium highlights. Sparingly.
- **Finance semantics:** `--safe` green, `--caution` amber, `--danger` red —
  reserved for LTV health. There is no decorative green/red.
- **Light theme** (`[data-theme="light"]`): cool paper `#eef0f2`, white surfaces,
  near-black ink, the platinum accent becoming ink for contrast on white.

### Type
- **Display: Bodoni Moda** — high-contrast Didone, old-money sovereign gravitas.
  Headlines, hero numbers, the wordmark. Weight 500–700, tracking −0.015em.
- **Body / UI: Hanken Grotesk** — clean, neutral, modern. 15px base, 1.55 leading.
- **Data: IBM Plex Mono** — tabular figures for every rate, LTV, price, balance
  and address. Precision reads as credibility. Also the engraved UPPERCASE eyebrow.

### Shape, border, shadow
- **Small, machined radii** (3–16px). Sharp = engineered, not playful. The card
  is 14px; pills are the only fully-round element.
- **Hairline borders** define nearly every surface — the system is border-led.
- **Deep, soft, low-key shadows**, mostly on raised dark UI and the card
  (`--shadow-card-heavy`). No glow except a faint platinum wash behind the hero card.

### Backgrounds & texture
- Near-black base with a **single faint radial platinum wash** (top-right). No
  photography, no illustration. The hero "image" is the product: the card.
- **Guilloché / engine-turned engraving** on the card face (fine crosshatch +
  rosette), a banknote motif. Brushed-metal grain elsewhere, always subtle.

### Motion
- **Measured and confident.** Ease `cubic-bezier(.22,.61,.2,1)`, no bounce.
  Subtle transform-only entrances (never opacity-gated, so print/thumbnails
  show content). Hover lifts −2px; primary button presses 1px. Respects
  `prefers-reduced-motion`.

### Layout
- Marketing width 1200px, reading 720px. Generous negative space and air.
  Sections breathe (72–96px padding). Grids collapse to one column under ~900px.

---

## ICONOGRAPHY

- **System: [Lucide](https://lucide.dev)** — clean 2px line icons (the
  Mercury/Linear register). The only icon set. Loaded from CDN in the kits via
  the `LI` helper (`ui_kits/website/Icon.jsx`); glyphs inherit `currentColor`,
  usually `var(--iron-orange)` (the platinum accent) or `var(--muted)`.
- Common glyphs: `lock`, `eye`, `scale`, `shield-check`, `credit-card`,
  `wallet`, `banknote`, `rotate-ccw`, `bitcoin`, `fingerprint`, `snowflake`,
  `arrow-right`, `key-round`, `cloud`.
- **No emoji, no custom hand-drawn icons, no icon font.** Icons sit in bordered
  square chips or inline; never decorative.
- **The mark** is the **I-beam monogram** — the letter I rendered as a forged
  structural iron beam (`assets/iron-mark*.svg`, or the `Logo` component for
  theme-adaptive inline use). Solid / steel / core (faint steel seam) variants. Never
  recolor the wordmark arbitrarily; keep the mark monochrome on busy backgrounds.

---

## INDEX / manifest

### Root
| Path | What |
|---|---|
| `styles.css` | Global entry point — the one file consumers link. |
| `tokens/colors.css` | Iron ramp, accent, steel/gunmetal, semantics; dark + `[data-theme="light"]`. |
| `tokens/typography.css` | Bodoni / Hanken / Plex Mono families, scale, tracking. |
| `tokens/spacing.css` | Spacing, machined radii, borders, deep shadows, motion. |
| `tokens/fonts.css` | `@import` of the three Google families. |
| `tokens/base.css` | Element defaults + helpers (`.iron-display`, `.iron-mono`, `.iron-eyebrow`, `.iron-steel`, `.iron-lift`). |
| `assets/` | `iron-mark.svg`, `iron-mark-steel.svg`, `iron-mark-core.svg`. |
| `SKILL.md` | Agent-Skill front matter for Claude Code. |

### Components (`window.BTCSaveDesignSystem_85fada` — legacy namespace, stable)
| Component | Group | Purpose |
|---|---|---|
| `Logo` | brand | I-beam mark + IRON wordmark (solid/steel/core). |
| `IronCard` | brand | The gunmetal card render (guilloche/brushed/edge). |
| `Button` | core | Platinum/ink primary / steel secondary / ghost. |
| `Card` | core | Surface panel (plain/inset/raised). |
| `Badge` | core | Mono status pill (safe/caution/danger/neutral). |
| `Input` | forms | Field with platinum focus ring; mono + prefix/suffix. |
| `Stat` | data | Metric block (mono or Bodoni display). |
| `DataRow` | data | Transparent label/value row for open number tables. |
| `LTVGauge` | data | The signature LTV health gauge. |

### UI kits
| Kit | Path | What |
|---|---|---|
| Website | `ui_kits/website/` | Landing: hero, how-it-works, open terms, trust, who-for, the card, waitlist. |
| Web app | `ui_kits/app_web/` | Credit console: dashboard, card, activity, proof of reserves, live borrow/repay. |
| Mobile app | `ui_kits/mobile/` | Non-custodial deposit onboarding + dashboard, card, borrow/repay, activity. |
| Deck | `ui_kits/deck/` | 8-slide fundraising template. |

### Foundation cards
`guidelines/cards/` — specimen cards in the Design System tab (Colors, Type, Spacing, Brand).

---

*Bitcoin is volatile. Borrowing carries liquidation risk. Nothing here is
financial advice. © 2026 Iron.*
