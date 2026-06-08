import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Bitcoin, CreditCard, ShieldCheck, Lock, TrendingUp, Wallet, Check, Landmark, Eye, BookOpen, UserCheck } from "lucide-react";
import { useTheme } from "./theme.jsx";
import Nav from "./components/Nav.jsx";
import WaitlistForm from "./components/WaitlistForm.jsx";
import { IronCard } from "../design-system/components/brand/IronCard.jsx";

const FLOW = [
  [Bitcoin, "Deposit bitcoin", "Held in collaborative custody. We cannot touch it."],
  [CreditCard, "Get a USDT credit line", "Instant, backed by your bitcoin, no credit check."],
  [Wallet, "Spend anywhere", "Tap your card anywhere Visa is accepted, or withdraw USDT to your wallet."],
  [ArrowRight, "Repay or top up", "Flexible. Your bitcoin stays yours, and keeps its upside."],
];

const PRINCIPLES = [
  [ShieldCheck, "Always overcollateralized", "40 to 50% LTV, structurally safer than an unsecured card."],
  [Lock, "Non-custodial by default", "Collaborative custody. We literally cannot misuse your coins."],
  [TrendingUp, "Cheaper and rejection-proof", "No credit check, lower APR than unsecured credit, no taxable sale."],
];

const TRUST = [
  [Lock, "Non-custodial collateral", "Funds cannot be misused by construction, not by promise."],
  [Eye, "Open by default", "Continuous proof of reserves and liabilities, not a quarterly snapshot."],
  [ShieldCheck, "Never rehypothecate", "The exact thing that killed Celsius and BlockFi. We do not do it."],
  [Landmark, "Skin in the game", "Built for the bitcoin community, not extracted from it."],
  [BookOpen, "No predatory tricks", "Rates shown upfront, the true cost in plain language, and we teach you what you are paying. Interest is how we make money, and we will never hide that."],
];

const MODEL = [
  ["Net interest spread", "The core. The Chase engine, on a real balance sheet."],
  ["Card interchange", "On every dollar spent."],
  ["Thin, transparent FX", "On USDT and local currency."],
  ["Premium subscription", "Higher LTV, no-forced-liquidation, priority."],
];

const STATS = [
  ["~480 to 500M", "people hold bitcoin"],
  ["$73.6B → $200 to 300B", "bitcoin-credit pool, by 2030"],
  ["Nubank ~$55 to 60B", "the credit-led fintech comp"],
  ["$10 to 60B", "credible top-of-S-curve outcome"],
];

const COMPS = [
  ["JPMorgan Chase", "~$837B", "all of banking"],
  ["American Express", "~$215B", "credit specialist"],
  ["Capital One", "~$135B", "credit specialist"],
  ["Nubank", "~$55 to 60B", "credit-led fintech, our comp"],
  ["Coinbase", "~$50 to 90B", "crypto, our comp"],
  ["SoFi", "~$20B", "fintech"],
];

const ROADMAP = [
  ["V1", "Secured bitcoin-backed credit line plus USDT card. Non-custodial, radically transparent."],
  ["Data", "Record how our own users borrow and repay. The proprietary underwriting moat."],
  ["Graduate", "Layer crypto credit scoring and move trusted users to higher LTV, then unsecured revolving credit. The true credit-card moment."],
  ["Bank", "Accounts, a savings funnel, more markets. The full bitcoin Chase."],
];

export default function Credit() {
  const { C } = useTheme();

  const navRight = (
    <>
      <Link to="/pricing" className="nav-link" style={{ color: C.mut, fontSize: 13.5, fontWeight: 500 }}>Pricing</Link>
      <a href="#waitlist" style={{ padding: "8px 14px", borderRadius: 10, background: C.amber, color: C.accentInk, fontSize: 13, fontWeight: 700 }}>Get started</a>
    </>
  );

  const H2 = ({ children }) => (
    <h2 className="disp" style={{ fontSize: 13, color: C.mut, textTransform: "uppercase", letterSpacing: ".12em", margin: "0 0 14px" }}>{children}</h2>
  );

  const Card = ({ icon: Icon, title, body }) => (
    <div style={{ background: C.panel, border: `1px solid ${C.line}`, borderRadius: 16, padding: 18 }}>
      {Icon && (
        <div style={{ width: 36, height: 36, borderRadius: 10, background: C.accentSoft, display: "grid", placeItems: "center", marginBottom: 12 }}>
          <Icon size={18} color={C.amber} />
        </div>
      )}
      <div className="disp" style={{ fontSize: 16, fontWeight: 700, color: C.ink, marginBottom: 5 }}>{title}</div>
      <div style={{ color: C.mut, fontSize: 13.5, lineHeight: 1.5 }}>{body}</div>
    </div>
  );

  return (
    <div>
      <style>{`
        @media(min-width:820px){
          .credit-flow{grid-template-columns:repeat(4,1fr) !important;}
          .credit-3{grid-template-columns:repeat(3,1fr) !important;}
          .credit-2{grid-template-columns:repeat(2,1fr) !important;}
          .credit-4{grid-template-columns:repeat(4,1fr) !important;}
          .hero-2{grid-template-columns:1.05fr .95fr !important;}
        }
        @media(max-width:560px){ .nav-link{display:none;} }
      `}</style>

      <Nav right={navRight} />

      <article style={{ maxWidth: 920, margin: "0 auto", padding: "16px 20px 60px" }}>
        {/* Hero */}
        <div className="grid hero-2" style={{ display: "grid", gridTemplateColumns: "1fr", gap: 30, paddingBottom: 28, borderBottom: `1px solid ${C.line}`, marginBottom: 30, alignItems: "center" }}>
          <div>
            <div className="mono" style={{ color: C.mut, fontSize: 12, letterSpacing: ".14em", textTransform: "uppercase", marginBottom: 12 }}>The non-custodial bitcoin credit card</div>
            <h1 className="disp" style={{ fontSize: "clamp(34px, 5.5vw, 56px)", fontWeight: 800, lineHeight: 1.03, letterSpacing: "-.02em", margin: "0 0 16px", color: C.ink }}>
              Keep your bitcoin.<br />Spend dollars.
            </h1>
            <p className="body" style={{ fontSize: 16.5, lineHeight: 1.55, color: C.mut, maxWidth: 520, margin: "0 0 22px" }}>
              Borrow dollars against your bitcoin and spend anywhere on a Visa card, without selling and without a credit check. For people who hold bitcoin, and people the banks turned away.
            </p>
            <div id="waitlist"><WaitlistForm C={C} big /></div>
            <div className="flex items-center" style={{ gap: 8, marginTop: 14, color: C.mut, fontSize: 12.5 }}>
              <Lock size={14} color={C.green} /> Non-custodial. Iron, Singapore.
            </div>
          </div>
          <div style={{ display: "grid", placeItems: "center" }}>
            <IronCard width={360} holder="YOUR NAME" last4="0021" />
          </div>
        </div>

        {/* Problem */}
        <section style={{ marginBottom: 34 }}>
          <H2>The problem</H2>
          <p className="body" style={{ fontSize: 16.5, lineHeight: 1.65, color: C.ink, margin: 0 }}>
            Bitcoiners are asset-rich and cash-poor by choice. Selling means a taxable event and giving up the upside, so they do not want to sell, yet they still need dollars. The existing ways to borrow against bitcoin are custodial, opaque, gamified, or region-locked, and the household names that tried this (Celsius, BlockFi) blew up by rehypothecating customer funds. A real, urgent, recurring need with no trustworthy home.
          </p>
        </section>

        {/* Product */}
        <section style={{ marginBottom: 34 }}>
          <H2>The product</H2>
          <p className="body" style={{ fontSize: 16.5, lineHeight: 1.6, color: C.ink, margin: "0 0 18px" }}>
            The same daily feel as the Chase or Discover card you already use, except the limit is backed by your bitcoin instead of your credit score.
          </p>
          <div className="credit-flow" style={{ display: "grid", gridTemplateColumns: "1fr", gap: 12, marginBottom: 16 }}>
            {FLOW.map(([Icon, t, b], i) => (
              <div key={i} style={{ background: C.panel, border: `1px solid ${C.line}`, borderRadius: 16, padding: 16 }}>
                <div className="flex items-center" style={{ justifyContent: "space-between", marginBottom: 10 }}>
                  <div style={{ width: 34, height: 34, borderRadius: 9, background: C.accentSoft, display: "grid", placeItems: "center" }}>
                    <Icon size={17} color={C.amber} />
                  </div>
                  <span className="disp tnum" style={{ fontSize: 22, fontWeight: 800, color: C.line }}>{i + 1}</span>
                </div>
                <div className="disp" style={{ fontSize: 14.5, fontWeight: 700, color: C.ink, marginBottom: 4 }}>{t}</div>
                <div style={{ color: C.mut, fontSize: 12.5, lineHeight: 1.45 }}>{b}</div>
              </div>
            ))}
          </div>
          <div className="credit-3" style={{ display: "grid", gridTemplateColumns: "1fr", gap: 12 }}>
            {PRINCIPLES.map(([Icon, t, b], i) => <Card key={i} icon={Icon} title={t} body={b} />)}
          </div>
        </section>

        {/* Who it is for */}
        <section style={{ marginBottom: 34 }}>
          <H2>Who it is for</H2>
          <div className="credit-2" style={{ display: "grid", gridTemplateColumns: "1fr", gap: 12 }}>
            <Card icon={Bitcoin} title="Bitcoin holders who refuse to sell" body="You own bitcoin and will not sell it. Borrow against it at better terms than unsecured credit, keep the upside, and stay non-custodial. A product Chase structurally cannot offer." />
            <Card icon={UserCheck} title="The people the banks turned away" body="No credit file, the wrong country, no history. Your bitcoin is your qualification, no FICO and no passport test. We say yes where Chase says no." />
          </div>
        </section>

        {/* Why it wins */}
        <section style={{ marginBottom: 34 }}>
          <H2>Why it wins: the moat is trust</H2>
          <p className="body" style={{ fontSize: 16, lineHeight: 1.6, color: C.ink, margin: "0 0 16px" }}>
            Every competitor is a feature: a loan desk, a borrow button, or a cashback card. None is a trustworthy, non-custodial bank that turns your stack into spendable dollars and treats you as a relationship.
          </p>
          <div className="credit-2" style={{ display: "grid", gridTemplateColumns: "1fr", gap: 12 }}>
            {TRUST.map(([Icon, t, b], i) => <Card key={i} icon={Icon} title={t} body={b} />)}
          </div>
        </section>

        {/* Business model */}
        <section style={{ marginBottom: 34 }}>
          <H2>Business model</H2>
          <p className="body" style={{ fontSize: 16, lineHeight: 1.6, color: C.ink, margin: "0 0 16px" }}>
            A real interest-earning balance sheet, not a trading spread. Overcollateralized lending means a fraction of Chase's 5 to 6% charge-offs, so we keep more of the spread and we do not blow up.
          </p>
          <div className="credit-2" style={{ display: "grid", gridTemplateColumns: "1fr", gap: 12 }}>
            {MODEL.map(([t, b], i) => (
              <div key={i} className="flex" style={{ gap: 12, background: C.panel, border: `1px solid ${C.line}`, borderRadius: 14, padding: 16, alignItems: "flex-start" }}>
                <Check size={18} color={C.green} style={{ flexShrink: 0, marginTop: 2 }} />
                <div>
                  <div className="disp" style={{ fontSize: 15, fontWeight: 700, color: C.ink, marginBottom: 3 }}>{t}</div>
                  <div style={{ color: C.mut, fontSize: 13, lineHeight: 1.45 }}>{b}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Why us */}
        <section style={{ marginBottom: 34 }}>
          <H2>Why us</H2>
          <p className="body" style={{ fontSize: 16, lineHeight: 1.65, color: C.ink, margin: 0 }}>
            The founder is the customer: a heavy credit user (Chase, Discover, Wise) who pays more in credit interest than any other expense and understands the borrower from the inside. Two technical operator founders who ship, with native distribution into Network School and the global bitcoin community. Partners de-risk the two rails the product runs on: Fulgur and the bitcoin community for the BTC collateral, Tether and Plan B for the USDT credit and card.
          </p>
        </section>

        {/* Market */}
        <section style={{ marginBottom: 34 }}>
          <H2>The market</H2>
          <div className="credit-4" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
            {STATS.map(([big, small], i) => (
              <div key={i} style={{ background: C.panel, border: `1px solid ${C.line}`, borderRadius: 14, padding: 16 }}>
                <div className="disp tnum" style={{ fontSize: 19, fontWeight: 800, color: C.ink, lineHeight: 1.1 }}>{big}</div>
                <div style={{ color: C.mut, fontSize: 12.5, marginTop: 4 }}>{small}</div>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 14, background: C.panel, border: `1px solid ${C.line}`, borderRadius: 14, overflow: "hidden" }}>
            <div style={{ padding: "10px 16px", borderBottom: `1px solid ${C.line}`, fontSize: 11.5, color: C.mut, textTransform: "uppercase", letterSpacing: ".06em" }}>Proof in the fiat world: credit-led companies are the most valuable in finance</div>
            {COMPS.map(([name, cap, note], i) => (
              <div key={i} className="flex items-center justify-between" style={{ padding: "10px 16px", borderTop: i ? `1px solid ${C.line}` : "none" }}>
                <span style={{ color: C.ink, fontSize: 14, fontWeight: 600 }}>{name}</span>
                <span className="flex items-center" style={{ gap: 12 }}>
                  <span style={{ color: C.mut, fontSize: 11.5 }}>{note}</span>
                  <span className="disp tnum" style={{ color: C.ink, fontSize: 15, fontWeight: 700, minWidth: 84, textAlign: "right" }}>{cap}</span>
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Roadmap */}
        <section style={{ marginBottom: 34 }}>
          <H2>Roadmap</H2>
          <div style={{ display: "grid", gap: 10 }}>
            {ROADMAP.map(([phase, b], i) => (
              <div key={i} className="flex" style={{ gap: 14, alignItems: "flex-start", background: C.panel, border: `1px solid ${C.line}`, borderRadius: 14, padding: 16 }}>
                <span style={{ flexShrink: 0, fontSize: 11, fontWeight: 700, letterSpacing: ".06em", textTransform: "uppercase", color: C.amber, border: `1px solid ${C.amber}`, borderRadius: 999, padding: "4px 10px" }}>{phase}</span>
                <div style={{ color: C.ink, fontSize: 14.5, lineHeight: 1.5 }}>{b}</div>
              </div>
            ))}
          </div>
        </section>

        {/* The ask */}
        <section style={{ marginBottom: 30 }}>
          <H2>The ask</H2>
          <p className="body" style={{ fontSize: 16, lineHeight: 1.65, color: C.ink, margin: 0 }}>
            Raise a lean pre-seed of mission-aligned equity (Fulgur, Curious Ventures, Network School angels) for team and product, and a separate USDT credit facility (debt, via the Tether and Plan B relationship) for the loan book. Never dilute the company to fund the book. The business throws off interest income and becomes self-funding as it scales.
          </p>
        </section>

        {/* Footer line */}
        <div style={{ paddingTop: 22, borderTop: `1px solid ${C.line}` }}>
          <p className="disp" style={{ fontSize: 17, fontWeight: 700, color: C.ink, lineHeight: 1.4, margin: 0 }}>
            Everyone else sells a bitcoin loan. We are building the bitcoin bank, the most trustworthy one, for the people who refuse to sell.
          </p>
        </div>
      </article>
    </div>
  );
}
