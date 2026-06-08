import React from "react";

/**
 * Card — the surface panel. Bordered, slightly raised, sharp radius.
 * tone: "plain" | "inset" | "raised". `interactive` adds the hover lift.
 */
export function Card({ children, tone = "plain", interactive = false, radius = "var(--radius-lg)", pad = 24, style = {}, ...rest }) {
  const tones = {
    plain: { background: "var(--surface)", border: "var(--border)" },
    inset: { background: "var(--surface-2)", border: "var(--border)" },
    raised: { background: "var(--surface-3)", border: "var(--border-strong)", boxShadow: "var(--shadow-card)" },
  };
  const t = tones[tone] || tones.plain;
  return (
    <div className={interactive ? "iron-lift" : undefined}
      style={{ borderRadius: radius, padding: pad, ...t, ...style }} {...rest}>
      {children}
    </div>
  );
}
