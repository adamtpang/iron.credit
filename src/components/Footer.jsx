import { Link } from "react-router-dom";
import { useTheme } from "../theme.jsx";

export default function Footer() {
  const { C } = useTheme();
  const links = [
    ["/about", "About Iron"],
    ["/contact", "Contact"],
    ["/privacy", "Privacy policy"],
    ["/demo", "Concept demo"],
    ["/legends", "Credit legends"],
  ];
  return (
    <footer style={{ maxWidth: 1000, margin: "0 auto", padding: "28px 24px 48px", borderTop: `1px solid ${C.line}`, color: C.mut, fontSize: 14 }}>
      <nav aria-label="Site" style={{ display: "flex", flexWrap: "wrap", gap: 18, marginBottom: 14 }}>
        {links.map(([to, label]) => <Link key={to} to={to} style={{ color: C.ink }}>{label}</Link>)}
      </nav>
      <p style={{ margin: 0, lineHeight: 1.6 }}>Iron is a concept prototype operated by <a href="https://adampang.com" rel="author" style={{ color: C.ink, textDecoration: "underline" }}>Adam Pang</a>. No loans, cards, or custody services are offered.</p>
    </footer>
  );
}
