import React from "react";

/**
 * Iron logo. The mark is the I-beam monogram (the letter I as a forged
 * structural iron beam). Inline SVG so `currentColor` adapts to the theme.
 *  - variant "solid"  : single-color, inherits text color
 *  - variant "steel"  : brushed-metal gradient (hero / dark surfaces)
 *  - variant "core"   : solid with a molten bitcoin-orange seam
 * Set `wordmark` to render the full IRON lockup.
 */
export function Logo({ variant = "solid", wordmark = false, size = 28, color, style = {} }) {
  const gid = React.useId ? React.useId().replace(/:/g, "") : "ir" + Math.random().toString(36).slice(2, 7);
  const beam = "M11 9h42v10.5H39.5v25H53V55H11V44.5h13.5v-25H11V9Z";
  const fill =
    variant === "steel" ? `url(#${gid})` : variant === "core" ? "var(--ink)" : (color || "currentColor");

  const mark = (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" aria-label="Iron" style={{ display: "block", flexShrink: 0 }}>
      {variant === "steel" && (
        <defs>
          <linearGradient id={gid} x1="8" y1="6" x2="56" y2="58" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#e8eaed" />
            <stop offset="0.34" stopColor="#b7bdc5" />
            <stop offset="0.54" stopColor="#d2d7dc" />
            <stop offset="0.78" stopColor="#8b919b" />
            <stop offset="1" stopColor="#c2c7cd" />
          </linearGradient>
        </defs>
      )}
      <path fill={fill} d={beam} />
      {variant === "core" && <rect x="31" y="19.5" width="2" height="25" fill="var(--iron-orange)" />}
    </svg>
  );

  if (!wordmark) return mark;

  return (
    <span style={{ display: "inline-flex", alignItems: "center", gap: size * 0.4, ...style }}>
      {mark}
      <span
        className={variant === "steel" ? "iron-steel" : undefined}
        style={{
          fontFamily: "var(--font-display)",
          fontWeight: 600,
          fontSize: size * 1.16,
          letterSpacing: "0.04em",
          color: variant === "steel" ? undefined : variant === "core" ? "var(--ink)" : (color || "currentColor"),
          lineHeight: 1,
        }}
      >
        IRON
      </span>
    </span>
  );
}
