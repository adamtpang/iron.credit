import React from "react";

/**
 * LTVGauge — the signature transparency component. Shows current loan-to-value
 * against the conservative liquidation threshold, color-graded safe → caution
 * → danger, with the liquidation tick. "No surprise liquidations" made visible.
 */
export function LTVGauge({ ltv = 22, max = 50, liqPrice, btcPrice, showHeader = true, height = 10, style = {} }) {
  const frac = Math.max(0, Math.min(1, ltv / max));
  const status = frac < 0.5 ? "safe" : frac < 0.8 ? "caution" : "danger";
  const color = { safe: "var(--safe)", caution: "var(--caution)", danger: "var(--danger)" }[status];
  const label = { safe: "Healthy", caution: "Approaching limit", danger: "Liquidation risk" }[status];

  return (
    <div style={style}>
      {showHeader && (
        <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: 12 }}>
          <span className="iron-eyebrow">Loan-to-value</span>
          <span style={{ display: "inline-flex", alignItems: "center", gap: 9 }}>
            <span className="iron-mono" style={{ fontSize: 18, fontWeight: 600, color: "var(--ink)" }}>{ltv}%</span>
            <span style={{ display: "inline-flex", alignItems: "center", gap: 6, color, fontFamily: "var(--font-mono)", fontSize: 11.5, textTransform: "uppercase", letterSpacing: "0.08em" }}>
              <span style={{ width: 6, height: 6, borderRadius: 99, background: color }} />{label}
            </span>
          </span>
        </div>
      )}
      <div style={{ position: "relative", height, borderRadius: 99, background: "var(--surface-3)", overflow: "hidden" }}>
        {/* zone tints */}
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(90deg, var(--safe-soft) 0%, var(--safe-soft) 50%, var(--caution-soft) 50%, var(--caution-soft) 80%, var(--danger-soft) 80%)" }} />
        {/* fill */}
        <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: `${frac * 100}%`, background: color, borderRadius: 99, transition: "width var(--dur-base) var(--ease-out)" }} />
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", marginTop: 8 }}>
        <span className="iron-mono" style={{ fontSize: 11.5, color: "var(--faint)" }}>0%</span>
        <span className="iron-mono" style={{ fontSize: 11.5, color: "var(--muted)" }}>
          Liquidates at {max}% LTV{liqPrice ? ` · BTC ${liqPrice}` : ""}
        </span>
      </div>
    </div>
  );
}
