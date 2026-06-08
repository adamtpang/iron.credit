import React from "react";

/**
 * Stat — a metric block. Engraved mono eyebrow, big value (mono by default
 * for figures, or display for hero numbers), optional sub + delta.
 */
export function Stat({ label, value, sub, delta, deltaTone = "safe", display = false, accent, align = "left", style = {} }) {
  const deltaColor = { safe: "var(--safe)", danger: "var(--danger)", caution: "var(--caution)", muted: "var(--muted)" }[deltaTone] || "var(--safe)";
  return (
    <div style={{ textAlign: align, ...style }}>
      <div className="iron-eyebrow">{label}</div>
      <div style={{ display: "flex", alignItems: "baseline", gap: 8, justifyContent: align === "right" ? "flex-end" : "flex-start", marginTop: 8 }}>
        <span
          className={display ? "iron-display iron-tnum" : "iron-mono"}
          style={{ fontSize: display ? 40 : 26, fontWeight: display ? 600 : 500, color: accent || "var(--ink)", lineHeight: 1.05, letterSpacing: display ? "-0.015em" : "0" }}
        >
          {value}
        </span>
        {delta && <span className="iron-mono" style={{ fontSize: 13, color: deltaColor }}>{delta}</span>}
      </div>
      {sub && <div style={{ fontSize: 13, color: "var(--muted)", marginTop: 4 }}>{sub}</div>}
    </div>
  );
}
