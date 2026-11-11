import { useEffect, useRef, useState } from 'react';
import {
  DEBATES,
  ratingLabel,
  resolveResponse,
  resolveRival,
  tradeoffLine,
} from '../game/engine.js';
import { Cameo } from './Emblems.jsx';
import StatsBar from './StatsBar.jsx';

const PHASES = [
  ['situation', 'Point'],
  ['side', 'Side'],
  ['respond', 'Reply'],
  ['exchange', 'Answer'],
  ['detail', 'Detail'],
  ['close', 'Close'],
  ['results', 'Senate'],
];

const NUMERALS = ['I', 'II', 'III'];

export default function GameScreen({ state, dispatch, onGuide }) {
  const debate = DEBATES[state.debateIndex];
  const phaseIndex = PHASES.findIndex(([id]) => id === state.phase);
  const timer = useRef(null);
  const [picked, setPicked] = useState(null);

  useEffect(() => {
    setPicked(null);
    return () => window.clearTimeout(timer.current);
  }, [state.debateIndex, state.phase]);

  function choose(id, type) {
    if (picked) return;
    setPicked(id);
    timer.current = window.setTimeout(() => {
      dispatch({ type, id });
    }, 420);
  }

  const side = state.flags.sides[debate.id];
  const rival = side ? resolveRival(debate, side, state.flags) : null;
  const replies = debate.responses
    .filter((item) => (item.side || 'against') === side)
    .map((item) => {
      const resolved = resolveResponse(item, state.flags);
      return { id: item.id, lead: resolved.lead, text: resolved.text };
    });

  let dock = null;
  if (!picked && state.phase === 'situation') {
    dock = { label: 'Choose a side', run: () => dispatch({ type: 'ADVANCE' }) };
  } else if (!picked && state.phase === 'close') {
    dock = { label: 'The Senate decides', run: () => dispatch({ type: 'SENATE' }) };
  } else if (!picked && state.phase === 'results') {
    const last = state.debateIndex >= DEBATES.length - 1;
    dock = {
      label: last ? 'The fate of Rome' : 'Next debate',
      run: () => dispatch({ type: 'NEXT' }),
    };
  }

  return (
    <div className="shell">
      <header className="topbar">
        <div className="brand">
          <span>SPQR</span>
          <strong>The Last Republic</strong>
        </div>
        <p className="debate-meta">
          Debate {debate.numeral}
          <span> / VI</span>
          <em>{debate.title}</em>
        </p>
        <div className="top-actions">
          <p className="arg-pill" aria-label="Republican argument strength">
            <span>Argument</span>
            <strong key={state.stats.argument}>{state.stats.argument}</strong>
          </p>
          <button type="button" className="guide-btn" onClick={onGuide}>Guide</button>
        </div>
      </header>

      <ol className="phase-rail" aria-label="Progress through this debate">
        {PHASES.map(([id, label], index) => {
          let className = '';
          if (index === phaseIndex) className = 'is-current';
          else if (index < phaseIndex) className = 'is-done';
          return (
            <li key={id} className={className}>{label}</li>
          );
        })}
      </ol>

      <main className="stage">
        <article className="stage-card" key={`${debate.id}-${state.phase}`}>
          {state.phase === 'situation' && (
            <>
              <p className="year-chip">{debate.year}</p>
              <h1>{debate.title}</h1>
              <div className="narration">
                {debate.situation.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              {debate.chamber?.map((line) => (
                <blockquote className="speaker" key={line.speaker}>
                  <footer>
                    <cite>{line.speaker}</cite>
                    <span>{line.role}</span>
                  </footer>
                  <p>{line.text}</p>
                </blockquote>
              ))}
            </>
          )}

          {state.phase === 'side' && (
            <>
              <p className="year-chip">Choose your side</p>
              <h1>{debate.question}</h1>
              <ChoiceList
                heading="Lucius Valerius takes a side"
                who="player"
                items={debate.sides}
                picked={picked}
                onPick={(id) => choose(id, 'CHOOSE_SIDE')}
              />
            </>
          )}

          {state.phase === 'respond' && rival && (
            <>
              <Speech
                who={rival.who}
                label={rival.mark}
                kicker={rival.name}
                lines={rival.lines}
                compact
              />
              <ChoiceList
                heading={side === 'for' ? 'You argue for Caesar' : 'You argue against him'}
                who="player"
                items={replies}
                picked={picked}
                onPick={(id) => choose(id, 'CHOOSE_RESPONSE')}
              />
            </>
          )}

          {state.phase === 'exchange' && state.pending && (
            <>
              <div className="thread">
                <blockquote className="quote is-player">
                  <footer>Lucius Valerius</footer>
                  <p className="choice-lead">{state.pending.lead}</p>
                  <p>{state.pending.text}</p>
                </blockquote>
                <blockquote className="quote">
                  <footer>{state.pending.rivalName}</footer>
                  <p>{state.pending.rebuttal}</p>
                </blockquote>
              </div>
              <ChoiceList
                heading="Answer that"
                who="player"
                items={state.pending.followups}
                picked={picked}
                onPick={(id) => choose(id, 'CHOOSE_FOLLOWUP')}
              />
            </>
          )}

          {state.phase === 'detail' && state.pending?.followup && (
            <>
              <Thread pending={state.pending} />
              <ChoiceList
                heading="Add to the case"
                who="player"
                items={state.pending.details}
                picked={picked}
                onPick={(id) => choose(id, 'CHOOSE_DETAIL')}
              />
            </>
          )}

          {state.phase === 'close' && state.pending?.detail && (
            <Thread pending={state.pending} />
          )}

          {state.phase === 'results' && state.round && (
            <Results debate={debate} round={state.round} />
          )}
        </article>
      </main>

      <footer className="dock">
        <StatsBar
          stats={state.stats}
          previous={state.phase === 'results' && state.round ? state.round.before : null}
        />
        <div className="dock-action">
          {dock ? (
            <button type="button" className="btn btn-wax" data-action="continue" onClick={dock.run}>
              {dock.label}
            </button>
          ) : (
            <p className="dock-note">
              {picked ? 'Entered into the record.' : 'Choose. The other side will answer.'}
            </p>
          )}
        </div>
      </footer>
    </div>
  );
}

function Thread({ pending }) {
  const lines = [
    ['Lucius Valerius', pending.lead, pending.text, true],
    [pending.rivalName, null, pending.rebuttal, false],
    ['Lucius Valerius', pending.followup.lead, pending.followup.text, true],
    [pending.rivalName, null, pending.followup.answer, false],
  ];
  if (pending.detail) {
    lines.push(
      ['Lucius Valerius', pending.detail.lead, pending.detail.text, true],
      [pending.rivalName, null, pending.detail.answer, false],
    );
  }
  return (
    <div className="thread">
      {lines.map(([name, lead, text, player]) => (
        <blockquote className={`quote ${player ? 'is-player' : ''}`} key={`${name}-${lead || text}`}>
          <footer>{name}</footer>
          {lead ? <p className="choice-lead">{lead}</p> : null}
          <p>{text}</p>
        </blockquote>
      ))}
    </div>
  );
}

function Speech({ who, kicker, label, lines, compact = false }) {
  return (
    <section className={`dialogue dialogue-${who} ${compact ? 'is-compact' : ''}`}>
      <Cameo who={who} label={label} />
      <div>
        <p className="speaker-name">{kicker}</p>
        {lines.map((line, index) => (
          <p key={`${index}-${line.slice(0, 24)}`}>{line}</p>
        ))}
      </div>
    </section>
  );
}

function ChoiceList({ heading, who, items, picked, onPick, showHints = false }) {
  return (
    <section className="choices">
      <div className="choices-head">
        <Cameo who={who} />
        <h2>{heading}</h2>
      </div>
      <div className="choice-list">
        {items.map((item, index) => {
          const selected = picked === item.id;
          const dimmed = picked && !selected;
          return (
            <button
              key={item.id}
              type="button"
              data-choice={item.id}
              className={`choice ${selected ? 'is-selected' : ''} ${dimmed ? 'is-dim' : ''}`}
              onClick={() => onPick(item.id)}
              disabled={Boolean(picked)}
            >
              <span className="choice-index">{NUMERALS[index]}</span>
              <span className="choice-lead">{item.lead || item.label}</span>
              <span className="choice-body">{item.text}</span>
              {showHints ? (
                <ul className="hints">
                  {item.hints.map((hint) => (
                    <li key={hint}>{hint}</li>
                  ))}
                </ul>
              ) : null}
            </button>
          );
        })}
      </div>
    </section>
  );
}

function RatingSeal({ rating }) {
  const [shown, setShown] = useState(0);

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) {
      setShown(rating);
      return undefined;
    }
    let current = 0;
    setShown(0);
    const id = window.setInterval(() => {
      current += 1;
      setShown(current);
      if (current >= rating) window.clearInterval(id);
    }, 70);
    return () => window.clearInterval(id);
  }, [rating]);

  const label = ratingLabel(rating);
  return (
    <div className={`rating-seal band-${label.toLowerCase()}`} aria-live="polite">
      <div className="rating-num">{shown}</div>
      <p className="rating-word">{label}</p>
      <p className="rating-of">argument rating, out of 10</p>
    </div>
  );
}

function Results({ debate, round }) {
  const rows = [
    ['argument', 'Republican argument'],
    ['senate', 'Senate support'],
    ['popular', 'Public support'],
    ['stability', 'Political stability'],
  ];

  return (
    <div className="results">
      <p className="year-chip">{debate.year} · The Senate</p>
      <h1>{round.senateLine}</h1>
      <RatingSeal rating={round.rating} />
      <p>{round.explanation}</p>
      {round.followId === 'hedge' ? (
        <p>The last reply gave ground. The Senate heard that too.</p>
      ) : null}
      <p className="tradeoff">{tradeoffLine(round.before, round.after)}</p>
      <ul className="delta-list">
        {rows.map(([key, label]) => {
          const delta = round.after[key] - round.before[key];
          const tone = delta > 0 ? 'up' : delta < 0 ? 'down' : 'flat';
          const sign = delta > 0 ? `+${delta}` : `${delta}`;
          return (
            <li key={key} className={tone}>
              <span>{label}</span>
              <strong>{round.before[key]} → {round.after[key]}</strong>
              <em>{delta === 0 ? 'held' : sign}</em>
            </li>
          );
        })}
      </ul>
      <h2>What followed in Rome</h2>
      <p>{round.consequence}</p>
      <blockquote className="quote">
        <footer>{round.rivalName}</footer>
        <p>{round.rebuttal}</p>
      </blockquote>
    </div>
  );
}
