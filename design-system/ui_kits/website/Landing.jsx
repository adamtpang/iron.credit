// Iron landing page — composed from DS primitives. Plain, confident,
// transparent. Dark hero with the gunmetal card; open numbers throughout.
(function () {
  const LI = window.LI;

  function Section({ id, children, style }) {
    return <section id={id} style={{ maxWidth: "var(--container)", margin: "0 auto", padding: "0 24px", ...style }}>{children}</section>;
  }
  function Eyebrow({ children }) { return <div className="iron-eyebrow" style={{ marginBottom: 18 }}>{children}</div>; }

  function Waitlist({ big }) {
    const { Button, Input } = window.DS;
    const [email, setEmail] = React.useState("");
    const [done, setDone] = React.useState(false);
    if (done) return <div style={{ display: "flex", alignItems: "center", gap: 9, color: "var(--safe)", fontSize: 14.5, fontWeight: 500 }}><LI name="check" size={18} color="var(--safe)" /> You are on the list. We will be in touch.</div>;
    return (
      <form onSubmit={(e) => { e.preventDefault(); if (email.trim()) setDone(true); }} style={{ display: "flex", gap: 10, flexWrap: "wrap", maxWidth: 440 }}>
        <div style={{ flex: "1 1 220px", minWidth: 0 }}><Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@email.com" /></div>
        <Button type="submit" size={big ? "lg" : "md"}>Request access</Button>
      </form>
    );
  }

  window.IronLanding = function IronLanding({ onWaitlist }) {
    const { Button, Card, Badge, DataRow, LTVGauge, IronCard, Stat } = window.DS;

    const steps = [
      ["wallet", "Deposit bitcoin", "Send BTC to a vault secured by keys only you control. Iron never takes custody. Withdraw any time."],
      ["banknote", "Open a dollar line", "Get an instant USDT credit line against your collateral. No credit check, no selling, no paperwork."],
      ["credit-card", "Spend anywhere", "Tap the Iron Visa in 150 countries. Your bitcoin keeps working while you spend dollars."],
      ["rotate-ccw", "Repay and revolve", "Pay back on your schedule. Your line refills as you repay. Reclaim your BTC whenever you close."],
    ];

    return (
      <div>
        {/* HERO */}
        <Section style={{ paddingTop: 72, paddingBottom: 64 }}>
          <div className="iron-hero" style={{ display: "grid", gridTemplateColumns: "1fr", gap: 56, alignItems: "center" }}>
            <div>
              <span style={{ display: "inline-block", border: "1px solid var(--line-2)", borderRadius: 5, padding: "7px 12px", marginBottom: 26 }} className="iron-eyebrow">The bank that always collects its due</span>
              <h1 className="iron-display" style={{ fontSize: "var(--text-hero)", fontWeight: 600, margin: 0, color: "var(--ink)" }}>
                Keep your bitcoin.<br />Spend dollars.
              </h1>
              <p style={{ fontSize: "var(--text-md)", lineHeight: 1.55, color: "var(--muted)", maxWidth: 520, margin: "24px 0 32px" }}>
                Iron is the bitcoin credit card. Borrow dollars against your BTC and spend anywhere on a Visa, without selling and without a credit check. Your coins stay in a vault only you can open.
              </p>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap", alignItems: "center" }}>
                <Button size="lg" onClick={onWaitlist} trailingIcon={<LI name="arrow-right" size={17} />}>Join the waitlist</Button>
                <Button size="lg" variant="secondary" leadingIcon={<LI name="shield-check" size={16} />}>Proof of reserves</Button>
              </div>
              <div style={{ display: "flex", gap: 22, marginTop: 32, flexWrap: "wrap", color: "var(--muted)", fontSize: 13 }}>
                <span style={{ display: "inline-flex", alignItems: "center", gap: 7 }}><LI name="lock" size={14} color="var(--safe)" /> Non-custodial</span>
                <span style={{ display: "inline-flex", alignItems: "center", gap: 7 }}><LI name="eye" size={14} color="var(--safe)" /> Open reserves</span>
                <span style={{ display: "inline-flex", alignItems: "center", gap: 7 }}><LI name="slash" size={14} color="var(--safe)" /> No credit check</span>
              </div>
            </div>
            {/* hero card */}
            <div style={{ position: "relative", display: "flex", justifyContent: "center" }}>
              <div style={{ position: "absolute", width: 360, height: 360, borderRadius: "50%", background: "radial-gradient(circle, var(--iron-orange-soft), transparent 68%)", filter: "blur(10px)" }} />
              <div style={{ transform: "perspective(1400px) rotateY(-16deg) rotateX(7deg) rotate(-3deg)", transformStyle: "preserve-3d" }}>
                <IronCard width={420} />
              </div>
            </div>
          </div>
        </Section>

        {/* TRUST STRIP */}
        <div style={{ borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)", background: "var(--surface)" }}>
          <Section style={{ padding: "20px 24px" }}>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "12px 40px", justifyContent: "center", alignItems: "center", color: "var(--muted)", fontFamily: "var(--font-mono)", fontSize: 12.5, letterSpacing: "0.04em", textTransform: "uppercase" }}>
              <span>Non-custodial by design</span><span style={{ opacity: .3 }}>/</span>
              <span>Proof of reserves &amp; liabilities</span><span style={{ opacity: .3 }}>/</span>
              <span>Conservative 50% max LTV</span><span style={{ opacity: .3 }}>/</span>
              <span>No surprise liquidations</span>
            </div>
          </Section>
        </div>

        {/* HOW IT WORKS */}
        <Section id="how-it-works" style={{ paddingTop: 88, paddingBottom: 24 }}>
          <Eyebrow>How it works</Eyebrow>
          <h2 className="iron-display" style={{ fontSize: "var(--text-2xl)", fontWeight: 500, color: "var(--ink)", margin: "0 0 40px", maxWidth: 620 }}>A dollar line against your bitcoin, in four steps.</h2>
          <div className="iron-steps" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 16 }}>
            {steps.map(([icon, t, d], i) => (
              <Card key={t} tone="plain" interactive style={{ display: "flex", gap: 18 }}>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", alignItems: "center", gap: 10 }}>
                  <div style={{ width: 44, height: 44, borderRadius: "var(--radius-sm)", border: "1px solid var(--line-2)", background: "var(--surface-2)", display: "grid", placeItems: "center" }}><LI name={icon} size={20} color="var(--iron-orange)" /></div>
                  <span className="iron-mono" style={{ fontSize: 12, color: "var(--faint)" }}>0{i + 1}</span>
                </div>
                <div>
                  <div className="iron-display" style={{ fontSize: 20, fontWeight: 600, color: "var(--ink)", marginBottom: 7 }}>{t}</div>
                  <div style={{ fontSize: 14.5, lineHeight: 1.55, color: "var(--muted)" }}>{d}</div>
                </div>
              </Card>
            ))}
          </div>
        </Section>

        {/* LIVE NUMBERS */}
        <Section id="rates" style={{ paddingTop: 88, paddingBottom: 24 }}>
          <div className="iron-numbers" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40, alignItems: "center" }}>
            <div>
              <Eyebrow>The terms, in the open</Eyebrow>
              <h2 className="iron-display" style={{ fontSize: "var(--text-2xl)", fontWeight: 500, color: "var(--ink)", margin: "0 0 16px" }}>No hidden spreads. No fine print.</h2>
              <p style={{ fontSize: 15.5, lineHeight: 1.6, color: "var(--muted)", margin: "0 0 24px", maxWidth: 460 }}>
                We publish the rate, the maximum LTV, and the exact liquidation price before you borrow a dollar. A serious lender shows its math.
              </p>
              <Button variant="secondary" leadingIcon={<LI name="file-text" size={16} />}>Read the terms</Button>
            </div>
            <Card tone="raised" pad={28}>
              <div style={{ marginBottom: 6 }}>
                <Stat label="Borrow APR" value="9.5%" display />
              </div>
              <div style={{ height: 1, background: "var(--line)", margin: "18px 0" }} />
              <DataRow label="Maximum LTV" value="50%" />
              <DataRow label="Origination fee" value="0%" />
              <DataRow label="Monthly fee" value="$0" />
              <DataRow label="Example liquidation price" value="$42,180" accent="var(--caution)" hint="If you draw 50% against BTC at $68,000" divider={false} />
              <div style={{ marginTop: 22 }}><LTVGauge ltv={22} max={50} liqPrice="$42,180" /></div>
            </Card>
          </div>
        </Section>

        {/* TRUST */}
        <Section id="trust" style={{ paddingTop: 88, paddingBottom: 24 }}>
          <Eyebrow>Why Iron can be trusted</Eyebrow>
          <h2 className="iron-display" style={{ fontSize: "var(--text-2xl)", fontWeight: 500, color: "var(--ink)", margin: "0 0 40px", maxWidth: 640 }}>A private bank that cannot run off with your coins.</h2>
          <div className="iron-trust" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
            {[
              ["lock", "Non-custodial", "Your bitcoin sits in a vault with keys you control. Iron cannot move, lend, or rehypothecate it. There is no exchange to freeze your account."],
              ["scale", "Open proof", "Reserves and liabilities are published on-chain and attested. Anyone can verify that every dollar lent is backed. No trust required, only verification."],
              ["shield-check", "No predatory tricks", "A conservative 50% max LTV, liquidation prices shown up front, and graduated warnings long before any action. We profit when you keep stacking, not when you fail."],
            ].map(([icon, t, d]) => (
              <Card key={t} style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                <div style={{ width: 44, height: 44, borderRadius: "var(--radius-sm)", border: "1px solid var(--line-2)", background: "var(--surface-2)", display: "grid", placeItems: "center" }}><LI name={icon} size={20} color="var(--iron-orange)" /></div>
                <div className="iron-display" style={{ fontSize: 19, fontWeight: 600, color: "var(--ink)" }}>{t}</div>
                <div style={{ fontSize: 14, lineHeight: 1.55, color: "var(--muted)" }}>{d}</div>
              </Card>
            ))}
          </div>
        </Section>

        {/* WHO IT IS FOR */}
        <Section id="who-it-is-for" style={{ paddingTop: 88, paddingBottom: 24 }}>
          <Eyebrow>Who Iron is for</Eyebrow>
          <div className="iron-who" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            {[
              ["The ones who refuse to sell", "You believe in bitcoin and you are not trading it away for a holiday or a down payment. Iron lets you unlock dollars without giving up a single sat or a single block of upside."],
              ["The ones the banks rejected", "No credit file, wrong passport, frozen out of the old system. Your bitcoin is your collateral and your credit history. Iron asks who you are, not who would vouch for you."],
            ].map(([t, d]) => (
              <Card key={t} tone="inset" pad={32} style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", minHeight: 200 }}>
                <LI name="user-round" size={22} color="var(--muted)" />
                <div>
                  <div className="iron-display" style={{ fontSize: 24, fontWeight: 600, color: "var(--ink)", marginBottom: 10 }}>{t}</div>
                  <div style={{ fontSize: 15, lineHeight: 1.6, color: "var(--muted)" }}>{d}</div>
                </div>
              </Card>
            ))}
          </div>
        </Section>

        {/* THE CARD */}
        <Section id="the-card" style={{ paddingTop: 88, paddingBottom: 24 }}>
          <Card tone="raised" pad={0} style={{ overflow: "hidden" }}>
            <div className="iron-cardsec" style={{ display: "grid", gridTemplateColumns: "1.1fr 1fr", gap: 0 }}>
              <div style={{ padding: "48px 44px" }}>
                <Eyebrow>The Iron card</Eyebrow>
                <h2 className="iron-display" style={{ fontSize: "var(--text-2xl)", fontWeight: 500, color: "var(--ink)", margin: "0 0 16px" }}>Forged metal. Real weight.</h2>
                <p style={{ fontSize: 15.5, lineHeight: 1.6, color: "var(--muted)", margin: "0 0 24px", maxWidth: 420 }}>
                  A matte gunmetal Visa with an engraved iron face and the I-beam mark. Issue a virtual card instantly, then carry the metal one. Accepted in 150 countries.
                </p>
                <div style={{ display: "grid", gap: 4 }}>
                  {["Tap to pay, worldwide", "Instant virtual card", "Freeze and unfreeze in one tap"].map((f) => (
                    <div key={f} style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 14.5, color: "var(--ink)", padding: "6px 0" }}><LI name="check" size={15} color="var(--iron-orange)" /> {f}</div>
                  ))}
                </div>
              </div>
              <div style={{ background: "linear-gradient(140deg, var(--surface-2), var(--bg))", display: "grid", placeItems: "center", padding: 40, borderLeft: "1px solid var(--line)" }}>
                <div style={{ transform: "rotate(4deg)" }}><IronCard width={330} /></div>
              </div>
            </div>
          </Card>
        </Section>

        {/* WAITLIST CTA */}
        <Section id="waitlist" style={{ paddingTop: 96, paddingBottom: 96 }}>
          <div style={{ textAlign: "center", maxWidth: 640, margin: "0 auto" }}>
            <div style={{ display: "inline-flex", marginBottom: 24 }}><window.DS.Logo variant="steel" size={44} /></div>
            <h2 className="iron-display" style={{ fontSize: "var(--text-3xl)", fontWeight: 600, color: "var(--ink)", margin: "0 0 14px", letterSpacing: "-0.015em" }}>Have iron in you.</h2>
            <p style={{ fontSize: 16, color: "var(--muted)", margin: "0 0 28px" }}>Request early access. We are onboarding holders in waves.</p>
            <div style={{ display: "flex", justifyContent: "center" }}><Waitlist big /></div>
          </div>
        </Section>

        {/* FOOTER */}
        <footer style={{ borderTop: "1px solid var(--line)" }}>
          <Section style={{ padding: "32px 24px", display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 16, alignItems: "center" }}>
            <window.DS.Logo wordmark size={20} />
            <div style={{ display: "flex", gap: 24, fontSize: 13, color: "var(--muted)" }}>
              <a href="#trust">Trust</a><a href="#rates">Rates</a><a href="#the-card">The card</a>
            </div>
            <span className="iron-mono" style={{ fontSize: 11.5, color: "var(--faint)" }}>Bitcoin is volatile. Borrowing carries liquidation risk. © 2026 Iron.</span>
          </Section>
        </footer>
      </div>
    );
  };
})();
