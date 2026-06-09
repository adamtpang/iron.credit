import { useState, useEffect } from "react";
import { Flame, Trophy, TrendingUp, TrendingDown, Wallet, Target, Rocket, Shield, Check } from "lucide-react";
import { useTheme } from "./theme.jsx";
import Nav from "./components/Nav.jsx";

const KEY = "iron-os-v1";
const DANGER = "#d64545";

const DEFAULT = {
  finances: { income: 0, expenses: 1200, savings: 15000 },
  metrics: { waitlist: 0, calls: 0, posts: 0 },
  streak: 0,
  roadmap: [
    { stage: "0 · Foundation", items: ["Waitlist captures emails", "Workspace email live", "Cofounder funnel open", "First 10 discovery calls", "Concierge prototype filmed", "Incorporation started", "Building in public daily"] },
    { stage: "1 · Proof", items: ["50 discovery calls", "Cofounder trial run", "Singapore Pte Ltd incorporated", "Rain conversation open", "Pre-seed deck ready", "Graveyard + calculator live"] },
    { stage: "2 · Team & capital", items: ["Cofounder signed", "Pre-seed conversations open", "Licensing counsel engaged", "Working demo v1"] },
    { stage: "3 · Raise & build", items: ["Pre-seed closing", "Team of 2 to 3", "Rain integration started", "Alpha users lined up"] },
    { stage: "4 · Alpha", items: ["Private alpha live in PH", "Licensing path locked", "Debt-facility conversations"] },
    { stage: "5 · Beta", items: ["Proof of reserves live", "Closed beta converting waitlist", "First real loan book"] },
  ],
  done: {}, // key `${si}-${ii}` -> true
};

const TIERS = [
  [0, "Day 1"], [1, "Founder"], [6, "Builder"], [13, "Operator"], [21, "Captain"], [30, "Iron CEO"],
];
const PRODUCTS = [
  ["Free credit score", "Live", "green"],
  ["Bitcoin-backed credit line", "Building", "amber"],
  ["Iron Visa card", "Next", "amber"],
  ["Larger BTC loans", "Later", "mut"],
  ["Crypto-backed mortgages", "Later", "mut"],
];
const ORG = [
  ["Product / Eng", "Adam", "Founding engineer"],
  ["Risk / Credit", "Adam", "Head of credit (the Levchin)"],
  ["Compliance / Licensing", "Adam + counsel", "Compliance lead"],
  ["Growth", "Adam", "Growth lead"],
  ["Ops / Finance", "Adam", "Ops lead"],
  ["Partnerships / Rails", "Adam", "BD lead"],
];

const fmt = (n) => "$" + Math.round(Number(n) || 0).toLocaleString("en-US");

export default function OS() {
  const { C } = useTheme();
  const [s, setS] = useState(() => {
    try { const r = JSON.parse(localStorage.getItem(KEY)); if (r) return { ...DEFAULT, ...r }; } catch (_) {}
    return DEFAULT;
  });
  useEffect(() => { try { localStorage.setItem(KEY, JSON.stringify(s)); } catch (_) {} }, [s]);

  const setFin = (k, v) => setS((p) => ({ ...p, finances: { ...p.finances, [k]: Number(v) || 0 } }));
  const setMet = (k, v) => setS((p) => ({ ...p, metrics: { ...p.metrics, [k]: Number(v) || 0 } }));
  const toggle = (k) => setS((p) => ({ ...p, done: { ...p.done, [k]: !p.done[k] } }));

  const totalItems = s.roadmap.reduce((a, st) => a + st.items.length, 0);
  const doneCount = Object.values(s.done).filter(Boolean).length;
  const tier = [...TIERS].reverse().find(([n]) => doneCount >= n) || TIERS[0];
  const nextTier = TIERS.find(([n]) => n > doneCount);
  const tierFloor = tier[0];
  const tierCeil = nextTier ? nextTier[0] : totalItems;
  const xpPct = Math.min(100, ((doneCount - tierFloor) / Math.max(1, tierCeil - tierFloor)) * 100);

  const { income, expenses, savings } = s.finances;
  const burn = expenses - income;
  const profitable = burn <= 0;
  const runway = profitable ? Infinity : savings / burn;
  const runwayColor = profitable || runway >= 12 ? C.green : runway >= 6 ? C.amber : DANGER;
  const runwayPct = profitable ? 100 : Math.min(100, (runway / 18) * 100);

  const card = { background: C.panel, border: `1px solid ${C.line}`, borderRadius: 16, padding: 18 };
  const num = { width: "100%", padding: "9px 11px", borderRadius: 10, border: `1px solid ${C.line}`, background: C.panel2, color: C.ink, fontSize: 15, fontWeight: 700, outline: "none" };
  const H = ({ children }) => <h2 className="disp" style={{ fontSize: 12.5, color: C.mut, textTransform: "uppercase", letterSpacing: ".1em", margin: "0 0 12px" }}>{children}</h2>;

  return (
    <div>
      <style>{`
        @media(min-width:760px){ .os-3{grid-template-columns:repeat(3,1fr)!important;} .os-2{grid-template-columns:1fr 1fr!important;} }
      `}</style>
      <Nav />
      <article style={{ maxWidth: 1000, margin: "0 auto", padding: "10px 20px 60px" }}>
        {/* Header: level + streak */}
        <div style={{ ...card, padding: 20, marginBottom: 16 }}>
          <div className="flex items-center justify-between" style={{ flexWrap: "wrap", gap: 14 }}>
            <div className="flex items-center" style={{ gap: 14 }}>
              <div style={{ width: 52, height: 52, borderRadius: 14, background: C.accentSoft, display: "grid", placeItems: "center" }}>
                <Trophy size={24} color={C.amber} />
              </div>
              <div>
                <div className="mono" style={{ fontSize: 11.5, color: C.mut, letterSpacing: ".1em", textTransform: "uppercase" }}>Founder level</div>
                <div className="disp" style={{ fontSize: 24, fontWeight: 800, color: C.ink, lineHeight: 1.1 }}>{tier[1]}</div>
              </div>
            </div>
            <button onClick={() => setS((p) => ({ ...p, streak: p.streak + 1 }))} title="Add a day you shipped, called a user, or posted"
              className="flex items-center" style={{ gap: 8, padding: "10px 16px", borderRadius: 12, border: `1px solid ${C.line}`, background: C.panel2, cursor: "pointer" }}>
              <Flame size={20} color={s.streak > 0 ? C.amber : C.mut} />
              <span className="disp tnum" style={{ fontSize: 22, fontWeight: 800, color: C.ink }}>{s.streak}</span>
              <span style={{ fontSize: 12, color: C.mut }}>day streak</span>
            </button>
          </div>
          <div style={{ marginTop: 16 }}>
            <div className="flex items-center justify-between" style={{ fontSize: 11.5, color: C.mut, marginBottom: 5 }}>
              <span>{doneCount} of {totalItems} milestones</span>
              <span>{nextTier ? `next: ${nextTier[1]}` : "max level"}</span>
            </div>
            <div style={{ height: 8, borderRadius: 99, background: C.line, overflow: "hidden" }}>
              <div style={{ width: `${xpPct}%`, height: "100%", background: C.amber }} />
            </div>
          </div>
        </div>

        {/* Money */}
        <H>Money</H>
        <div className="os-3" style={{ display: "grid", gridTemplateColumns: "1fr", gap: 12, marginBottom: 10 }}>
          {[["Income / mo", "income"], ["Expenses / mo", "expenses"], ["Savings", "savings"]].map(([label, k]) => (
            <div key={k} style={card}>
              <div className="flex items-center" style={{ gap: 7, marginBottom: 8, color: C.mut, fontSize: 12.5 }}>
                <Wallet size={14} /> {label}
              </div>
              <input type="number" value={s.finances[k]} onChange={(e) => setFin(k, e.target.value)} style={num} />
            </div>
          ))}
        </div>
        <div className="os-2" style={{ display: "grid", gridTemplateColumns: "1fr", gap: 12, marginBottom: 22 }}>
          <div style={card}>
            <div className="flex items-center justify-between" style={{ marginBottom: 6 }}>
              <span className="flex items-center" style={{ gap: 7, color: C.mut, fontSize: 12.5 }}>{profitable ? <TrendingUp size={14} color={C.green} /> : <TrendingDown size={14} color={DANGER} />} Net burn / mo</span>
              <span className="disp tnum" style={{ fontSize: 18, fontWeight: 800, color: profitable ? C.green : C.ink }}>{profitable ? "profitable" : fmt(burn)}</span>
            </div>
          </div>
          <div style={card}>
            <div className="flex items-center justify-between" style={{ marginBottom: 8 }}>
              <span className="flex items-center" style={{ gap: 7, color: C.mut, fontSize: 12.5 }}><Target size={14} /> Runway</span>
              <span className="disp tnum" style={{ fontSize: 18, fontWeight: 800, color: runwayColor }}>{profitable ? "infinite" : `${runway.toFixed(1)} mo`}</span>
            </div>
            <div style={{ height: 8, borderRadius: 99, background: C.line, overflow: "hidden" }}>
              <div style={{ width: `${runwayPct}%`, height: "100%", background: runwayColor }} />
            </div>
            <div style={{ fontSize: 11, color: C.mut, marginTop: 6 }}>target: 18 months of runway</div>
          </div>
        </div>

        {/* North star + inputs */}
        <H>North star and weekly inputs</H>
        <div className="os-3" style={{ display: "grid", gridTemplateColumns: "1fr", gap: 12, marginBottom: 22 }}>
          {[["Waitlist signups", "waitlist", "the north star"], ["Discovery calls", "calls", "target 10 / wk"], ["Build-in-public posts", "posts", "target 5 to 7 / wk"]].map(([label, k, hint]) => (
            <div key={k} style={card}>
              <div className="flex items-center justify-between" style={{ marginBottom: 8 }}>
                <span style={{ color: C.mut, fontSize: 12.5 }}>{label}</span>
                <span className="mono" style={{ fontSize: 10.5, color: C.mut }}>{hint}</span>
              </div>
              <input type="number" value={s.metrics[k]} onChange={(e) => setMet(k, e.target.value)} style={num} />
            </div>
          ))}
        </div>

        {/* Problem + products */}
        <div className="os-2" style={{ display: "grid", gridTemplateColumns: "1fr", gap: 16, marginBottom: 22 }}>
          <div>
            <H>The problem</H>
            <div style={card}>
              <p className="body" style={{ margin: 0, fontSize: 14, lineHeight: 1.6, color: C.ink }}>
                Bitcoiners are asset-rich and cash-poor by choice, and billions more are rejected by banks. Bitcoin is the collateral that serves both. Let people spend their bitcoin's value without selling it, non-custodial and radically transparent.
              </p>
            </div>
          </div>
          <div>
            <H>Solutions and products</H>
            <div style={{ ...card, display: "grid", gap: 9 }}>
              {PRODUCTS.map(([name, status, tone], i) => (
                <div key={i} className="flex items-center justify-between">
                  <span style={{ color: C.ink, fontSize: 13.5, fontWeight: 600 }}>{name}</span>
                  <span style={{ fontSize: 11, fontWeight: 700, padding: "3px 9px", borderRadius: 99, color: tone === "green" ? C.green : tone === "amber" ? C.amber : C.mut, border: `1px solid ${tone === "green" ? C.green : tone === "amber" ? C.amber : C.line}` }}>{status}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Roadmap with gamified progress */}
        <H>The roadmap (check off to level up)</H>
        <div style={{ display: "grid", gap: 12, marginBottom: 22 }}>
          {s.roadmap.map((st, si) => {
            const sd = st.items.filter((_, ii) => s.done[`${si}-${ii}`]).length;
            const pct = Math.round((sd / st.items.length) * 100);
            return (
              <div key={si} style={card}>
                <div className="flex items-center justify-between" style={{ marginBottom: 10 }}>
                  <span className="disp" style={{ fontSize: 15, fontWeight: 700, color: C.ink }}>{st.stage}</span>
                  <span className="mono tnum" style={{ fontSize: 12, color: pct === 100 ? C.green : C.mut }}>{sd}/{st.items.length}</span>
                </div>
                <div style={{ height: 6, borderRadius: 99, background: C.line, overflow: "hidden", marginBottom: 12 }}>
                  <div style={{ width: `${pct}%`, height: "100%", background: pct === 100 ? C.green : C.amber }} />
                </div>
                <div style={{ display: "grid", gap: 7 }}>
                  {st.items.map((it, ii) => {
                    const k = `${si}-${ii}`; const on = !!s.done[k];
                    return (
                      <button key={ii} onClick={() => toggle(k)} className="flex items-center" style={{ gap: 9, background: "none", border: "none", padding: 0, cursor: "pointer", textAlign: "left" }}>
                        <span style={{ width: 18, height: 18, borderRadius: 6, border: `1px solid ${on ? C.green : C.line}`, background: on ? C.green : "transparent", display: "grid", placeItems: "center", flexShrink: 0 }}>
                          {on && <Check size={12} color={C.accentInk} />}
                        </span>
                        <span style={{ fontSize: 13.5, color: on ? C.mut : C.ink, textDecoration: on ? "line-through" : "none" }}>{it}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        {/* Org chart */}
        <H>Org chart</H>
        <div className="os-3" style={{ display: "grid", gridTemplateColumns: "1fr", gap: 12, marginBottom: 22 }}>
          {ORG.map(([fn, owner, hire], i) => (
            <div key={i} style={card}>
              <div className="disp" style={{ fontSize: 14.5, fontWeight: 700, color: C.ink, marginBottom: 6 }}>{fn}</div>
              <div style={{ fontSize: 12.5, color: C.mut }}>Now: <span style={{ color: C.ink }}>{owner}</span></div>
              <div style={{ fontSize: 12.5, color: C.mut, marginTop: 2 }}>Next hire: {hire}</div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between" style={{ flexWrap: "wrap", gap: 12, paddingTop: 16, borderTop: `1px solid ${C.line}` }}>
          <span className="flex items-center" style={{ gap: 7, fontSize: 12, color: C.mut }}>
            <Shield size={13} color={C.green} /> Private to your browser. Your numbers save locally, they are never committed or published.
          </span>
          <button onClick={() => { if (confirm("Reset the dashboard to defaults?")) setS(DEFAULT); }} style={{ fontSize: 12, color: C.mut, background: "none", border: `1px solid ${C.line}`, borderRadius: 9, padding: "6px 12px", cursor: "pointer" }}>Reset</button>
        </div>
      </article>
    </div>
  );
}
