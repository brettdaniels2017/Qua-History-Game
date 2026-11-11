import { composeEnding } from '../data/endings.js';
import { Eagle, Laurel } from './Emblems.jsx';
import StatsBar from './StatsBar.jsx';

export default function EndingScreen({ game, onAgain, onContext }) {
  const ending = composeEnding(game.stats, game.flags, game.log);

  return (
    <div className={`ending-screen ending-${ending.id}`} data-ending={ending.id}>
      <article className="ending-card">
        <Eagle />
        <p className="kicker">{ending.latin}</p>
        <h1>{ending.title}</h1>
        <Laurel />
        <div className="narration">
          {ending.scene.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <blockquote className="speech speech-caesar">
          <footer>Julius Caesar</footer>
          {ending.caesarSpeech.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </blockquote>
        <blockquote className="speech speech-player">
          <footer>Lucius Valerius</footer>
          {ending.playerSpeech.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </blockquote>

        <section>
          <h2>How your choices shaped Rome</h2>
          {ending.why.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </section>

        <StatsBar stats={ending.stats} />

        <section>
          <h2>The six debates</h2>
          <ol className="chronicle">
            {ending.log.map((round) => (
              <li key={round.debateId}>
                <span>{round.numeral}</span>
                <div>
                  <strong>{round.title}</strong>
                  <p>{round.decisionLabel}</p>
                </div>
                <em>{round.rating}/10</em>
                <b>{round.before.argument} → {round.after.argument}</b>
              </li>
            ))}
          </ol>
        </section>

        <section>
          <h2>What history did</h2>
          {ending.history.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </section>

        <div className="btn-row">
          <button type="button" className="btn btn-wax" data-action="again" onClick={onAgain}>
            Play Again
          </button>
          <button type="button" className="btn btn-stone" onClick={onContext}>
            Historical Context
          </button>
        </div>
      </article>
    </div>
  );
}
