import React from "react";

/**
 * IronCard — the physical/virtual card render. Dark gunmetal with a faint
 * engine-turned (guilloché) iron engraving, machined edge highlight, a
 * brushed chip and the I-beam mark. Built in CSS + SVG (no image assets).
 *
 * finish:
 *  - "guilloche" : engraved engine-turned lines (default, the flagship)
 *  - "brushed"   : vertical brushed-metal grain
 *  - "edge"      : near-black with a single machined orange edge stripe
 */
export function IronCard({
  width = 380,
  finish = "guilloche",
  holder = "S. ARRYN",
  last4 = "4271",
  exp = "09 / 29",
  virtual = false,
  style = {},
}) {
  const h = width / 1.586;
  const uid = (React.useId ? React.useId() : "c" + Math.random()).replace(/:/g, "");

  const Guilloche = () => (
    <svg width="100%" height="100%" style={{ position: "absolute", inset: 0 }} aria-hidden="true">
      <defs>
        <pattern id={`g1${uid}`} width="46" height="9" patternUnits="userSpaceOnUse" patternTransform="rotate(0)">
          <path d="M0 4.5 Q 11.5 0 23 4.5 T 46 4.5" fill="none" stroke="#aab0b8" strokeWidth="0.6" opacity="0.5" />
        </pattern>
        <pattern id={`g2${uid}`} width="9" height="46" patternUnits="userSpaceOnUse">
          <path d="M4.5 0 Q 0 11.5 4.5 23 T 4.5 46" fill="none" stroke="#7c828b" strokeWidth="0.5" opacity="0.35" />
        </pattern>
        <radialGradient id={`rose${uid}`} cx="74%" cy="30%" r="55%">
          <stop offset="0" stopColor="#9aa0a8" stopOpacity="0.5" />
          <stop offset="1" stopColor="#9aa0a8" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="100%" height="100%" fill={`url(#g1${uid})`} />
      <rect width="100%" height="100%" fill={`url(#g2${uid})`} />
      <circle cx="74%" cy="30%" r="46%" fill="none" stroke="#b7bdc5" strokeWidth="0.5" opacity="0.18" />
      <circle cx="74%" cy="30%" r="34%" fill="none" stroke="#b7bdc5" strokeWidth="0.5" opacity="0.14" />
      <rect width="100%" height="100%" fill={`url(#rose${uid})`} />
    </svg>
  );

  const Brushed = () => (
    <div style={{ position: "absolute", inset: 0, opacity: 0.5, background: "repeating-linear-gradient(90deg, rgba(255,255,255,0.05) 0px, rgba(255,255,255,0.05) 1px, rgba(0,0,0,0.05) 2px, rgba(0,0,0,0.05) 3px)" }} />
  );

  return (
    <div
      style={{
        width, height: h, borderRadius: "var(--radius-card)", position: "relative", overflow: "hidden",
        background: "linear-gradient(150deg, #2b2f35 0%, #16181c 46%, #1f2329 78%, #0e1014 100%)",
        boxShadow: "var(--shadow-card-heavy), inset 0 1px 0 rgba(255,255,255,0.10), inset 0 0 0 1px rgba(255,255,255,0.04)",
        color: "#e8eaed", fontFamily: "var(--font-body)", flexShrink: 0, ...style,
      }}
    >
      {finish === "guilloche" && <div style={{ position: "absolute", inset: 0, mixBlendMode: "soft-light", opacity: 0.9 }}><Guilloche /></div>}
      {finish === "brushed" && <Brushed />}
      {/* top sheen */}
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(255,255,255,0.14), transparent 30%)", pointerEvents: "none" }} />
      {/* machined edge stripe */}
      {finish === "edge" && <div style={{ position: "absolute", top: 0, bottom: 0, left: 0, width: 5, background: "linear-gradient(180deg, var(--iron-orange-bright), var(--iron-orange-press))" }} />}

      {/* content */}
      <div style={{ position: "relative", height: "100%", padding: width * 0.062, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: width * 0.028 }}>
            <svg width={width * 0.075} height={width * 0.075} viewBox="0 0 64 64" style={{ display: "block" }}>
              <path fill="#d6dadf" d="M11 9h42v10.5H39.5v25H53V55H11V44.5h13.5v-25H11V9Z" />
              <rect x="31" y="19.5" width="2" height="25" fill="var(--iron-orange)" />
            </svg>
            <span style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: width * 0.05, letterSpacing: "0.06em", color: "#e8eaed" }}>IRON</span>
            {virtual && <span style={{ fontFamily: "var(--font-mono)", fontSize: width * 0.026, letterSpacing: "0.18em", color: "#9aa0a8", border: "1px solid rgba(255,255,255,0.18)", borderRadius: 4, padding: "2px 6px", textTransform: "uppercase" }}>Virtual</span>}
          </div>
          {/* contactless */}
          <svg width={width * 0.06} height={width * 0.06} viewBox="0 0 24 24" fill="none" style={{ opacity: 0.7 }}>
            <path d="M8 5a10 10 0 0 1 0 14M12 7.5a6 6 0 0 1 0 9M16 9.5a3 3 0 0 1 0 5" stroke="#cdd2d7" strokeWidth="1.6" strokeLinecap="round" />
          </svg>
        </div>

        {/* chip */}
        <div style={{ width: width * 0.115, height: width * 0.088, borderRadius: width * 0.018, marginTop: width * -0.01,
          background: "linear-gradient(135deg, #d2d7dc, #9aa0a8 55%, #c0c6cc)", position: "relative", boxShadow: "inset 0 0 0 1px rgba(0,0,0,0.25)" }}>
          <div style={{ position: "absolute", inset: "18% 0", borderTop: "1px solid rgba(0,0,0,0.32)", borderBottom: "1px solid rgba(0,0,0,0.32)" }} />
          <div style={{ position: "absolute", inset: "0 38%", borderLeft: "1px solid rgba(0,0,0,0.32)", borderRight: "1px solid rgba(0,0,0,0.32)" }} />
        </div>

        <div>
          <div className="iron-mono" style={{ fontSize: width * 0.058, letterSpacing: "0.12em", color: "#eef0f2", textShadow: "0 1px 1px rgba(0,0,0,0.5)" }}>
            ••••&nbsp;&nbsp;••••&nbsp;&nbsp;••••&nbsp;&nbsp;{last4}
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginTop: width * 0.03 }}>
            <div>
              <div className="iron-mono" style={{ fontSize: width * 0.026, letterSpacing: "0.16em", color: "#9aa0a8", textTransform: "uppercase" }}>Card holder</div>
              <div className="iron-mono" style={{ fontSize: width * 0.038, letterSpacing: "0.08em", color: "#e8eaed", marginTop: 2 }}>{holder}</div>
            </div>
            <div>
              <div className="iron-mono" style={{ fontSize: width * 0.026, letterSpacing: "0.16em", color: "#9aa0a8", textTransform: "uppercase" }}>Exp</div>
              <div className="iron-mono" style={{ fontSize: width * 0.038, letterSpacing: "0.08em", color: "#e8eaed", marginTop: 2 }}>{exp}</div>
            </div>
            <div style={{ fontFamily: "var(--font-display)", fontStyle: "italic", fontWeight: 700, fontSize: width * 0.066, letterSpacing: "-0.01em", color: "#f2f3f5" }}>VISA</div>
          </div>
        </div>
      </div>
    </div>
  );
}
