/** Simple top-down car drawing, styled like the in-game cars. */
export function CarTop({ color, className }: { color: string; className?: string }) {
  return (
    <svg viewBox="0 0 100 200" className={className} aria-hidden>
      <defs>
        <linearGradient id={`shine-${color.slice(1)}`} x1="0" x2="1">
          <stop offset="0" stopColor="#fff" stopOpacity="0.28" />
          <stop offset="0.35" stopColor="#fff" stopOpacity="0.04" />
          <stop offset="1" stopColor="#000" stopOpacity="0.3" />
        </linearGradient>
        <linearGradient id="glass" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#2a3550" />
          <stop offset="1" stopColor="#05070d" />
        </linearGradient>
      </defs>
      {/* shadow */}
      <rect x="14" y="16" width="76" height="182" rx="30" fill="#000" opacity="0.4" />
      {/* tyres */}
      <rect x="4" y="34" width="10" height="30" rx="4" fill="#08080c" />
      <rect x="86" y="34" width="10" height="30" rx="4" fill="#08080c" />
      <rect x="4" y="138" width="10" height="32" rx="4" fill="#08080c" />
      <rect x="86" y="138" width="10" height="32" rx="4" fill="#08080c" />
      {/* body */}
      <path d="M50 6C72 6 88 18 89 44L90 160C90 184 76 194 50 194C24 194 10 184 10 160L11 44C12 18 28 6 50 6Z" fill={color} />
      <path d="M50 6C72 6 88 18 89 44L90 160C90 184 76 194 50 194C24 194 10 184 10 160L11 44C12 18 28 6 50 6Z" fill={`url(#shine-${color.slice(1)})`} />
      {/* windscreen, roof, rear glass */}
      <path d="M22 66C30 56 70 56 78 66L74 88H26Z" fill="url(#glass)" />
      <rect x="27" y="88" width="46" height="46" rx="6" fill={color} />
      <rect x="27" y="88" width="46" height="46" rx="6" fill="#000" opacity="0.18" />
      <path d="M26 134H74L77 152C68 158 32 158 23 152Z" fill="url(#glass)" />
      {/* stripes */}
      <rect x="41" y="8" width="6" height="56" fill="#fff" opacity="0.85" />
      <rect x="53" y="8" width="6" height="56" fill="#fff" opacity="0.85" />
      {/* lights */}
      <path d="M20 16Q28 10 38 10" stroke="#f4fdff" strokeWidth="4" fill="none" strokeLinecap="round" />
      <path d="M80 16Q72 10 62 10" stroke="#f4fdff" strokeWidth="4" fill="none" strokeLinecap="round" />
      <rect x="18" y="186" width="64" height="3" rx="1.5" fill="#ff2a4d" />
    </svg>
  );
}
