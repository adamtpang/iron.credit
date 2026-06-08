import { Sun, Moon } from "lucide-react";
import { useTheme } from "../theme.jsx";

export default function ThemeToggle() {
  const { theme, toggle, C } = useTheme();
  return (
    <button onClick={toggle} aria-label="Toggle light or dark mode"
      style={{
        display: "grid", placeItems: "center", width: 34, height: 34, borderRadius: 9,
        border: `1px solid ${C.line}`, background: C.panel, color: C.ink, cursor: "pointer",
        transition: "background .2s, border-color .2s",
      }}>
      {theme === "light" ? <Moon size={16} /> : <Sun size={16} />}
    </button>
  );
}
