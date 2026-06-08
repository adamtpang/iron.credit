// Iron web app — dashboard, card, activity and proof-of-reserves views.
// Interactive: borrow/repay updates the live credit line, LTV and
// liquidation price. All numbers shown openly.
(function () {
  const LI = window.LI;
  const fmt = (n) => "$" + Math.round(n).toLocaleString();
  const fmt2 = (n) => "$" + n.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });

  function compute(btc, price, drawn, maxLtv = 0.5) {
    const collateral = btc * price;
    const maxCredit = collateral * maxLtv;
    const available = Math.max(0, maxCredit - drawn);
    const ltv = collateral > 0 ? (drawn / collateral) * 100 : 0;
    const liq = drawn > 0 ? drawn / maxLtv / btc : 0;
    return { collateral, maxCredit, available, ltv, liq, net: collateral - drawn };
  }

  // ---- Manage line modal (borrow / repay) ----
  function ManagePanel({ mode, st, onClose, onApply }) {
    const { Button } = window.DS;
    const isBorrow = mode === "borrow";
    const cap = isBorrow ? st.c.available : st.drawn;
    const [amt, setAmt] = React.useState(Math.round(cap * 0.4));
    const nextDrawn = isBorrow ? st.drawn + amt : st.drawn - amt;
    const nc = compute(st.btc, st.price, Math.max(0, nextDrawn));
    return (
      <div onClick={onClose} style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.6)", backdropFilter: "blur(4px)", display: "grid", placeItems: "center", zIndex: 60, padding: 24 }}>
        <div onClick={(e) => e.stopPropagation()} style={{ width: 460, maxWidth: "100%", background: "var(--surface)", border: "1px solid var(--line-2)", borderRadius: "var(--radius-lg)", boxShadow: "var(--shadow-lift)", padding: 28 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
            <h3 className="iron-display" style={{ fontSize: 22, fontWeight: 600, color: "var(--ink)", margin: 0 }}>{isBorrow ? "Borrow dollars" : "Repay your line"}</h3>
            <button onClick={onClose} style={{ background: "transparent", border: "none", cursor: "pointer", color: "var(--muted)" }}><LI name="x" size={20} color="var(--muted)" /></button>
          </div>
          <div className="iron-eyebrow" style={{ marginBottom: 8 }}>{isBorrow ? "Amount to draw" : "Amount to repay"}</div>
          <div className="iron-mono" style={{ fontSize: 38, fontWeight: 500, color: "var(--ink)", letterSpacing: "-0.01em" }}>{fmt(amt)} <span style={{ fontSize: 16, color: "var(--muted)" }}>USDT</span></div>
          <input type="range" min={0} max={Math.max(1, Math.round(cap))} step={50} value={amt} onChange={(e) => setAmt(parseFloat(e.target.value))} style={{ width: "100%", accentColor: "var(--iron-orange)", cursor: "pointer", margin: "16px 0" }} />
          <div style={{ display: "flex", justifyContent: "space-between" }} className="iron-mono">
            <span style={{ fontSize: 11.5, color: "var(--faint)" }}>$0</span>
            <span style={{ fontSize: 11.5, color: "var(--muted)" }}>{isBorrow ? `${fmt(cap)} available` : `${fmt(cap)} owed`}</span>
          </div>
          <div style={{ background: "var(--surface-2)", borderRadius: "var(--radius-md)", padding: 16, margin: "20px 0", display: "grid", gap: 2 }}>
            {window.DS.DataRow && <window.DS.DataRow label="New LTV" value={`${nc.ltv.toFixed(1)}%`} accent={nc.ltv < 25 ? "var(--safe)" : nc.ltv < 40 ? "var(--caution)" : "var(--danger)"} />}
            <window.DS.DataRow label="New liquidation price" value={nc.liq > 0 ? fmt(nc.liq) : "—"} />
            <window.DS.DataRow label={isBorrow ? "Drawn after" : "Owed after"} value={fmt(Math.max(0, nextDrawn))} divider={false} />
          </div>
          <Button full size="lg" onClick={() => { onApply(Math.max(0, nextDrawn)); onClose(); }}>{isBorrow ? `Borrow ${fmt(amt)}` : `Repay ${fmt(amt)}`}</Button>
          <p className="iron-mono" style={{ fontSize: 11, color: "var(--faint)", textAlign: "center", margin: "12px 0 0" }}>Liquidation at 50% LTV. No hidden fees.</p>
        </div>
      </div>
    );
  }

  // ---- Dashboard ----
  window.IronDashboard = function IronDashboard({ st, setDrawn }) {
    const { Card, Button, Stat, DataRow, LTVGauge, IronCard, Badge } = window.DS;
    const c = st.c;
    const [manage, setManage] = React.useState(null);
    const activity = [
      ["arrow-down-left", "Borrowed USDT", "Today, 14:02", "+$2,000", "var(--ink)"],
      ["credit-card", "Aurelia Coffee", "Today, 09:14", "-$6.40", "var(--ink)"],
      ["bitcoin", "Deposited BTC", "Yesterday", "+0.05 BTC", "var(--safe)"],
      ["rotate-ccw", "Repaid line", "Mar 28", "-$400", "var(--ink)"],
    ];
    return (
      <div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 28 }}>
          <div>
            <div className="iron-eyebrow" style={{ marginBottom: 8 }}>Good evening, Stannis</div>
            <Stat label="Net worth" value={fmt(c.net)} display />
          </div>
          <Badge tone={c.ltv < 25 ? "safe" : c.ltv < 40 ? "caution" : "danger"} dot>{c.ltv < 25 ? "Healthy" : c.ltv < 40 ? "Watch" : "At risk"}</Badge>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: 18 }} className="aw-grid">
          <Card tone="raised" pad={28}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 22 }}>
              <Stat label="Credit available" value={fmt(c.available)} display sub={`of ${fmt(c.maxCredit)} line · ${fmt(st.drawn)} drawn`} />
              <div style={{ display: "flex", gap: 10 }}>
                <Button size="sm" onClick={() => setManage("borrow")}>Borrow</Button>
                <Button size="sm" variant="secondary" onClick={() => setManage("repay")}>Repay</Button>
              </div>
            </div>
            <LTVGauge ltv={Math.round(c.ltv)} max={50} liqPrice={c.liq > 0 ? fmt(c.liq) : "—"} />
            <div style={{ height: 1, background: "var(--line)", margin: "22px 0 4px" }} />
            <DataRow label="Interest rate (APR)" value="9.5%" />
            <DataRow label="Accrued interest" value={fmt2(st.drawn * 0.095 / 12)} hint="This month, so far" divider={false} />
          </Card>

          <div style={{ display: "grid", gap: 18, alignContent: "start" }}>
            <Card>
              <div className="iron-eyebrow" style={{ marginBottom: 14 }}>Collateral</div>
              <Stat label="Bitcoin vaulted" value={`${st.btc.toFixed(4)} BTC`} delta="+2.4%" deltaTone="safe" />
              <div className="iron-mono" style={{ fontSize: 13, color: "var(--muted)", marginTop: 6 }}>≈ {fmt(c.collateral)} at {fmt(st.price)}/BTC</div>
              <div style={{ display: "flex", gap: 8, marginTop: 16 }}>
                <Button size="sm" variant="secondary" full leadingIcon={<LI name="plus" size={15} />}>Deposit</Button>
                <Button size="sm" variant="secondary" full leadingIcon={<LI name="arrow-up-right" size={15} />}>Withdraw</Button>
              </div>
            </Card>
            <Card pad={18}>
              <div style={{ transform: "scale(1)", transformOrigin: "top left" }}><IronCard width={272} /></div>
            </Card>
          </div>
        </div>

        <Card style={{ marginTop: 18 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 8 }}>
            <div className="iron-eyebrow">Recent activity</div>
            <span style={{ fontSize: 13, color: "var(--muted)" }}>View all</span>
          </div>
          {activity.map(([icon, t, d, amt, col], i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: 14, padding: "12px 0", borderBottom: i < activity.length - 1 ? "1px solid var(--line)" : "none" }}>
              <div style={{ width: 36, height: 36, borderRadius: "var(--radius-sm)", background: "var(--surface-2)", border: "1px solid var(--line)", display: "grid", placeItems: "center", flexShrink: 0 }}><LI name={icon} size={16} color="var(--muted)" /></div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 14, color: "var(--ink)", fontWeight: 500 }}>{t}</div>
                <div className="iron-mono" style={{ fontSize: 11.5, color: "var(--faint)" }}>{d}</div>
              </div>
              <div className="iron-mono" style={{ fontSize: 14, color: col }}>{amt}</div>
            </div>
          ))}
        </Card>

        {manage && <ManagePanel mode={manage} st={st} onClose={() => setManage(null)} onApply={setDrawn} />}
      </div>
    );
  };

  // ---- Card view ----
  window.IronCardView = function IronCardView({ st }) {
    const { Card, Button, DataRow, Badge } = window.DS;
    const [frozen, setFrozen] = React.useState(false);
    return (
      <div>
        <div className="iron-eyebrow" style={{ marginBottom: 18 }}>Your card</div>
        <div style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: 32, alignItems: "start" }} className="aw-grid">
          <div style={{ display: "grid", gap: 16 }}>
            <window.DS.IronCard width={360} virtual={frozen} finish={frozen ? "edge" : "guilloche"} />
            <div style={{ display: "flex", gap: 10 }}>
              <Button variant={frozen ? "primary" : "secondary"} full leadingIcon={<LI name={frozen ? "play" : "snowflake"} size={15} />} onClick={() => setFrozen(!frozen)}>{frozen ? "Unfreeze" : "Freeze card"}</Button>
              <Button variant="secondary" full leadingIcon={<LI name="settings-2" size={15} />}>Limits</Button>
            </div>
          </div>
          <Card>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
              <div className="iron-eyebrow">Card details</div>
              {frozen ? <Badge tone="caution" dot>Frozen</Badge> : <Badge tone="safe" dot>Active</Badge>}
            </div>
            <DataRow label="Status" value={frozen ? "Frozen" : "Active"} />
            <DataRow label="Spending power" value={fmt(st.c.available)} hint="Drawn instantly from your line at point of sale" />
            <DataRow label="Network" value="Visa · 150 countries" />
            <DataRow label="This month" value="$1,284 spent" />
            <DataRow label="Card number" value={`•••• •••• •••• ${4271}`} divider={false} />
          </Card>
        </div>
      </div>
    );
  };

  // ---- Activity ----
  window.IronActivity = function IronActivity() {
    const { Card } = window.DS;
    const rows = [
      ["arrow-down-left", "Borrowed USDT", "Apr 02, 14:02", "+$2,000", "Settled"],
      ["credit-card", "Aurelia Coffee", "Apr 02, 09:14", "-$6.40", "Settled"],
      ["credit-card", "Meridian Air", "Apr 01, 18:30", "-$612.00", "Settled"],
      ["bitcoin", "Deposited BTC", "Mar 31", "+0.05 BTC", "6 confs"],
      ["rotate-ccw", "Repaid line", "Mar 28", "-$400.00", "Settled"],
      ["credit-card", "Hardware Bay", "Mar 27", "-$89.10", "Settled"],
      ["percent", "Interest accrued", "Mar 25", "-$14.20", "Posted"],
    ];
    return (
      <div>
        <div className="iron-eyebrow" style={{ marginBottom: 18 }}>Activity</div>
        <Card>
          {rows.map(([icon, t, d, amt, status], i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: 14, padding: "13px 0", borderBottom: i < rows.length - 1 ? "1px solid var(--line)" : "none" }}>
              <div style={{ width: 36, height: 36, borderRadius: "var(--radius-sm)", background: "var(--surface-2)", border: "1px solid var(--line)", display: "grid", placeItems: "center", flexShrink: 0 }}><LI name={icon} size={16} color="var(--muted)" /></div>
              <div style={{ flex: 1 }}><div style={{ fontSize: 14, color: "var(--ink)", fontWeight: 500 }}>{t}</div><div className="iron-mono" style={{ fontSize: 11.5, color: "var(--faint)" }}>{d}</div></div>
              <div style={{ textAlign: "right" }}>
                <div className="iron-mono" style={{ fontSize: 14, color: "var(--ink)" }}>{amt}</div>
                <div className="iron-mono" style={{ fontSize: 11, color: "var(--faint)" }}>{status}</div>
              </div>
            </div>
          ))}
        </Card>
      </div>
    );
  };

  // ---- Proof of reserves ----
  window.IronProof = function IronProof() {
    const { Card, DataRow, Badge, Stat } = window.DS;
    const reservesBtc = 4128.6, btcPrice = 68000;
    const reservesUsd = reservesBtc * btcPrice;       // ≈ $280.7M
    const liabilitiesUsd = 111.5e6;                    // $111.5M lent
    const ratio = reservesUsd / liabilitiesUsd;        // ≈ 2.52
    const m = (n) => "$" + (n / 1e6).toFixed(0) + "M";
    return (
      <div>
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
          <div className="iron-eyebrow">Proof of reserves &amp; liabilities</div>
          <Badge tone="safe" dot>Fully backed</Badge>
        </div>
        <p style={{ fontSize: 15, color: "var(--muted)", maxWidth: 560, margin: "0 0 24px", lineHeight: 1.55 }}>Reserves are bitcoin held in transparent vaults. Liabilities are dollars lent. Every figure is attested on-chain. Verify, do not trust.</p>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18 }} className="aw-grid">
          <Card tone="raised" pad={28}>
            <div style={{ display: "flex", gap: 40, marginBottom: 22 }}>
              <Stat label="Reserves (BTC)" value={`${reservesBtc.toLocaleString()} BTC`} sub={`≈ ${m(reservesUsd)}`} />
              <Stat label="Liabilities (USDT)" value={m(liabilitiesUsd)} sub="dollars lent" align="left" />
            </div>
            <div className="iron-eyebrow" style={{ marginBottom: 10 }}>Collateralization · {(ratio * 100).toFixed(0)}%</div>
            <div style={{ height: 12, borderRadius: 99, background: "var(--surface-3)", overflow: "hidden", position: "relative" }}>
              <div style={{ position: "absolute", inset: 0, width: "100%", background: "var(--safe-soft)" }} />
              <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: `${Math.min(100, 100 / ratio)}%`, background: "var(--safe)", borderRadius: 99 }} />
            </div>
            <div className="iron-mono" style={{ fontSize: 12, color: "var(--muted)", marginTop: 10 }}>Liabilities are {(100 / ratio).toFixed(0)}% of reserves. Every dollar lent is over-collateralized.</div>
          </Card>
          <Card>
            <div className="iron-eyebrow" style={{ marginBottom: 14 }}>Attestation</div>
            <DataRow label="Last attested" value="Apr 02, 2026 00:00 UTC" />
            <DataRow label="Method" value="On-chain + signed" />
            <DataRow label="Vault address" value="bc1q…k3df" hint="Tap to view all 6 vaults on a block explorer" />
            <DataRow label="Auditor" value="Open, continuous" divider={false} />
          </Card>
        </div>
      </div>
    );
  };

  window.IronCompute = compute;
})();
