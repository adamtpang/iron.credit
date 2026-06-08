import React from "react";

/**
 * DataRow — a transparent label/value line. Body label left, mono value
 * right. The building block of Iron's "show the real numbers" tables.
 * Set `divider` for a hairline under the row; `accent` recolors the value.
 */
export function DataRow({ label, value, hint, accent, strong = false, divider = true, style = {} }) {
  return (
    <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: 16, padding: "13px 0", borderBottom: divider ? "1px solid var(--line)" : "none", ...style }}>
      <span style={{ fontSize: 14, color: "var(--muted)" }}>
        {label}
        {hint && <span style={{ display: "block", fontSize: 12, color: "var(--faint)", marginTop: 2 }}>{hint}</span>}
      </span>
      <span className="iron-mono" style={{ fontSize: strong ? 16 : 14, fontWeight: strong ? 600 : 400, color: accent || "var(--ink)", textAlign: "right", flexShrink: 0 }}>
        {value}
      </span>
    </div>
  );
}
