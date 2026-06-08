import { useState } from "react";
import { Check } from "lucide-react";

export default function WaitlistForm({ C, big, cta = "Get early access" }) {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);
  if (done) {
    return (
      <div className="flex items-center" style={{ gap: 9, color: C.green, fontSize: 14, fontWeight: 600 }}>
        <Check size={18} /> You are on the list. We will be in touch.
      </div>
    );
  }
  return (
    <form onSubmit={(e) => { e.preventDefault(); if (email.trim()) setDone(true); }}
      style={{ display: "flex", gap: 8, flexWrap: "wrap", maxWidth: big ? 460 : 420 }}>
      <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@email.com"
        style={{ flex: "1 1 200px", minWidth: 0, padding: "12px 14px", borderRadius: 11, border: `1px solid ${C.line}`, background: C.panel, color: C.ink, fontSize: 14, outline: "none" }} />
      <button type="submit" style={{ padding: "12px 18px", borderRadius: 11, border: "none", background: C.amber, color: C.accentInk, fontSize: 14, fontWeight: 700, cursor: "pointer", whiteSpace: "nowrap" }}>{cta}</button>
    </form>
  );
}
