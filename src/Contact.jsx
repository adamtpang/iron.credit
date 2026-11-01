import { Link } from "react-router-dom";
import InfoPage from "./components/InfoPage.jsx";
import WaitlistForm from "./components/WaitlistForm.jsx";
import { useTheme } from "./theme.jsx";

export default function Contact() {
  const { C } = useTheme();
  const a = { color: C.ink, textDecoration: "underline" };
  return <InfoPage eyebrow="Contact" title="Contact Iron">
    <p>Iron is a concept project operated by Adam Pang. The two ways to reach the project are the public interest form and the contact details Adam publishes on his own website. There is no customer support line, because there are no customers, accounts, loans, or cards.</p>
    <h2 className="disp" style={{ color: C.ink, fontSize: 26, margin: "32px 0 8px" }}>Register interest in the concept</h2>
    <p>The interest form is hosted on Google Forms. Submitting it is an expression of interest only, not a credit application or a reservation for a live card.</p>
    <WaitlistForm C={C} />
    <h2 className="disp" style={{ color: C.ink, fontSize: 26, margin: "32px 0 8px" }}>Contact the operator</h2>
    <p>For questions about the concept, partnerships, or this website, use the contact details listed at <a href="https://adampang.com" rel="author" style={a}>adampang.com</a>.</p>
    <p>Before sharing anything, you may want to read the <Link to="/privacy" style={a}>privacy policy</Link>.</p>
  </InfoPage>;
}
