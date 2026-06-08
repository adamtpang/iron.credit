// Iron web app — sidebar navigation.
(function () {
  const LI = window.LI;
  window.IronSidebar = function IronSidebar({ view, setView, theme, onToggleTheme }) {
    const { Logo } = window.DS;
    const items = [["dashboard", "layout-dashboard", "Dashboard"], ["card", "credit-card", "Card"], ["activity", "list", "Activity"], ["proof", "scale", "Proof of reserves"]];
    return (
      <aside style={{ width: 244, flexShrink: 0, borderRight: "1px solid var(--line)", background: "var(--surface)", display: "flex", flexDirection: "column", padding: "22px 16px", height: "100%" }}>
        <div style={{ padding: "4px 8px 24px" }}><Logo wordmark size={22} /></div>
        <nav style={{ display: "grid", gap: 2 }}>
          {items.map(([k, icon, label]) => {
            const active = view === k;
            return (
              <button key={k} onClick={() => setView(k)} style={{
                display: "flex", alignItems: "center", gap: 11, padding: "10px 12px", borderRadius: "var(--radius-sm)",
                border: "none", cursor: "pointer", textAlign: "left", fontFamily: "var(--font-body)", fontSize: 14, fontWeight: 500,
                background: active ? "var(--surface-3)" : "transparent", color: active ? "var(--ink)" : "var(--muted)",
              }}>
                <LI name={icon} size={17} color={active ? "var(--iron-orange)" : "var(--muted)"} /> {label}
              </button>
            );
          })}
        </nav>
        <div style={{ marginTop: "auto", display: "grid", gap: 10 }}>
          <button onClick={onToggleTheme} style={{ display: "flex", alignItems: "center", gap: 11, padding: "10px 12px", borderRadius: "var(--radius-sm)", border: "none", cursor: "pointer", background: "transparent", color: "var(--muted)", fontFamily: "var(--font-body)", fontSize: 14 }}>
            <LI name={theme === "dark" ? "sun" : "moon"} size={17} color="var(--muted)" /> {theme === "dark" ? "Light" : "Dark"} mode
          </button>
          <div style={{ display: "flex", alignItems: "center", gap: 10, padding: "10px 12px", borderTop: "1px solid var(--line)" }}>
            <div style={{ width: 30, height: 30, borderRadius: "var(--radius-sm)", background: "var(--surface-3)", border: "1px solid var(--line-2)", display: "grid", placeItems: "center", fontFamily: "var(--font-mono)", fontSize: 13, color: "var(--ink)" }}>S</div>
            <div style={{ minWidth: 0 }}>
              <div style={{ fontSize: 13, color: "var(--ink)", fontWeight: 500 }}>S. Arryn</div>
              <div className="iron-mono" style={{ fontSize: 11, color: "var(--faint)" }}>Verified</div>
            </div>
          </div>
        </div>
      </aside>
    );
  };
})();
