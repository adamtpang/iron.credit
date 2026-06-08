The Iron logo — an I-beam monogram (letter I as a forged iron beam) with an optional IRON wordmark.

```jsx
<Logo size={28} />                         {/* mark only, adapts to text color */}
<Logo variant="steel" wordmark size={32} /> {/* brushed-steel hero lockup */}
<Logo variant="core" wordmark size={24} />  {/* molten-orange seam */}
```

Variants: `solid` (currentColor — safest, theme-adaptive), `steel` (brushed metal, for dark heroes / the card), `core` (orange seam accent). Keep the mark monochrome on busy backgrounds; never recolor the wordmark arbitrarily.
