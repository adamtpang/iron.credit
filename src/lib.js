export const MARKETS = {
  PH: { flag: "🇵🇭", name: "Philippines", rail: "GCash", cur: "₱", fx: 58 },
  ID: { flag: "🇮🇩", name: "Indonesia", rail: "DANA", cur: "Rp", fx: 16300 },
  VN: { flag: "🇻🇳", name: "Vietnam", rail: "MoMo", cur: "₫", fx: 25400 },
};

export const usd0 = (n) => new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(n);
export const usd = (n) => new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 2 }).format(n);
export const num = (n) => new Intl.NumberFormat("en-US").format(Math.round(n));

// Illustrative DCA projection. weekly buy, compounded weekly price growth.
export function project(weekly, years, price, apr) {
  const weeks = Math.round(years * 52);
  const g = Math.pow(1 + apr, 1 / 52);
  let btc = 0, invested = 0;
  const pts = [];
  for (let t = 0; t <= weeks; t++) {
    const p = price * Math.pow(g, t);
    if (t > 0) { btc += weekly / p; invested += weekly; }
    if (t % 4 === 0 || t === weeks) pts.push({ wk: t, mo: Math.round(t / 4.345), invested, value: btc * p });
  }
  const pNow = price * Math.pow(g, weeks);
  return { pts, btc, invested, value: btc * pNow, sats: btc * 1e8 };
}
