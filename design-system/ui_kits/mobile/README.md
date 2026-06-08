# Iron — Mobile app UI kit

The Iron app on a phone: non-custodial deposit onboarding, then the dashboard,
card, borrow/repay and activity. Interactive click-through, dark by default.

## Run it
Open `index.html`. Tap through with the in-screen buttons, or jump to any
screen with the top selector; the toggle switches light/dark.

## Flow
1. **Welcome** — the one-line promise + the three trust signals.
2. **Your vault, your keys** — non-custodial setup on device, no seed phrase.
3. **Fund your vault** — deposit address + QR, "only you can withdraw."
4. **App** — bottom-tab shell:
   - **Home** — net worth, credit available + LTV gauge, Borrow / Repay / Card
     quick actions (borrow & repay open a live bottom sheet), recent activity.
   - **Card** — the gunmetal card, freeze/unfreeze, spending power, details.
   - **Activity** — the transaction ledger.

## Files
| File | Role |
|---|---|
| `index.html` | Onboarding flow + tabbed app shell, theme, device scaling |
| `parts.jsx` | Phone shell, status bar, onboarding scaffold |
| `screens.jsx` | All screens + the borrow/repay sheet + `compute` |
| `../website/Icon.jsx` | Lucide glyph helper |
| `../dsboot.js` | Loads the DS primitives |

Composes the same Logo, IronCard, Button, Card, Badge, DataRow, LTVGauge and
Stat as every other surface. Borrow/repay math matches the web console.
