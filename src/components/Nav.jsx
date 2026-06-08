import { Link } from "react-router-dom";
import { Bitcoin } from "lucide-react";
import { useTheme } from "../theme.jsx";
import ThemeToggle from "./ThemeToggle.jsx";

export default function Nav({ right }) {
  const { C } = useTheme();
  return (
    <div className="flex items-center justify-between" style={{ maxWidth: 1080, margin: "0 auto", padding: "18px 4px" }}>
      <Link to="/" className="flex items-center" style={{ gap: 10 }}>
        <div style={{ width: 32, height: 32, borderRadius: 9, background: `linear-gradient(145deg, ${C.amber}, #c96f0c)`, display: "grid", placeItems: "center", boxShadow: "0 6px 18px rgba(247,147,26,.30)" }}>
          <Bitcoin size={19} color="#1a0f00" strokeWidth={2.4} />
        </div>
        <span className="disp" style={{ fontWeight: 800, fontSize: 18, letterSpacing: "-.01em", color: C.ink }}>Iron</span>
      </Link>
      <div className="flex items-center" style={{ gap: 12 }}>
        {right}
        <ThemeToggle />
      </div>
    </div>
  );
}
