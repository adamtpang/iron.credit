import { Link } from "react-router-dom";
import Nav from "./components/Nav.jsx";
import WaitlistForm from "./components/WaitlistForm.jsx";
import { useTheme } from "./theme.jsx";
import { IronCard } from "../design-system/components/brand/IronCard.jsx";

export default function ConceptLanding() {
  const { C } = useTheme();
  return <><Nav right={<Link to="/demo">Explore the prototype</Link>} />
    <main style={{maxWidth:1000,margin:"0 auto",padding:"48px 24px 80px"}}>
      <p style={{color:C.amber,fontSize:13,fontWeight:700,letterSpacing:".12em",textTransform:"uppercase"}}>Bitcoin-backed credit, in development</p>
      <h1 className="disp" style={{fontSize:"clamp(40px,8vw,76px)",lineHeight:1.06,maxWidth:780,margin:"24px 0"}}>Keep your bitcoin.<br />Explore another way to spend.</h1>
      <p style={{fontSize:19,lineHeight:1.7,maxWidth:640,color:C.mut}}>Iron is a concept for borrowing dollars against bitcoin without selling it. This site explains the proposed experience and lets you explore illustrative product screens.</p>
      <p style={{fontSize:15,lineHeight:1.7,maxWidth:640,color:C.mut}}>Loans and cards are not available. There is no verified issuer partnership, operating custody service, or promise of approval. Rates, thresholds and balances in the demo are illustrative assumptions.</p>
      <div style={{display:"flex",flexWrap:"wrap",gap:18,alignItems:"center",margin:"32px 0"}}><Link to="/demo" style={{background:C.amber,color:C.accentInk,padding:"15px 24px",borderRadius:12,fontWeight:700}}>Explore the concept demo</Link><Link to="/how">Read the proposed model</Link></div>
      <div style={{maxWidth:500,margin:"40px 0",pointerEvents:"none"}} aria-label="Illustrative Iron card design"><IronCard holder="CONCEPT CARD" style={{width:"100%",maxWidth:380,height:"auto",aspectRatio:"1.586"}} /></div>
      <section style={{borderTop:`1px solid ${C.line}`,paddingTop:32,maxWidth:650}}><h2 className="disp" style={{fontSize:28}}>Follow the idea</h2><p style={{color:C.mut,lineHeight:1.6}}>Share your interest through the external form. This is an expression of interest, not a credit application or a reservation for a live card.</p><WaitlistForm C={C} /></section>
    </main></>;
}
