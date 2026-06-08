The Iron text field — orange focus ring, optional mono mode and prefix/suffix for financial entry.

```jsx
<Input type="email" placeholder="you@email.com" />
<Input mono prefix="$" suffix="USDT" value={amt} onChange={e => setAmt(e.target.value)} />
<Input invalid placeholder="Required" />
```

States: focus (orange ring), `invalid` (danger border), `disabled`. Use `mono` + `prefix`/`suffix` for amounts and addresses.
