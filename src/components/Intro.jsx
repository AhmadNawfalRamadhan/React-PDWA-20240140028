import { useEffect, useState } from "react";
import compassLogoImg from "../assets/seed_freedom_compass_logo.webp";

function Particle({ x, y, size, delay, dur }) {
  return (
    <div className="absolute rounded-full bg-sky"
      style={{ left:`${x}%`, top:`${y}%`, width:size, height:size,
        opacity: 0.3,
        animation: `pulseTeal ${dur}s ${delay}s ease-in-out infinite` }} />
  );
}

const particles = Array.from({ length: 30 }, (_, i) => ({
  x: Math.random()*100, y: Math.random()*100,
  size: Math.random()*2.5+0.8,
  delay: Math.random()*5, dur: Math.random()*3+2,
}));

export default function Intro({ onDone }) {
  const [phase, setPhase]   = useState(0);
  const [leaving, setLeaving] = useState(false);

  // 0=black  1=bg+hud  2=logo  3=title  4=button
  useEffect(() => {
    const ts = [
      setTimeout(() => setPhase(1), 350),
      setTimeout(() => setPhase(2), 900),
      setTimeout(() => setPhase(3), 1700),
      setTimeout(() => setPhase(4), 2400),
    ];
    return () => ts.forEach(clearTimeout);
  }, []);

  const handleEnter = () => {
    setLeaving(true);
    setTimeout(onDone, 900);
  };

  const tr = (cond, dur="700ms", delay="0ms") => ({
    opacity:   cond ? 1 : 0,
    transform: cond ? "translateY(0) scale(1)" : "translateY(20px) scale(0.97)",
    transition: `opacity ${dur} ease-out ${delay}, transform ${dur} ease-out ${delay}`,
  });

  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden"
      style={{
        background: "#061a2e",
        opacity: leaving ? 0 : 1,
        transition: leaving ? "opacity 0.8s ease-in-out" : "none",
      }}>

      {/* ── Layered background ── */}
      {/* Hex grid */}
      <div className="absolute inset-0 transition-opacity duration-1000"
        style={{
          opacity: phase >= 1 ? 0.7 : 0,
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='104'%3E%3Cpath d='M30 52L0 34V0l30-18 30 18v34zM30 104L0 86V52l30-18 30 18v34z' fill='none' stroke='%230195c312' stroke-width='1'/%3E%3C/svg%3E")`,
        }} />

      {/* Radial teal glow */}
      <div className="absolute inset-0 transition-opacity duration-1200"
        style={{
          opacity: phase >= 1 ? 1 : 0,
          background: "radial-gradient(ellipse 70% 70% at 50% 50%, rgba(1,149,195,0.12) 0%, transparent 70%)",
        }} />

      {/* Particles */}
      {phase >= 1 && particles.map((p,i) => <Particle key={i} {...p}/>)}

      {/* Scan line */}
      {phase >= 1 && <div className="scan-line"/>}

      {/* ── HUD frame ── */}
      {/* Top bar */}
      <div className="absolute top-0 left-0 right-0 h-10 flex items-center px-6 gap-4 border-b border-teal/10
        transition-opacity duration-700" style={{ opacity: phase>=1?1:0 }}>
        <div className="w-2 h-2 rounded-full bg-teal pulse-teal" />
        <span className="font-mono text-teal/70 text-xs tracking-[0.25em]">COMPASS // SYS v4.7 // ETERNAL STATION</span>
        <div className="flex-1 h-px bg-gradient-to-r from-teal/30 to-transparent"/>
        <span className="font-mono text-teal/40 text-xs tracking-widest">INITIALIZING...</span>
      </div>

      {/* Bottom bar */}
      <div className="absolute bottom-0 left-0 right-0 h-10 flex items-center px-6 gap-4 border-t border-teal/10
        transition-opacity duration-700" style={{ opacity: phase>=1?1:0 }}>
        <span className="font-mono text-teal/40 text-xs tracking-[0.2em]">CLEARANCE: ALPHA-1 // ORBITAL SECTOR L1</span>
        <div className="flex-1 h-px bg-gradient-to-r from-teal/20 to-transparent"/>
        <div className="flex items-end gap-0.5">
          {[3,5,7,9,7,5,3].map((h,i)=>(
            <div key={i} className="w-1 bg-teal/50 rounded-t-sm"
              style={{ height: h*3, opacity: 0.3+i*0.08 }} />
          ))}
        </div>
      </div>

      {/* Corner brackets */}
      {[
        "top-0 left-0 border-t-2 border-l-2",
        "top-0 right-0 border-t-2 border-r-2",
        "bottom-0 left-0 border-b-2 border-l-2",
        "bottom-0 right-0 border-b-2 border-r-2",
      ].map((cls,i) => (
        <div key={i} className={`absolute w-16 h-16 border-teal/60 transition-all duration-500 ${cls}`}
          style={{ opacity: phase>=1?1:0, transitionDelay:`${i*80}ms` }}/>
      ))}

      {/* Horizontal dividers */}
      <div className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-teal/20 to-transparent transition-opacity duration-700"
        style={{ top:"20%", opacity: phase>=1?1:0 }}/>
      <div className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-teal/20 to-transparent transition-opacity duration-700"
        style={{ bottom:"20%", opacity: phase>=1?1:0 }}/>

      {/* ── CENTER CONTENT ── */}
      <div className="relative z-10 flex flex-col items-center gap-5 px-6 text-center">

        
      {/* LOGO */}
      <div style={tr(phase >= 2, "900ms")}>
        <img
          src={compassLogoImg}
          alt="COMPASS Logo"
          className={phase >= 2 ? "float" : ""}
          style={{
            width: 240,
            height: 240,
            objectFit: "contain",
            filter: phase >= 2
              ? "drop-shadow(0 0 12px rgba(120,210,255,0.95)) drop-shadow(0 0 30px rgba(1,149,195,0.6))"
              : "none",
            transition: "filter 0.5s",
          }}
        />
      </div>

        {/* COMPASS title */}
        <div style={tr(phase>=3,"700ms")}>
          <h1 className="font-orbitron font-black text-6xl md:text-8xl tracking-wider text-shimmer leading-none">
            COMPASS
          </h1>
          <div className="flex items-center gap-3 justify-center mt-2">
            <div className="h-px w-14 bg-gradient-to-l from-teal to-transparent"/>
            <span className="font-mono text-teal text-xs tracking-[0.35em]">C.O.M.P.S.</span>
            <div className="h-px w-14 bg-gradient-to-r from-teal to-transparent"/>
          </div>
          <p className="font-mono text-sky/70 text-[10px] tracking-[0.2em] mt-2 uppercase">
            Compulsory Observational Making Peace Service
          </p>
        </div>

        {/* ENTER BUTTON */}
        <div style={tr(phase>=4,"600ms","0.15s")} className="flex flex-col items-center gap-3">
          {/* Ripple rings behind button */}
          <div className="relative flex items-center justify-center">
            <div className="absolute w-40 h-12 rounded-sm">
              {phase>=4 && <>
                <div className="ripple"/>
                <div className="ripple ripple-2"/>
                <div className="ripple ripple-3"/>
              </>}
            </div>
            <button
              onClick={handleEnter}
              disabled={phase < 4}
              className="relative z-10 group px-14 py-4 font-orbitron font-bold text-sm tracking-[0.25em]
                text-off-white border border-teal/70 overflow-hidden transition-all duration-300
                hover:border-teal hover:shadow-[0_0_30px_rgba(1,149,195,0.5)]"
            >
              {/* Hover fill */}
              <div className="absolute inset-0 bg-teal/20 scale-x-0 group-hover:scale-x-100
                origin-left transition-transform duration-300"/>
              {/* Shine sweep */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent
                -translate-x-full group-hover:translate-x-full transition-transform duration-700"/>
              <span className="relative z-10">▶ &nbsp; MASUK KE SISTEM</span>
            </button>
          </div>
          <p className="font-mono text-teal/40 text-[10px] tracking-[0.3em] uppercase">
            Klik untuk melanjutkan
          </p>
        </div>
      </div>
    </div>
  );
}