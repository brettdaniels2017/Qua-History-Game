import { useEffect, useState } from 'react';
import { STAT_META } from '../game/engine.js';

export default function GuideModal({ open, onClose, onContext, onHow, onAbandon }) {
  const [confirming, setConfirming] = useState(false);

  useEffect(() => {
    if (!open) {
      setConfirming(false);
      return undefined;
    }
    function onKey(event) {
      if (event.key === 'Escape') onClose();
    }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="modal-back" role="presentation" onClick={onClose}>
      <div
        className="modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="guide-title"
        onClick={(event) => event.stopPropagation()}
      >
        <p className="kicker">In the chamber</p>
        <h2 id="guide-title">Guide</h2>
        <p>
          Rate the reasoning, not the anger. A speech that merely disagrees with Caesar can still be weak. A speech that grants what is true in his case, then shows why his conclusion fails, is the one that moves the Republic.
        </p>
        <ul className="guide-stats">
          {STAT_META.map((meta) => (
            <li key={meta.key}>
              <strong>{meta.label}.</strong> {meta.hint}
            </li>
          ))}
        </ul>
        <p>
          A strong argument can still make Rome less stable. Refusing a popular general may be the constitutional thing to do, and it can also bring the city closer to war.
        </p>
        {confirming ? (
          <div className="confirm">
            <p>Leave this session and return to the opening?</p>
            <div className="btn-row">
              <button type="button" className="btn btn-wax" onClick={onAbandon}>Abandon the debate</button>
              <button type="button" className="btn btn-stone" onClick={() => setConfirming(false)}>Stay</button>
            </div>
          </div>
        ) : (
          <div className="btn-row">
            <button type="button" className="btn btn-wax" onClick={onClose}>Return</button>
            <button type="button" className="btn btn-stone" onClick={onHow}>How to play</button>
            <button type="button" className="btn btn-stone" onClick={onContext}>Historical context</button>
            <button type="button" className="btn btn-ghost" onClick={() => setConfirming(true)}>Exit to title</button>
          </div>
        )}
      </div>
    </div>
  );
}
