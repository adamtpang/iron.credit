# Iron: the path to a working prototype, and how the system works

**Definition of "working prototype": you tap an Iron card at a real checkout and buy something, funded by borrowing against your bitcoin.** That single demo unlocks angel investment and a debt facility. Everything below is the cheapest, fastest path to that moment, plus the diagrams of how the real system works.

---

## The critical path (tap a card at a POS)

### Phase 0, this week: Wizard of Oz (cost: about the price of the coffee you buy)
Do not integrate any issuer for the first demo. Fake the backend, make the front-end real. The demo's job is to prove the experience, not to ship infrastructure.

1. Get an **Oobit** card. It is non-custodial, live in the Philippines, supports bitcoin, does NFC tap-to-pay, and converts to pesos at the register. It is almost the exact Iron experience off the shelf. Backup: **Bitget Wallet Card** (also live in APAC).
2. Manually run the loan: take your own bitcoin, produce USDC or USDT (a swap, or a real DeFi loan on Aave), load the card.
3. Tap at a Manila merchant. Film it. Narrate the "credit line" step that you are operating by hand.
4. Wrap the front-end in the existing Iron React UI so the audience sees Iron, not Oobit.

### Phase 1, 2 to 4 weeks: a clickable technical demo
Build on **Immersve's public sandbox** (non-custodial, per-user USDC deposit contracts, spend via Apple/Google Pay). This shows a real card-issuing API flow and "spend from self-custody," without enterprise onboarding. Request sandbox keys from their support.

### Phase 2, parallel and long lead: open Rain now
**Rain (rain.xyz) is the ideal real partner.** It is a Visa principal member that settles in USDC and already runs a non-custodial-collateral credit-card model, almost identical to Iron's thesis, and it covers APAC. It is an enterprise integration (8 to 12 weeks, KYB, sales-gated, no public pricing), so start the conversation now and clarify two things: (a) can bitcoin be the collateral directly, and (b) Philippines availability plus pricing and minimums. Keep **Baanx** (it explicitly offers crypto-collateralized credit, "Cryptodraft," and powers the MetaMask and Ledger cards) and **Reap** (Asia-native Visa principal issuer) as warm alternates.

**The unlock:** once you can tap the card, even with the concierge backend, you can credibly raise the pre-seed (Fulgur) and arrange the debt facility for the loan book.

---

## Two design and brand flags (do not skip)

1. **Bitcoin-vs-stablecoin collateral gap.** Every rail here (Rain, Immersve) is built around *stablecoin* collateral, not bitcoin. Iron's "lock bitcoin" promise needs an explicit bitcoin-to-stablecoin collateral layer (custody plus a swap or borrow, or a bitcoin-backed stablecoin). Design for it now and confirm it in every partner conversation.
2. **Naming collision.** A separate fintech called **"Iron"** (a stablecoin-payments platform that MoonPay acquired in 2025) already operates in the crypto-card space and powers MoonPay's stablecoin card. Run a trademark search (IPOS Singapore and USPTO, class 36) before locking the brand and printing cards. The `iron.credit` domain and the `.credit` TLD differentiate somewhat, but confirm with counsel.

---

## How it works: user journey

```mermaid
flowchart TD
    A["User signs up and verifies identity"] --> B["Deposit bitcoin into collaborative custody"]
    B --> C["Iron shows a USD credit line, up to 50 percent of bitcoin value"]
    C --> D["Tap the Iron Visa card, or withdraw USDT"]
    D --> E["Iron settles the spend in stablecoin, merchant gets local currency"]
    E --> F["Balance accrues fair interest, shown live"]
    F --> G{"Repay?"}
    G -- "Yes" --> H["Interest stops on the repaid amount"]
    H --> I["Reclaim full bitcoin, upside intact"]
    G -- "Not yet" --> F
    F -. "bitcoin price drops, LTV rises" .-> J["Iron warns you early: top up or repay"]
    J -. "ignored up to 85 percent LTV" .-> K["Partial liquidation, the smallest slice only"]
```

## How it works: system architecture

```mermaid
flowchart LR
    U["You: Iron app and Iron Visa card"]
    L["Iron: ledger and credit engine"]
    R["Iron: risk and LTV monitor"]
    V["Collaborative bitcoin custody, non-custodial multisig"]
    S["Stablecoin layer, USDC or USDT"]
    Iss["Card issuer and BIN sponsor: Rain, a Visa principal member"]
    Net["Visa network"]
    Mer["Merchant checkout"]
    Cap["Capital facility, debt that funds the loan book"]

    U --> L
    L --> R
    R --> V
    V -. "collateral backs the line" .-> L
    L --> S
    S --> Iss
    Iss --> Net
    Net --> Mer
    Cap -. "funds drawdowns" .-> L
    U -- "taps card" --> Iss
```

## How it works: what happens when you tap

```mermaid
sequenceDiagram
    participant U as You tap the card
    participant M as Merchant POS
    participant V as Visa
    participant I as Issuer Rain
    participant Ir as Iron ledger and risk
    U->>M: Tap Iron card for a 50 dollar purchase
    M->>V: Authorization request
    V->>I: Authorize 50 dollars
    I->>Ir: Is this within the available credit line
    Ir-->>I: Approved, LTV healthy
    I-->>V: Approved
    V-->>M: Approved
    M-->>U: Goods handed over, paid in local currency
    Note over I,Ir: USDC settles the transaction. Your bitcoin never moved. Balance rises 50 dollars at a fair rate.
```

*(These Mermaid diagrams render on GitHub. They can also be rebuilt as a visual page on the site for the pitch and the design workshop.)*
