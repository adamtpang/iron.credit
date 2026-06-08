import React from "react";

export type DeltaTone = "safe" | "danger" | "caution" | "muted";

/**
 * A metric block: mono eyebrow label, big tabular value, optional delta + sub.
 * Set `display` for hero numbers (Bodoni). Numbers are tabular.
 */
export interface StatProps {
  label: React.ReactNode;
  value: React.ReactNode;
  sub?: React.ReactNode;
  /** e.g. "+2.4%". */
  delta?: React.ReactNode;
  deltaTone?: DeltaTone;
  /** Render the value in Bodoni display instead of mono. */
  display?: boolean;
  /** Recolor the value. */
  accent?: string;
  align?: "left" | "right";
  style?: React.CSSProperties;
}

export function Stat(props: StatProps): JSX.Element;
