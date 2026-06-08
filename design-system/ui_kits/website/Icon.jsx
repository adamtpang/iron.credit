// Lucide icon helper for Iron kits. Clean line icons, inherit currentColor.
// Requires the lucide UMD build.
window.LI = function LI({ name, size = 18, color, strokeWidth, style = {} }) {
  const ref = React.useRef(null);
  React.useEffect(() => { if (window.lucide) window.lucide.createIcons(); });
  return (
    <span ref={ref} style={{ display: "inline-flex", color, ...style }}>
      <i data-lucide={name} style={{ width: size, height: size }}></i>
    </span>
  );
};
