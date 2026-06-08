import React from "react";

/**
 * Badge — a mono, engraved-feel status pill. Tones map to finance health:
 * neutral, safe, caution, danger, plus orange for brand context.
 */
export function Badge({ children, tone = "neutral", dot = false, style = {} }) {
  const tones = {
    neutral: { color: "var(--muted)", background: "var(--surface-2)", border: "1px solid var(--line)" },
    safe:    { color: "var(--safe)", background: "var(--safe-soft)", border: "1px solid transparent" },
    caution: { color: "var(--caution)", background: "var(--caution-soft)", border: "1px solid transparent" },
    danger:  { color: "var(--danger)", background: "var(--danger-soft)", border: "1px solid transparent" },
    orange:  { color: "var(--iron-orange)", background: "var(--iron-orange-soft)", border: "1px solid var(--iron-orange-line)" },
  };
  const t = tones[tone] || tones.neutral;
  return (
    <span style={{
      display: "inline-flex", alignItems: "center", gap: 7, borderRadius: "var(--radius-sm)",
      padding: "4px 9px", fontFamily: "var(--font-mono)", fontSize: 11.5, fontWeight: 500,
      letterSpacing: "0.08em", textTransform: "uppercase", lineHeight: 1, width: "fit-content", ...t, ...style,
    }}>
      {dot && <span style={{ width: 6, height: 6, borderRadius: 99, background: "currentColor" }} />}
      {children}
    </span>
  );
}
