// Iron mobile — device shell + shared scaffold.
(function () {
  const LI = window.LI;

  function PhoneShell({ children }) {
    return (
      <div style={{ width: 390, height: 844, borderRadius: 48, padding: 12, background: "#000", boxShadow: "var(--shadow-card-heavy)", flexShrink: 0 }}>
        <div style={{ width: "100%", height: "100%", borderRadius: 37, overflow: "hidden", position: "relative", display: "flex", flexDirection: "column", background: "var(--bg)" }}>
          {children}
        </div>
      </div>
    );
  }

  function StatusBar() {
    return (
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "13px 28px 6px", flexShrink: 0 }}>
        <span className="iron-mono" style={{ fontSize: 13, fontWeight: 600, color: "var(--ink)" }}>9:41</span>
        <div style={{ display: "flex", gap: 6, color: "var(--ink)" }}>
          <LI name="signal" size={15} color="var(--ink)" /><LI name="wifi" size={15} color="var(--ink)" /><LI name="battery-full" size={17} color="var(--ink)" />
        </div>
      </div>
    );
  }

  function HomeBar() {
    return <div style={{ flexShrink: 0, display: "grid", placeItems: "center", padding: "7px 0 10px" }}><div style={{ width: 132, height: 5, borderRadius: 99, background: "var(--ink)", opacity: .3 }} /></div>;
  }

  // onboarding scaffold
  function Screen({ onBack, step, steps, children, footer }) {
    return (
      <div style={{ display: "flex", flexDirection: "column", flex: 1, minHeight: 0 }}>
        {(onBack || steps) && (
          <div style={{ display: "flex", alignItems: "center", gap: 12, padding: "2px 22px 10px", flexShrink: 0 }}>
            {onBack ? <button onClick={onBack} style={{ width: 34, height: 34, borderRadius: "var(--radius-sm)", border: "1px solid var(--line-2)", background: "var(--surface-2)", display: "grid", placeItems: "center", cursor: "pointer", flexShrink: 0 }}><LI name="chevron-left" size={18} color="var(--ink)" /></button> : <div style={{ width: 34, flexShrink: 0 }} />}
            {steps && <div style={{ display: "flex", gap: 5, flex: 1 }}>{Array.from({ length: steps }).map((_, i) => <div key={i} style={{ flex: 1, height: 3, borderRadius: 99, background: i <= step ? "var(--iron-orange)" : "var(--line-2)" }} />)}</div>}
          </div>
        )}
        <div style={{ flex: 1, minHeight: 0, overflowY: "auto", padding: "6px 24px 0" }}>{children}</div>
        {footer && <div style={{ flexShrink: 0, padding: "12px 24px 6px" }}>{footer}</div>}
      </div>
    );
  }

  function Title({ children, sub }) {
    return (
      <div style={{ marginBottom: 22 }}>
        <h1 className="iron-display" style={{ fontSize: 30, fontWeight: 600, lineHeight: 1.06, color: "var(--ink)", margin: 0 }}>{children}</h1>
        {sub && <p style={{ color: "var(--muted)", fontSize: 15, lineHeight: 1.5, margin: "12px 0 0" }}>{sub}</p>}
      </div>
    );
  }

  window.MParts = { PhoneShell, StatusBar, HomeBar, Screen, Title };
})();
