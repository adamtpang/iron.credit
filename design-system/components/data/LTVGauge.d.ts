import React from "react";

/**
 * The LTV health gauge — current loan-to-value against the conservative
 * liquidation threshold, graded safe → caution → danger with the liquidation
 * tick. Iron's "no surprise liquidations" promise, made visible.
 *
 * @startingPoint section="Data" subtitle="LTV health gauge" viewport="700x150"
 */
export interface LTVGaugeProps {
  /** Current loan-to-value, percent. */
  ltv?: number;
  /** Liquidation threshold (the conservative cap), percent. Default 50. */
  max?: number;
  /** Liquidation price label, e.g. "$42,180". */
  liqPrice?: string;
  /** Current BTC price (optional context). */
  btcPrice?: string;
  /** Show the header row (label + value + status). Default true. */
  showHeader?: boolean;
  /** Track height in px. Default 10. */
  height?: number;
  style?: React.CSSProperties;
}

export function LTVGauge(props: LTVGaugeProps): JSX.Element;
