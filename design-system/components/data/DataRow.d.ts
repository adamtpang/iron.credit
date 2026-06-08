import React from "react";

/**
 * A transparent label/value row: body label left, mono value right.
 * The building block of Iron's open rate / LTV / fee tables.
 */
export interface DataRowProps {
  label: React.ReactNode;
  value: React.ReactNode;
  /** Small clarifying line under the label. */
  hint?: React.ReactNode;
  /** Recolor the value (e.g. var(--safe)). */
  accent?: string;
  /** Emphasize (totals). */
  strong?: boolean;
  /** Hairline divider under the row. Default true. */
  divider?: boolean;
  style?: React.CSSProperties;
}

export function DataRow(props: DataRowProps): JSX.Element;
