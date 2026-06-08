import { Link } from "react-router-dom";
import { useTheme } from "../theme.jsx";
import ThemeToggle from "./ThemeToggle.jsx";

export default function Nav({ right }) {
  const { C } = useTheme();
  return (
    <div className="flex items-center justify-between" style={{ maxWidth: 1080, margin: "0 auto", padding: "18px 4px" }}>
      <Link to="/" className="flex items-center" style={{ gap: 10 }}>
        <svg width="26" height="26" viewBox="0 0 64 64" fill="none" aria-label="Iron" style={{ color: C.ink, flexShrink: 0 }}>
          <path fill="currentColor" d="M11 9h42v10.5H39.5v25H53V55H11V44.5h13.5v-25H11V9Z" />
        </svg>
        <span className="disp" style={{ fontWeight: 700, fontSize: 19, letterSpacing: ".10em", color: C.ink }}>IRON</span>
      </Link>
      <div className="flex items-center" style={{ gap: 12 }}>
        {right}
        <ThemeToggle />
      </div>
    </div>
  );
}
