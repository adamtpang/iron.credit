import { Link } from "react-router-dom";
import Nav from "./Nav.jsx";
import Footer from "./Footer.jsx";
import { useTheme } from "../theme.jsx";

export default function InfoPage({ eyebrow, title, children }) {
  const { C } = useTheme();
  return <>
    <Nav right={<Link to="/demo">Explore the prototype</Link>} />
    <main style={{ maxWidth: 760, margin: "0 auto", padding: "40px 24px 64px", lineHeight: 1.7 }}>
      <p style={{ color: C.amber, fontSize: 13, fontWeight: 700, letterSpacing: ".12em", textTransform: "uppercase" }}>{eyebrow}</p>
      <h1 className="disp" style={{ fontSize: "clamp(34px,6vw,56px)", lineHeight: 1.1, margin: "16px 0 24px" }}>{title}</h1>
      <div style={{ color: C.mut, fontSize: 17 }}>{children}</div>
    </main>
    <Footer />
  </>;
}
