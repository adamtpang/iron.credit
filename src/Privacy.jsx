import { Link } from "react-router-dom";
import InfoPage from "./components/InfoPage.jsx";
import { useTheme } from "./theme.jsx";

export default function Privacy() {
  const { C } = useTheme();
  const a = { color: C.ink, textDecoration: "underline" };
  const h2 = { color: C.ink, fontSize: 26, margin: "32px 0 8px" };
  return <InfoPage eyebrow="Privacy" title="Privacy policy">
    <p>This privacy policy describes what the iron.credit website collects and which services process that data. Iron is a concept prototype operated by Adam Pang. The site has no accounts, takes no payments, and does not ask for financial information. Last updated 1 November 2026.</p>
    <h2 className="disp" style={h2}>Analytics</h2>
    <p>The iron.credit website uses PostHog (US cloud) to count page views and page leaves. General click autocapture, session recording, and surveys are turned off in the site code. PostHog's project settings can also load its page performance (web vitals) and dead-click measurement scripts, which record load timings and clicks that produce no response. PostHog stores a pseudonymous identifier in a first-party cookie and local storage, and receives the page address, referrer, browser and device details, and your IP address, which PostHog may use to estimate an approximate location.</p>
    <h2 className="disp" style={h2}>Hosting and fonts</h2>
    <p>The iron.credit website is hosted on Vercel, which processes standard request data such as IP address and user agent to serve pages and keep the service secure. Fonts are loaded from Google Fonts, so your browser sends a request, including your IP address, to Google servers when a page loads.</p>
    <h2 className="disp" style={h2}>Interest form</h2>
    <p>The optional interest form is hosted on Google Forms, outside this website. Anything you choose to submit there is collected by Google and visible to the operator, and is used only to follow up about the Iron concept. Google handles that data under its own privacy terms.</p>
    <h2 className="disp" style={h2}>Stored in your browser</h2>
    <p>The iron.credit website saves your light or dark theme choice in local storage under the key iron-theme. The concept demo runs entirely in your browser and does not send demo balances or actions anywhere.</p>
    <h2 className="disp" style={h2}>What Iron does not do</h2>
    <p>Iron does not sell personal data, show advertising, run credit checks, or collect bank, card, or wallet details. To ask about or remove data you submitted, use the details on the <Link to="/contact" style={a}>contact page</Link>.</p>
  </InfoPage>;
}
