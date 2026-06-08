# BTCSave: flows and screens

The design workshop fuel. The job to design well is the path from "never held bitcoin" to "stacking automatically, in self-custody, without fear." Everything below serves that.

## The one flow that matters: install to first stacked sats

The north-star metric is activation: a live recurring buy. Count the taps and kill every one you can.

1. **Land** (app store or btcsave.app) -> value in one line: "Stack bitcoin every week, automatically."
2. **Sign up** (phone number or email, one tap with Apple/Google).
3. **Light KYC** (ID photo + selfie). Required by the licensed rail. This is the biggest drop-off point. Make it feel fast and safe.
4. **Connect e-wallet** (GCash / DANA / MoMo) via the rail partner.
5. **Set the recurring buy** (amount + day). Smart default pre-filled, for example $25 every Monday.
6. **Self-custody setup** (create the wallet, secure the backup). The hardest screen. See below.
7. **Review and confirm** (amount, fee shown plainly, schedule, where the bitcoin lands).
8. **Success** -> first buy scheduled or executed -> drop into the dashboard.

Target: under 5 minutes, under 12 taps, KYC the only friction.

## Screen inventory

| Screen | Purpose | Key elements | Important states |
|---|---|---|---|
| Welcome | Sell the one job | Headline, "Get started", "Log in" | first-run vs returning |
| Sign up / Log in | Identity | Phone or email, OTP, social auth | new vs existing, OTP error |
| KYC | Satisfy the rail | ID capture, selfie, progress | pending, approved, rejected, retry |
| Connect e-wallet | Funding source | GCash/DANA/MoMo picker, auth handoff | linked, link failed, no balance |
| Set recurring buy | The core action | Amount, frequency, day, projection preview | default, custom, min/max |
| Self-custody setup | Give the user the keys | Create wallet, backup, verify backup | not backed up (warn), backed up |
| Review and confirm | Trust moment | Amount, fee breakdown, destination wallet, schedule | first buy vs edit |
| Home / dashboard | The daily view | Balance in sats + local fiat, next buy date, history, "stacked this month" | empty (no buys), active, paused |
| Buy history | Receipts | List of buys, status, on-chain or Lightning ref | settled, pending, failed |
| Settings | Control | Edit / pause / cancel recurring, payment method, security, inheritance | active, paused |
| Withdraw / send | Prove self-custody | Send to external wallet, on-chain or Lightning | confidence checks, address validation |
| Inheritance / recovery | Retention + premium | Add heir, recovery method, time-lock | not set up, set up (future tier) |

## The flows worth detailing

**A. Onboarding (above).** Decision: how much can be deferred past first buy? Recommendation: KYC and funding are required up front (rail demands it), but backup verification can be a gentle nag after the first buy so activation is not blocked by seed-phrase anxiety.

**B. Self-custody (the make-or-break).** A raw 12-word seed phrase is the single biggest conversion killer in consumer bitcoin. Three directions to weigh in the workshop:
- Non-custodial wallet with encrypted cloud backup (key split, recoverable via login + device). Feels like a normal app, still self-custody.
- Passkey / MPC keys (no seed phrase shown; keys derived from device + passkey).
- Progressive custody (starts custodial-feeling, graduates to keys-you-control as balance grows).
The principle: make "your keys, your bitcoin" feel as easy as a bank balance. Never show a 12-word phrase in the activation path.

**C. Ongoing engagement.** Dashboard is the home base: sats balance, fiat value, next buy, streak. The emotional risk is price-down days. Design for "keep stacking" calm, not panic. No red candles, no trading UI.

**D. Edit / pause / cancel.** Must be one tap and guilt-free. Trust is the product. "Pause" beats "cancel" as the primary.

**E. Withdraw.** The proof that it is truly theirs. Make sending out work and feel safe (address checks, small-amount test send option).

## States and edge cases to design now, not later
- Empty state (signed up, no buys yet): show the projection and a single "Start stacking" CTA.
- KYC pending or rejected: clear status, retry path, support.
- Payment failed (insufficient e-wallet balance): retry, notify, do not silently skip.
- Backup not completed: persistent but non-blocking reminder.
- Price down week: reframe as "more sats per dollar," never alarm.
- Paused account: easy resume.

## One flow or two? (NS power-user vs mass-market saver)
One flow, progressive disclosure. Smart defaults and hidden complexity for the first-time saver in Manila; an "advanced" surface (xpub export, Lightning address, custom fee, hardware-wallet destination) for the Network School power-user. Do not fork onboarding; fork the depth.

## Open questions for the workshop
1. Which self-custody model? (the central decision above)
2. Can anything in KYC or funding be deferred to reduce first-buy drop-off?
3. What is the single screen that makes someone say "oh, I get it"? (candidate: the dashboard with the growing sats counter)
4. Do we show fiat value prominently or keep sats primary? (sats-first teaches the unit, fiat-first feels safer)
5. Where do stablecoins fit, if at all? (save in BTC, spend or remit in stablecoins, see PITCH.md and research)
6. How do we make "non-custodial" a trust signal to normies rather than a scary word?
