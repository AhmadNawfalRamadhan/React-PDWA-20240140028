import { useState } from "react";

function HUD({ children, className="" }) {
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

const cats = ["SEMUA","TEMPUR","INTELIJEN","DIPLOMATIK","TEKNIS"];
const ops = [
  { cat:"TEMPUR",    code:"OP-001", title:"JOINT SHIELD EXERCISE",  icon:"⚔️", status:"AKTIF",       prio:"HIGH",  desc:"Latihan pertahanan bersama seluruh unit Mobile Suit dalam skenario serangan orbital mendadak.", sched:"MINGGUAN",   quota:"SEMUA UNIT" },
  { cat:"INTELIJEN", code:"OP-002", title:"PHANTOM SIGNAL TRACK",   icon:"📡", status:"AKTIF",       prio:"ULTRA", desc:"Pemantauan sinyal dari sektor-9. Indikasi aktivitas kelompok ekstremis SCAR terdeteksi.",        sched:"REAL-TIME",  quota:"DIVISI RECON" },
  { cat:"DIPLOMATIK",code:"OP-003", title:"COVENANT OF SILENCE",    icon:"🕊️", status:"SELESAI",     prio:"MED",   desc:"Perundingan rahasia antara delegasi PLANT dan ORB. Perjanjian non-agresi berhasil ditandatangani.",sched:"APR C.E.75", quota:"TIM DIPLOMATIK" },
  { cat:"TEKNIS",    code:"OP-004", title:"DRAGOON v3.0 TEST",      icon:"🔬", status:"BERJALAN",    prio:"HIGH",  desc:"Uji coba sistem Dragoon generasi terbaru pada Freedom-II. Akurasi meningkat 34%.",                sched:"BULANAN",    quota:"LAB TEKNIKAL" },
  { cat:"TEMPUR",    code:"OP-005", title:"BREACH RESPONSE ALPHA",  icon:"🛡️", status:"STANDBY",     prio:"KRITIS",desc:"Prosedur respons cepat jika perbatasan orbital dilanggar. Seluruh unit siaga 90 detik.",         sched:"SEWAKTU-WAKTU",quota:"SEMUA UNIT" },
  { cat:"INTELIJEN", code:"OP-006", title:"SILENT CROW PHASE-2",    icon:"🦅", status:"RAHASIA",     prio:"ULTRA", desc:"Kelanjutan infiltrasi jaringan SCAR. Detail diklasifikasikan tingkat Alpha.",                     sched:"RAHASIA",    quota:"UNIT KHUSUS" },
  { cat:"TEKNIS",    code:"OP-007", title:"NEUTRON JAMMER ANALYSIS",icon:"⚡", status:"AKTIF",       prio:"HIGH",  desc:"Penelitian Neutron Jammer Canceller dan dampaknya pada reaktor nuklir sipil.",                    sched:"TRIWULANAN", quota:"30 ILMUWAN" },
  { cat:"DIPLOMATIK",code:"OP-008", title:"LACUS PEACE FORUM",      icon:"🎵", status:"AKAN DATANG", prio:"MED",   desc:"Forum perdamaian tahunan dipimpin Lacus Clyne. Terbuka untuk semua pihak.",                       sched:"NOV C.E.75", quota:"TERBUKA" },
];

const sStyle={
  AKTIF:"text-teal border-teal/40", SELESAI:"text-green-400 border-green-400/40",
  BERJALAN:"text-blue-400 border-blue-400/40", STANDBY:"text-yellow-400 border-yellow-400/40",
  RAHASIA:"text-amber-400 border-amber-400/40", "AKAN DATANG":"text-ice/60 border-ice/20",
};
const prioW={ ULTRA:"100%", KRITIS:"100%", HIGH:"70%", MED:"40%" };
const prioC={ ULTRA:"#01c3f0", KRITIS:"#01c3f0", HIGH:"#0195c3", MED:"#5ab8d8" };

export default function Programs({ navigate }) {
  const [active, setActive] = useState("SEMUA");
  const filtered = active==="SEMUA" ? ops : ops.filter(o=>o.cat===active);
  return (
    <div className="pt-20">
      <section className="py-24 relative overflow-hidden">
        <div className="scan-line"/>
        <div className="absolute inset-0" style={{background:"radial-gradient(ellipse 60% 50% at 50% 50%,rgba(1,149,195,0.08) 0%,transparent 70%)"}}/>
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <div className="font-mono text-teal/50 text-xs tracking-widest mb-4">// DAFTAR OPERASI — CLEARANCE B</div>
          <h1 className="font-orbitron font-black text-5xl md:text-6xl text-off-white mb-4">
            LOG <span className="text-teal">OPERASI</span>
          </h1>
          <p className="font-rajdhani text-ice/70 text-lg leading-relaxed">Semua misi aktif, selesai, dan yang direncanakan COMPASS. Beberapa data diklasifikasikan.</p>
        </div>
      </section>

      <section className="pb-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap gap-2 justify-center">
            {cats.map(c=>(
              <button key={c} onClick={()=>setActive(c)}
                className={`px-5 py-2 font-orbitron font-bold text-xs tracking-widest border transition-all duration-200 ${
                  active===c ? "border-teal bg-teal text-bg-dark shadow-lg shadow-teal/30" : "border-teal/30 text-ice/60 hover:border-teal hover:text-teal"
                }`}>{c}</button>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filtered.map(o=>(
              <HUD key={o.code} className="p-5 flex flex-col gap-4 group hover:border-teal/50 transition-colors cursor-default">
                <div className="scan-line" style={{animationDelay:`${Math.random()*3}s`}}/>
                <div className="h-0.5 w-full bg-teal/10">
                  <div className="h-full rounded-full" style={{width:prioW[o.prio]||"40%",backgroundColor:prioC[o.prio]||"#0195c3"}}/>
                </div>
                <div className="flex justify-between items-start">
                  <span className="font-mono text-teal/50 text-xs tracking-widest">{o.code}</span>
                  <span className={`font-mono text-xs border px-2 py-0.5 tracking-widest ${sStyle[o.status]||""}`}>{o.status}</span>
                </div>
                <div className="text-3xl">{o.icon}</div>
                <div>
                  <div className="font-mono text-teal/50 text-xs tracking-widest mb-1">{o.cat}</div>
                  <h3 className="font-orbitron font-bold text-sm text-off-white mb-2 group-hover:text-teal transition-colors leading-snug">{o.title}</h3>
                  <p className="font-rajdhani text-ice/60 text-sm leading-relaxed">{o.desc}</p>
                </div>
                <div className="mt-auto border-t border-teal/10 pt-3 grid grid-cols-2 gap-2">
                  <div>
                    <p className="font-mono text-teal/40 text-xs tracking-widest">JADWAL</p>
                    <p className="font-rajdhani text-ice/60 text-xs mt-1">{o.sched}</p>
                  </div>
                  <div>
                    <p className="font-mono text-teal/40 text-xs tracking-widest">UNIT</p>
                    <p className="font-rajdhani text-ice/60 text-xs mt-1">{o.quota}</p>
                  </div>
                </div>
                {(o.status==="AKTIF"||o.status==="AKAN DATANG")&&(
                  <button onClick={()=>navigate("contact")}
                    className="w-full py-2 border border-teal/40 text-teal font-orbitron font-bold text-xs tracking-widest hover:bg-teal hover:text-bg-dark transition-all duration-200">
                    AJUKAN DIRI
                  </button>
                )}
              </HUD>
            ))}
          </div>
          {filtered.length===0&&(
            <div className="text-center py-20 font-mono text-teal/30 tracking-widest">NO DATA FOUND</div>
          )}
        </div>
      </section>

      <section className="py-16 bg-bg-dark border-y border-teal/10">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="font-mono text-teal/50 text-xs tracking-widest mb-3">// INISIASI OPERASI BARU</div>
          <h2 className="font-orbitron font-black text-3xl text-off-white mb-4">PUNYA INTEL? <span className="text-teal">LAPORKAN.</span></h2>
          <p className="font-rajdhani text-ice/70 text-lg mb-8">Anggota COMPASS dapat mengajukan inisiatif misi baru melalui channel resmi.</p>
          <button onClick={()=>navigate("contact")}
            className="px-8 py-3 bg-teal text-bg-dark font-orbitron font-bold text-sm tracking-widest hover:bg-teal-bright transition-all shadow-lg shadow-teal/30">
            KIRIM LAPORAN
          </button>
        </div>
      </section>
    </div>
  );
}