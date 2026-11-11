import { Eagle, Laurel } from './Emblems.jsx';

export default function TitleScreen({ onStart, onContext, onHow }) {
  return (
    <div className="title-screen">
      <div className="title-slab">
        <Eagle />
        <p className="kicker">Rome · 50 BCE</p>
        <h1>
          <span>The Last Republic</span>
          <small>A Senator’s Dilemma</small>
        </h1>
        <Laurel />
        <p className="tagline">One Republic. One Man. The Fate of Rome.</p>
        <p className="epigraph">
          Rome stands at the edge of a political revolution. One man believes he can save it. Another believes he will destroy everything it stands for.
        </p>
      </div>
      <div className="btn-row title-actions">
        <button type="button" className="btn btn-wax" onClick={onStart}>Start Game</button>
        <button type="button" className="btn btn-stone" onClick={onContext}>Historical Context</button>
        <button type="button" className="btn btn-stone" onClick={onHow}>How to Play</button>
      </div>
    </div>
  );
}
