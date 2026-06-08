// Iron mobile — onboarding (non-custodial deposit) + app screens.
(function () {
  const LI = window.LI;
  const { Screen, Title } = window.MParts;
  const fmt = (n) => "$" + Math.round(n).toLocaleString();
  function compute(btc, price, drawn, maxLtv = 0.5) {
    const collateral = btc * price, maxCredit = collateral * maxLtv;
    return { collateral, maxCredit, available: Math.max(0, maxCredit - drawn), ltv: (drawn / collateral) * 100, liq: drawn > 0 ? drawn / maxLtv / btc : 0, net: collateral - drawn };
  }

  // ---------- Onboarding ----------
  function Welcome({ next }) {
    const { Button, Logo } = window.DS;
    return (
      <div style={{ display: "flex", flexDirection: "column", flex: 1, padding: "0 28px", minHeight: 0 }}>
        <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", minHeight: 0 }}>
          <div style={{ marginBottom: 30 }}><Logo variant="steel" size={52} /></div>
          <h1 className="iron-display" style={{ fontSize: 40, fontWeight: 600, lineHeight: 1.02, letterSpacing: "-0.02em", color: "var(--ink)", margin: 0 }}>Keep your bitcoin. Spend dollars.</h1>
          <p style={{ color: "var(--muted)", fontSize: 16, lineHeight: 1.5, margin: "18px 0 0" }}>Borrow against your BTC and spend on a Visa, without selling. Your coins stay in a vault only you control.</p>
          <div style={{ display: "grid", gap: 14, marginTop: 30 }}>
            {[["lock", "Non-custodial by design"], ["eye", "Open proof of reserves"], ["slash", "No credit check"]].map(([ic, t]) => (
              <div key={t} style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <span style={{ width: 30, height: 30, borderRadius: "var(--radius-sm)", border: "1px solid var(--line-2)", background: "var(--surface-2)", display: "grid", placeItems: "center", flexShrink: 0 }}><LI name={ic} size={15} color="var(--iron-orange)" /></span>
                <span style={{ fontSize: 14.5, color: "var(--ink)" }}>{t}</span>
              </div>
            ))}
          </div>
        </div>
        <div style={{ flexShrink: 0, paddingBottom: 8, display: "grid", gap: 10 }}>
          <Button full size="lg" onClick={next}>Create your vault</Button>
          <Button full variant="ghost" onClick={next}>I already have an account</Button>
        </div>
      </div>
    );
  }

  function Vault({ next, back, step, steps }) {
    const { Button } = window.DS;
    const [armed, setArmed] = React.useState(false);
    return (
      <Screen onBack={back} step={step} steps={steps} footer={<Button full size="lg" onClick={armed ? next : () => setArmed(true)}>{armed ? "Vault secured, continue" : "Secure with Face ID"}</Button>}>
        <Title sub="Iron generates a vault whose keys are derived on your device. We never hold them, so we can never move, lend, or freeze your bitcoin.">Your vault, your keys</Title>
        <div style={{ display: "grid", gap: 11 }}>
          {[["fingerprint", "Locked to this device", "Face ID or passkey unlocks the vault"], ["cloud", "Encrypted backup", "Recover with your login, no seed phrase to lose"], ["key-round", "Keys you control", "Not Iron. Not an exchange. Yours."]].map(([ic, t, d]) => (
            <div key={t} style={{ display: "flex", gap: 13, alignItems: "flex-start", padding: "15px", borderRadius: "var(--radius-md)", border: "1px solid var(--line)", background: "var(--surface)" }}>
              <span style={{ width: 38, height: 38, borderRadius: "var(--radius-sm)", border: "1px solid var(--line-2)", background: "var(--surface-2)", display: "grid", placeItems: "center", flexShrink: 0 }}><LI name={ic} size={19} color="var(--iron-orange)" /></span>
              <span><span style={{ display: "block", fontSize: 14.5, fontWeight: 600, color: "var(--ink)" }}>{t}</span><span style={{ display: "block", fontSize: 12.5, color: "var(--muted)", marginTop: 2 }}>{d}</span></span>
            </div>
          ))}
        </div>
        {armed && <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, marginTop: 16, color: "var(--safe)", fontSize: 13, fontWeight: 600 }}><LI name="shield-check" size={16} color="var(--safe)" /> Vault secured on device</div>}
      </Screen>
    );
  }

  function Deposit({ next, back, step, steps }) {
    const { Button, Badge } = window.DS;
    return (
      <Screen onBack={back} step={step} steps={steps} footer={<Button full size="lg" onClick={next}>I have sent bitcoin</Button>}>
        <Title sub="Send BTC to your vault address to open your credit line. It stays yours, and you can withdraw any time.">Fund your vault</Title>
        <div style={{ display: "grid", placeItems: "center", gap: 16 }}>
          <div style={{ width: 168, height: 168, borderRadius: "var(--radius-md)", background: "var(--surface)", border: "1px solid var(--line-2)", display: "grid", placeItems: "center", padding: 14 }}>
            <div style={{ width: "100%", height: "100%", borderRadius: 6, background: "conic-gradient(from 0deg, var(--ink) 0 25%, transparent 0 50%, var(--ink) 0 75%, transparent 0)", backgroundSize: "20px 20px", opacity: .82, position: "relative" }}>
              <div style={{ position: "absolute", inset: "38%", background: "var(--surface)", display: "grid", placeItems: "center", borderRadius: 4 }}><LI name="bitcoin" size={20} color="var(--iron-orange)" /></div>
            </div>
          </div>
          <Badge tone="orange">Your vault address</Badge>
          <div className="iron-mono" style={{ fontSize: 14, color: "var(--ink)", textAlign: "center", letterSpacing: "0.04em", padding: "12px 16px", borderRadius: "var(--radius-sm)", border: "1px solid var(--line)", background: "var(--surface-2)", display: "flex", alignItems: "center", gap: 10 }}>
            bc1q4f…m3k9d7 <LI name="copy" size={15} color="var(--muted)" />
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 8, color: "var(--muted)", fontSize: 12.5 }}><LI name="lock" size={13} color="var(--safe)" /> Non-custodial. Only you can withdraw.</div>
        </div>
      </Screen>
    );
  }

  // ---------- App ----------
  function Sheet({ mode, st, onClose, onApply }) {
    const { Button, DataRow } = window.DS;
    const isBorrow = mode === "borrow";
    const cap = isBorrow ? st.c.available : st.drawn;
    const [amt, setAmt] = React.useState(Math.round(cap * 0.4));
    const next = isBorrow ? st.drawn + amt : st.drawn - amt;
    const nc = compute(st.btc, st.price, Math.max(0, next));
    return (
      <div onClick={onClose} style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.55)", zIndex: 30, display: "flex", alignItems: "flex-end" }}>
        <div onClick={(e) => e.stopPropagation()} style={{ width: "100%", background: "var(--surface)", borderTopLeftRadius: 24, borderTopRightRadius: 24, borderTop: "1px solid var(--line-2)", padding: "22px 24px 28px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
            <h3 className="iron-display" style={{ fontSize: 22, fontWeight: 600, color: "var(--ink)", margin: 0 }}>{isBorrow ? "Borrow dollars" : "Repay line"}</h3>
            <button onClick={onClose} style={{ background: "none", border: "none", cursor: "pointer" }}><LI name="x" size={20} color="var(--muted)" /></button>
          </div>
          <div className="iron-mono" style={{ fontSize: 34, fontWeight: 500, color: "var(--ink)" }}>{fmt(amt)} <span style={{ fontSize: 15, color: "var(--muted)" }}>USDT</span></div>
          <input type="range" min={0} max={Math.max(1, Math.round(cap))} step={50} value={amt} onChange={(e) => setAmt(parseFloat(e.target.value))} style={{ width: "100%", accentColor: "var(--iron-orange)", margin: "14px 0" }} />
          <div style={{ background: "var(--surface-2)", borderRadius: "var(--radius-md)", padding: "4px 14px", margin: "8px 0 18px" }}>
            <DataRow label="New LTV" value={`${nc.ltv.toFixed(1)}%`} accent={nc.ltv < 25 ? "var(--safe)" : nc.ltv < 40 ? "var(--caution)" : "var(--danger)"} />
            <DataRow label="Liquidation price" value={nc.liq > 0 ? fmt(nc.liq) : "—"} divider={false} />
          </div>
          <Button full size="lg" onClick={() => { onApply(Math.max(0, next)); onClose(); }}>{isBorrow ? `Borrow ${fmt(amt)}` : `Repay ${fmt(amt)}`}</Button>
        </div>
      </div>
    );
  }

  function Home({ st, setDrawn, setTab }) {
    const { Stat, Card, LTVGauge, Badge } = window.DS;
    const c = st.c;
    const [sheet, setSheet] = React.useState(null);
    const acts = [["credit-card", "Aurelia Coffee", "Today", "-$6.40"], ["arrow-down-left", "Borrowed", "Today", "+$2,000"], ["bitcoin", "Deposited BTC", "Yesterday", "+0.05"]];
    return (
      <div style={{ padding: "2px 22px 12px", position: "relative" }}>
        <div style={{ textAlign: "center", padding: "6px 0 4px" }}>
          <div className="iron-eyebrow">Net worth</div>
          <div className="iron-display iron-tnum" style={{ fontSize: 42, fontWeight: 600, color: "var(--ink)", marginTop: 6, letterSpacing: "-0.02em" }}>{fmt(c.net)}</div>
          <div style={{ display: "inline-flex", marginTop: 8 }}><Badge tone={c.ltv < 25 ? "safe" : c.ltv < 40 ? "caution" : "danger"} dot>{c.ltv < 25 ? "Healthy" : c.ltv < 40 ? "Watch" : "At risk"}</Badge></div>
        </div>
        <Card tone="raised" pad={20} style={{ marginTop: 16 }}>
          <Stat label="Credit available" value={fmt(c.available)} display sub={`of ${fmt(c.maxCredit)} · ${fmt(st.drawn)} drawn`} />
          <div style={{ marginTop: 16 }}><LTVGauge ltv={Math.round(c.ltv)} max={50} liqPrice={fmt(c.liq)} height={8} /></div>
        </Card>
        <div style={{ display: "flex", gap: 10, marginTop: 14 }}>
          {[["plus", "Borrow", () => setSheet("borrow")], ["rotate-ccw", "Repay", () => setSheet("repay")], ["credit-card", "Card", () => setTab("card")]].map(([ic, l, fn]) => (
            <button key={l} onClick={fn} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 7, padding: "14px 0", borderRadius: "var(--radius-md)", border: "1px solid var(--line)", background: "var(--surface)", cursor: "pointer" }}>
              <LI name={ic} size={19} color="var(--iron-orange)" /><span style={{ fontSize: 12.5, color: "var(--ink)", fontWeight: 500 }}>{l}</span>
            </button>
          ))}
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", margin: "22px 0 6px" }}><span className="iron-eyebrow">Activity</span><span style={{ fontSize: 12.5, color: "var(--muted)" }}>All</span></div>
        {acts.map(([ic, t, d, a], i) => (
          <div key={i} style={{ display: "flex", alignItems: "center", gap: 12, padding: "11px 0", borderBottom: i < acts.length - 1 ? "1px solid var(--line)" : "none" }}>
            <div style={{ width: 34, height: 34, borderRadius: "var(--radius-sm)", background: "var(--surface-2)", border: "1px solid var(--line)", display: "grid", placeItems: "center", flexShrink: 0 }}><LI name={ic} size={15} color="var(--muted)" /></div>
            <div style={{ flex: 1 }}><div style={{ fontSize: 13.5, color: "var(--ink)", fontWeight: 500 }}>{t}</div><div className="iron-mono" style={{ fontSize: 11, color: "var(--faint)" }}>{d}</div></div>
            <div className="iron-mono" style={{ fontSize: 13.5, color: "var(--ink)" }}>{a}</div>
          </div>
        ))}
        {sheet && <Sheet mode={sheet} st={st} onClose={() => setSheet(null)} onApply={setDrawn} />}
      </div>
    );
  }

  function CardScreen({ st }) {
    const { IronCard, Button, DataRow, Badge } = window.DS;
    const [frozen, setFrozen] = React.useState(false);
    return (
      <div style={{ padding: "4px 22px 12px" }}>
        <div className="iron-eyebrow" style={{ marginBottom: 16 }}>Your card</div>
        <div style={{ display: "grid", placeItems: "center" }}><IronCard width={300} virtual={frozen} finish={frozen ? "edge" : "guilloche"} /></div>
        <div style={{ display: "flex", gap: 10, margin: "18px 0" }}>
          <Button full variant={frozen ? "primary" : "secondary"} leadingIcon={<LI name={frozen ? "play" : "snowflake"} size={15} />} onClick={() => setFrozen(!frozen)}>{frozen ? "Unfreeze" : "Freeze"}</Button>
          <Button full variant="secondary" leadingIcon={<LI name="settings-2" size={15} />}>Limits</Button>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 6 }}><span className="iron-eyebrow">Details</span>{frozen ? <Badge tone="caution" dot>Frozen</Badge> : <Badge tone="safe" dot>Active</Badge>}</div>
        <DataRow label="Spending power" value={fmt(st.c.available)} hint="Drawn from your line at checkout" />
        <DataRow label="Network" value="Visa · 150 countries" />
        <DataRow label="This month" value="$1,284 spent" divider={false} />
      </div>
    );
  }

  function Activity() {
    const { Card } = window.DS;
    const rows = [["arrow-down-left", "Borrowed USDT", "Apr 02", "+$2,000"], ["credit-card", "Aurelia Coffee", "Apr 02", "-$6.40"], ["credit-card", "Meridian Air", "Apr 01", "-$612.00"], ["bitcoin", "Deposited BTC", "Mar 31", "+0.05"], ["rotate-ccw", "Repaid line", "Mar 28", "-$400.00"], ["percent", "Interest", "Mar 25", "-$14.20"]];
    return (
      <div style={{ padding: "4px 22px 12px" }}>
        <div className="iron-eyebrow" style={{ marginBottom: 14 }}>Activity</div>
        {rows.map(([ic, t, d, a], i) => (
          <div key={i} style={{ display: "flex", alignItems: "center", gap: 12, padding: "12px 0", borderBottom: i < rows.length - 1 ? "1px solid var(--line)" : "none" }}>
            <div style={{ width: 34, height: 34, borderRadius: "var(--radius-sm)", background: "var(--surface-2)", border: "1px solid var(--line)", display: "grid", placeItems: "center", flexShrink: 0 }}><LI name={ic} size={15} color="var(--muted)" /></div>
            <div style={{ flex: 1 }}><div style={{ fontSize: 13.5, color: "var(--ink)", fontWeight: 500 }}>{t}</div><div className="iron-mono" style={{ fontSize: 11, color: "var(--faint)" }}>{d}</div></div>
            <div className="iron-mono" style={{ fontSize: 13.5, color: "var(--ink)" }}>{a}</div>
          </div>
        ))}
      </div>
    );
  }

  window.MScreens = { Welcome, Vault, Deposit, Home, CardScreen, Activity, compute };
})();
