The surface panel — bordered, sharp-cornered. Everything that isn't full-bleed sits in a Card.

```jsx
<Card>Panel content…</Card>
<Card tone="inset" pad={16}>Nested block</Card>
<Card tone="raised" interactive>Hover-lifting tile</Card>
```

Tones: `plain`, `inset` (recessed), `raised` (elevated + shadow). `interactive` adds the −2px lift.
