import CompassLogo from "./CompassLogo";
export default function Footer({ navigate }) {
  return (
    <footer className="bg-bg-dark border-t border-teal/15 pt-16 pb-8 relative overflow-hidden">
      <div className="absolute inset-0 opacity-30" style={{
        backgroundImage:`url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='104'%3E%3Cpath d='M30 52L0 34V0l30-18 30 18v34zM30 104L0 86V52l30-18 30 18v34z' fill='none' stroke='%230195c30a' stroke-width='1'/%3E%3C/svg%3E")`
      }}/>
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <CompassLogo size={44} mini={true}/>
              <div>
                <span className="font-orbitron font-black text-base tracking-widest text-off-white">COMPASS</span>
                <div className="h-px bg-gradient-to-r from-teal to-transparent mt-0.5"/>
              </div>
            </div>
            <p className="font-mono text-teal/50 text-xs leading-relaxed">COMPULSORY OBSERVATIONAL</p>
            <p className="font-mono text-teal/50 text-xs leading-relaxed">MAKING PEACE SERVICE</p>
            <p className="font-rajdhani text-ice/50 text-sm leading-relaxed mt-3">
              Menjaga perdamaian antara PLANT dan Bumi. Netral. Tanpa batas ideologi.
            </p>
          </div>
          <div>
            <h4 className="font-orbitron text-teal text-xs tracking-widest mb-5">// NAVIGASI</h4>
            <ul className="space-y-3">
              {[["BERANDA","home"],["TENTANG","about"],["OPERASI","programs"],["KONTAK","contact"]].map(([l,k])=>(
                <li key={k}>
                  <button onClick={()=>navigate(k)}
                    className="font-rajdhani font-semibold text-ice/60 text-sm tracking-widest hover:text-teal transition-colors flex items-center gap-2">
                    <span className="text-teal/40">›</span>{l}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-orbitron text-teal text-xs tracking-widest mb-5">// KOORDINAT</h4>
            <ul className="space-y-3 font-rajdhani text-ice/60 text-sm">
              {[["◆","Lagrange Point-1, Earth Orbit"],["◆","command@compass.orbital"],["◆","CHANNEL: COMPASS-NET α7"]].map(([icon,v])=>(
                <li key={v} className="flex gap-2"><span className="text-teal">{icon}</span>{v}</li>
              ))}
            </ul>
            <div className="flex gap-2 mt-5">
              {["FRD","NET","COM"].map(s=>(
                <div key={s} className="w-10 h-8 border border-teal/30 flex items-center justify-center font-mono text-teal text-xs hover:bg-teal/20 hover:border-teal/60 transition-all cursor-pointer tracking-widest">{s}</div>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t border-teal/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-mono text-teal/30 text-xs tracking-widest">© C.E. 75 — COMPASS ORGANIZATION</p>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-teal pulse-teal"/>
            <p className="font-mono text-teal/30 text-xs tracking-widest">SYSTEM NOMINAL</p>
          </div>
        </div>
      </div>
    </footer>
  );
}