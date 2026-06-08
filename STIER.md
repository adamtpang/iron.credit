# S-tier problems in the Bitcoin space (June 2026)

A skeptical survey of the whole space, ranked by urgent x massive x painful x defensible. Workshop reference.

## The filter that reframes everything: stablecoins

Stablecoin supply crossed ~$322B by May 2026, larger than the FX reserves of 95 countries, and ~66% is held by individuals in emerging markets. Stablecoins are ~76% of all crypto payments. Even Lightspark, the flagship bitcoin-payments company, shipped Grid: a dollar account with a Visa off-ramp where bitcoin is just invisible settlement plumbing.

Implication: "help people in emerging markets save or pay in bitcoin" is not S-tier. That war is being lost to USDT and USDC in real time. The bitcoin problems that survive are the ones where bitcoin's unique properties are the point: the hardest multi-decade bearer asset (custody and inheritance), and the most credibly neutral collateral (credit and settlement).

## The candidates, ranked

### 1. Self-custody inheritance and recovery for the non-technical heir (top pick)
- Problem: trillions in self-custodied BTC have no working succession path. When the holder dies or is incapacitated, families cannot recover coins without becoming cryptographers.
- Why now: the 2011 to 2015 cohort is aging; 2.3M to 3.7M BTC already estimated permanently lost; VanEck projects ~$6T flowing through crypto inheritances over 20 years, with ~95% of holders having no plan. 2026 is repeatedly named the inflection year.
- Who is on it and the gap: Casa, Unchained, Nunchuk, AnchorWatch, The Bitcoin Adviser. They solved the technical primitive (multisig plus a held recovery key). The unsolved gap is the human coordination layer: a dead-simple, lawyer-compatible, guided claim flow for an heir who has never touched bitcoin.
- Wedge and moat: build the heir-side claim flow plus a dead-man's-switch on top of existing wallets (Sparrow, Nunchuk, Ledger). Moat is trust plus estate-attorney and wallet integrations plus legal templates plus a recurring relationship. Not a token.
- Risk: slow, education-heavy sales; trust is hard to bootstrap; the TAM is bitcoiners with real balances.

### 2. Trust-minimized bitcoin collateral and credit
- Problem: holders want liquidity against BTC without selling, but the safe rails (custody, liquidation, no rehypothecation, no wrapped-BTC bridge risk) are immature, and last cycle's lenders (Celsius, BlockFi) blew up.
- Why now: crypto-collateralized loans hit ~$73.6B by Q3 2025; bitcoin-backed lending is called a path to a $1T market; the hard pieces are now commercially available but not yet packaged into something a normal holder trusts.
- Gap: the wrapped-BTC trust problem (bridges lost $340M+ in 2026; about 36% of would-be users stay away on trust) and consumer scar tissue from Celsius and BlockFi.
- Wedge and moat: be the trust-minimized collateral, liquidation, and proof-of-reserves rails, or a transparent consumer front-end with verifiable no-rehypothecation. Moat is a security track record plus licensing plus integrations plus bitcoin's status as the most neutral collateral. Survives the stablecoin filter cleanly, because people borrow dollars against BTC.
- Risk: capital-intensive if you actually lend; deeply cyclical; "trust us, it is safe" is the exact pitch that failed last cycle.

### 3. Universal bitcoin (and stablecoin-on-bitcoin) payments abstraction
- Problem: the off-chain layer splintered (Lightning, Ark, Spark, ecash, Liquid); users and developers must pick which L2 to lock funds into, and they do not interoperate.
- Why now: 2025 to 2026 saw credible but incompatible L2s explode; fragmentation is now the bottleneck.
- Gap: most players are building their own L2 and hoping it wins. Opening for a neutral routing layer, a Stripe or Plaid for L2s.
- Wedge and moat: a developer-first SDK and API that routes a payment across Lightning, Ark, Spark, ecash, and on-chain, and routes stablecoins-on-bitcoin too. Moat is integration breadth plus becoming the default developer primitive plus routing data.
- Risk (serious): the most incumbent-contested (Lightspark, very well funded, with a Visa deal) and the most exposed to the stablecoin verdict. Only survives if you route dollars too, at which point you are a payments-infra company that settles on bitcoin, which is arguably the correct pivot.

## Demoted from S-tier, with reasons
- Bitcoin treasury distress (about 40% of treasuries below NAV): urgent, but a finance, advisory, and M&A problem, not a defensible technical product for a small team.
- Privacy after the Samourai and Wasabi crackdown: high mission value, but the regulatory risk is the product (the founders were prosecuted), the market is a passionate minority, and monetization is hard.
- Quantum threat (Q-Day): real but most likely 2030 or later, and gated on glacial protocol politics (BIP-360 merged with no activation timeline). Important, not urgent.
- Mining to AI, HPC, and energy: massive and urgent, but capex-gated (about $8M to $11M per MW versus $0.3M to $0.5M for mining); incumbents (IREN, Core Scientific, TeraWulf) win. A narrow software or orchestration wedge exists, but it is not the prize.
- Bitcoin "yield" and staking (Babylon): flagged as hype. Native reward rate reported near 0% APY; rewards are a volatile token that holders dump. Real, sustainable yield is unsolved, which loops back to credit (number 2).

## The stablecoin survival test
| Problem | Survives? | Why |
|---|---|---|
| Inheritance and recovery | Yes, strong | BTC is a uniquely unforgiving bearer asset; stablecoins do not change the lost-key problem. |
| Collateral and credit | Yes, strong | People borrow dollars against BTC; bitcoin's best-collateral role is the point. |
| Universal payments | Only if it routes stablecoins too | If the unit users want is USD, pure-BTC routing solves the wrong problem. |
| EM payments and savings in BTC | No, losing | USDT and USDC already won this. |

## Top 3 for a small technical team
1. Inheritance and recovery for non-technical heirs. Build a guided, lawyer-compatible claim flow plus a dead-man's-switch on top of existing wallets. Moat: trust plus integrations plus legal templates.
2. Trust-minimized BTC collateral and credit. Build the collateral, automated-liquidation, and proof-of-reserves rails using native BTC, not wrapped. Moat: security track record plus licensing plus bitcoin as neutral collateral.
3. Universal payments abstraction (Stripe for L2s, stablecoins included). Build a dev-first SDK that auto-routes across L2s and stablecoins-on-bitcoin. Moat: integration breadth plus routing data. Caveat: the most incumbent-contested.

Tiebreak for a small team starting tomorrow with no balance sheet: number 1.

## How this lands for BTCSave
BTCSave (BTC savings for emerging markets) is the use case most exposed to the stablecoin filter. To harden it with S-tier elements while staying the course:
- Embrace stablecoins: "save in BTC, spend and remit in stablecoins." Stop fighting the dollar tide, internalize it.
- Add inheritance and recovery (the number 1 S-tier problem) as a premium feature. It is a natural fit for long-term savers and a real moat.
- Treat the local-rail abstraction as future infrastructure (the payments-layer story).

Every moat above is trust, integrations, regulatory, and data. None is a token. That matches the advisor's warning that a token-only or AI-token company has no moat.

## Key sources
Stablecoins larger than FX reserves of 95 nations (CoinDesk, May 2026); stablecoins and emerging markets (Goldman Sachs); Lightspark Grid dollar accounts (Bitcoin Magazine); bitcoin inheritance time bomb (CryptoSlate); Spark and Ark L2s (Bitcoin Magazine); bitcoin-backed lending toward $1T (Yellow, AMINA); 2026 bridge exploits (Phemex); treasury distress (CoinDesk); mining to AI pivot (insights4vc); quantum and BIP-360 (CoinDesk).
