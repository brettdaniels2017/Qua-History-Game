import { useState } from 'react';
import { CHARACTERS, INTRO_BEATS } from '../data/historyContent.js';
import { INITIAL_STATS } from '../game/engine.js';
import { Cameo } from './Emblems.jsx';
import StatsBar from './StatsBar.jsx';

export default function IntroScreen({ onBegin }) {
  const [beat, setBeat] = useState(0);
  const current = INTRO_BEATS[beat];
  const last = beat === INTRO_BEATS.length - 1;

  return (
    <div className="intro-screen">
      <article className="intro-card" key={beat}>
        <p className="kicker">{current.kicker}</p>
        <div className="narration">
          {current.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        {current.dossiers ? (
          <div className="dossier-grid">
            <Dossier who="player" character={CHARACTERS.player} />
            <Dossier who="caesar" character={CHARACTERS.caesar} />
          </div>
        ) : null}
        <div className="beat-dots" aria-hidden="true">
          {INTRO_BEATS.map((item, index) => (
            <span key={item.kicker} className={index === beat ? 'is-on' : ''} />
          ))}
        </div>
        <button
          type="button"
          className="btn btn-wax"
          data-action="continue"
          onClick={() => (last ? onBegin() : setBeat(beat + 1))}
        >
          {last ? 'Enter the Curia' : 'Continue'}
        </button>
      </article>
      {last ? (
        <div className="intro-stats">
          <p>You enter the Senate with these standing measures.</p>
          <StatsBar stats={INITIAL_STATS} />
        </div>
      ) : null}
    </div>
  );
}

function Dossier({ who, character }) {
  return (
    <section className={`dossier dossier-${who}`}>
      <Cameo who={who} />
      <div>
        <h2>{character.name}</h2>
        <p className="role">{character.role}</p>
        <p>{character.summary}</p>
        <ul>
          {character.points.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
