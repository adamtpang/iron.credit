import { createContext, useContext, useEffect, useState } from "react";

export const PALETTES = {
  light: {
    bg: "#faf8f3", panel: "#ffffff", panel2: "#f5f2ea", line: "#e8e3d8",
    ink: "#191510", mut: "#6c675e", amber: "#f7931a", amber2: "#c2710a", green: "#138a5a",
    phone: "linear-gradient(180deg,#ffffff,#f6f3ec)",
    glow1: "rgba(247,147,26,.10)", glow2: "rgba(247,147,26,.05)",
  },
  dark: {
    bg: "#0a0a0c", panel: "#121218", panel2: "#16161d", line: "#26262f",
    ink: "#f4f1e9", mut: "#8d8d99", amber: "#f7931a", amber2: "#ffc46b", green: "#5ee0a0",
    phone: "linear-gradient(180deg,#0e0e13,#0b0b0f)",
    glow1: "rgba(247,147,26,.12)", glow2: "rgba(247,147,26,.07)",
  },
};

const ThemeContext = createContext(null);

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    if (typeof localStorage !== "undefined") {
      const saved = localStorage.getItem("btcsave-theme");
      if (saved === "light" || saved === "dark") return saved;
    }
    return "light"; // light mode is the default
  });

  useEffect(() => {
    if (typeof localStorage !== "undefined") localStorage.setItem("btcsave-theme", theme);
    document.documentElement.style.colorScheme = theme;
    document.body.style.background = PALETTES[theme].bg;
  }, [theme]);

  const toggle = () => setTheme((t) => (t === "light" ? "dark" : "light"));

  return (
    <ThemeContext.Provider value={{ theme, toggle, C: PALETTES[theme] }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
