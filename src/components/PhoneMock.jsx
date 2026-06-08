import { useMemo } from "react";
import { AreaChart, Area, XAxis, YAxis, ResponsiveContainer, Tooltip } from "recharts";
import { Repeat, ArrowRight } from "lucide-react";
import { MARKETS, usd, usd0, num, project } from "../lib.js";

export default function PhoneMock({ market = "PH", weekly = 25, years = 4, price = 100000, apr = 0.2, C }) {
  const m = MARKETS[market];
  const r = useMemo(() => project(weekly, years, price, apr), [weekly, years, price, apr]);
  const gid = "grad-" + market;

  return (
    <div style={{ background: C.phone, border: `1px solid ${C.line}`, borderRadius: 26, padding: 16, position: "relative", overflow: "hidden", boxShadow: "0 24px 70px rgba(0,0,0,.18)" }}>
      <div style={{ position: "absolute", top: 10, left: "50%", transform: "translateX(-50%)", width: 70, height: 5, borderRadius: 99, background: C.line }} />
      <div style={{ paddingTop: 14 }}>
        <div style={{ color: C.mut, fontSize: 12 }}>{m.flag} Saving in {m.name} · via {m.rail}</div>
        <div className="disp tnum" style={{ fontSize: 34, fontWeight: 800, marginTop: 6, letterSpacing: "-.02em", color: C.ink }}>
          {num(r.sats)} <span style={{ fontSize: 15, color: C.amber }}>sats</span>
        </div>
        <div className="tnum" style={{ color: C.green, fontSize: 13, marginTop: 2 }}>
          ≈ {usd(r.value)} <span style={{ color: C.mut }}>· invested {usd0(r.invested)}</span>
        </div>

        <div style={{ height: 132, margin: "12px -4px 4px" }}>
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={r.pts} margin={{ top: 6, right: 6, left: 6, bottom: 0 }}>
              <defs>
                <linearGradient id={gid} x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor={C.amber} stopOpacity={0.5} />
                  <stop offset="100%" stopColor={C.amber} stopOpacity={0.02} />
                </linearGradient>
              </defs>
              <XAxis dataKey="mo" tick={{ fill: C.mut, fontSize: 10 }} tickLine={false} axisLine={false} tickFormatter={(v) => `${v}mo`} minTickGap={28} />
              <YAxis hide domain={[0, "dataMax"]} />
              <Tooltip contentStyle={{ background: C.panel, border: `1px solid ${C.line}`, borderRadius: 10, fontSize: 12, color: C.ink }} labelStyle={{ color: C.mut }} labelFormatter={(v) => `Month ${v}`} formatter={(val, n) => [usd0(val), n === "value" ? "Value" : "Invested"]} />
              <Area type="monotone" dataKey="invested" stroke={C.mut} strokeWidth={1} fill="transparent" strokeDasharray="3 3" />
              <Area type="monotone" dataKey="value" stroke={C.amber} strokeWidth={2.4} fill={`url(#${gid})`} />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        <div className="flex items-center justify-between" style={{ background: C.panel2, border: `1px solid ${C.line}`, borderRadius: 13, padding: "11px 13px", marginTop: 8 }}>
          <div className="flex items-center" style={{ gap: 10 }}>
            <Repeat size={17} color={C.amber} />
            <div>
              <div style={{ fontSize: 13, fontWeight: 600, color: C.ink }}>{usd(weekly)} every Monday</div>
              <div style={{ color: C.mut, fontSize: 11 }}>auto-buy · {m.cur}{num(weekly * m.fx)} via {m.rail}</div>
            </div>
          </div>
          <ArrowRight size={16} color={C.mut} />
        </div>
      </div>
    </div>
  );
}
