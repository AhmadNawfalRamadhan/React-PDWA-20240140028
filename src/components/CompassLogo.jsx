/**
 * COMPASS Logo — pixel-accurate SVG recreation
 * Reference: Gundam SEED Freedom C.O.M.P.S. badge
 *
 * Structure (bottom to top layering):
 * 1. Teal outer glow circle
 * 2. Main teal/blue circle body
 * 3. 8-point star burst (white/ice tips)
 * 4. Inner navy circle
 * 5. White shield/crest (square-ish with rounded bottom arc)
 * 6. Dark navy diamond visor with blue highlight
 * 7. Two wings (crystalline, swept up, slightly inward at top)
 * 8. C.O.M.P.S. arc text below
 */
export default function CompassLogo({ size = 300, glow = false, floating = false, mini = false }) {
  const id = mini ? "mini" : "full";
  const S  = 300; // internal viewBox size
  const cx = 150, cy = 162; // center of emblem (slightly below center for text room)

  const dropGlow = glow
    ? "drop-shadow(0 0 10px rgba(120,210,255,0.95)) drop-shadow(0 0 28px rgba(1,149,195,0.7)) drop-shadow(0 0 55px rgba(1,100,180,0.35))"
    : "none";

  return (
    <svg
      width={size} height={size}
      viewBox={`0 0 ${S} ${S}`}
      xmlns="http://www.w3.org/2000/svg"
      style={{ filter: dropGlow, transition: "filter .4s" }}
      className={floating ? "float" : ""}
    >
      <defs>
        {/* Outer ambient glow gradient */}
        <radialGradient id={`amb-${id}`} cx="50%" cy="50%" r="50%">
          <stop offset="0%"   stopColor="#1ab0e8" stopOpacity="0.25"/>
          <stop offset="55%"  stopColor="#0195c3" stopOpacity="0.08"/>
          <stop offset="100%" stopColor="#0195c3" stopOpacity="0"/>
        </radialGradient>

        {/* Main circle — deep navy-teal */}
        <radialGradient id={`circ-${id}`} cx="50%" cy="38%" r="55%">
          <stop offset="0%"   stopColor="#1e6fa8"/>
          <stop offset="45%"  stopColor="#0d4070"/>
          <stop offset="100%" stopColor="#061428"/>
        </radialGradient>

        {/* Wing face gradient — ice white → pale blue */}
        <linearGradient id={`wL-${id}`} x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%"   stopColor="#ffffff"/>
          <stop offset="35%"  stopColor="#ddf0ff"/>
          <stop offset="100%" stopColor="#7cc4e0" stopOpacity="0.5"/>
        </linearGradient>
        <linearGradient id={`wR-${id}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%"   stopColor="#ffffff"/>
          <stop offset="35%"  stopColor="#ddf0ff"/>
          <stop offset="100%" stopColor="#7cc4e0" stopOpacity="0.5"/>
        </linearGradient>
        {/* Wing shadow/inner blade */}
        <linearGradient id={`wi-${id}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%"   stopColor="#a8d8f0"/>
          <stop offset="100%" stopColor="#4898c0" stopOpacity="0.6"/>
        </linearGradient>

        {/* Star points gradient */}
        <linearGradient id={`star-${id}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%"   stopColor="#ffffff"/>
          <stop offset="100%" stopColor="#90d0f0"/>
        </linearGradient>

        {/* Shield face — bright white-blue */}
        <linearGradient id={`sh-${id}`} x1="15%" y1="0%" x2="85%" y2="100%">
          <stop offset="0%"   stopColor="#f0f9ff"/>
          <stop offset="40%"  stopColor="#cce8f8"/>
          <stop offset="100%" stopColor="#88c4e0"/>
        </linearGradient>

        {/* Visor — very dark navy */}
        <linearGradient id={`vis-${id}`} x1="30%" y1="0%" x2="70%" y2="100%">
          <stop offset="0%"   stopColor="#0e2860"/>
          <stop offset="60%"  stopColor="#061440"/>
          <stop offset="100%" stopColor="#020a20"/>
        </linearGradient>

        {/* Visor left edge highlight */}
        <linearGradient id={`vihl-${id}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%"   stopColor="#40a8d8" stopOpacity="0.7"/>
          <stop offset="100%" stopColor="#1878b0" stopOpacity="0.1"/>
        </linearGradient>

        <filter id={`sf-${id}`} x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="2.5" result="b"/>
          <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
      </defs>

      {/* ── 1. AMBIENT GLOW ── */}
      <circle cx={cx} cy={cy} r="138" fill={`url(#amb-${id})`}/>

      {/* ── 2. MAIN CIRCLE ── */}
      <circle cx={cx} cy={cy} r="96"  fill={`url(#circ-${id})`}/>
      <circle cx={cx} cy={cy} r="96"  fill="none" stroke="#1a6090" strokeWidth="1.5" opacity="0.7"/>
      <circle cx={cx} cy={cy} r="89"  fill="none" stroke="#0d4060" strokeWidth="0.8" opacity="0.4"/>

      {/* ── 3. STAR BURST — 8 points ── */}
      {Array.from({ length: 8 }, (_, i) => {
        const a1 = ((i * 45) - 90) * Math.PI / 180;
        const a2 = ((i * 45) - 90 + 22.5) * Math.PI / 180;
        const a3 = ((i * 45) - 90 + 45) * Math.PI / 180;
        const ro = 82, ri = 64; // outer & inner radii
        return (
          <path key={i}
            d={`M${cx},${cy}
                L${cx + Math.cos(a1)*ro},${cy + Math.sin(a1)*ro}
                L${cx + Math.cos(a2)*ri},${cy + Math.sin(a2)*ri}
                L${cx + Math.cos(a3)*ro},${cy + Math.sin(a3)*ro}Z`}
            fill={`url(#star-${id})`}
            opacity={i % 2 === 0 ? 0.92 : 0.78}
          />
        );
      })}

      {/* ── 4. INNER NAVY CIRCLE ── */}
      <circle cx={cx} cy={cy} r="58" fill="#0a1e50"/>
      <circle cx={cx} cy={cy} r="58" fill="none" stroke="#1a4878" strokeWidth="1" opacity="0.5"/>

      {/* ── 5. SHIELD / CREST ──
           Shape: square top with a gentle bottom arc (like the logo reference)
           It sits centered, extends above and below the navy circle */}
      {/* Shield shadow */}
      <path
        d={`M${cx-44},${cy-52} L${cx+44},${cy-52}
            L${cx+44},${cy+20} Q${cx+44},${cy+62} ${cx},${cy+68}
            Q${cx-44},${cy+62} ${cx-44},${cy+20} Z`}
        fill="#0a2850" opacity="0.5" transform="translate(3,4)"
      />
      {/* Shield face */}
      <path
        d={`M${cx-44},${cy-52} L${cx+44},${cy-52}
            L${cx+44},${cy+20} Q${cx+44},${cy+62} ${cx},${cy+68}
            Q${cx-44},${cy+62} ${cx-44},${cy+20} Z`}
        fill={`url(#sh-${id})`}
        filter={`url(#sf-${id})`}
      />
      {/* Shield inner bevel highlight (top) */}
      <path
        d={`M${cx-40},${cy-48} L${cx+40},${cy-48} L${cx+40},${cy-38} L${cx-40},${cy-38} Z`}
        fill="#ffffff" opacity="0.25"
      />
      {/* Shield top flat line accent */}
      <line x1={cx-44} y1={cy-52} x2={cx+44} y2={cy-52}
        stroke="#ffffff" strokeWidth="2" opacity="0.6"/>

      {/* ── 6. DIAMOND VISOR ──
           Tall narrow diamond, dark navy, sitting inside shield */}
      {/* Visor drop shadow */}
      <path
        d={`M${cx},${cy-44} L${cx+22},${cy+4} L${cx},${cy+58} L${cx-22},${cy+4} Z`}
        fill="#020818" opacity="0.45" transform="translate(2,4)"
      />
      {/* Main visor shape */}
      <path
        d={`M${cx},${cy-44} L${cx+22},${cy+4} L${cx},${cy+58} L${cx-22},${cy+4} Z`}
        fill={`url(#vis-${id})`}
      />
      {/* Left face highlight */}
      <path
        d={`M${cx},${cy-44} L${cx-22},${cy+4} L${cx},${cy+12} Z`}
        fill={`url(#vihl-${id})`}
      />
      {/* Right face — slightly lighter */}
      <path
        d={`M${cx},${cy-44} L${cx+22},${cy+4} L${cx},${cy+12} Z`}
        fill="#1868a8" opacity="0.2"
      />
      {/* Center spine */}
      <line x1={cx} y1={cy-44} x2={cx} y2={cy+58}
        stroke="#3898c8" strokeWidth="1.2" opacity="0.5"/>
      {/* Horizontal crease line */}
      <line x1={cx-16} y1={cy+6} x2={cx+16} y2={cy+6}
        stroke="#3898c8" strokeWidth="0.8" opacity="0.4"/>

      {/* ── 7. WINGS ──
           Crystalline, angular, swept upward.
           Two main blades + one inner thinner blade each side.
           Wing roots meet at top-center of shield. */}

      {/* LEFT WING */}
      {/* Outer main blade */}
      <path
        d={`M${cx-4},${cy-58}
            L${cx-40},${cy-108}
            L${cx-60},${cy-98}
            L${cx-78},${cy-78}
            L${cx-62},${cy-60}
            L${cx-40},${cy-54}
            L${cx-16},${cy-52}
            Z`}
        fill={`url(#wL-${id})`} opacity="0.96"
      />
      {/* Inner thinner blade (darker, behind) */}
      <path
        d={`M${cx-4},${cy-58}
            L${cx-28},${cy-96}
            L${cx-46},${cy-86}
            L${cx-56},${cy-68}
            L${cx-42},${cy-56}
            L${cx-20},${cy-52}
            Z`}
        fill={`url(#wi-${id})`} opacity="0.72"
      />
      {/* Sharp top spike */}
      <path
        d={`M${cx-6},${cy-60}
            L${cx-34},${cy-112}
            L${cx-44},${cy-106}
            L${cx-18},${cy-62}
            Z`}
        fill="#ffffff" opacity="0.85"
      />
      {/* Second spike, slightly lower */}
      <path
        d={`M${cx-18},${cy-56}
            L${cx-55},${cy-100}
            L${cx-64},${cy-92}
            L${cx-30},${cy-54}
            Z`}
        fill="#e0f2ff" opacity="0.65"
      />
      {/* Wing bottom feather */}
      <path
        d={`M${cx-16},${cy-52}
            L${cx-62},${cy-60}
            L${cx-66},${cy-46}
            L${cx-24},${cy-46}
            Z`}
        fill="#c0e4f8" opacity="0.55"
      />

      {/* RIGHT WING (mirror) */}
      <path
        d={`M${cx+4},${cy-58}
            L${cx+40},${cy-108}
            L${cx+60},${cy-98}
            L${cx+78},${cy-78}
            L${cx+62},${cy-60}
            L${cx+40},${cy-54}
            L${cx+16},${cy-52}
            Z`}
        fill={`url(#wR-${id})`} opacity="0.96"
      />
      <path
        d={`M${cx+4},${cy-58}
            L${cx+28},${cy-96}
            L${cx+46},${cy-86}
            L${cx+56},${cy-68}
            L${cx+42},${cy-56}
            L${cx+20},${cy-52}
            Z`}
        fill={`url(#wi-${id})`} opacity="0.72"
      />
      <path
        d={`M${cx+6},${cy-60}
            L${cx+34},${cy-112}
            L${cx+44},${cy-106}
            L${cx+18},${cy-62}
            Z`}
        fill="#ffffff" opacity="0.85"
      />
      <path
        d={`M${cx+18},${cy-56}
            L${cx+55},${cy-100}
            L${cx+64},${cy-92}
            L${cx+30},${cy-54}
            Z`}
        fill="#e0f2ff" opacity="0.65"
      />
      <path
        d={`M${cx+16},${cy-52}
            L${cx+62},${cy-60}
            L${cx+66},${cy-46}
            L${cx+24},${cy-46}
            Z`}
        fill="#c0e4f8" opacity="0.55"
      />

      {/* ── 8. C.O.M.P.S. ARC TEXT ── */}
      {!mini && (
        <>
          <path id={`textarc-${id}`}
            d={`M ${cx-68},${cy+62} A 72,72 0 0,0 ${cx+68},${cy+62}`}
            fill="none"/>
          <text fontFamily="Orbitron,sans-serif" fontSize="10.5" fontWeight="700"
            fill="#90d0f0" letterSpacing="7" opacity="0.9">
            <textPath href={`#textarc-${id}`} startOffset="50%" textAnchor="middle">
              C . O . M . P . S .
            </textPath>
          </text>
        </>
      )}

      {/* Outer dashed orbit ring */}
      <circle cx={cx} cy={cy} r="116" fill="none"
        stroke="#0195c3" strokeWidth="0.7"
        strokeDasharray="3 7" opacity="0.18"/>
    </svg>
  );
}