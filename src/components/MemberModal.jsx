import { useEffect } from "react";

// PILOT/CAPTAIN IMAGES — import semua foto pilot di sini
import kiraImg from "../assets/members/kira_Yamato_29_01.webp";
import ShinnImg from "../assets/members/Shinn_Asuka_29_01.webp";
import LunaImg from "../assets/members/Lunamaria_Hawke_29_01.webp";
import AgnesImg from "../assets/members/Agnes_Giebenrath_29_01.webp";
import AlexeiImg from "../assets/members/Alexei_Konoe_29_01.webp";
import MuImg from "../assets/members/Mu_La_Flaga_29_01.webp";
import AthrunImg from "../assets/members/Athrun_Zala_GSF.webp";
import HildaImg from "../assets/members/Hilda_Harken_29_01.webp";
import MurrueImg from "../assets/members/Murrue_Ramius_29_01.webp";
// MOBILE SUIT/WARSHIP IMAGES — import semua gambar MS di sini
import freedomImg from "../assets/members/Rising_Freedom_Gundam_lineart.webp";
import justiceImg from "../assets/members/Immortal_Justice_Gundam_lineart.webp";
import millenniumImg from "../assets/members/Millennium_29_01.webp";
import murasameImg from "../assets/members/Murasame_Kai_Front.webp";
import gelgoogImg from "../assets/members/Gelgoog_Menace_Lunamaria_Earth_Pack.webp";
import gyanAImg from "../assets/members/Gyan_Strom_Agnes.webp";
import ArchImage from "../assets/members/Archangel.webp";
import ZImage from "../assets/members/GSF-ZGok.webp";
import GyanHImage from "../assets/members/Gyan_Strom_Hilda_Atmo_Pack.webp";

// 👤 FOTO PILOT — ganti null dengan import gambar
const PILOT_IMAGES = {
  "Alexei Konoe":    AlexeiImg, // ← import lalu taruh di sini
  "Kira Yamato":     kiraImg, // ← import lalu taruh di sini
  "Mu La Flaga":     MuImg, // ← import lalu taruh di sini
  "Shinn Asuka":     ShinnImg, // ← import lalu taruh di sini
  "Lunamaria Hawke": LunaImg, // ← import lalu taruh di sini
  "Agnes Giebenrath":AgnesImg, // ← import lalu taruh di sini
  "Athrun Zala":     AthrunImg, // ← import lalu taruh di sini
  "Hilda Harken":    HildaImg, // ← import lalu taruh di sini
  "Murrue Ramius":   MurrueImg, // ← import lalu taruh di sini
};

// 🤖 GAMBAR MOBILE SUIT — ganti null dengan import gambar
const MS_IMAGES = {
  "LHM-BB03S Millennium":          millenniumImg, // ← import lalu taruh di sini
  "STTS-909 Rising Freedom Gundam":freedomImg, // ← import lalu taruh di sini
  "STTS/F-400 Murasame Kai":       murasameImg, // ← import lalu taruh di sini
  "STTS-808 Immortal Justice Gundam":justiceImg,// ← import lalu taruh di sini
  "ZGMF-2025/F GELGOOG Menace":    gelgoogImg, // ← import lalu taruh di sini
  "ZGMF-2027/A GYAN Strom Agnes":        gyanAImg, // ← import lalu taruh di sini
  "LCAM-01XA Archangel":   ArchImage, // ← import lalu taruh di sini
  "ZGMF-MM07 Z'Gok":                ZImage, // ← import lalu taruh di sini
  "ZGMF-2027/A GYAN Strom Hilda":                     GyanHImage, // ← import lalu taruh di sini
};

// ============================================================

// Placeholder SVG ketika gambar belum diisi
function PlaceholderPilot({ emoji, name }) {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-2
      bg-gradient-to-b from-navy/60 to-bg-dark/80">
      <div className="text-6xl">{emoji}</div>
      <div className="font-mono text-teal/40 text-[10px] tracking-widest text-center px-2">
        TARUH FOTO<br/>PILOT DI SINI
      </div>
    </div>
  );
}

function PlaceholderMS({ msName }) {
  // Simple geometric MS silhouette placeholder
  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-2
      bg-gradient-to-b from-navy/40 to-bg-dark/60 relative overflow-hidden">
      {/* Abstract MS shape */}
      <svg viewBox="0 0 80 100" className="w-24 h-28 opacity-30">
        <rect x="30" y="30" width="20" height="28" rx="2" fill="#0195c3"/>
        <rect x="22" y="20" width="14" height="12" rx="2" fill="#5ab8d8"/>
        <rect x="15" y="32" width="14" height="16" rx="2" fill="#0195c3"/>
        <rect x="51" y="32" width="14" height="16" rx="2" fill="#0195c3"/>
        <rect x="24" y="56" width="10" height="22" rx="2" fill="#0195c3"/>
        <rect x="46" y="56" width="10" height="22" rx="2" fill="#0195c3"/>
        <path d="M10,24 L16,30 L12,40 Z" fill="#5ab8d8"/>
        <path d="M70,24 L64,30 L68,40 Z" fill="#5ab8d8"/>
      </svg>
      <div className="font-mono text-teal/40 text-[10px] tracking-widest text-center px-2">
        TARUH GAMBAR<br/>MS DI SINI
      </div>
    </div>
  );
}

export default function MemberModal({ member, onClose }) {
  // Close on Escape key
  useEffect(() => {
    const handler = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  if (!member) return null;

  const pilotImg = PILOT_IMAGES[member.name];
  const msImg    = MS_IMAGES[member.ms];

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Backdrop blur */}
      <div className="absolute inset-0 bg-black/75 backdrop-blur-sm"/>

      {/* Modal Card */}
      <div
        className="relative z-10 w-full max-w-2xl border border-teal/40 bg-bg-panel overflow-hidden"
        style={{ boxShadow: "0 0 50px rgba(1,149,195,0.25), 0 0 100px rgba(1,149,195,0.1)" }}
        onClick={e => e.stopPropagation()}
      >
        {/* Corner brackets */}
        {["top-0 left-0 border-t-2 border-l-2","top-0 right-0 border-t-2 border-r-2",
          "bottom-0 left-0 border-b-2 border-l-2","bottom-0 right-0 border-b-2 border-r-2"].map((c,i)=>(
          <div key={i} className={`absolute w-5 h-5 border-teal ${c}`}/>
        ))}

        {/* Scan line */}
        <div className="scan-line"/>

        {/* ── TOP BAR ── */}
        <div className="flex items-center justify-between px-5 py-3 border-b border-teal/20 bg-teal/5">
          <div className="flex items-center gap-3">
            <div className="w-1.5 h-1.5 rounded-full bg-teal pulse-teal"/>
            <span className="font-mono text-teal text-xs tracking-[0.25em]">COMPASS // PERSONNEL FILE</span>
            <span className="font-mono text-teal/30 text-xs">|</span>
            <span className="font-mono text-teal/50 text-xs tracking-widest">{member.ms}</span>
          </div>
          <button onClick={onClose}
            className="w-7 h-7 border border-teal/30 flex items-center justify-center
              font-orbitron text-teal/60 hover:text-teal hover:border-teal hover:bg-teal/10
              transition-all duration-200 text-base leading-none">
            ×
          </button>
        </div>

        {/* ── MAIN CONTENT ── */}
        <div className="grid grid-cols-2 gap-0">

          {/* LEFT — Mobile Suit */}
          <div className="border-r border-teal/15 flex flex-col">
            <div className="px-4 py-2 border-b border-teal/10 bg-teal/3">
              <span className="font-mono text-teal/50 text-[10px] tracking-[0.25em]">// MOBILE SUIT</span>
            </div>
            {/* MS Image area — 240px tall */}
            <div className="relative h-60 overflow-hidden bg-gradient-to-b from-navy/30 to-bg-dark">
              {/* Radial glow bg */}
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_70%_at_50%_55%,rgba(1,149,195,0.1),transparent)]"/>
              {/* Grid floor lines */}
              <div className="absolute bottom-0 left-0 right-0 h-16 opacity-20"
                style={{
                  backgroundImage:"linear-gradient(rgba(1,149,195,0.3) 1px,transparent 1px)",
                  backgroundSize:"100% 16px",
                }}/>
              {/* MS image or placeholder */}
              <div className="absolute inset-0 flex items-center justify-center p-4">
                {msImg ? (
                  <img
                    src={msImg}
                    alt={member.ms}
                    className="max-h-full max-w-full object-contain"
                    style={{ filter:"drop-shadow(0 0 12px rgba(1,149,195,0.5))" }}
                  />
                ) : (
                  <PlaceholderMS msName={member.ms}/>
                )}
              </div>
            </div>
            {/* MS Name */}
            <div className="px-4 py-3 border-t border-teal/10">
              <div className="font-mono text-teal/40 text-[10px] tracking-widest mb-1">DESIGNATION</div>
              <div className="font-mono text-teal text-xs tracking-wider leading-snug">{member.ms}</div>
            </div>
            {/* MS Stats */}
            <div className="px-4 pb-4 grid grid-cols-3 gap-1.5">
              {member.msStats.map(s => (
                <div key={s.label} className="border border-teal/15 bg-navy/30 p-2 text-center">
                  <div className="font-orbitron font-black text-teal text-sm">{s.val}</div>
                  <div className="font-mono text-teal/40 text-[8px] tracking-widest mt-0.5 leading-tight">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — Pilot */}
          <div className="flex flex-col">
            <div className="px-4 py-2 border-b border-teal/10 bg-teal/3">
              <span className="font-mono text-teal/50 text-[10px] tracking-[0.25em]">// PILOT DATA</span>
            </div>
            {/* Pilot image */}
            <div className="relative h-44 overflow-hidden bg-gradient-to-b from-navy/40 to-bg-dark/80">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_40%,rgba(1,149,195,0.08),transparent)]"/>
              {pilotImg ? (
                <img
                  src={pilotImg}
                  alt={member.name}
                  className="absolute inset-0 w-full h-full object-cover object-top"
                  style={{ filter:"saturate(0.85) brightness(0.9)" }}
                />
              ) : (
                <PlaceholderPilot emoji={member.emoji} name={member.name}/>
              )}
              {/* Name overlay at bottom */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-bg-dark via-bg-dark/80 to-transparent pt-8 pb-2 px-4">
                <div className="font-orbitron font-black text-off-white text-base">{member.name}</div>
                <div className="font-mono text-teal text-[10px] tracking-[0.2em]">{member.role}</div>
              </div>
            </div>

            {/* Pilot details */}
            <div className="px-4 py-3 flex-1 space-y-2.5">
              {[
                ["TYPE",      member.type],
                ["UNIT",      member.unit],
                ["CLEARANCE", member.clearance],
                ["STATUS",    "ACTIVE"],
              ].map(([label, val]) => (
                <div key={label} className="flex items-center justify-between border-b border-teal/8 pb-2">
                  <span className="font-mono text-teal/40 text-[10px] tracking-[0.2em]">{label}</span>
                  <span className={`font-mono text-xs tracking-wider ${
                    label === "STATUS" ? "text-green-400" : "text-off-white/80"
                  }`}>
                    {label === "STATUS" && (
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-green-400 mr-1.5 pulse-teal"/>
                    )}
                    {val}
                  </span>
                </div>
              ))}
            </div>

            {/* Pilot stats */}
            <div className="px-4 pb-4 grid grid-cols-3 gap-1.5 border-t border-teal/10 pt-3">
              {member.pilotStats.map(s => (
                <div key={s.label} className="border border-teal/15 bg-navy/30 p-2 text-center">
                  <div className="font-orbitron font-black text-sky text-sm">{s.val}</div>
                  <div className="font-mono text-teal/40 text-[8px] tracking-widest mt-0.5 leading-tight">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── BOTTOM — Bio ── */}
        <div className="border-t border-teal/15 px-5 py-3 bg-teal/3">
          <span className="font-mono text-teal/40 text-[10px] tracking-[0.2em]">// PROFILE — </span>
          <span className="font-rajdhani text-ice/60 text-sm leading-relaxed">{member.bio}</span>
        </div>
      </div>
    </div>
  );
}