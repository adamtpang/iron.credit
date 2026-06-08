import React from "react";

/**
 * Iron button. Primary = bitcoin orange (one per view, the key action).
 * Secondary = steel outline on surface. Ghost = quiet. Sharp machined edges.
 */
export function Button({
  children, variant = "primary", size = "md", leadingIcon = null, trailingIcon = null,
  disabled = false, type = "button", onClick, full = false, style = {}, ...rest
}) {
  const sizes = {
    sm: { padding: "8px 14px", fontSize: 13, gap: 7 },
    md: { padding: "11px 18px", fontSize: 14.5, gap: 9 },
    lg: { padding: "15px 24px", fontSize: 16, gap: 10 },
  };
  const s = sizes[size] || sizes.md;
  const variants = {
    primary: { background: "var(--iron-orange)", color: "var(--iron-orange-ink)", border: "1px solid transparent", fontWeight: 600 },
    secondary: { background: "var(--surface-2)", color: "var(--ink)", border: "1px solid var(--line-2)", fontWeight: 600 },
    ghost: { background: "transparent", color: "var(--muted)", border: "1px solid transparent", fontWeight: 600 },
  };
  const v = variants[variant] || variants.primary;
  const [hover, setHover] = React.useState(false);
  const hoverBg = variant === "primary" ? "var(--iron-orange-bright)" : variant === "secondary" ? "var(--surface-3)" : "var(--surface-2)";

  return (
    <button
      type={type} disabled={disabled} onClick={onClick}
      onMouseEnter={() => setHover(true)} onMouseLeave={(e) => { setHover(false); e.currentTarget.style.transform = "none"; }}
      onMouseDown={(e) => { if (!disabled) e.currentTarget.style.transform = "translateY(1px)"; }}
      onMouseUp={(e) => { e.currentTarget.style.transform = "none"; }}
      style={{
        display: "inline-flex", alignItems: "center", justifyContent: "center", gap: s.gap,
        padding: s.padding, fontSize: s.fontSize, width: full ? "100%" : undefined,
        borderRadius: "var(--radius-sm)", fontFamily: "var(--font-body)", lineHeight: 1, whiteSpace: "nowrap",
        cursor: disabled ? "not-allowed" : "pointer", opacity: disabled ? 0.45 : 1,
        transition: "transform var(--dur-fast) var(--ease-out), background var(--dur-base), border-color var(--dur-base)",
        ...v, ...(hover && !disabled ? { background: hoverBg } : null), ...style,
      }}
      {...rest}
    >
      {leadingIcon}{children}{trailingIcon}
    </button>
  );
}
