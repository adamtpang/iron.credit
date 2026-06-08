import { useState } from "react";
import { CalendarDays } from "lucide-react";
import { useTheme } from "../theme.jsx";
import { usd, usd0, num, project } from "../lib.js";

export default function SavingsCalendar() {
  const { C } = useTheme();
  const [weekly, setWeekly] = useState(25);
  const year = project(weekly, 1, 100000, 0.2);
  const four = project(weekly, 4, 100000, 0.2);
  const weeks = 52;

  return (
    <section id="calculator" style={{ maxWidth: 1080, margin: "0 auto", padding: "30px 18px" }}>
      <div style={{ background: C.panel, border: `1px solid ${C.line}`, borderRadius: 20, padding: 22 }}>
        <div className="flex items-center" style={{ gap: 9, marginBottom: 6 }}>
          <CalendarDays size={18} color={C.amber} />
          <h2 className="disp" style={{ fontSize: 13, color: C.mut, textTransform: "uppercase", letterSpacing: ".12em", margin: 0 }}>Your stacking calendar</h2>
        </div>
        <p style={{ color: C.mut, fontSize: 14, margin: "0 0 16px" }}>One small buy, every week. Here is a year of it, on autopilot.</p>

        <div className="cal-grid" style={{ display: "grid", gridTemplateColumns: "1fr", gap: 20 }}>
          <div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(13, 1fr)", gap: 5 }}>
              {Array.from({ length: weeks }).map((_, i) => {
                const t = (i + 1) / weeks;
                return (
                  <div key={i} title={`Week ${i + 1}`} style={{ aspectRatio: "1 / 1", borderRadius: 5, background: C.amber, opacity: 0.16 + t * 0.82, border: `1px solid ${C.line}` }} />
                );
              })}
            </div>
            <div style={{ color: C.mut, fontSize: 11, marginTop: 10 }}>52 automatic buys a year. You never have to think about it.</div>
          </div>

          <div style={{ alignSelf: "center" }}>
            <div className="flex items-center justify-between" style={{ marginBottom: 6 }}>
              <span style={{ color: C.mut, fontSize: 12 }}>Weekly amount</span>
              <span className="disp tnum" style={{ color: C.ink, fontSize: 18, fontWeight: 800 }}>{usd(weekly)}</span>
            </div>
            <input type="range" min={5} max={200} step={5} value={weekly} onChange={(e) => setWeekly(parseFloat(e.target.value))} style={{ width: "100%", accentColor: C.amber, cursor: "pointer" }} />
            <div className="grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginTop: 14 }}>
              <div style={{ background: C.panel2, border: `1px solid ${C.line}`, borderRadius: 12, padding: 12 }}>
                <div style={{ color: C.mut, fontSize: 11, textTransform: "uppercase", letterSpacing: ".04em" }}>After 1 year</div>
                <div className="disp tnum" style={{ color: C.ink, fontSize: 20, fontWeight: 800, marginTop: 3 }}>{num(year.sats)} <span style={{ fontSize: 12, color: C.amber }}>sats</span></div>
                <div className="tnum" style={{ color: C.green, fontSize: 12, marginTop: 2 }}>≈ {usd0(year.value)} <span style={{ color: C.mut }}>· in {usd0(year.invested)}</span></div>
              </div>
              <div style={{ background: C.panel2, border: `1px solid ${C.line}`, borderRadius: 12, padding: 12 }}>
                <div style={{ color: C.mut, fontSize: 11, textTransform: "uppercase", letterSpacing: ".04em" }}>After 4 years</div>
                <div className="disp tnum" style={{ color: C.ink, fontSize: 20, fontWeight: 800, marginTop: 3 }}>{num(four.sats)} <span style={{ fontSize: 12, color: C.amber }}>sats</span></div>
                <div className="tnum" style={{ color: C.green, fontSize: 12, marginTop: 2 }}>≈ {usd0(four.value)} <span style={{ color: C.mut }}>· in {usd0(four.invested)}</span></div>
              </div>
            </div>
            <div style={{ color: C.mut, fontSize: 10.5, marginTop: 8 }}>Illustrative projection. Not financial advice.</div>
          </div>
        </div>
      </div>
    </section>
  );
}
