# BTCSave: project context

**What:** "Acorns for Bitcoin" in Southeast Asia. Automated weekly BTC dollar-cost-averaging through local e-wallets (GCash/DANA/MoMo), landing in self-custody. A *savings* product, not an exchange.

**Why:** Targeting a Bitcoin/Lightning seed-investor pitch and a design workshop.

**Founders:** Adam (Network School network = beachhead users) + Christian (global Bitcoin community). Both technical operators. Pre-empt the compliance gap by integrating a licensed rail (for example IBEX), staying non-custodial.

## Positioning decisions (locked)
- **Name:** BTCSave (domain btcsave.app). The project folder is still named satsave.app; rename later if desired.
- **Launch market: Philippines first** (BSP-regulated, GCash 81M users, $35.6B/yr remittances), then Indonesia, then Vietnam.
- **Wedge:** radical simplicity (one job: recurring buy) + self-custody by default + multi-rail.
- **Closest competitor: Pouch.ph** (PH-only, non-custodial, Lightning, 1% fee). Also Coins.ph, Maya, Pintu (ID, has Auto-DCA).
- **Business model:** the realistic path to the $3M revenue bar is ~155k users x $25/wk (not 20k x $200, which is ~15x the real SE-Asia saver). Take rate ~1.5% defended as all-in (trade + FX spread + withdrawal), not headline.

## Style
- No em dashes in any content or copy. Use colons, commas, or parentheses.

## Stack
- Vite + React (JS) + Tailwind v4 (`@tailwindcss/vite`), recharts, lucide-react.
- Main component: `src/App.jsx` (interactive prototype with a headline-target vs SE-Asia-reality toggle).
- Run: `npm run dev` (port 5173). Build: `npm run build`. Preview config in `.claude/launch.json`.
- Deploy target: btcsave.app (Vercel CLI installed).

See `PITCH.md` for the full brief and sources.
