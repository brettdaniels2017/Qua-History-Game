import { STAT_META } from '../game/engine.js';

export default function StatsBar({ stats, previous = null }) {
  return (
    <div className="stats" aria-label="Political standing">
      {STAT_META.map((meta) => {
        const value = stats[meta.key];
        const before = previous ? previous[meta.key] : null;
        const delta = before === null ? null : value - before;
        return (
          <div className={`stat ${value < 30 ? 'is-low' : ''}`} key={meta.key}>
            <div className="stat-top">
              <span>{meta.short}</span>
              <strong key={value}>{value}</strong>
              {delta ? (
                <em className={`floater ${delta > 0 ? 'up' : 'down'}`}>
                  {delta > 0 ? `+${delta}` : delta}
                </em>
              ) : null}
            </div>
            <div className="stat-bar" title={meta.hint}>
              <span className={`stat-fill fill-${meta.key}`} style={{ width: `${value}%` }} />
            </div>
          </div>
        );
      })}
    </div>
  );
}
