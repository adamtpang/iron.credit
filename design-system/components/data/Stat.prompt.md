A metric block — engraved mono eyebrow, big tabular value, optional delta and sub.

```jsx
<Stat label="Credit available" value="$18,400" sub="of $24,000 line" />
<Stat label="Collateral" value="0.4120 BTC" delta="+2.4%" deltaTone="safe" />
<Stat label="Net worth" value="$112,840" display />   {/* Bodoni hero number */}
```

`display` switches to the Bodoni serif for hero figures; otherwise the precise mono. `delta` + `deltaTone` (safe/danger/caution/muted) show movement.
