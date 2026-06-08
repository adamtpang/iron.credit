import React from "react";

export type BadgeTone = "neutral" | "safe" | "caution" | "danger" | "orange";

/**
 * A mono, uppercase status pill. Tones double as LTV-health signals.
 */
export interface BadgeProps {
  children: React.ReactNode;
  tone?: BadgeTone;
  /** Leading status dot. */
  dot?: boolean;
  style?: React.CSSProperties;
}

export function Badge(props: BadgeProps): JSX.Element;
