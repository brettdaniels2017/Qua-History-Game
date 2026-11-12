import { useState } from 'react';
import { DEBATES } from '../data/debates.js';
import { HISTORY, HOW_TO } from '../data/historyContent.js';
import { Cameo, Eagle, Laurel } from './Emblems.jsx';
import { ArticleBody } from './InfoScreen.jsx';

const TABS = [
  { id: 'start', label: 'Start Game' },
  { id: 'context', label: 'Historical Context' },
  { id: 'works', label: 'How the Game Works' },
];

export default function TitleScreen({ onStart }) {
  const [tab, setTab] = useState('start');

  return (
    <div className="title-screen">
      <header className="title-slab">
        <Eagle />
        <p className="kicker">Rome · 50 BCE</p>
        <h1>
          <span>The Last Republic</span>
          <small>A Senator’s Dilemma</small>
        </h1>
        <Laurel />
        <p className="tagline">One Republic. One Man. The Fate of Rome.</p>
        <div className="home-coins">
          <div className="home-coin">
            <Cameo who="player" />
            <p>Lucius Valerius</p>
          </div>
          <div className="home-coin">
            <Cameo who="caesar" />
            <p>Julius Caesar</p>
          </div>
        </div>
      </header>

      <div className="home-board">
        <div className="home-tabs" role="tablist" aria-label="Home">
          {TABS.map((item) => (
            <button
              key={item.id}
              type="button"
              role="tab"
              id={`home-tab-${item.id}`}
              className={tab === item.id ? 'is-on' : ''}
              aria-selected={tab === item.id}
              aria-controls={`home-panel-${item.id}`}
              onClick={() => setTab(item.id)}
            >
              {item.label}
            </button>
          ))}
        </div>

        {tab === 'start' && (
          <section
            className="home-panel"
            role="tabpanel"
            id="home-panel-start"
            aria-labelledby="home-tab-start"
          >
            <p className="kicker">The Curia is in session</p>
            <p className="lede">
              Rome stands at the edge of a political revolution. One man believes he can save it. Another believes he will destroy everything it stands for.
            </p>
            <p>
              You are Senator Lucius Valerius. Six debates run from 50 to 44 BCE. Choose a side, answer the person who took the other, and the Senate moves with the strength of the case.
            </p>
            <button type="button" className="btn btn-wax" onClick={onStart}>
              Start Game
            </button>
            <ol className="agenda">
              {DEBATES.map((debate) => (
                <li key={debate.id}>
                  <span>{debate.numeral}</span>
                  <div>
                    <strong>{debate.title}</strong>
                    <p>{debate.year} · {debate.question}</p>
                  </div>
                </li>
              ))}
            </ol>
          </section>
        )}

        {tab === 'context' && (
          <section
            className="home-panel"
            role="tabpanel"
            id="home-panel-context"
            aria-labelledby="home-tab-context"
          >
            <ArticleBody page={HISTORY} />
          </section>
        )}

        {tab === 'works' && (
          <section
            className="home-panel"
            role="tabpanel"
            id="home-panel-works"
            aria-labelledby="home-tab-works"
          >
            <ArticleBody page={HOW_TO} />
            <button type="button" className="btn btn-wax" onClick={onStart}>
              Start Game
            </button>
          </section>
        )}
      </div>
    </div>
  );
}
