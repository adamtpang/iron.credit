import React from "react";

/** Single-line input with a machined orange focus ring; mono mode for data entry. */
export interface InputProps {
  type?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  disabled?: boolean;
  /** Error state (danger border). */
  invalid?: boolean;
  /** Use the mono family (amounts, addresses). */
  mono?: boolean;
  /** Leading adornment, e.g. "$". */
  prefix?: React.ReactNode;
  /** Trailing adornment, e.g. "USDT". */
  suffix?: React.ReactNode;
  style?: React.CSSProperties;
}

export function Input(props: InputProps): JSX.Element;
