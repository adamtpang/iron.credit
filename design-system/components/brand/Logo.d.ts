import React from "react";

export type LogoVariant = "solid" | "steel" | "core";

/**
 * The Iron logo — an I-beam monogram (the letter I forged as a structural
 * iron beam), optionally locked up with the IRON wordmark in Bodoni.
 *
 * @startingPoint section="Brand" subtitle="I-beam mark + wordmark" viewport="700x160"
 */
export interface LogoProps {
  /** "solid" (currentColor), "steel" (brushed metal), "core" (orange seam). */
  variant?: LogoVariant;
  /** Render the full IRON lockup, not just the mark. */
  wordmark?: boolean;
  /** Mark height in px. Wordmark scales from this. Default 28. */
  size?: number;
  /** Override color for solid/core marks. */
  color?: string;
  style?: React.CSSProperties;
}

export function Logo(props: LogoProps): JSX.Element;
