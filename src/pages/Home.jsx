import { useEffect, useState } from "react";
import compassLogoImg from "../assets/seed_freedom_compass_logo.webp";

function HUD({ children, className="" }) {
  return (
    <div className={`border border-teal/20 relative bg-bg-panel hover:border-teal/40 transition-colors duration-300 border-pulse ${className}`}>
      <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-teal/70"/>
      <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-teal/70"/>
      <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-teal/70"/>
      <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-teal/70"/>
      {children}
    </div>
  );
}

const stats = [
  { value:"1,200+", label:"PERSONEL AKTIF",   code:"STAT-01" },
  { value:"12",     label:"DIVISI OPERASIONAL",code:"STAT-02" },
  { value:"47",     label:"OPERASI SELESAI",  code:"STAT-03" },
  { value:"C.E.75", label:"TAHUN BERDIRI",    code:"STAT-04" },
];

const ops = [
  { tag:"TEMPUR",     title:"JOINT SHIELD EXERCISE",        date:"10 MEI C.E.75", status:"AKTIF",   desc:"Latihan pertahanan orbital gabungan seluruh unit Mobile Suit COMPASS dalam skenario serangan mendadak." },
  { tag:"DIPLOMATIK", title:"PERJANJIAN ORBALIAN",          date:"2 MEI C.E.75",  status:"SELESAI", desc:"Pakta non-agresi antara PLANT dan Earth di markas COMPASS. Ditandatangani tanpa insiden." },
  { tag:"INTELIJEN",  title:"OPERASI SILENT CROW — LEVEL A",date:"28 APR C.E.75", status:"RAHASIA", desc:"Misi infiltrasi jaringan SCAR di sektor 9. Detail diklasifikasikan clearance Alpha." },
];

const sColor = { AKTIF:"text-teal border-teal/40", SELESAI:"text-green-400 border-green-400/40", RAHASIA:"text-amber-400 border-amber-400/40" };

function DataStream() {
  const lines=["SYSTEM_BOOT:OK","PHASE_SHIFT:ENGAGED","FREEDOM-II:STANDBY","DRAGOON:ARMED","COORDINATOR_AI:ACTIVE","LACUS_RELAY:OK","KIRA_UNIT:ONLINE","ATHRUN:READY","SHINN:STANDBY","COMMS:ENCRYPTED","FUEL:87%","ORBITAL_POS:L1-STABLE","BEAM_SABER:CHARGED","TARGETING:LOCK","SHIELD:100%"];
  return (
    <div className="overflow-hidden h-full">
      <div className="data-scroll">
        {[...lines,...lines].map((l,i)=>(
          <div key={i} className="font-mono text-teal/30 text-xs py-0.5 tracking-widest">&gt; {l}</div>
        ))}
      </div>
    </div>
  );
}

export default function Home({ navigate }) {
  const [time, setTime] = useState(new Date().toLocaleTimeString("en-GB"));
  useEffect(()=>{ const id=setInterval(()=>setTime(new Date().toLocaleTimeString("en-GB")),1000); return ()=>clearInterval(id); },[]);

  return (
    <div>
      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 hex-bg opacity-50"/>
        <div className="absolute inset-0" style={{background:"radial-gradient(ellipse 65% 55% at 50% 50%,rgba(1,149,195,0.1) 0%,transparent 70%)"}}/>
        <div className="scan-line"/>

        {/* Side data stream */}
        <div className="absolute right-4 top-24 bottom-24 w-28 hidden 2xl:block">
          <DataStream/>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 pt-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text side */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            {/* Status pill */}
            <div className="inline-flex items-center gap-3 mb-6 border border-teal/20 px-4 py-2 bg-teal/5">
              <div className="w-1.5 h-1.5 rounded-full bg-teal pulse-teal"/>
              <span className="font-mono text-teal/70 text-xs tracking-widest">{time} // C.E.75 // UNIT: ORB-01 Akatsuki Gundam</span>
            </div>

            <div className="font-mono text-teal/50 text-xs tracking-[0.35em] mb-3">// ORGANIZATION PROFILE //</div>

            <h1 className="font-orbitron font-black text-6xl md:text-7xl text-shimmer leading-none mb-2">COMPASS</h1>
            <p className="font-mono text-sky/60 text-xs tracking-[0.2em] mb-6">
              COMPULSORY OBSERVATIONAL MAKING PEACE SERVICE
            </p>

            <div className="flex items-center gap-4 mb-6 justify-center lg:justify-start">
              <div className="h-px w-16 bg-gradient-to-l from-teal to-transparent lg:from-transparent lg:to-teal"/>
              <div className="w-2 h-2 border border-teal rotate-45 bg-teal/30"/>
              <div className="h-px w-16 bg-gradient-to-r from-teal to-transparent"/>
            </div>

            <p className="font-rajdhani text-ice/70 text-lg leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0">
              Organisasi militer independen yang menjaga perdamaian sejati di seluruh penjuru bumi dan orbit. Kami melindungi <em>semua</em> manusia — Coordinator dan Natural — tanpa diskriminasi.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button onClick={()=>navigate("programs")}
                className="px-8 py-4 bg-teal text-bg-dark font-orbitron font-bold text-sm tracking-widest hover:bg-teal-bright transition-all duration-200 shadow-lg shadow-teal/30">
                LIHAT OPERASI
              </button>
              <button onClick={()=>navigate("about")}
                className="px-8 py-4 border border-teal/50 text-off-white font-orbitron font-bold text-sm tracking-widest hover:border-teal hover:bg-teal/10 transition-all duration-200">
                TENTANG KAMI
              </button>
            </div>
          </div>

          {/* Logo side */}
          <div className="order-1 lg:order-2 flex justify-center">
            <img
              src={compassLogoImg}
              alt="COMPASS Logo"
              className="float w-64 md:w-80 object-contain"
              style={{
                filter: "drop-shadow(0 0 18px rgba(1,149,195,0.8)) drop-shadow(0 0 40px rgba(1,149,195,0.3))",
              }}
            />
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="font-mono text-teal/40 text-xs tracking-widest">SCROLL</span>
          <div className="w-px h-10 bg-gradient-to-b from-teal/50 to-transparent"/>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="py-16 border-y border-teal/10 bg-bg-dark">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-1">
            {stats.map(s=>(
              <HUD key={s.code} className="p-6 text-center group">
                <div className="font-mono text-teal/40 text-xs tracking-widest mb-2">{s.code}</div>
                <div className="font-orbitron font-black text-4xl md:text-5xl text-teal mb-2 group-hover:text-teal-bright transition-colors">
                  {s.value}
                </div>
                <div className="font-rajdhani font-semibold text-ice/60 text-xs tracking-widest">{s.label}</div>
              </HUD>
            ))}
          </div>
        </div>
      </section>

      {/* ── MISSION ── */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="font-mono text-teal/50 text-xs tracking-widest mb-3">// MISI & TUJUAN</div>
            <h2 className="font-orbitron font-black text-4xl md:text-5xl text-off-white mb-6 leading-tight">
              PERDAMAIAN SEJATI<br/><span className="text-teal">TANPA BATAS</span>
            </h2>
            <p className="font-rajdhani text-ice/70 text-lg leading-relaxed mb-8">
              Dipimpin Lacus Clyne dan Kira Yamato, COMPASS berdiri sebagai kekuatan netral yang melampaui konflik ideologi. Tidak ada hegemoni — hanya keseimbangan.
            </p>
            <div className="space-y-3">
              {["Mencegah penggunaan senjata pemusnah massal","Melindungi sipil di zona konflik aktif","Menegakkan perjanjian PLANT–Earth Alliance","Mengembangkan Mobile Suit untuk penjaga perdamaian"].map(item=>(
                <div key={item} className="flex items-center gap-3 font-rajdhani text-ice/70 text-base">
                  <div className="w-2 h-2 border border-teal rotate-45 flex-shrink-0 bg-teal/20"/>
                  {item}
                </div>
              ))}
            </div>
            <button onClick={()=>navigate("about")}
              className="mt-8 font-orbitron text-teal text-xs tracking-widest border-b border-teal/30 pb-1 hover:border-teal transition-colors">
              PROFIL LENGKAP ›
            </button>
          </div>

          {/* Radar panel */}
          <HUD className="p-8">
            <div className="scan-line"/>
            <div className="font-mono text-teal/50 text-xs tracking-widest mb-6">TACTICAL_RADAR // SECTOR-7</div>
            <div className="flex justify-center mb-6">
              <div className="relative w-48 h-48">
                {[48,64,80,96].map(r=>(
                  <div key={r} className="absolute border border-teal/20 rounded-full" style={{inset:`${(96-r)}px`}}/>
                ))}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-full h-px bg-teal/15"/>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="h-full w-px bg-teal/15"/>
                </div>
                <div className="absolute inset-0 radar-spin flex items-center justify-center">
                  <div className="absolute top-0 left-1/2 w-px h-1/2 origin-bottom"
                    style={{background:"linear-gradient(to top, #0195c3, transparent)"}}/>
                </div>
                {[[60,30],[30,65],[75,70],[20,40]].map(([x,y],i)=>(
                  <div key={i} className="absolute w-1.5 h-1.5 rounded-full bg-teal pulse-teal"
                    style={{left:`${x}%`,top:`${y}%`}}/>
                ))}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-3 h-3 border-2 border-teal rotate-45 bg-teal/40"/>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2">
              {[["CONTACTS","4 DETECTED"],["THREAT LVL","MODERATE"],["FRIENDLY","12 UNITS"],["SECTOR","L1-STABLE"]].map(([k,v])=>(
                <div key={k} className="border border-teal/15 p-3">
                  <div className="font-mono text-teal/50 text-xs tracking-widest">{k}</div>
                  <div className="font-rajdhani font-bold text-teal text-sm tracking-wider">{v}</div>
                </div>
              ))}
            </div>
          </HUD>
        </div>
      </section>

      {/* ── LATEST OPS ── */}
      <section className="py-24 bg-bg-dark border-y border-teal/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-end mb-12">
            <div>
              <div className="font-mono text-teal/50 text-xs tracking-widest mb-2">// LAPORAN TERBARU</div>
              <h2 className="font-orbitron font-black text-4xl text-off-white">LOG OPERASI</h2>
            </div>
            <div className="hidden md:flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-teal pulse-teal"/>
              <span className="font-mono text-teal/50 text-xs tracking-widest">LIVE FEED</span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {ops.map((o,i)=>(
              <HUD key={i} className="p-6 group cursor-default">
                <div className="scan-line" style={{animationDelay:`${i*1.3}s`}}/>
                <div className="flex justify-between items-center mb-4">
                  <span className="font-mono text-teal/60 text-xs tracking-widest border border-teal/20 px-2 py-0.5">{o.tag}</span>
                  <span className={`font-mono text-xs border px-2 py-0.5 tracking-widest ${sColor[o.status]}`}>{o.status}</span>
                </div>
                <h3 className="font-orbitron font-bold text-sm text-off-white mb-3 leading-snug group-hover:text-teal transition-colors">{o.title}</h3>
                <p className="font-rajdhani text-ice/60 text-sm leading-relaxed mb-4">{o.desc}</p>
                <div className="font-mono text-teal/40 text-xs tracking-widest">{o.date}</div>
              </HUD>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0" style={{background:"radial-gradient(ellipse 70% 60% at 50% 50%,rgba(1,149,195,0.1) 0%,transparent 70%)"}}/>
        <div className="scan-line"/>
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <div className="font-mono text-teal/50 text-xs tracking-widest mb-4">// REKRUTMEN TERBUKA</div>
          <h2 className="font-orbitron font-black text-4xl md:text-5xl text-off-white mb-6">
            SIAP BERGABUNG<br/><span className="text-teal">DENGAN COMPASS?</span>
          </h2>
          <p className="font-rajdhani text-ice/70 text-lg mb-10 leading-relaxed">
            Kami mencari individu yang percaya bahwa perdamaian sejati hanya bisa diraih melalui kekuatan, diplomasi, dan tekad yang tak tergoyahkan.
          </p>
          <button onClick={()=>navigate("contact")}
            className="px-10 py-4 bg-teal text-bg-dark font-orbitron font-bold text-sm tracking-widest hover:bg-teal-bright transition-all duration-200 shadow-xl shadow-teal/30">
            DAFTAR SEKARANG
          </button>
        </div>
      </section>
    </div>
  );
}