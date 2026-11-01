import { Link } from "react-router-dom";
import InfoPage from "./components/InfoPage.jsx";
import { useTheme } from "./theme.jsx";

export default function About() {
  const { C } = useTheme();
  const a = { color: C.ink, textDecoration: "underline" };
  return <InfoPage eyebrow="About" title="About Iron">
    <p>Iron is a concept prototype for bitcoin-backed credit: a proposed way to borrow dollars against bitcoin without selling it. The site at iron.credit explains the idea and hosts an illustrative demo. Iron does not offer loans, cards, custody, or any other financial service.</p>
    <h2 className="disp" style={{ color: C.ink, fontSize: 26, margin: "32px 0 8px" }}>Who operates Iron</h2>
    <p>Iron is operated by Adam Pang, an independent builder who publishes his projects and contact details at <a href="https://adampang.com" rel="author" style={a}>adampang.com</a>. Iron is not a registered company, bank, lender, or card issuer, and it holds no financial licenses.</p>
    <h2 className="disp" style={{ color: C.ink, fontSize: 26, margin: "32px 0 8px" }}>Project status</h2>
    <p>Iron remains an early concept. There is no verified issuer or card network partnership, no operating custody service, and no promise of approval for any future product. Rates, thresholds, and balances shown anywhere on this site are illustrative assumptions, not offers.</p>
    <p>You can explore the <Link to="/demo" style={a}>concept demo</Link>, read the <Link to="/" style={a}>concept overview</Link>, or get in touch through the <Link to="/contact" style={a}>contact page</Link>.</p>
  </InfoPage>;
}
