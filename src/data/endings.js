import { determineEnding, STAT_META } from '../game/engine.js';

const HISTORY_CORE = [
  'In history, Caesar crossed the Rubicon in January 49 BCE, defeated Pompey at Pharsalus in 48, and was appointed dictator for ten years in 46. In 44 he was named dictator for life and assassinated on the Ides of March. The assassins called themselves liberators. The Republic did not return.',
  'Further civil wars followed. Caesar’s adopted heir, Octavian, defeated his rivals and in 27 BCE became Augustus, the first Roman emperor, ruling through the Principate. The old offices were kept. The real power settled in one man and in the armies. Julius Caesar prepared that world. He was never Rome’s first emperor.',
];

function yieldedList(decisions) {
  const items = [];
  if (decisions.power === 'grant') items.push('you extended his command when the law could still have ended it');
  if (decisions.legions === 'independent') items.push('you loosened the legions from the state');
  if (decisions.people === 'bypass') items.push('you let popular reform go around the Senate');
  if (decisions.senate === 'emergency') items.push('you handed him the emergency because the Senate was tired');
  if (decisions.rubicon === 'accept') items.push('you accepted the crossing rather than answer it');
  if (decisions.dictator === 'accept') items.push('you let dictator for life stand');
  return items;
}

function choiceLines(decisions) {
  const lines = [];
  if (decisions.power === 'refuse') {
    lines.push('You refused Caesar an extension of power while the quarrel was still political, and he did not forget the insult or the principle.');
  } else if (decisions.power === 'limited') {
    lines.push('You offered a conditional peace: a triumph and a consulship only after the army was dismissed. It was a door. Not everyone in the room wanted a door.');
  } else if (decisions.power === 'grant') {
    lines.push('At the first debate you granted the authority he asked for. Every later speech had to climb out of that concession.');
  }

  if (decisions.legions === 'strict') {
    lines.push('You tried to tie the legions back to the Senate. The principle was clean, and the camps heard a threat.');
  } else if (decisions.legions === 'shared') {
    lines.push('You demanded one rule for Caesar and for Pompey. That is what a republic sounds like when it has not yet chosen a champion.');
  } else if (decisions.legions === 'independent') {
    lines.push('You let successful generals keep a freer hand over their men. The Rubicon was already inside that sentence.');
  }

  if (decisions.people === 'assemblies') {
    lines.push('You supported land and relief as laws of the assemblies, not as gifts wearing one man’s name.');
  } else if (decisions.people === 'block') {
    lines.push('You blocked personal distributions and told the poor to wait on the Senate. The Senate did not become more loved for it.');
  } else if (decisions.people === 'bypass') {
    lines.push('You allowed him to bypass the Senate in the name of the people. The people’s need was real. The precedent was larger than the need.');
  }

  if (decisions.senate === 'reform') {
    lines.push('You did not pretend the Senate was innocent. You asked it to punish bribery, end endless commands, and pass a land law that belonged to no general.');
  } else if (decisions.senate === 'emergency') {
    lines.push('You voted him emergency power because the chamber could not govern. Emergency power is a Roman tool. Spoken that way, it sounded like a resignation.');
  } else if (decisions.senate === 'unchanged') {
    lines.push('You defended the Senate as it stood and called reform a danger. He did not need to invent the charge that you loved the disorder you knew.');
  }

  if (decisions.rubicon === 'negotiate') {
    lines.push('At the river you asked both armies to disband. History’s Senate could not deliver that bargain. In your story, you at least refused to pretend that one more army is a constitution.');
  } else if (decisions.rubicon === 'resist') {
    lines.push('You met the crossing with resistance and with Pompey. The principle was legible. So was the road south, already full of refugees.');
  } else if (decisions.rubicon === 'accept') {
    lines.push('You accepted the crossing to shorten the bloodshed. The panic eased, and his claim to be the reasonable man grew longer.');
  }

  if (decisions.dictator === 'oppose') {
    lines.push('At the end you refused both the crown and the knife, and tried to keep a lawful opposition alive in a Senate that had forgotten the habit.');
  } else if (decisions.dictator === 'accept') {
    lines.push('When the title was life, you let it stand. You called it peace. It was also the moment a free state usually ends: not with a shout, but with a reasonable senator deciding the shout is no longer worth it.');
  } else if (decisions.dictator === 'conspiracy') {
    lines.push('You gave your support to the men who would kill him. You knew, or you were told, that a dagger is not a law. The city learned it anyway.');
  }

  return lines;
}

function statLines(stats) {
  const lines = [];
  if (stats.argument >= 75) {
    lines.push(`The republican argument finished at ${stats.argument}. On the merits, the case for limits was formidable.`);
  } else if (stats.argument < 56) {
    lines.push(`The republican argument finished at ${stats.argument}. Too many speeches missed the hinge, or were spent by the votes that followed them.`);
  } else {
    lines.push(`The republican argument finished at ${stats.argument}: contested to the last hour, never quite a rout and never quite a victory.`);
  }

  if (stats.senate >= 65 && stats.popular < 45) {
    lines.push(`Senate support ended at ${stats.senate}, public support at ${stats.popular}. You kept the benches and lost the crowd. A Senate the Forum will not hear is only half a government.`);
  } else if (stats.popular >= 65 && stats.senate < 45) {
    lines.push(`Public support ended at ${stats.popular}, Senate support at ${stats.senate}. The streets followed the grain, the land, and the general. The chamber became a gallery.`);
  } else {
    lines.push(`Senate support ended at ${stats.senate}. Public support ended at ${stats.popular}. Neither number, alone, is a constitution.`);
  }

  if (stats.stability >= 65) {
    lines.push(`Political stability held at ${stats.stability}. Rome was bruised and still governable.`);
  } else if (stats.stability <= 35) {
    lines.push(`Political stability fell to ${stats.stability}. An argument, however fine, cannot govern a city that is already packing the mules.`);
  } else {
    lines.push(`Political stability ended at ${stats.stability}: a peace with cracks, not a peace you could trust with your back to the door.`);
  }
  return lines;
}

function sceneFor(id, decisions) {
  if (id === 'republic') {
    const war = decisions.rubicon === 'resist';
    return {
      latin: 'Senatus Populusque Romanus',
      title: 'The Republic Survives',
      scene: war
        ? [
            'The lamps are lit again in a Senate that has paid for the right to light them. There was a war. You chose it at the river, and Romans died in it, and the coalition you had built — a Senate that was not only a clique, a people who had been offered laws instead of patrons — was just strong enough not to shatter.',
            'Caesar stands where he has always stood, at the center of the room without needing the center seat. He is not ruined. He is contained, which he finds a more personal insult. The legions have been argued back, not loved back, into the service of the state. It will not last by magic. It will last if the men in this room remember why they were afraid.',
          ]
        : [
            'The lamps are lit again in a Senate that still believes it has the right to be lit. There was brinkmanship, and there was a river, and there was not, in your telling, the full ruin. Caesar stands at the center of the room without needing the center seat. He does not look defeated. He looks like a man who has been refused by someone he cannot call a fool.',
            'The offices are still annual. The commands still end. The land law, if you fought for one, does not wear a single name. This is not innocence. It is a republic that agreed, barely, to repair itself instead of being replaced. Outside, the Forum is noisy in the old way. Noise of that kind is a kind of freedom.',
          ],
      caesar: war
        ? [
            'You met me with force and you are still standing. Enjoy the rarity. Pompey met me with force as well. The difference is a coalition you managed not to squander, and a people you remembered before the last battle. Do not mistake survival for a refutation. You were one frightened vote from being my footnote.',
          ]
        : [
            'Keep your Senate, Valerius. Keep your annual offices and your exquisite doubts. I offered a faster road and you insisted on walking. When the next crisis comes — Parthia, the grain ships, a general you have not met yet — do not send for me and then flinch at the answer. You have chosen the slow machine. Feed it, or it will stall, and the next man will not ask as politely as I did.',
          ],
      player: war
        ? [
            'The legions were the price of our arrogance and of yours. If this Republic lives, it lives on a condition: that we never again make a general the only man in the room who can decide. Not you. Not the next man we are tempted to love because he wins.',
          ]
        : [
            'We will send for a magistrate, bound by a year and a law, and we will survive being slower than you. That was the whole of my argument. Not that you are small. That Rome must be larger than your life. If we forget the repairs and keep only the refusal, we will deserve the next Caesar, and he may not be as able as you.',
          ],
      historyNote:
        'This ending is the road not taken. In history the Senate chose confrontation without a repair, Caesar crossed the Rubicon, and no coalition held the Republic together. Your version survives only because the argument, the Senate, and a measure of public trust were still in the same city at the same time. History did not arrange those three in one room for long.',
    };
  }

  if (id === 'caesar') {
    const crowned = decisions.dictator === 'accept';
    return {
      latin: 'Dictator Perpetuo',
      title: 'The Age of Caesar',
      scene: [
        'The curule chairs are still there. So are the lictors, the rituals, the letters SPQR on the standards. What is gone is the expectation that any of it can tell him no. People speak carefully and then pretend they have always spoken that way. The relief in the streets is not fake. Neither is the quiet on the benches.',
        'He has not taken the name of king. He does not need it. Grain moves. Veterans have land, or the promise of it. The courts sit. The Senate meets and discovers that meeting is not the same as deciding. A generation from now, a clever heir could keep every old office and rule through them. That heir is not in this room yet. The habit he will need is.',
      ],
      caesar: crowned
        ? [
            'You were not my enemy at the end, Lucius Valerius. You were my witness. A republic that needs a single hand will eventually admit it. You admitted it without making me break you, which is more dignity than most of your colleagues managed. Do not spoil the dignity by calling the admission a tragedy every time you pass a mirror. Go home. The city is quieter than your constitution ever made it.',
          ]
        : [
            'You still have your speeches. I have the magistrates, the veterans, the grain, and the calendar. Between us, the city can tell which one keeps the peace. Oppose me tomorrow if you like. Opposition is a privilege I can afford, so long as it remains a speech. You argued well enough that I will let the record show you argued. I will not let the record show you won.',
          ],
      player: crowned
        ? [
            'I admitted that the city was tired. I will not dress that up as a philosophy. If your peace holds, Romans will bless your name and forget how a free state used to argue. If it fails, they will curse us both: you for taking the Republic, and me for calling the taking a rescue. I hope you live a long time. A state that fits one body should pray the body lasts.',
          ]
        : [
            'Then let the record show I did not call this a republic. The word can stay on the standards until it embarrasses you. I made the case as well as I could. The chamber surrendered in smaller votes than this one, over years, whenever your competence was easier than our reform. That is the part I will not forgive us for. You saw a tired city and decided to be its will. We saw a tired city and decided to be grateful.',
          ],
      historyNote: crowned
        ? 'This ending stops in Caesar’s lifetime, which history did not. He was assassinated in 44 BCE and never became emperor. The one-man rule accepted here is what his enemies feared, and what his heir Augustus later built as the Principate — after more war, not instead of it. A peaceful life dictatorship was the argument. It was not the next fifteen years.'
        : 'In history Caesar’s power was broken by daggers, not by a Senate that had kept its strength. Your story reaches his supremacy by another road: the votes that emptied the institutions before the title was even spoken. Augustus would later show how permanent that kind of supremacy could be made. Caesar, again, did not live to be the emperor. The fear that he might be was already doing the work.',
    };
  }

  const knives = decisions.dictator === 'conspiracy';
  return {
    latin: knives ? 'Idus Martiae' : 'Bellum Civile',
    title: 'The Fall of the Republic',
    scene: knives
      ? [
          'The daggers come, as they came in history, and the freedom they were supposed to buy does not arrive with them. Caesar falls in a room full of men who have confused a killing with a law. You are not the hand on every hilt. You are close enough that the distinction will not save you.',
          'The crowd does not become republican because he is dead. The crowd mourns, rages, and looks for the next man who can punish the murder. Antony is already counting. In the wings of the next fifteen years stand names this Senate has not learned to fear in combination. The Republic is not restored. It is postponed, and then replaced.',
        ]
      : [
          'There is no clean title for what Rome becomes in your story. Not Caesar’s peace, and not the Senate’s restoration. Legions learn politics. Senators learn flight. The people learn that both sides can say liberty while the fields burn.',
          'The argument was real. The institutions that were supposed to hold it were already cracked, and the choices in this room — his and yours — struck along the crack. A republic can survive a bad year. It cannot survive the moment when every camp decides the law is whatever its general needs by morning.',
        ],
    caesar: knives
      ? [
          'If you have come to warn me, you are late. If you have come to judge me, stand in the line. I enlarged Rome and quieted her, and your thanks is a knife you do not even have the rank to hold yourself. You would rather gamble the world on a conspirator’s conscience than live in a peace you did not design. When I am gone, watch how quickly your friends need a new master to protect them from mine.',
        ]
      : [
          'You would not yield, and you would not build. You defended a Senate the people no longer trusted, with a purity that could not feed them and a resistance that could not beat me without becoming me. This is your half of the ruin. I will carry mine. I have never been afraid of a ledger. Write it down, if you can find a clerk who has not already fled.',
        ],
    player: knives
      ? [
          'I will not pretend the blade is a ballot. I know what it is. I also know what your life office is: the end of every ballot that matters. If the Republic dies with you anyway, then both of us were right about the danger and neither of us was worthy of the cure. The next war will be fought by men who learned government from our failure. I am sorry for them. I am not sure I am sorry for us.',
        ]
      : [
          'And you would not be a citizen among citizens. You turned every real failure of the Republic into a reason to end it, and every army that loved you into a proof that you should be obeyed. I argued for a freedom this city may no longer know how to use. Looking at what we have made, I cannot call that a victory. I can call it by its name. We broke the thing we were both, in our way, trying to save.',
        ],
    historyNote: knives
      ? 'This is the nearest of the three endings to what happened, and the lesson is the grim one. The Ides of March did not revive the Republic. They opened the last round of its wars. Brutus and Cassius died at Philippi. Antony and Octavian divided the world and then fought over it. Augustus, not the liberators, inherited Rome.'
      : 'History’s Republic also fell, though not on your exact road. The real Senate chose resistance, Caesar won, and the daggers came later anyway. Your story reaches the same kind of ruin without copying every incident: a free state pulled apart by men who would not share it and men who would not repair it.',
  };
}

export function composeEnding(stats, flags, log) {
  const id = determineEnding(stats, flags);
  const decisions = flags.decisions || {};
  const scene = sceneFor(id, decisions);
  const yielded = yieldedList(decisions);

  const why = [
    ...choiceLines(decisions),
    ...statLines(stats),
  ];

  if (yielded.length >= 3 && id === 'caesar') {
    why.push(`The concessions accumulated: ${yielded.join('; ')}. A republic can survive one bargain. It cannot survive becoming a sequence of them.`);
  }
  if (id === 'republic' && decisions.senate === 'reform' && decisions.people === 'assemblies') {
    why.push('You refused the false choice he offered all evening: cruelty to the people, or a master for them. The Republic in this ending is not the Senate as it was. It is the Senate you told to earn its survival.');
  }
  if (id === 'fall' && stats.argument >= 70) {
    why.push('The speeches were often good. That is the bitter part. A strong argument cannot hold a state that has lost its peace, its people, or its refusal to murder.');
  }

  return {
    id,
    latin: scene.latin,
    title: scene.title,
    scene: scene.scene,
    caesarSpeech: scene.caesar,
    playerSpeech: scene.player,
    why,
    history: [...HISTORY_CORE, scene.historyNote],
    stats,
    log,
    statMeta: STAT_META,
  };
}
