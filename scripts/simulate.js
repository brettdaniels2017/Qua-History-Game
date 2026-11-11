import { DEBATES } from '../src/data/debates.js';
import { composeEnding } from '../src/data/endings.js';
import {
  createGame,
  determineEnding,
  ratingLabel,
  reducer,
  resolveOpening,
  resolveResponse,
} from '../src/game/engine.js';

const REQUIRED = [
  ['power', 'Why should the man who has secured Rome’s future'],
  ['legions', 'Why should distant senators'],
  ['people', 'why should I be prevented'],
  ['senate', 'Perhaps Rome does not need more debate'],
  ['rubicon', 'I have been left with no choice'],
  ['dictator', 'why should I surrender the authority'],
];

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

function checkContent() {
  assert(DEBATES.length === 6, 'expected six debates');
  DEBATES.forEach((debate, index) => {
    assert(debate.responses.length >= 4, `${debate.id} needs arguments on both sides`);
    assert(debate.sides?.length === 2, `${debate.id} needs two sides`);
    const sideIds = new Set(debate.responses.map((item) => item.side || 'against'));
    assert(sideIds.has('for') && sideIds.has('against'), `${debate.id} is missing a side`);
    assert(debate.decisions.length === 3, `${debate.id} needs 3 decisions`);
    const opening = resolveOpening(debate, { responses: {}, decisions: {} }).join('\n');
    assert(opening.includes(REQUIRED[index][1]), `${debate.id} dropped Caesar's canonical argument`);
    debate.responses.forEach((response) => {
      const resolved = resolveResponse(response, { responses: {}, decisions: {} });
      assert(resolved.rating >= 1 && resolved.rating <= 10, `${debate.id}/${response.id} rating`);
      assert(resolved.explanation.length > 40, `${debate.id}/${response.id} explanation`);
      assert(resolved.rebuttal.length > 40, `${debate.id}/${response.id} rebuttal`);
      assert(ratingLabel(resolved.rating), 'label');
    });
    debate.decisions.forEach((decision) => {
      ['argument', 'senate', 'popular', 'stability'].forEach((key) => {
        assert(Number.isFinite(decision.deltas[key]), `${debate.id}/${decision.id} missing ${key}`);
      });
    });
  });
}

function play(choices) {
  let state = createGame();
  choices.forEach(([debateId, responseId]) => {
    const debate = DEBATES[state.debateIndex];
    assert(debate.id === debateId, `expected ${debateId} got ${debate.id}`);
    state = reducer(state, { type: 'ADVANCE' });
    const response = debate.responses.find((item) => item.id === responseId);
    state = reducer(state, { type: 'CHOOSE_SIDE', id: response.side || 'against' });
    state = reducer(state, { type: 'CHOOSE_RESPONSE', id: responseId });
    state = reducer(state, { type: 'ADVANCE' });
    state = reducer(state, { type: 'ADVANCE' });
    state = reducer(state, { type: 'SENATE' });
    ['argument', 'senate', 'popular', 'stability'].forEach((key) => {
      const value = state.stats[key];
      assert(value >= 0 && value <= 100, `${debateId} ${key} out of range: ${value}`);
    });
    state = reducer(state, { type: 'NEXT' });
  });
  assert(state.phase === 'ending', 'game should reach the ending');
  assert(state.log.length === 6, 'log should contain six rounds');
  return state;
}

function report(name, state) {
  const ending = determineEnding(state.stats, state.flags);
  const composed = composeEnding(state.stats, state.flags, state.log);
  console.log(
    `${name}: ${ending}  A${state.stats.argument} S${state.stats.senate} P${state.stats.popular} St${state.stats.stability}`,
  );
  assert(composed.id === ending, 'ending text drifted from the score');
  assert(composed.caesarSpeech.length && composed.playerSpeech.length, 'missing speeches');
  return ending;
}

const paths = {
  republic: [
    ['power', 'precedent'],
    ['legions', 'accountable'],
    ['people', 'law'],
    ['senate', 'reform'],
    ['rubicon', 'no-force'],
    ['dictator', 'mortal'],
  ],
  caesar: [
    ['power', 'earned'],
    ['legions', 'trust'],
    ['people', 'bread'],
    ['senate', 'deadlock'],
    ['rubicon', 'forced'],
    ['dictator', 'peace'],
  ],
  fall: [
    ['power', 'precedent'],
    ['legions', 'weapon'],
    ['people', 'crowd'],
    ['senate', 'checks'],
    ['rubicon', 'above-law'],
    ['dictator', 'mortal'],
  ],
  surrender: [
    ['power', 'earned'],
    ['legions', 'trust'],
    ['people', 'bread'],
    ['senate', 'deadlock'],
    ['rubicon', 'forced'],
    ['dictator', 'peace'],
  ],
};

checkContent();

const hardFlags = {
  responses: { legions: 'weapon', power: 'precedent', people: 'law' },
  decisions: { power: 'refuse', legions: 'strict', people: 'assemblies', senate: 'reform', rubicon: 'resist' },
};
const softFlags = {
  responses: { legions: 'oath', power: 'control', people: 'crowd' },
  decisions: { power: 'grant', legions: 'independent', people: 'bypass', senate: 'emergency', rubicon: 'accept' },
};
const rubicon = DEBATES.find((debate) => debate.id === 'rubicon');
const dictator = DEBATES.find((debate) => debate.id === 'dictator');
assert(
  resolveOpening(rubicon, hardFlags).join('\n') !== resolveOpening(rubicon, softFlags).join('\n'),
  'Caesar should remember the Rubicon differently',
);
assert(
  resolveOpening(dictator, hardFlags).join('\n') !== resolveOpening(dictator, softFlags).join('\n'),
  'Caesar should remember the final debate differently',
);
const warned = resolveResponse(rubicon.responses.find((item) => item.id === 'proof'), {
  responses: { legions: 'weapon' },
  decisions: { legions: 'strict' },
});
const confessed = resolveResponse(rubicon.responses.find((item) => item.id === 'proof'), {
  responses: { legions: 'weapon' },
  decisions: { legions: 'independent' },
});
assert(warned.rating === 9 && confessed.rating === 8, 'Rubicon proof rating should change with the record');
assert(warned.text !== confessed.text, 'Rubicon proof text should change with the record');

const results = {};
Object.entries(paths).forEach(([name, choices]) => {
  results[name] = report(name, play(choices));
});

assert(results.republic === 'republic', 'a measured republican case should save the Republic');
assert(results.caesar === 'caesar', 'a strong case for Caesar should produce his age');
assert(results.fall === 'fall', 'winning every hard argument should crack the peace');
assert(results.surrender === 'caesar', 'arguing his side well should crown him');

const reset = reducer(play(paths.republic), { type: 'RESET' });
assert(reset.stats.argument === 50 && reset.log.length === 0 && reset.debateIndex === 0, 'replay should clear the game');

const counts = { republic: 0, caesar: 0, fall: 0 };
function walk(index, state) {
  if (index === DEBATES.length) {
    counts[determineEnding(state.stats, state.flags)] += 1;
    return;
  }
  const debate = DEBATES[index];
  debate.responses.forEach((response) => {
    let next = state;
    next = reducer(next, { type: 'ADVANCE' });
    next = reducer(next, { type: 'CHOOSE_SIDE', id: response.side || 'against' });
    next = reducer(next, { type: 'CHOOSE_RESPONSE', id: response.id });
    next = reducer(next, { type: 'ADVANCE' });
    next = reducer(next, { type: 'ADVANCE' });
    next = reducer(next, { type: 'SENATE' });
    next = reducer(next, { type: 'NEXT' });
    walk(index + 1, next);
  });
}
walk(0, createGame());
const total = counts.republic + counts.caesar + counts.fall;
console.log(`endings across ${total} paths`, counts);
const expected = DEBATES.reduce((total, debate) => total * debate.responses.length, 1);
assert(total === expected, `brute force missed a path (${total} vs ${expected})`);
['republic', 'caesar', 'fall'].forEach((id) => {
  assert(counts[id] > total * 0.05, `${id} is too rare`);
});

console.log('simulation passed');
