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

const faqs=[
  { q:"Siapa yang bisa mendaftar COMPASS?", a:"COMPASS menerima Coordinator dan Natural tanpa diskriminasi. Yang kami butuhkan adalah komitmen pada perdamaian dan kemampuan teknis yang dapat dikembangkan." },
  { q:"Apakah dibutuhkan kemampuan pilot Mobile Suit?", a:"Tidak wajib. COMPASS memiliki divisi non-tempur: diplomatik, teknis, medis, intelijen, dan logistik. Semua peran sama pentingnya." },
  { q:"Di mana markas utama COMPASS?", a:"Markas utama di Lagrange Point-1, stasiun orbital ETERNAL. Namun kami punya pos koordinasi di ORB, Copernicus, dan PLANT." },
  { q:"Berapa lama proses seleksi?", a:"Pendaftaran → evaluasi berkas → tes psikologi → wawancara panel komando → masa percobaan 90 hari. Total sekitar 3 bulan." },
];

export default function Contact() {
  const [form, setForm] = useState({ nama:"", email:"", unit:"", pesan:"" });
  const [sent, setSent] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  const handleChange = e => setForm({...form,[e.target.name]:e.target.value});
  const handleSubmit = e => { e.preventDefault(); if(form.nama&&form.email&&form.pesan){setSent(true);setForm({nama:"",email:"",unit:"",pesan:""});} };

  return (
    <div className="pt-20">
      <section className="py-24 text-center relative overflow-hidden">
        <div className="scan-line"/>
        <div className="absolute inset-0" style={{background:"radial-gradient(ellipse 60% 50% at 50% 50%,rgba(1,149,195,0.08) 0%,transparent 70%)"}}/>
        <div className="relative z-10 max-w-2xl mx-auto px-6">
          <div className="font-mono text-teal/50 text-xs tracking-widest mb-4">// REKRUTMEN & KOMUNIKASI</div>
          <h1 className="font-orbitron font-black text-5xl md:text-6xl text-off-white mb-4">
            HUBUNGI <span className="text-teal">COMMAND</span>
          </h1>
          <p className="font-rajdhani text-ice/70 text-lg leading-relaxed">Transmisi ke COMPASS Command. Semua komunikasi dienkripsi tingkat Alpha. Respons dalam 24 jam C.E.</p>
        </div>
      </section>

      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form */}
          <div>
            <div className="font-mono text-teal/50 text-xs tracking-widest mb-6">// KIRIM TRANSMISI</div>
            {sent ? (
              <HUD className="p-10 text-center">
                <div className="scan-line"/>
                <div className="text-5xl mb-4">✅</div>
                <div className="font-mono text-teal text-xs tracking-widest mb-2">TRANSMISSION RECEIVED</div>
                <h3 className="font-orbitron font-bold text-xl text-off-white mb-3">TRANSMISI BERHASIL</h3>
                <p className="font-rajdhani text-ice/60 text-base">Command akan memproses pesan Anda. Standby di channel yang sama.</p>
                <button onClick={()=>setSent(false)} className="mt-6 font-orbitron text-teal text-xs tracking-widest border-b border-teal/30 hover:border-teal transition-colors">
                  KIRIM TRANSMISI LAIN ›
                </button>
              </HUD>
            ) : (
              <HUD className="p-8">
                <div className="scan-line"/>
                <form onSubmit={handleSubmit} className="space-y-5">
                  {[{name:"nama",label:"NAMA / CALLSIGN",ph:"KIRA YAMATO"},{name:"email",label:"KANAL KOMUNIKASI (EMAIL)",ph:"kira@compass.orbital"},{name:"unit",label:"DIVISI YANG DIMINATI (OPSIONAL)",ph:"RECON / DIPLOMATIC / TECHNICAL..."}].map(f=>(
                    <div key={f.name}>
                      <label className="font-mono text-teal/50 text-xs tracking-widest block mb-2">{f.label}</label>
                      <input type="text" name={f.name} value={form[f.name]} onChange={handleChange} placeholder={f.ph}
                        className="w-full bg-transparent border border-teal/20 text-off-white font-rajdhani text-base px-4 py-3 focus:outline-none focus:border-teal placeholder-teal/20 transition-colors tracking-wide"/>
                    </div>
                  ))}
                  <div>
                    <label className="font-mono text-teal/50 text-xs tracking-widest block mb-2">PESAN / ALASAN BERGABUNG</label>
                    <textarea name="pesan" value={form.pesan} onChange={handleChange} rows={5} placeholder="Sampaikan motivasi dan latar belakang Anda..."
                      className="w-full bg-transparent border border-teal/20 text-off-white font-rajdhani text-base px-4 py-3 focus:outline-none focus:border-teal placeholder-teal/20 transition-colors resize-none tracking-wide"/>
                  </div>
                  <button type="submit"
                    className="w-full py-4 bg-teal text-bg-dark font-orbitron font-bold text-sm tracking-widest hover:bg-teal-bright transition-all shadow-lg shadow-teal/30">
                    KIRIM TRANSMISI
                  </button>
                </form>
              </HUD>
            )}
          </div>

          {/* Info + FAQ */}
          <div>
            <div className="font-mono text-teal/50 text-xs tracking-widest mb-6">// KOORDINAT KOMANDO</div>
            <div className="space-y-3 mb-10">
              {[["📍","LOKASI","Lagrange Point-1 — Stasiun ETERNAL, Earth Orbit"],["📡","FREKUENSI","COMPASS-NET — Channel 7-Alpha (Terenkripsi)"],["📧","EMAIL","command@compass.orbital"],["🕐","RESPONS","MAX 24 JAM — SETIAP HARI, C.E. STANDARD"]].map(([icon,label,value])=>(
                <HUD key={label} className="p-4 flex gap-4 items-start hover:border-teal/40 transition-colors">
                  <span className="text-xl mt-0.5 flex-shrink-0">{icon}</span>
                  <div>
                    <p className="font-mono text-teal/50 text-xs tracking-widest mb-1">{label}</p>
                    <p className="font-rajdhani text-off-white text-sm">{value}</p>
                  </div>
                </HUD>
              ))}
            </div>

            <div className="font-mono text-teal/50 text-xs tracking-widest mb-6">// PERTANYAAN UMUM</div>
            <div className="space-y-2">
              {faqs.map((f,i)=>(
                <HUD key={i} className="overflow-hidden">
                  <button onClick={()=>setOpenFaq(openFaq===i?null:i)}
                    className="w-full px-5 py-4 text-left flex justify-between items-center hover:bg-teal/5 transition-colors">
                    <span className="font-rajdhani font-semibold text-off-white text-sm pr-4 leading-snug">{f.q}</span>
                    <span className={`font-orbitron text-teal text-lg transition-transform flex-shrink-0 ${openFaq===i?"rotate-45":""}`}>+</span>
                  </button>
                  {openFaq===i&&(
                    <div className="px-5 pb-5 border-t border-teal/10">
                      <p className="font-rajdhani text-ice/60 text-base leading-relaxed pt-4">{f.a}</p>
                    </div>
                  )}
                </HUD>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}