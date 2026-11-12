import brutus from '../assets/portraits/brutus.jpg';
import caesarCoin from '../assets/portraits/caesar.jpg';
import cato from '../assets/portraits/cato.jpg';
import cicero from '../assets/portraits/cicero.jpg';
import domitius from '../assets/portraits/domitius.jpg';
import pompeius from '../assets/portraits/pompeius.jpg';
import valerius from '../assets/portraits/valerius.jpg';

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

const COINS = {
  CAESAR: [caesarCoin, 'Julius Caesar'],
  VALERIUS: [valerius, 'Lucius Valerius'],
  CATO: [cato, 'Marcus Porcius Cato'],
  DOMITIUS: [domitius, 'Lucius Domitius Ahenobarbus'],
  CICERO: [cicero, 'Marcus Tullius Cicero'],
  POMPEIUS: [pompeius, 'Gnaeus Pompeius'],
  BRUTUS: [brutus, 'Marcus Junius Brutus'],
};

export function Cameo({ who, label }) {
  const key = who === 'caesar' ? 'CAESAR' : (label || 'VALERIUS');
  const [src, title] = COINS[key] || COINS.VALERIUS;
  return (
    <figure className={`cameo cameo-${who || 'player'}`} role="img" aria-label={title}>
      <img src={src} alt="" />
    </figure>
  );
}
