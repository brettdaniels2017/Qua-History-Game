export function Eagle({ className = 'eagle' }) {
  return (
    <svg className={className} viewBox="0 0 120 88" aria-hidden="true">
      <path
        fill="currentColor"
        d="M60 34c2-8 8-14 8-14s2 8-2 14c8-2 18-2 26 4-8 2-14 8-16 14 10 0 20 4 24 12-10-2-18 2-22 8 4 8 4 16-2 22-4-8-10-12-16-12 0 8-4 14-4 14s-4-6-4-14c-6 0-12 4-16 12-6-6-6-14-2-22-4-6-12-10-22-8 4-8 14-12 24-12-2-6-8-12-16-14 8-6 18-6 26-4-4-6-4-14-2-14s6 6 8 14z"
      />
      <path fill="#1a090c" d="M78 28l8 2-6 5-2-7z" />
    </svg>
  );
}

export function Laurel() {
  return (
    <svg className="laurel" viewBox="0 0 220 36" aria-hidden="true">
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        d="M20 20h180"
      />
      <g fill="currentColor">
        <ellipse cx="28" cy="14" rx="7" ry="3.2" transform="rotate(-40 28 14)" />
        <ellipse cx="44" cy="12" rx="7" ry="3.2" transform="rotate(-28 44 12)" />
        <ellipse cx="60" cy="14" rx="7" ry="3.2" transform="rotate(-12 60 14)" />
        <ellipse cx="160" cy="14" rx="7" ry="3.2" transform="rotate(12 160 14)" />
        <ellipse cx="176" cy="12" rx="7" ry="3.2" transform="rotate(28 176 12)" />
        <ellipse cx="192" cy="14" rx="7" ry="3.2" transform="rotate(40 192 14)" />
      </g>
    </svg>
  );
}

export function Cameo({ who, label }) {
  const caesar = who === 'caesar';
  const senator = who === 'senator';
  const title = caesar ? 'Julius Caesar' : senator ? (label || 'Senator') : 'Lucius Valerius';
  const caption = caesar ? 'CAESAR' : senator ? (label || 'SENATE') : 'VALERIUS';
  return (
    <svg className={`cameo cameo-${who}`} viewBox="0 0 200 220" role="img" aria-label={title}>
      <defs>
        <radialGradient id={`stone-${who}`} cx="38%" cy="32%" r="70%">
          <stop offset="0%" stopColor="#f7f1e6" />
          <stop offset="58%" stopColor="#e4d5be" />
          <stop offset="100%" stopColor="#b7a68e" />
        </radialGradient>
      </defs>
      <circle cx="100" cy="104" r="86" fill={caesar ? '#5c1822' : senator ? '#3a2a22' : '#2a211c'} />
      <circle cx="100" cy="104" r="78" fill="none" stroke="#e2c37a" strokeWidth="3" />
      <circle cx="100" cy="104" r="70" fill="none" stroke="#8c7040" strokeWidth="1" />
      <Profile
        stone={`stone-${who}`}
        flip={caesar}
        laurel={caesar}
        cloak={caesar ? '#6e1c28' : senator ? '#c4b49a' : '#efe6d4'}
        hair={caesar ? '#2c241e' : senator ? '#2c241e' : '#6a645c'}
        bald={!caesar && !senator}
      />
      <text x="100" y="198" textAnchor="middle" fill="#e2c37a" fontSize="11" letterSpacing="2">
        {caption}
      </text>
    </svg>
  );
}

function Profile({ stone, flip, laurel, cloak, hair, bald }) {
  return (
    <g transform={flip ? 'translate(200 0) scale(-1 1)' : undefined}>
      <path fill={cloak} d="M28 158c28 16 116 16 144 0v28H28z" />
      <path fill={cloak === '#6e1c28' ? '#f0d78c' : '#7a1e2b'} d="M86 168h28v7H86z" />
      <path
        fill={`url(#${stone})`}
        d="M46 156
          C44 128 40 104 52 86
          C40 70 52 42 82 34
          C108 26 132 40 140 62
          C146 72 136 78 146 86
          L168 98
          L146 108
          C154 118 148 130 132 132
          C126 150 112 164 102 170
          L78 170
          L64 156
          Z"
      />
      <path
        fill={hair}
        d={bald
          ? 'M58 86c-4 14-2 26 8 32 4-12 8-20 6-30 10 4 16 16 12 26 2-22 16-34 34-30-12-16-36-18-60 2z'
          : 'M54 96C46 70 62 40 92 32c22-6 42 2 50 18-12-8-18 2-16 12-12-14-30-16-46-6-6 12-10 24-26 40z'}
      />
      {laurel ? (
        <path fill="#e2c37a" d="M48 78c14-26 46-36 68-24-4 8-16 8-16 8s10 0 14 8c-20-2-40 10-50 24-8-4-14-10-16-16z" />
      ) : null}
      <path fill="#4a3828" d="M138 78c6 1 8 5 5 8-5 1-8-2-5-8z" />
      <path fill="none" stroke="#6d5844" strokeWidth="2.2" strokeLinecap="round" d="M150 116c8 3 10 9 4 13" />
    </g>
  );
}
