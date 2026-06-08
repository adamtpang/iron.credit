import { useState } from "react";
import { Link } from "react-router-dom";
import { CalendarClock, ShieldCheck, TrendingUp, Wallet, ArrowLeft } from "lucide-react";
import { useTheme } from "./theme.jsx";
import { MARKETS, usd0, usd, num } from "./lib.js";
import Nav from "./components/Nav.jsx";
import PhoneMock from "./components/PhoneMock.jsx";

const PRESETS = [
  { key: "reality", label: "SE-Asia reality", users: 155000, weekly: 25 },
  { key: "headline", label: "Headline target", users: 20000, weekly: 200 },
];

export default function Investors() {
  const { C } = useTheme();
  const [market, setMarket] = useState("PH");
  const [weekly, setWeekly] = useState(25);
  const [years, setYears] = useState(4);
  const [price, setPrice] = useState(100000);
  const [apr, setApr] = useState(0.2);

  const [users, setUsers] = useState(155000);
  const [bizWeekly, setBizWeekly] = useState(25);
  const [fee, setFee] = useState(1.5);

  const gmvYr = users * bizWeekly * 52;
  const rev = gmvYr * (fee / 100);
  const target = 3_000_000;
  const activePreset = PRESETS.find((p) => p.users === users && p.weekly === bizWeekly)?.key;

  const Stat = ({ label, value, sub, accent }) => (
    <div style={{ background: C.panel2, border: `1px solid ${C.line}`, borderRadius: 14, padding: 12 }}>
      <div style={{ color: C.mut, fontSize: 11, letterSpacing: ".04em", textTransform: "uppercase" }}>{label}</div>
      <div className="disp tnum" style={{ color: accent || C.ink, fontSize: 22, fontWeight: 700, lineHeight: 1.1, marginTop: 4 }}>{value}</div>
      {sub && <div className="tnum" style={{ color: C.mut, fontSize: 11, marginTop: 2 }}>{sub}</div>}
    </div>
  );

  const Slider = ({ label, val, set, min, max, step, fmt }) => (
    <div style={{ marginBottom: 12 }}>
      <div className="flex justify-between items-baseline" style={{ marginBottom: 4 }}>
        <span style={{ color: C.mut, fontSize: 12 }}>{label}</span>
        <span className="disp tnum" style={{ color: C.ink, fontSize: 15, fontWeight: 700 }}>{fmt(val)}</span>
      </div>
      <input type="range" min={min} max={max} step={step} value={val}
        onChange={(e) => set(parseFloat(e.target.value))}
        style={{ width: "100%", accentColor: C.amber, cursor: "pointer" }} />
    </div>
  );

  const navRight = (
    <Link to="/" className="flex items-center" style={{ gap: 6, color: C.mut, fontSize: 13.5, fontWeight: 500 }}>
      <ArrowLeft size={14} /> Consumer site
    </Link>
  );

  return (
    <div>
      <Nav right={navRight} />
      <div style={{ maxWidth: 1080, margin: "0 auto", padding: "8px 18px 40px" }}>
        <div style={{ marginBottom: 16 }}>
          <h1 className="disp" style={{ fontSize: "clamp(24px,3.2vw,32px)", fontWeight: 800, color: C.ink, letterSpacing: "-.01em", margin: "0 0 4px" }}>Iron for investors</h1>
          <p style={{ color: C.mut, fontSize: 14 }}>The interactive model behind the savings app. Move the levers.</p>
        </div>

        <div style={{ display: "grid", gap: 16, gridTemplateColumns: "1fr" }} className="inv-grid">
          <style>{`@media(min-width:880px){.inv-grid{grid-template-columns:1.05fr .95fr !important;}}`}</style>

          {/* LEFT: the app */}
          <div style={{ background: C.panel, border: `1px solid ${C.line}`, borderRadius: 20, padding: 18 }}>
            <div className="flex items-center justify-between" style={{ marginBottom: 14 }}>
              <span className="disp" style={{ fontSize: 13, color: C.mut, textTransform: "uppercase", letterSpacing: ".12em" }}>The app</span>
              <div className="flex" style={{ gap: 6 }}>
                {Object.entries(MARKETS).map(([k, v]) => (
                  <button key={k} onClick={() => setMarket(k)}
                    style={{ border: `1px solid ${market === k ? C.amber : C.line}`, background: market === k ? C.accentSoft : "transparent", borderRadius: 9, padding: "5px 9px", cursor: "pointer", fontSize: 14 }}>
                    {v.flag}
                  </button>
                ))}
              </div>
            </div>

            <PhoneMock market={market} weekly={weekly} years={years} price={price} apr={apr} C={C} />

            <div style={{ marginTop: 14 }}>
              <Slider label="Weekly auto-buy" val={weekly} set={setWeekly} min={5} max={300} step={5} fmt={usd} />
              <Slider label="Time saving" val={years} set={setYears} min={1} max={8} step={0.5} fmt={(v) => `${v} yr`} />
              <div className="grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                <Slider label="Assumed BTC price" val={price} set={setPrice} min={40000} max={250000} step={5000} fmt={usd0} />
                <Slider label="Assumed yearly growth" val={apr} set={setApr} min={0} max={0.6} step={0.05} fmt={(v) => `${Math.round(v * 100)}%`} />
              </div>
              <div style={{ color: C.mut, fontSize: 10.5, marginTop: 2 }}>Illustrative projection. Assumptions are editable. Not financial advice.</div>
            </div>
          </div>

          {/* RIGHT: the business */}
          <div style={{ display: "grid", gap: 16, alignContent: "start" }}>
            <div style={{ background: C.panel, border: `1px solid ${C.line}`, borderRadius: 20, padding: 18 }}>
              <span className="disp" style={{ fontSize: 13, color: C.mut, textTransform: "uppercase", letterSpacing: ".12em" }}>The business</span>
              <p style={{ color: C.mut, fontSize: 12.5, lineHeight: 1.5, margin: "8px 0 12px" }}>
                The headline target is <span style={{ color: C.ink }}>20k users × $200/wk = $3M</span>. But the real SE-Asia saver does <span style={{ color: C.ink }}>~$25/wk</span>, so the same $3M comes from <span style={{ color: C.ink }}>~155k savers, just 0.2% of GCash's 81M users</span>. Both presets clear the bar; the second one is fundable.
              </p>

              <div className="flex" style={{ gap: 6, marginBottom: 12 }}>
                {PRESETS.map((p) => (
                  <button key={p.key} onClick={() => { setUsers(p.users); setBizWeekly(p.weekly); }}
                    style={{ flex: 1, border: `1px solid ${activePreset === p.key ? C.amber : C.line}`, background: activePreset === p.key ? C.accentSoft : "transparent", color: activePreset === p.key ? C.ink : C.mut, borderRadius: 9, padding: "8px 9px", cursor: "pointer", fontSize: 12, fontWeight: 600, textAlign: "left" }}>
                    {p.label}
                    <div style={{ fontWeight: 400, fontSize: 10.5, marginTop: 2, color: C.mut }}>{num(p.users)} × {usd0(p.weekly)}/wk</div>
                  </button>
                ))}
              </div>

              <div className="grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 12 }}>
                <Stat label="Annual GMV" value={usd0(gmvYr)} sub={`${num(users)} users · ${usd0(bizWeekly)}/wk`} />
                <Stat label="Revenue / yr" value={usd0(rev)} sub={`${fee}% take rate`} accent={rev >= target ? C.green : C.amber} />
              </div>

              <Slider label="Users" val={users} set={setUsers} min={5000} max={300000} step={5000} fmt={num} />
              <Slider label="Weekly buy / user" val={bizWeekly} set={setBizWeekly} min={10} max={500} step={5} fmt={usd0} />
              <Slider label="Take rate (all-in: trade + FX spread)" val={fee} set={setFee} min={0.5} max={3} step={0.25} fmt={(v) => `${v}%`} />

              <div style={{ marginTop: 8, height: 8, borderRadius: 99, background: C.panel2, overflow: "hidden", border: `1px solid ${C.line}` }}>
                <div style={{ width: `${Math.min(100, (rev / target) * 100)}%`, height: "100%", background: rev >= target ? C.green : `linear-gradient(90deg,${C.amber},${C.amber2})`, transition: "width .25s" }} />
              </div>
              <div className="tnum" style={{ fontSize: 12, color: rev >= target ? C.green : C.mut, marginTop: 6 }}>
                {rev >= target ? "✓ Past the $3M target" : `${Math.round((rev / target) * 100)}% to the $3M target`}
              </div>
            </div>

            <div style={{ background: C.panel, border: `1px solid ${C.line}`, borderRadius: 20, padding: 18 }}>
              <span className="disp" style={{ fontSize: 13, color: C.mut, textTransform: "uppercase", letterSpacing: ".12em" }}>Why it wins</span>
              <div style={{ display: "grid", gap: 9, marginTop: 12 }}>
                {[
                  [CalendarClock, "One job, done well", "Auto-buy a fixed amount every week. No trading, no charts, no jargon. A savings app, not an exchange."],
                  [Wallet, "Local rails first", "GCash, DANA, MoMo in, sats out. Bridge the money people already use."],
                  [ShieldCheck, "Self-custody on ramp", "Savings land in keys the user controls. A bank, not a casino. We integrate a licensed rail and stay non-custodial."],
                  [TrendingUp, "Backbone economics", "Recurring deposits compound into a bitcoin savings and banking layer."],
                ].map(([Icon, t, d], i) => (
                  <div key={i} className="flex" style={{ gap: 12, alignItems: "flex-start" }}>
                    <div style={{ flexShrink: 0, width: 30, height: 30, borderRadius: 9, background: C.panel2, border: `1px solid ${C.line}`, display: "grid", placeItems: "center" }}>
                      <Icon size={15} color={C.amber} />
                    </div>
                    <div>
                      <div style={{ fontSize: 13, fontWeight: 600, color: C.ink }}>{t}</div>
                      <div style={{ color: C.mut, fontSize: 12, lineHeight: 1.45 }}>{d}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
