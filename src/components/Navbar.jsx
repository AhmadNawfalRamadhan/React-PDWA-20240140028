import { useState } from "react";
import compassLogoImg from "../assets/seed_freedom_compass_logo.webp";

const links = [
  { label:"BERANDA",  key:"home" },
  { label:"TENTANG",  key:"about" },
  { label:"OPERASI",  key:"programs" },
  { label:"KONTAK",   key:"contact" },
];

export default function Navbar({ page, navigate }) {
  const [open, setOpen] = useState(false);
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-bg-main/95 backdrop-blur-md border-b border-teal/20">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        <button onClick={()=>navigate("home")} className="flex items-center gap-3 group">
          <div className="w-9 h-9 flex items-center justify-center">
            <img
              src={compassLogoImg}
              alt="COMPASS"
              className="w-9 h-9 object-contain"
              style={{ filter: "drop-shadow(0 0 4px rgba(1,149,195,0.7))" }}
            />
          </div>
          <div>
            <span className="font-orbitron font-black text-base tracking-widest text-off-white group-hover:text-teal-bright transition-colors">COMPASS</span>
            <div className="h-px bg-gradient-to-r from-teal to-transparent"/>
          </div>
        </button>

        <div className="hidden md:flex items-center gap-8">
          {links.map(l=>(
            <button key={l.key} onClick={()=>navigate(l.key)}
              className={`font-rajdhani font-semibold text-sm tracking-widest relative group transition-colors duration-200 ${
                page===l.key?"text-teal":"text-ice/70 hover:text-off-white"
              }`}>
              {l.label}
              <span className={`absolute -bottom-1 left-0 h-px bg-teal transition-all duration-300 ${
                page===l.key?"w-full":"w-0 group-hover:w-full"
              }`}/>
            </button>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-teal pulse-teal"/>
            <span className="font-mono text-teal/60 text-xs tracking-widest">LIVE</span>
          </div>
          <button onClick={()=>navigate("contact")}
            className="relative group px-5 py-2 border border-teal/60 font-rajdhani font-semibold text-xs tracking-widest overflow-hidden text-off-white hover:shadow-[0_0_20px_rgba(1,149,195,0.4)] transition-all duration-300">
            <div className="absolute inset-0 bg-teal/20 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-200"/>
            <span className="relative z-10">GABUNG SEKARANG</span>
          </button>
        </div>

        <button className="md:hidden text-teal" onClick={()=>setOpen(!open)}>
          <div className="space-y-1.5">
            <span className={`block h-0.5 w-6 bg-current transition-all ${open?"rotate-45 translate-y-2":""}`}/>
            <span className={`block h-0.5 w-6 bg-current transition-all ${open?"opacity-0":""}`}/>
            <span className={`block h-0.5 w-6 bg-current transition-all ${open?"-rotate-45 -translate-y-2":""}`}/>
          </div>
        </button>
      </div>

      {open&&(
        <div className="md:hidden bg-bg-main border-t border-teal/20 px-6 py-4 space-y-4">
          {links.map(l=>(
            <button key={l.key} onClick={()=>{navigate(l.key);setOpen(false);}}
              className={`block font-rajdhani font-semibold text-sm tracking-widest w-full text-left ${
                page===l.key?"text-teal":"text-ice/70"
              }`}>{l.label}</button>
          ))}
          <button onClick={()=>{navigate("contact");setOpen(false);}}
            className="w-full py-2 border border-teal/50 text-off-white font-rajdhani font-semibold text-xs tracking-widest">
            GABUNG SEKARANG
          </button>
        </div>
      )}
    </nav>
  );
}