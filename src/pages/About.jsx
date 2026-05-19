import { useState } from "react";
import CompassLogo from "../components/CompassLogo";
import MemberModal from "../components/MemberModal";

function HUD({ children, className = "" }) {
  return (
    <div className={`border border-teal/20 relative bg-bg-panel ${className}`}>
      <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-teal/60"/>
      <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-teal/60"/>
      <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-teal/60"/>
      <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-teal/60"/>
      {children}
    </div>
  );
}

// ─── Data anggota lengkap ───────────────────────────────────
const MEMBERS = [
  {
    name:  "Alexei Konoe",
    role:  "SUPREME COMMANDER",
    unit:  "MILLENNIUM",
    type:  "NEWTYPE COORDINATOR",
    clearance: "OMEGA",
    emoji: "👑",
    ms:    "LHM-BB03S Millennium",
    bio:   "Panglima tertinggi COMPASS. Memegang otoritas penuh atas semua operasi militer dan diplomatik lintas blok.",
    msStats: [
      { val:"S+",  label:"ARMOR" },
      { val:"A",   label:"SPEED" },
      { val:"S",   label:"OUTPUT" },
    ],
    pilotStats: [
      { val:"98",  label:"COMMAND" },
      { val:"91",  label:"STRATEGY" },
      { val:"88",  label:"COMBAT" },
    ],
  },
  {
    name:  "Kira Yamato",
    role:  "ACE PILOT / CO-CMD",
    unit:  "RISING FREEDOM",
    type:  "ULTIMATE COORDINATOR",
    clearance: "ALPHA",
    emoji: "⚔️",
    ms:    "STTS-909 Rising Freedom Gundam",
    bio:   "Ultimate Coordinator terkuat di dunia. Pilot Rising Freedom Gundam dan penjaga perdamaian terdepan COMPASS.",
    msStats: [
      { val:"A+",  label:"ARMOR" },
      { val:"S+",  label:"SPEED" },
      { val:"S+",  label:"OUTPUT" },
    ],
    pilotStats: [
      { val:"99",  label:"REFLEX" },
      { val:"97",  label:"ACCURACY" },
      { val:"96",  label:"ADAPT" },
    ],
  },
  {
    name:  "Mu La Flaga",
    role:  "UNIT LEAD",
    unit:  "MURASAME KAI",
    type:  "NATURAL ACE",
    clearance: "ALPHA",
    emoji: "🛡️",
    ms:    "STTS/F-400 Murasame Kai",
    bio:   "Natural terbaik yang pernah ada. Dikenal sebagai pria yang bisa menolak hal yang mustahil.",
    msStats: [
      { val:"A",   label:"ARMOR" },
      { val:"A+",  label:"SPEED" },
      { val:"A",   label:"OUTPUT" },
    ],
    pilotStats: [
      { val:"95",  label:"REFLEX" },
      { val:"93",  label:"INSTINCT" },
      { val:"90",  label:"COMBAT" },
    ],
  },
  {
    name:  "Shinn Asuka",
    role:  "DESTINY COMMANDER",
    unit:  "IMMORTAL JUSTICE",
    type:  "EXTENDED COORDINATOR",
    clearance: "BETA",
    emoji: "🔥",
    ms:    "STTS-808 Immortal Justice Gundam",
    bio:   "Mantan pilot ZAFT yang kini bergabung dengan COMPASS. Semangat tempur tinggi dengan kemampuan SEED Factor.",
    msStats: [
      { val:"A+",  label:"ARMOR" },
      { val:"S",   label:"SPEED" },
      { val:"A+",  label:"OUTPUT" },
    ],
    pilotStats: [
      { val:"94",  label:"AGGRESSION" },
      { val:"92",  label:"REFLEX" },
      { val:"85",  label:"TEAMWORK" },
    ],
  },
  {
    name:  "Lunamaria Hawke",
    role:  "RECON CAPTAIN",
    unit:  "GELGOOG MENACE",
    type:  "COORDINATOR",
    clearance: "BETA",
    emoji: "🎯",
    ms:    "ZGMF-2025/F GELGOOG Menace",
    bio:   "Kapten unit rekon COMPASS. Keahlian intelijen dan manuver cepat menjadikannya aset tak ternilai di lapangan.",
    msStats: [
      { val:"B+",  label:"ARMOR" },
      { val:"A",   label:"SPEED" },
      { val:"B+",  label:"OUTPUT" },
    ],
    pilotStats: [
      { val:"90",  label:"RECON" },
      { val:"88",  label:"ACCURACY" },
      { val:"87",  label:"MOBILITY" },
    ],
  },
  {
    name:  "Agnes Giebenrath",
    role:  "EXTENDED UNIT ADVISOR",
    unit:  "GYAN STROM",
    type:  "EXTENDED NATURAL",
    clearance: "GAMMA",
    emoji: "⚡",
    ms:    "ZGMF-2027/A GYAN Strom",
    bio:   "Mantan Extended yang kini pulih dan berkontribusi sebagai advisor teknis dan lapangan untuk unit COMPASS.",
    msStats: [
      { val:"A",   label:"ARMOR" },
      { val:"A",   label:"SPEED" },
      { val:"A",   label:"OUTPUT" },
    ],
    pilotStats: [
      { val:"89",  label:"REFLEX" },
      { val:"86",  label:"SYNERGY" },
      { val:"84",  label:"CONTROL" },
    ],
  },
];

const timeline = [
  { year:"C.E.71", event:"Perang PLANT–Earth meledak. Jutaan korban jiwa. Benih konflik ditanam." },
  { year:"C.E.73", event:"Kira & Lacus memulai visi organisasi perdamaian yang benar-benar netral." },
  { year:"C.E.74", event:"Mantan anggota ZAFT dan Earth Forces duduk bersama menandatangani perjanjian awal." },
  { year:"C.E.75", event:"COMPASS resmi berdiri. Markas dipindahkan ke Lagrange Point-1, stasiun ETERNAL." },
  { year:"C.E.75+",event:"Operasi REQUIEM COUNTERSTRIKE mencegah perang total ketiga. Perdamaian terjaga." },
];

export default function About({ navigate }) {
  const [selected, setSelected] = useState(null);

  return (
    <div className="pt-20">
      {/* Modal */}
      {selected && (
        <MemberModal member={selected} onClose={() => setSelected(null)}/>
      )}

      {/* Header */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 hex-bg opacity-40"/>
        <div className="scan-line"/>
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <div className="font-mono text-teal/50 text-xs tracking-widest mb-4">// ORGANIZATION PROFILE — CLEARANCE B</div>
          <h1 className="font-orbitron font-black text-5xl md:text-7xl text-off-white mb-4">
            TENTANG <span className="text-teal">COMPASS</span>
          </h1>
          <div className="flex items-center gap-4 justify-center mb-6">
            <div className="h-px flex-1 max-w-20 bg-gradient-to-l from-teal to-transparent"/>
            <div className="w-2 h-2 border border-teal rotate-45 bg-teal/30"/>
            <div className="h-px flex-1 max-w-20 bg-gradient-to-r from-teal to-transparent"/>
          </div>
          <p className="font-rajdhani text-ice/70 text-lg leading-relaxed">
            Lebih dari sekadar pasukan — COMPASS adalah simbol bahwa manusia bisa memilih jalan selain perang.
          </p>
        </div>
      </section>

      {/* Vision / Mission */}
      <section className="py-16 bg-bg-dark border-y border-teal/10">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <HUD className="p-8">
            <div className="font-mono text-teal/50 text-xs tracking-widest mb-4">// VISI</div>
            <p className="font-orbitron font-bold text-xl text-off-white leading-relaxed mb-4">
              "Mewujudkan dunia di mana tidak ada pihak yang menggunakan kekuatan secara sepihak."
            </p>
            <div className="h-px bg-gradient-to-r from-teal/40 to-transparent my-4"/>
            <p className="font-rajdhani text-ice/60 text-base leading-relaxed">
              COMPASS percaya perdamaian sejati adalah terwujudnya keadilan bagi seluruh umat manusia — Coordinator maupun Natural.
            </p>
          </HUD>
          <HUD className="p-8">
            <div className="font-mono text-teal/50 text-xs tracking-widest mb-4">// MISI</div>
            <ul className="space-y-4">
              {[
                ["01","Mencegah penggunaan senjata terlarang"],
                ["02","Melindungi sipil di zona konflik aktif"],
                ["03","Menegakkan resolusi PLANT & Earth Alliance"],
                ["04","Kembangkan MS untuk tujuan defensif"],
                ["05","Jembatan diplomatik lintas blok & ideologi"],
              ].map(([n,t])=>(
                <li key={n} className="flex gap-4 items-start">
                  <span className="font-mono text-teal font-bold flex-shrink-0">{n}</span>
                  <span className="font-rajdhani text-ice/70 text-base">{t}</span>
                </li>
              ))}
            </ul>
          </HUD>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="font-mono text-teal/50 text-xs tracking-widest mb-2">// SEJARAH</div>
            <h2 className="font-orbitron font-black text-4xl text-off-white">KRONOLOGI COMPASS</h2>
          </div>
          <div className="relative">
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-teal/20"/>
            <div className="space-y-10">
              {timeline.map((t,i)=>(
                <div key={t.year} className={`flex gap-6 ${i%2===0?"md:flex-row":"md:flex-row-reverse"}`}>
                  <div className={`flex-1 pl-12 md:pl-0`}>
                    <HUD className="p-5 inline-block w-full">
                      <div className="font-mono text-teal text-xs tracking-widest mb-1">{t.year}</div>
                      <p className="font-rajdhani text-ice/70 text-base leading-relaxed">{t.event}</p>
                    </HUD>
                  </div>
                  <div className="hidden md:flex flex-shrink-0 w-12 items-start justify-center pt-6">
                    <div className="w-4 h-4 border-2 border-teal rotate-45 bg-teal/30 pulse-teal z-10"/>
                  </div>
                  <div className="hidden md:block flex-1"/>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── UNIT PIMPINAN — KLIK UNTUK MODAL ── */}
      <section className="py-24 bg-bg-dark border-y border-teal/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="font-mono text-teal/50 text-xs tracking-widest mb-2">// KOMANDO INTI</div>
            <h2 className="font-orbitron font-black text-4xl text-off-white">UNIT PIMPINAN</h2>
            <p className="font-mono text-teal/30 text-xs tracking-widest mt-3">
              KLIK KARTU UNTUK DETAIL PILOT & MOBILE SUIT
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {MEMBERS.map((m) => (
              <button
                key={m.name}
                onClick={() => setSelected(m)}
                className="group relative border border-teal/20 bg-bg-panel p-6 text-center
                  hover:border-teal/60 hover:bg-teal/5 hover:shadow-[0_0_30px_rgba(1,149,195,0.15)]
                  transition-all duration-300 cursor-pointer text-left"
              >
                {/* Corner brackets */}
                {["top-0 left-0 border-t-2 border-l-2","top-0 right-0 border-t-2 border-r-2",
                  "bottom-0 left-0 border-b-2 border-l-2","bottom-0 right-0 border-b-2 border-r-2"].map((c,i)=>(
                  <div key={i} className={`absolute w-3 h-3 border-teal/40 group-hover:border-teal transition-colors duration-300 ${c}`}/>
                ))}

                <div className="scan-line"/>

                {/* Hover "KLIK" hint */}
                <div className="absolute top-2 right-3 font-mono text-teal/0 group-hover:text-teal/50
                  text-[9px] tracking-widest transition-all duration-300">
                  KLIK ›
                </div>

                <div className="text-4xl mb-3">{m.emoji}</div>
                <div className="font-mono text-teal/50 text-[10px] tracking-widest mb-1">{m.ms}</div>
                <h3 className="font-orbitron font-bold text-sm text-off-white mb-1
                  group-hover:text-teal transition-colors duration-200">{m.name}</h3>
                <p className="font-mono text-teal/50 text-[10px] tracking-widest">{m.role}</p>

                {/* Bottom hover bar */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-teal
                  scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"/>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 text-center">
        <p className="font-rajdhani text-ice/60 text-lg mb-6">Tertarik bergabung dengan COMPASS?</p>
        <button onClick={() => navigate("contact")}
          className="px-8 py-3 bg-teal text-bg-dark font-orbitron font-bold text-sm tracking-widest
            hover:bg-teal-bright transition-all shadow-lg shadow-teal/30">
          DAFTAR REKRUTMEN
        </button>
      </section>
    </div>
  );
}