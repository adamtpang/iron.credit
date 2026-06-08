import React from "react";

/** Input — dark field with a machined orange focus ring. Mono optional for data. */
export function Input({ type = "text", value, onChange, placeholder = "", disabled = false, invalid = false, mono = false, prefix = null, suffix = null, style = {}, ...rest }) {
  const [focus, setFocus] = React.useState(false);
  const borderColor = invalid ? "var(--danger)" : focus ? "var(--iron-orange)" : "var(--line-2)";
  return (
    <div style={{
      display: "flex", alignItems: "center", gap: 8, padding: "0 12px",
      borderRadius: "var(--radius-sm)", border: `1px solid ${borderColor}`,
      boxShadow: focus ? "0 0 0 3px var(--iron-orange-soft)" : "none",
      background: "var(--surface-2)", transition: "border-color var(--dur-base), box-shadow var(--dur-base)", ...style,
    }}>
      {prefix && <span style={{ color: "var(--muted)", fontFamily: "var(--font-mono)", fontSize: 14 }}>{prefix}</span>}
      <input
        type={type} value={value} onChange={onChange} placeholder={placeholder} disabled={disabled}
        onFocus={() => setFocus(true)} onBlur={() => setFocus(false)}
        style={{
          flex: 1, minWidth: 0, padding: "12px 0", border: "none", outline: "none", background: "transparent",
          color: "var(--ink)", fontFamily: mono ? "var(--font-mono)" : "var(--font-body)", fontSize: 15,
        }}
        {...rest}
      />
      {suffix && <span style={{ color: "var(--muted)", fontFamily: "var(--font-mono)", fontSize: 13 }}>{suffix}</span>}
    </div>
  );
}
