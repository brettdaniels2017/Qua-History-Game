export default function Backdrop() {
  return (
    <div className="backdrop" aria-hidden="true">
      <svg className="backdrop-svg" viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice">
        <defs>
          <linearGradient id="column-stone" x1="0" x2="1">
            <stop offset="0%" stopColor="#1a1412" />
            <stop offset="45%" stopColor="#4a3c34" />
            <stop offset="100%" stopColor="#120e0c" />
          </linearGradient>
        </defs>
        <rect width="1440" height="900" fill="#14080b" />
        <path d="M160 250 Q720 20 1280 250" fill="none" stroke="#e2c37a" strokeOpacity="0.35" strokeWidth="3" />
        <path d="M210 270 Q720 70 1230 270" fill="none" stroke="#e2c37a" strokeOpacity="0.18" strokeWidth="1.5" />
        {[70, 150, 1290, 1370].map((x) => (
          <g key={x}>
            <rect x={x} y="180" width="46" height="560" fill="url(#column-stone)" />
            <rect x={x - 8} y="160" width="62" height="22" fill="#3a302a" />
            <rect x={x - 10} y="730" width="66" height="26" fill="#3a302a" />
            {[0, 1, 2, 3, 4].map((flute) => (
              <rect key={flute} x={x + 6 + flute * 8} y="186" width="2" height="540" fill="#000" opacity="0.28" />
            ))}
          </g>
        ))}
        <path d="M0 860 L720 760 L1440 860 L1440 900 L0 900 Z" fill="#0c0607" opacity="0.72" />
      </svg>
      <div className="vignette" />
      <div className="grain" />
    </div>
  );
}
