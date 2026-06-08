// Iron top navigation — logo, links, theme toggle, waitlist CTA.
(function () {
  const LI = window.LI;
  window.IronNav = function IronNav({ theme, onToggleTheme, onWaitlist, links = [] }) {
    const { Logo, Button } = window.DS;
    return (
      <header style={{ position: "sticky", top: 0, zIndex: 40, background: "color-mix(in srgb, var(--bg) 82%, transparent)", backdropFilter: "blur(14px)", borderBottom: "1px solid var(--line)" }}>
        <div style={{ maxWidth: "var(--container)", margin: "0 auto", padding: "14px 24px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <Logo wordmark size={24} />
          <nav className="iron-navlinks" style={{ display: "flex", alignItems: "center", gap: 28 }}>
            {links.map((l) => (
              <a key={l} href={`#${l.toLowerCase().replace(/\s+/g, "-")}`} style={{ fontSize: 14, color: "var(--muted)", fontWeight: 500 }}>{l}</a>
            ))}
          </nav>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <button onClick={onToggleTheme} aria-label="Toggle theme" style={{ width: 36, height: 36, borderRadius: "var(--radius-sm)", border: "1px solid var(--line-2)", background: "var(--surface-2)", color: "var(--ink)", cursor: "pointer", display: "grid", placeItems: "center" }}>
              <LI name={theme === "dark" ? "sun" : "moon"} size={16} color="var(--ink)" />
            </button>
            <Button size="sm" onClick={onWaitlist}>Join the waitlist</Button>
          </div>
        </div>
      </header>
    );
  };
})();
