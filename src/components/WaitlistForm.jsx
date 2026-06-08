import { useState } from "react";
import { Check } from "lucide-react";

// Paste your Google Apps Script web-app /exec URL (or a Formspree endpoint) here
// and every signup will be captured. Until then the form still confirms gracefully.
const WAITLIST_ENDPOINT = "";

export default function WaitlistForm({ C, big, cta = "Get early access" }) {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    const v = email.trim();
    if (!v) return;
    setDone(true); // optimistic confirm
    if (WAITLIST_ENDPOINT) {
      try {
        await fetch(WAITLIST_ENDPOINT, {
          method: "POST",
          mode: "no-cors",
          headers: { "Content-Type": "text/plain;charset=utf-8" },
          body: JSON.stringify({ email: v, source: typeof location !== "undefined" ? location.pathname : "" }),
        });
      } catch (_) { /* fire and forget */ }
    }
  };

  if (done) {
    return (
      <div className="flex items-center" style={{ gap: 9, color: C.green, fontSize: 14, fontWeight: 600 }}>
        <Check size={18} /> You are on the list. We will be in touch.
      </div>
    );
  }
  return (
    <form onSubmit={submit} style={{ display: "flex", gap: 8, flexWrap: "wrap", maxWidth: big ? 460 : 420 }}>
      <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@email.com"
        style={{ flex: "1 1 200px", minWidth: 0, padding: "12px 14px", borderRadius: 11, border: `1px solid ${C.line}`, background: C.panel, color: C.ink, fontSize: 14, outline: "none" }} />
      <button type="submit" style={{ padding: "12px 18px", borderRadius: 11, border: "none", background: C.amber, color: C.accentInk, fontSize: 14, fontWeight: 700, cursor: "pointer", whiteSpace: "nowrap" }}>{cta}</button>
    </form>
  );
}
