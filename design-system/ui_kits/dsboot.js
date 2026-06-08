// Boots the Iron design-system primitives. Prefers the compiled bundle
// global (window.BTCSaveDesignSystem_85fada, present in the Design System
// tab); otherwise transpiles the component sources at runtime so kits also
// render in a raw preview. Requires React + @babel/standalone first.
window.bootDS = async function (prefix) {
  const NS = window.BTCSaveDesignSystem_85fada;
  if (NS && NS.Button) return NS;
  const files = ["brand/Logo", "brand/IronCard", "core/Button", "core/Card", "core/Badge", "forms/Input", "data/Stat", "data/DataRow", "data/LTVGauge"];
  const out = {};
  for (const f of files) {
    let src = await (await fetch(prefix + f + ".jsx")).text();
    src = src.replace(/import\s+React.*?;/g, "").replace(/export\s+function/g, "function");
    const names = [...src.matchAll(/function\s+([A-Z]\w+)/g)].map((m) => m[1]);
    const wrapped = "function __m(React){" + src + "\nreturn {" + names.join(",") + "};}";
    const code = Babel.transform(wrapped, { presets: ["react"] }).code;
    Object.assign(out, new Function(code + "\nreturn __m;")()(React));
  }
  return out;
};
