import { Link } from "react-router-dom";
import Nav from "./components/Nav.jsx";
import Footer from "./components/Footer.jsx";
import WaitlistForm from "./components/WaitlistForm.jsx";
import { useTheme } from "./theme.jsx";
import { IronCard } from "../design-system/components/brand/IronCard.jsx";

export default function ConceptLanding() {
  const { C } = useTheme();
  const h2 = { fontSize: 28, margin: "0 0 12px" };
  const p = { color: C.mut, lineHeight: 1.7, fontSize: 17 };
  const section = { borderTop: `1px solid ${C.line}`, paddingTop: 32, marginTop: 40, maxWidth: 680 };
  return <><Nav right={<Link to="/demo">Explore the prototype</Link>} />
    <main style={{maxWidth:1000,margin:"0 auto",padding:"48px 24px 80px"}}>
      <p style={{color:C.amber,fontSize:13,fontWeight:700,letterSpacing:".12em",textTransform:"uppercase"}}>Bitcoin-backed credit, in development</p>
      <h1 className="disp" style={{fontSize:"clamp(40px,8vw,76px)",lineHeight:1.06,maxWidth:780,margin:"24px 0"}}>Keep your bitcoin.<br />Explore another way to spend.</h1>
      <p style={{fontSize:19,lineHeight:1.7,maxWidth:640,color:C.mut}}>Iron is a concept for borrowing dollars against bitcoin without selling it. This site explains the proposed experience and lets you explore illustrative product screens.</p>
      <p style={{fontSize:15,lineHeight:1.7,maxWidth:640,color:C.mut}}>Loans and cards are not available. There is no verified issuer partnership, operating custody service, or promise of approval. Rates, thresholds and balances in the demo are illustrative assumptions.</p>
      <div style={{display:"flex",flexWrap:"wrap",gap:18,alignItems:"center",margin:"32px 0"}}><Link to="/demo" style={{background:C.amber,color:C.accentInk,padding:"15px 24px",borderRadius:12,fontWeight:700}}>Explore the concept demo</Link><Link to="/how">Read the proposed model</Link></div>
      <div style={{maxWidth:500,margin:"40px 0",pointerEvents:"none"}} aria-label="Illustrative Iron card design"><IronCard holder="CONCEPT CARD" style={{width:"100%",maxWidth:380,height:"auto",aspectRatio:"1.586"}} /></div>

      <section style={section}>
        <h2 className="disp" style={h2}>What the Iron concept proposes</h2>
        <p style={p}>The Iron concept describes a credit line secured by bitcoin: a holder would lock bitcoin as collateral, borrow dollars against part of its value, spend those dollars, and repay the balance to release the collateral, all without selling the bitcoin.</p>
        <p style={p}>Custody in the Iron concept is designed around a collaborative 2 of 3 multisig wallet, where the holder keeps one key and the operator keeps one, so the operator could never move the collateral alone. This is a design goal for a future product, not a service that exists today.</p>
      </section>

      <section style={section}>
        <h2 className="disp" style={h2}>What the concept demo shows</h2>
        <p style={p}>The Iron concept demo is a free, browser-only simulation with no sign-up. The demo locks 0.15 BTC at an illustrative bitcoin price of $100,000, opens a credit line at 60% loan-to-value, lets you spend and repay, and shows that collateral would be liquidated if loan-to-value reached 85%.</p>
        <p style={p}>Every balance, transaction ID and settlement in the Iron concept demo is simulated, and no real bitcoin, dollars or personal data move through it. The numbers are illustrative assumptions chosen to show how loan-to-value and liquidation interact, not offered rates or terms.</p>
      </section>

      <section style={section}>
        <h2 className="disp" style={h2}>Lessons from failed bitcoin lenders</h2>
        <p style={p}>Iron's design rules come from studying the crypto lenders that collapsed in 2022. Voyager filed for bankruptcy in July 2022 after one undercollateralized loan to Three Arrows Capital, Celsius filed in July 2022 after rehypothecating customer deposits, and BlockFi filed in November 2022 after its exposure to FTX.</p>
        <p style={p}>The resulting Iron design rules are simple to state: never lend out customer collateral, always stay overcollateralized, publish the liquidation threshold, and never sell an interest-bearing yield account. The <Link to="/legends" style={{color:C.ink,textDecoration:"underline"}}>credit legends research page</Link> compares the concept with historic credit companies.</p>
      </section>

      <section style={section}>
        <h2 className="disp" style={h2}>Who is behind Iron</h2>
        <p style={p}>Iron is an independent concept project operated by Adam Pang, a builder who publishes his work at adampang.com. Iron is not a bank, lender, card issuer or licensed financial institution, and nothing on iron.credit is an offer of credit, investment advice, or a solicitation.</p>
        <p style={{...p, fontSize: 15}}>Questions about the concept can go through the <Link to="/contact" style={{color:C.ink,textDecoration:"underline"}}>contact page</Link>. Read <Link to="/about" style={{color:C.ink,textDecoration:"underline"}}>about Iron</Link> for the project status, and the <Link to="/privacy" style={{color:C.ink,textDecoration:"underline"}}>privacy policy</Link> for what this site collects.</p>
      </section>

      <section style={section}><h2 className="disp" style={h2}>Follow the idea</h2><p style={{color:C.mut,lineHeight:1.6}}>Share your interest through the external form. This is an expression of interest, not a credit application or a reservation for a live card.</p><WaitlistForm C={C} /></section>
    </main>
    <Footer /></>;
}
