A transparent label/value line — the row Iron uses to show real numbers openly (rate, LTV, fees, liquidation price).

```jsx
<DataRow label="Interest rate (APR)" value="9.5%" />
<DataRow label="Liquidation price" value="$42,180" accent="var(--caution)" hint="BTC would need to fall 38%" />
<DataRow label="Total owed" value="$5,600" strong divider={false} />
```

`strong` for totals, `accent` for health coloring, `hint` for the plain-language explanation.
