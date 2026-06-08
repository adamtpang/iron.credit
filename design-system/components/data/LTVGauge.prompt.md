The signature gauge — current LTV against the liquidation threshold, color-graded safe → caution → danger.

```jsx
<LTVGauge ltv={22} max={50} liqPrice="$42,180" />
<LTVGauge ltv={44} max={50} showHeader={false} height={6} />
```

Status auto-grades: under half the cap is `safe`, then `caution`, then `danger`. Use it anywhere you show a credit line's health — dashboard, borrow flow, repay preview.
