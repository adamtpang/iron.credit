# Iron — Web app UI kit (credit console)

The transparent Iron dashboard. A holder's view of their collateral, credit
line, card and the bank's own books. Dark by default, light toggle in the sidebar.

## Run it
Open `index.html`. Borrow and Repay open a live panel where the slider updates
LTV, liquidation price and the drawn balance in real time, then commits to the
dashboard state.

## Views
- **Dashboard** — net worth, credit available + LTV gauge, collateral, the card,
  interest accrued, recent activity. Borrow / Repay modals.
- **Card** — the gunmetal card, freeze/unfreeze, spending power, card details.
- **Activity** — the full transaction ledger (spend, borrow, repay, deposit, interest).
- **Proof of reserves** — reserves vs liabilities, collateralization ratio,
  on-chain attestation. "Verify, do not trust."

## Files
| File | Role |
|---|---|
| `index.html` | Finance state (btc, price, drawn), view switching, theme |
| `Sidebar.jsx` | Nav, account, theme toggle |
| `AppWeb.jsx` | All views + the borrow/repay panel + `IronCompute` |
| `../website/Icon.jsx` | Lucide glyph helper |
| `../dsboot.js` | Loads the DS primitives |

## The math
`IronCompute(btc, price, drawn, maxLtv=0.5)` returns collateral value, max
credit, available, LTV %, liquidation price and net worth. Liquidation price is
where LTV would reach the 50% cap. Everything the UI shows is derived live.
