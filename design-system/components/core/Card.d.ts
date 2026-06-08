import React from "react";

export type CardTone = "plain" | "inset" | "raised";

/**
 * The surface panel primitive: bordered, sharp-cornered, optional raise.
 *
 * @startingPoint section="Core" subtitle="Surface panel" viewport="700x180"
 */
export interface CardProps {
  children: React.ReactNode;
  tone?: CardTone;
  /** Adds the hover lift. */
  interactive?: boolean;
  radius?: string;
  pad?: number;
  style?: React.CSSProperties;
}

export function Card(props: CardProps): JSX.Element;
