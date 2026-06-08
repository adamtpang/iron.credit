import React from "react";

export type CardFinish = "guilloche" | "brushed" | "edge";

/**
 * The Iron card render (physical or virtual) — dark gunmetal with an
 * engine-turned guilloché engraving, brushed chip and the I-beam mark.
 * Pure CSS + SVG, no image assets. Scales from `width`.
 *
 * @startingPoint section="Brand" subtitle="The matte gunmetal Iron card" viewport="460x300"
 */
export interface IronCardProps {
  /** Card width in px; height follows the 1.586 bank-card ratio. Default 380. */
  width?: number;
  /** Surface finish. Default "guilloche". */
  finish?: CardFinish;
  /** Cardholder name (uppercase mono). */
  holder?: string;
  /** Last four digits. */
  last4?: string;
  /** Expiry, e.g. "09 / 29". */
  exp?: string;
  /** Show the "Virtual" tag. */
  virtual?: boolean;
  style?: React.CSSProperties;
}

export function IronCard(props: IronCardProps): JSX.Element;
