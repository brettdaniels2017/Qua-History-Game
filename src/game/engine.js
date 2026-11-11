import { DEBATES } from '../data/debates.js';

export { DEBATES };

export const INITIAL_STATS = {
  argument: 50,
  senate: 52,
  popular: 38,
  stability: 58,
};

export const STAT_META = [
  {
    key: 'argument',
    label: 'Republican Argument Strength',
    short: 'Argument',
    hint: 'How effectively you have defended the Republic.',
  },
  {
    key: 'senate',
    label: 'Senate Support',
    short: 'Senate',
    hint: 'How many senators still stand with your position.',
  },
  {
    key: 'popular',
    label: 'Public Support',
    short: 'Public',
    hint: 'How ordinary citizens in the Forum judge you.',
  },
  {
    key: 'stability',
    label: 'Political Stability',
    short: 'Stability',
    hint: 'How close Rome is to panic, flight, or civil war.',
  },
];

const ADVANCE = {
  situation: 'side',
  rating: 'rebuttal',
};

const VERDICT = {
  power: { against: ['refuse', 'limited', 'grant'], for: ['grant', 'limited', 'refuse'] },
  legions: { against: ['shared', 'shared', 'independent'], for: ['independent', 'shared', 'shared'] },
  people: { against: ['assemblies', 'assemblies', 'bypass'], for: ['bypass', 'bypass', 'assemblies'] },
  senate: { against: ['reform', 'unchanged', 'emergency'], for: ['emergency', 'unchanged', 'reform'] },
  rubicon: { against: ['negotiate', 'negotiate', 'accept'], for: ['accept', 'negotiate', 'negotiate'] },
  dictator: { against: ['oppose', 'oppose', 'accept'], for: ['accept', 'oppose', 'oppose'] },
};

const PRESSURE = {
  power: { popular: -1, stability: -1 },
  legions: { popular: 0, stability: -3 },
  people: { popular: 2, stability: 1 },
  senate: { popular: 1, stability: 1 },
  rubicon: { popular: -2, stability: -4 },
  dictator: { popular: -1, stability: -2 },
};

function verdictBand(rating) {
  if (rating >= 8) return 0;
  if (rating >= 6) return 1;
  return 2;
}

export function clampStat(n) {
  return Math.max(0, Math.min(100, Math.round(n)));
}

export function ratingLabel(rating) {
  if (rating <= 3) return 'Weak';
  if (rating <= 6) return 'Moderate';
  if (rating <= 8) return 'Strong';
  return 'Exceptional';
}

function call(value, flags) {
  return typeof value === 'function' ? value(flags) : value;
}

export function resolveResponse(response, flags) {
  return {
    id: response.id,
    side: response.side || 'against',
    lead: call(response.lead, flags),
    text: call(response.text, flags),
    rating: call(response.rating, flags),
    explanation: call(response.explanation, flags),
    rebuttal: call(response.rebuttal, flags),
  };
}

/** The speaker on the other side of the side the player just took. */
export function resolveRival(debate, side, flags) {
  if (side === 'for') {
    const value = call(debate.senate, flags);
    return {
      who: 'senator',
      name: debate.senator.name,
      mark: debate.senator.mark,
      lines: Array.isArray(value) ? value : [value],
    };
  }
  return {
    who: 'caesar',
    name: 'Julius Caesar',
    mark: 'CAESAR',
    lines: resolveOpening(debate, flags),
  };
}

/**
 * The seal scores the speech you gave. Republican argument strength
 * only climbs when that speech was made against Caesar. A case made
 * for him, however sharp, aims the measure at 40.
 */
export function republicanAim(rating, side) {
  return side === 'for' ? 4 : rating;
}

export function resolveOpening(debate, flags) {
  const value = call(debate.caesar, flags);
  return Array.isArray(value) ? value : [value];
}

/**
 * The Senate does not take a second vote from you.
 * A strong case pulls the benches your way. A weak one pushes them off it.
 * Senate Support counts senators still holding the Republic, so a strong
 * case for Caesar spends that number: they moved with you, toward him.
 */
export function judgeSenate(debate, side, rating) {
  const swing = rating - 6;
  const republicLean = side === 'against' ? swing : -swing;
  const decisionId = VERDICT[debate.id][side][verdictBand(rating)];
  const decision = debate.decisions.find((item) => item.id === decisionId);
  const pressure = PRESSURE[debate.id];
  let popular = pressure.popular * republicLean;
  let stability = pressure.stability * republicLean;
  if (republicLean < 0 && (debate.id === 'rubicon' || debate.id === 'dictator')) {
    stability = Math.abs(swing) * 2;
    popular = Math.abs(swing);
  }
  if (debate.id === 'people' && republicLean < 0) {
    popular = Math.abs(swing) * 2;
  }
  return {
    decisionId,
    decisionLabel: decision.label,
    consequence: decision.result,
    aligned: verdictBand(rating) === 0 ? 'with' : verdictBand(rating) === 1 ? 'split' : 'against',
    deltas: {
      argument: 0,
      senate: republicLean * 3,
      popular,
      stability,
    },
  };
}

export function senateLine(side, rating) {
  const swing = rating - 6;
  if (swing >= 2) {
    return side === 'for'
      ? 'The Senate moves with you, toward Caesar.'
      : 'The Senate moves with you.';
  }
  if (swing >= 0) return 'The Senate is split. Only a few benches shift.';
  return side === 'for'
    ? 'The case slips. The Senate moves against you and stays with the Republic.'
    : 'The case slips. The Senate moves against you.';
}

export function resolveInterlude(debate, flags) {
  if (!debate.interlude) return [];
  const value = call(debate.interlude, flags);
  return Array.isArray(value) ? value : [value];
}

/**
 * Each debate pulls argument strength toward the speech (rating × 10)
 * without erasing earlier debates:
 *   next = clamp(round(previous × 0.7 + aim × 10 × 0.3 + decision))
 * Against Caesar, aim is the rating. For him, aim stays 4.
 * A 5/10 speech against him aims at 50 and holds a score that is already 50.
 * The decision then adds or subtracts, so a speech you contradict
 * does not keep every point it won. Other stats move only by the decision.
 */
export function applyRound(stats, rating, deltas, side = 'against') {
  const aim = republicanAim(rating, side);
  return {
    argument: clampStat(stats.argument * 0.7 + aim * 10 * 0.3 + (deltas.argument || 0)),
    senate: clampStat(stats.senate + (deltas.senate || 0)),
    popular: clampStat(stats.popular + (deltas.popular || 0)),
    stability: clampStat(stats.stability + (deltas.stability || 0)),
  };
}

export function tradeoffLine(before, after) {
  const argument = after.argument - before.argument;
  const stability = after.stability - before.stability;
  const senate = after.senate - before.senate;
  const popular = after.popular - before.popular;

  if (argument > 0 && stability < 0) {
    return 'The republican case grew stronger, and Rome grew less stable.';
  }
  if (argument < 0 && stability > 0) {
    return 'The city is calmer. The case for the Republic is weaker.';
  }
  if (senate > 0 && popular < 0) {
    return 'The Senate moved toward you. The Forum did not.';
  }
  if (popular > 0 && senate < 0) {
    return 'The streets warmed. The Senate lost ground.';
  }
  if (argument >= 8 && stability >= 0 && senate >= 0) {
    return 'The argument, the Senate, and the peace moved together.';
  }
  return 'Look at which number rose, and which Rome will have to live with.';
}

export function createGame() {
  return {
    debateIndex: 0,
    phase: 'situation',
    stats: { ...INITIAL_STATS },
    flags: { responses: {}, decisions: {}, sides: {} },
    pending: null,
    round: null,
    log: [],
  };
}

export function reducer(state, action) {
  if (action.type === 'RESET') return createGame();
  if (!state) return state;

  switch (action.type) {
    case 'ADVANCE': {
      const next = ADVANCE[state.phase];
      if (!next) return state;
      return { ...state, phase: next };
    }
    case 'CHOOSE_SIDE': {
      if (state.phase !== 'side') return state;
      const debate = DEBATES[state.debateIndex];
      const side = debate.sides.find((item) => item.id === action.id);
      if (!side) return state;
      return {
        ...state,
        phase: 'respond',
        flags: {
          ...state.flags,
          sides: { ...state.flags.sides, [debate.id]: side.id },
        },
      };
    }
    case 'CHOOSE_RESPONSE': {
      if (state.phase !== 'respond') return state;
      const debate = DEBATES[state.debateIndex];
      const response = debate.responses.find((item) => item.id === action.id);
      const chosen = state.flags.sides[debate.id];
      if (!response || (response.side || 'against') !== chosen) return state;
      const pending = resolveResponse(response, state.flags);
      const rival = resolveRival(debate, chosen, state.flags);
      return {
        ...state,
        phase: 'rating',
        pending: { ...pending, rivalWho: rival.who, rivalName: rival.name, rivalMark: rival.mark },
        flags: {
          ...state.flags,
          responses: { ...state.flags.responses, [debate.id]: response.id },
        },
      };
    }
    case 'SENATE': {
      if (state.phase !== 'rebuttal' || !state.pending) return state;
      const debate = DEBATES[state.debateIndex];
      const verdict = judgeSenate(debate, state.pending.side, state.pending.rating);
      const before = state.stats;
      const after = applyRound(before, state.pending.rating, verdict.deltas, state.pending.side);
      const round = {
        debateId: debate.id,
        numeral: debate.numeral,
        title: debate.title,
        year: debate.year,
        side: state.pending.side,
        rating: state.pending.rating,
        rivalName: state.pending.rivalName,
        lead: state.pending.lead,
        explanation: state.pending.explanation,
        rebuttal: state.pending.rebuttal,
        aligned: verdict.aligned,
        senateLine: senateLine(state.pending.side, state.pending.rating),
        decisionId: verdict.decisionId,
        decisionLabel: verdict.decisionLabel,
        consequence: verdict.consequence,
        before,
        after,
      };
      return {
        ...state,
        phase: 'results',
        stats: after,
        round,
        log: [...state.log, round],
        flags: {
          ...state.flags,
          decisions: { ...state.flags.decisions, [debate.id]: verdict.decisionId },
        },
      };
    }
    case 'NEXT': {
      if (state.phase !== 'results') return state;
      if (state.debateIndex >= DEBATES.length - 1) {
        return { ...state, phase: 'ending' };
      }
      return {
        ...state,
        debateIndex: state.debateIndex + 1,
        phase: 'situation',
        pending: null,
        round: null,
      };
    }
    default:
      return state;
  }
}

/**
 * Endings use the whole board, not one number.
 * Fall: you join the conspiracy, stability collapses, or a Rubicon war
 * is fought after the people have already left you.
 * Republic: you never accept the life dictatorship, the argument is
 * strong, the Senate still stands, and the city is not already broken.
 * Caesar: you hand him the title, the Senate drains away, or the case
 * itself was never truly made.
 */
export function determineEnding(stats, flags) {
  const decisions = flags.decisions || {};
  if (decisions.dictator === 'conspiracy') return 'fall';
  if (stats.stability <= 30) return 'fall';
  if (decisions.rubicon === 'resist' && stats.stability <= 38 && stats.popular <= 28) {
    return 'fall';
  }
  if (
    decisions.dictator !== 'accept' &&
    stats.argument >= 66 &&
    stats.senate >= 52 &&
    stats.stability >= 38
  ) {
    return 'republic';
  }
  if (decisions.dictator === 'accept' || stats.senate <= 40 || stats.argument < 56) {
    return 'caesar';
  }
  if (stats.stability < 40) return 'fall';
  if (stats.argument >= 62 && stats.senate >= 50) return 'republic';
  return 'caesar';
}
