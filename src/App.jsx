import { Routes, Route } from "react-router-dom";
import { useTheme } from "./theme.jsx";
import Landing from "./Landing.jsx";
import Investors from "./Investors.jsx";
import RFS from "./RFS.jsx";
import Credit from "./Credit.jsx";
import FloatingActions from "./components/FloatingActions.jsx";

export default function App() {
  const { C } = useTheme();
  return (
    <div className="body" style={{
      minHeight: "100%",
      color: C.ink,
      background: `radial-gradient(1100px 560px at 88% -12%, ${C.glow1}, transparent 60%), radial-gradient(820px 480px at -5% 112%, ${C.glow2}, transparent 55%), ${C.bg}`,
      transition: "background .3s ease, color .3s ease",
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,400..800&family=Spline+Sans:wght@400;500;600;700&display=swap');
        .disp{font-family:'Bricolage Grotesque',serif;} .body{font-family:'Spline Sans',sans-serif;}
        .tnum{font-variant-numeric:tabular-nums;}
        a{color:inherit;text-decoration:none;}
        a:hover{opacity:.82;}
        @keyframes rise{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:none}}
        .rise{animation:rise .7s cubic-bezier(.2,.7,.2,1) both;}
      `}</style>
      <Routes>
        <Route path="/" element={<Credit />} />
        <Route path="/savings" element={<Landing />} />
        <Route path="/investors" element={<Investors />} />
        <Route path="/rfs" element={<RFS />} />
        <Route path="/credit" element={<Credit />} />
      </Routes>
      <FloatingActions />
    </div>
  );
}
