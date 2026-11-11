function yielded(flags) {
  const decisions = flags.decisions || {};
  const items = [];
  if (decisions.power === 'grant') items.push('my command');
  if (decisions.legions === 'independent') items.push('my legions');
  if (decisions.people === 'bypass') items.push('reform without this Senate');
  if (decisions.senate === 'emergency') items.push('the emergency');
  if (decisions.rubicon === 'accept') items.push('the crossing');
  return items;
}

export const lateDebates = [
  {
    id: 'senate',
    numeral: 'IV',
    title: 'The Failure of the Senate',
    year: 'January 49 BCE',
    question: 'Does Rome still need this Senate?',
    senator: { name: 'Marcus Tullius Cicero', mark: 'CICERO' },
    sides: [
      { id: 'for', label: 'Argue Rome needs Caesar', text: 'This chamber cannot govern. Someone has to act.' },
      { id: 'against', label: 'Argue for the Senate', text: 'Repair the chamber. Do not hand it to one man.' },
    ],
    situation: [
      'The Senate is bought, stalled, and afraid of him.',
    ],
    chamber: [
      {
        speaker: 'Marcus Tullius Cicero',
        role: 'dramatized',
        text: 'A man I do not trust, or a Senate that will not govern. I have run out of clever compromises.',
      },
    ],
    caesar(flags) {
      const decisions = flags.decisions || {};
      let memory = '';
      if (decisions.people === 'block') memory = 'You told the poor to wait on this chamber. Look at it. ';
      else if (decisions.people === 'assemblies') memory = 'You praised laws this body strangles before they are born. ';
      else if (decisions.people === 'bypass') memory = 'You already let the people’s needs outrun this room. ';
      else if (decisions.legions === 'strict') memory = 'You would hand an army to a senate that cannot pass a land bill. ';
      else if (decisions.legions === 'shared') memory = 'One law for both generals. Who here can enforce it? ';
      return [
        `${memory}Perhaps Rome does not need more debate. Perhaps it needs someone willing to act.`,
      ];
    },
    senate() {
      return [
        'The Senate is slow and often bought. That is not a reason to give him the state.',
      ];
    },
    responses: [
      {
        id: 'safer',
        lead: 'A clumsy republic is safer than a brilliant man who cannot be removed.',
        text: 'We are slow and vain, and we have failed. A consul still ends with the year. The efficiency you are selling does not.',
        rating: 8,
        explanation: 'Strong. You admit the failures and still defend divided power. It stays an 8 because it is a warning, not a plan for people who fear chaos.',
        rebuttal: 'A bad year I can survive. The debtors and the dead veterans paid for twenty of them. You trust the year to end. You would not let mine end unless I came home unarmed.',
      },
      {
        id: 'reform',
        lead: 'You are right about this Senate. Repair it. Do not crown the man who noticed.',
        text: 'Punish bribery, even among friends. End commands that last until they cannot be recalled. Pass a land law that belongs to Rome, not to a general’s name.',
        rating: 10,
        explanation: 'Exceptional. You concede the indictment and refuse the leap to one-man rule. The remedies are specific: bribery, endless commands, and stalled land.',
        rebuttal(flags) {
          const opener = flags.decisions.people === 'block'
            ? 'A land law, from the man who just told the people to wait.'
            : 'You are brave with a list.';
          return `${opener} Your friends will not vote to shrink themselves. I am finished waiting for that.`;
        },
      },
      {
        id: 'checks',
        lead: 'The delays are fences. Do not take them down for speed.',
        text: 'Two consuls, a Senate that must persuade, tribunes who can stand in the way. I will take a late decision over a swift injustice.',
        rating: 6,
        explanation: 'Moderate. The offices are the right answer to abuse, and the wrong answer to his charge of corruption. You praise the design and never face the scandal.',
        rebuttal: 'The offices have been captured. A fence kept by the men who own the road is scenery. You will tolerate any injustice that arrives at the traditional speed.',
      },
      {
        id: 'deadlock',
        side: 'for',
        lead: 'This Senate cannot govern. Rome needs someone who will act.',
        text: 'Bribery and factions have stalled every remedy. Caesar is offering to break the stall.',
        rating: 8,
        explanation: 'You accept the indictment of the chamber and take his conclusion with it.',
        rebuttal: 'A stall can be broken by a law. A man who breaks it by taking the state is the last remedy you will be allowed to refuse.',
      },
      {
        id: 'results',
        side: 'for',
        lead: 'Judge the peace, not our procedure.',
        text: 'The old forms have presided over gangs and bribes. Order is worth more than another year of this.',
        rating: 7,
        explanation: 'You prefer a result to a rule. You do not say who ends the order once it has a single owner.',
        rebuttal: 'Order that only one man can cancel is not peace. It is a pause he owns.',
      },
    ],
    interlude: 'Someone has to turn the argument into a vote. The vote will matter more than the best sentence.',
    decisions: [
      {
        id: 'emergency',
        label: 'Give Caesar emergency powers',
        text: 'Let him cut through the deadlock. Argue about the title when the city is quieter.',
        hints: ['The streets feel someone is in charge.', 'The Senate’s authority drops.', 'It sounds like a resignation.'],
        deltas: { argument: -8, senate: -14, popular: 6, stability: 7 },
        result: 'Emergency power was meant to be short and put back on the shelf. Used because the Senate cannot function, it sounds like surrender. Several men leave before they are counted.',
      },
      {
        id: 'reform',
        label: 'Reform the Senate instead',
        text: 'Prosecute bribery. Sunset extraordinary commands. Pass a land law no general can pocket.',
        hints: ['Citizens hear real grievances named.', 'Many senators will resist.', 'The Republic has work besides refusal.'],
        deltas: { argument: 3, senate: 2, popular: 7, stability: 6 },
        result: 'The program offends the men who would have to pass it. Caesar calls it a speech. The crowd, hearing land and bribery named, does not.',
      },
      {
        id: 'unchanged',
        label: 'Defend the Senate as it stands',
        text: 'No emergency and no reconstruction. The chamber, faults and all, is still safer than his remedy.',
        hints: ['The inner circle praises you.', 'Everyone else hears comfort with the disorder.', 'Nothing broken gets touched.'],
        deltas: { argument: -2, senate: 6, popular: -8, stability: -7 },
        result: 'Your friends hear loyalty. Everyone else hears that you want to save the disorder you know how to survive. Caesar looks confirmed, not angry.',
      },
    ],
  },
  {
    id: 'rubicon',
    numeral: 'V',
    title: 'Crossing the Rubicon',
    year: 'January 49 BCE',
    question: 'Was crossing the Rubicon justified?',
    senator: { name: 'Gnaeus Pompeius', mark: 'POMPEIUS' },
    sides: [
      { id: 'for', label: 'Defend the crossing', text: 'They left him no peaceful way home.' },
      { id: 'against', label: 'Condemn the crossing', text: 'No grievance justifies an army in Italy.' },
    ],
    situation: [
      'He has crossed the Rubicon. He says there was no other choice.',
    ],
    chamber: [
      {
        speaker: 'Quintus Aelius',
        role: 'senator · fictional',
        text: 'This is no longer rhetoric. If we answer him, the speech should be short enough to carry while running.',
      },
    ],
    caesar(flags) {
      const decisions = flags.decisions || {};
      const responses = flags.responses || {};
      let memory = '';
      if (responses.legions === 'weapon' || decisions.legions === 'strict') {
        memory = 'You said a loyal army would face the city. Then you demanded I disband into the hands of men who had already called me a criminal. ';
      } else if (decisions.legions === 'independent') {
        memory = 'You said a general should be trusted with his army. Spare me the surprise. ';
      } else if (decisions.legions === 'shared') {
        memory = 'I would have laid down this command if Pompey did. Your one law was refused by the men who needed me weaker. ';
      } else if (responses.power === 'precedent') {
        memory = 'You warned me about precedents. Your friends wrote one first: courts used as a knife. ';
      } else if (decisions.people === 'assemblies') {
        memory = 'You promised laws for the people. Your colleagues answered with a final decree. ';
      }
      return [
        `${memory}I have been left with no choice.`,
      ];
    },
    senate(flags) {
      const note = flags.decisions.legions === 'independent'
        ? 'You trusted generals with their armies. Look where that trust is standing. '
        : '';
      return [`${note}He chose the sword. An army across this river is not a speech.`];
    },
    responses: [
      {
        id: 'no-force',
        lead: 'Corrupt men do not justify an invasion. Another army is not a constitution.',
        text: 'Courts and laws settle a republic’s quarrels. Answering you only with Pompey repeats the crime.',
        rating: 7,
        explanation: 'Strong, on the low side. You reject his false choice and notice Pompey’s army is not a constitution. You never take up the real offer on the table: both men disarm.',
        rebuttal: 'I offered that third future. I would dismiss my army if Pompey dismissed his. Your side drove my friends from the Senate instead.',
      },
      {
        id: 'above-law',
        lead: 'No one is above the law because Rome owes him a victory.',
        text: 'You could have disbanded if he disbanded, or stood as a citizen. An army south of the Rubicon ends the claim that you are defending a republic.',
        rating: 9,
        explanation: 'Exceptional. You name his real choices and still refuse the step from grievance to invasion. It is not a 10 because the law that week, after the final decree, was already a blunt weapon.',
        rebuttal: 'Disband, while Pompey keeps his legions and my enemies keep the courts? Those are costumes for a surrender. I crossed because the law had already been bent into a knife.',
      },
      {
        id: 'proof',
        lead(flags) {
          if (flags.decisions.legions === 'independent') return 'I trusted generals with their armies. The river shows what that was worth.';
          if (flags.responses.legions === 'weapon' || flags.decisions.legions === 'strict') return 'I said a private army would face the city. I take no pleasure in it.';
          return 'A legion that loves one man cannot settle a political dispute.';
        },
        text(flags) {
          if (flags.decisions.legions === 'independent') {
            return 'I was wrong to loosen the leash. The army belongs to Rome. Carrying it into Italy is the proof.';
          }
          if (flags.responses.legions === 'weapon' || flags.decisions.legions === 'strict') {
            return 'This march is the loyalty you defended. Your soldiers know your face, not the corrupt from the innocent.';
          }
          return 'Bravery in Gaul does not change the direction of the march. A flawed Senate can be reformed. An army that loves one man cannot.';
        },
        rating(flags) {
          if (flags.decisions.legions === 'independent') return 8;
          if (flags.responses.legions === 'weapon' || flags.decisions.legions === 'strict') return 9;
          return 8;
        },
        explanation(flags) {
          if (flags.decisions.legions === 'independent') {
            return 'Strong. You admit your earlier vote helped the logic you now condemn. It is an 8, not a 9, because the confession arrives after the army is across.';
          }
          if (flags.responses.legions === 'weapon' || flags.decisions.legions === 'strict') {
            return 'Exceptional here. You tie the crossing to the personal army, without cheap gloating. It loses the last point because it confirms an old warning more than it answers his claim of no choice.';
          }
          return 'Strong. You turn his own question about distant senators against the march. It stops at 8 because you rest on the danger more than on the prosecution he says was waiting.';
        },
        rebuttal(flags) {
          if (flags.decisions.legions === 'independent') {
            return 'Honest, and late. My soldiers will not turn around because you have improved your consistency.';
          }
          if (flags.responses.legions === 'weapon' || flags.decisions.legions === 'strict') {
            return 'You predicted me. You also preferred a cornered general to a compromise. I will not be your illustration.';
          }
          return 'Pompey is not marching south to hold a reform meeting. His soldiers salute him too. The difference is that his ambition currently has your approval.';
        },
      },
      {
        id: 'forced',
        side: 'for',
        lead: 'They left him no peaceful way home.',
        text: 'Strip his command, threaten a trial, and keep Pompey’s army. That is a trap, not a constitution.',
        rating: 8,
        explanation: 'You name the trap his enemies built. You still treat an invasion as the way out of it.',
        rebuttal: 'I would have laid down my army with his. He preferred not to wait. The river was a choice.',
      },
      {
        id: 'corrupt',
        side: 'for',
        lead: 'He is marching against a faction, not against Rome.',
        text: 'The men who captured the Senate are not the Republic. Removing them is defense.',
        rating: 7,
        explanation: 'A faction is a real problem. An army does not get to decide which senators count as Rome.',
        rebuttal: 'A faction is removed by an election. Soldiers do not get to pick the real Senate.',
      },
    ],
    interlude: 'Rome is close enough to civil war that the next sentence is already a military act.',
    decisions: [
      {
        id: 'negotiate',
        label: 'Demand that both armies disband',
        text: 'Caesar and Pompey both dismiss their armies. The dispute returns to law.',
        hints: ['Hardliners say you are bargaining with an invader.', 'Many citizens are relieved.', 'A settlement becomes more possible.'],
        deltas: { argument: 1, senate: -4, popular: 5, stability: 8 },
        result: 'Hardliners call it bargaining with an invader. Many citizens hear the first proposal that does not spend their sons. You have refused to pretend that another army is a constitution.',
      },
      {
        id: 'accept',
        label: 'Accept the crossing',
        text: 'Let him pass. More citizen blood will not repair a Senate that helped cause the break.',
        hints: ['Panic eases if the war looks short.', 'The Senate’s authority collapses.', 'He looks like the reasonable one.'],
        deltas: { argument: -7, senate: -12, popular: 6, stability: 5 },
        result: 'The panic eases. You have shortened the bloodshed on paper and lengthened his claim to be the only man willing to end the quarrel.',
      },
      {
        id: 'resist',
        label: 'Resist, with Pompey if necessary',
        text: 'Declare the crossing treason and back resistance. The law is not a request.',
        hints: ['Senators who want a fight close ranks.', 'The public pulls away.', 'This choice is the civil war.'],
        deltas: { argument: 3, senate: 8, popular: -7, stability: -14 },
        result: 'Some pack carts. Some praise your backbone. You have chosen the Republic’s defense in the form that looks most like its suicide.',
      },
    ],
  },
  {
    id: 'dictator',
    numeral: 'VI',
    title: 'Dictator for Life',
    year: '44 BCE',
    question: 'Should Caesar remain dictator for life?',
    senator: { name: 'Marcus Junius Brutus', mark: 'BRUTUS' },
    sides: [
      { id: 'for', label: 'Defend the dictatorship', text: 'He ended the war. The title is what holds the peace.' },
      { id: 'against', label: 'Oppose a life office', text: 'No peace that dies with one man is a constitution.' },
    ],
    situation: [
      'He is dictator for life. He is not emperor. That comes later, with his heir.',
    ],
    chamber: [
      {
        speaker: 'Marcus Antonius',
        role: 'consul · dramatized',
        text: 'Peace is a kind of genius. Do not interrupt it.',
      },
    ],
    caesar(flags) {
      const decisions = flags.decisions || {};
      const responses = flags.responses || {};
      const given = yielded(flags);
      let memory;
      if (given.length >= 2) {
        memory = `You already yielded ${given.join(' and ')}. Do not discover an objection only when the title is permanent.`;
      } else if (decisions.rubicon === 'resist') {
        memory = 'You chose war at the river. Do not lecture me on peace.';
      } else if (decisions.rubicon === 'negotiate') {
        memory = 'You asked both armies to disband. Peace arrived another way.';
      } else if (decisions.people === 'assemblies' || responses.people === 'law') {
        memory = 'You wanted land and relief by law. I delivered them. Now you call it tyranny.';
      } else {
        memory = 'You have been consistent. I respect that. I do not intend to obey it.';
      }
      return [
        `${memory} If Rome is at peace, why should I surrender the authority that made it possible?`,
      ];
    },
    senate(flags) {
      const note = yielded(flags).length >= 2
        ? 'You have already given him the pieces. '
        : '';
      return [`${note}Dictator was built to expire. For life, it is no longer an emergency.`];
    },
    responses: [
      {
        id: 'successors',
        lead: 'I would not trust the chair once you have finished building it.',
        text: 'These powers will be picked up by the next man who can count legions. He may have your ability, or only your appetite. Limits have to include the end of your own office.',
        rating: 9,
        explanation: 'Exceptional, just under the succession argument. The danger is the power, not only the man. Caesar can still dismiss a successor who is not in the room.',
        rebuttal(flags) {
          const extra = flags.responses.power === 'precedent' ? ' You have feared the next man since our first hour.' : '';
          return `Judge the peace in front of you, not a ghost. A philosophy that cannot tell a living man from a future villain is superstition.${extra}`;
        },
      },
      {
        id: 'no-one',
        lead: 'No one should stand above the Republic.',
        text(flags) {
          const base = 'Dictator was built to expire. For life, it is a confession that the emergency is convenient. Good reforms can live in the laws. Rome does not belong to you.';
          if (yielded(flags).length >= 2) return `${base} I was quieter on the smaller votes. Late is not the same as never.`;
          return base;
        },
        rating: 8,
        explanation: 'Strong. You aim at the real distortion: an emergency office made permanent. It is an 8 because you define the wrong more clearly than you explain the crash after his death.',
        rebuttal(flags) {
          if (yielded(flags).length >= 2) {
            return 'That principle was absent whenever the vote was called. I do not answer a slogan that reports for duty only at the end.';
          }
          return 'Put the reforms in the laws and the next frightened coalition will unwind them. Your parchment did not stop a sword in Spain.';
        },
      },
      {
        id: 'mortal',
        lead: 'What is Rome on the morning you are gone?',
        text(flags) {
          const base = 'A peace that lives in one body is an intermission. When you die, men with legions will reach for your chair, not for the Senate. The Republic was how we outlived the talented.';
          if (flags.decisions.people === 'assemblies' || flags.responses.people === 'law') {
            return `${base} I welcomed land and debt as law. A life office is a different thing.`;
          }
          return base;
        },
        rating: 10,
        explanation: 'Exceptional. You concede the peace, then show why a peace that dies with one man is not a constitution. His death will not restore the old Republic. It will start another war.',
        rebuttal: 'Yes, I will die. So will this Senate, of mediocrity, one funeral at a time. If my death frightens you, make Rome orderly enough that it is not a signal for another Pompey.',
      },
      {
        id: 'peace',
        side: 'for',
        lead: 'He ended the war. Taking the title back restarts it.',
        text: 'Rome is quiet because one hand holds it. A vote will not impress the next army.',
        rating: 9,
        explanation: 'The strongest case for keeping him. It admits the peace lives in one body and calls that a reason to continue.',
        rebuttal: 'A quiet Rome that cannot survive its ruler’s death is not at peace. It is waiting.',
      },
      {
        id: 'reforms',
        side: 'for',
        lead: 'Let the man who did the work finish it.',
        text: 'The calendar, the debt, the colonies. The office is ugly. The work is real.',
        rating: 7,
        explanation: 'You praise the measures and skip the question of why they need a life term.',
        rebuttal: 'Write the work into law and let the office die. If the work needs him forever, it was never a law.',
      },
    ],
    interlude: 'The Ides of March are close. No one says so. This is the last vote that still pretends to be a debate.',
    decisions: [
      {
        id: 'oppose',
        label: 'Oppose him, lawfully',
        text: 'Refuse the title. Keep a lawful opposition. No crown, and no daggers.',
        hints: ['A few senators prefer opposition without murder.', 'A tired public wants the peace left alone.', 'You keep the argument, not safety.'],
        deltas: { argument: 3, senate: 8, popular: -5, stability: -6 },
        result: 'A few senators move toward an opposition that does not smell of a plot. Much of the public hears another noble who will not let the war die. You leave with the principle, and little else.',
      },
      {
        id: 'conspiracy',
        label: 'Support a conspiracy to kill him',
        text: 'Back the men who mean to kill him. You accept the Senate cannot debate its way out.',
        hints: ['Murder is not a constitution.', 'The people loved him.', 'His death opens the next war.'],
        deltas: { argument: -4, senate: -4, popular: -12, stability: -18 },
        result: 'Killing him is not a law. The crowd will not become republican because he is dead. The Ides of March will not restore the Republic. They open the next war.',
      },
      {
        id: 'accept',
        label: 'Accept the perpetual dictatorship',
        text: 'Let the title stand. Do not gamble the peace for the sake of a word.',
        hints: ['The tired city thanks you.', 'The independent Senate goes quiet.', 'Order rises. The republican case spends what it had left.'],
        deltas: { argument: -10, senate: -14, popular: 6, stability: 8 },
        result: 'You choose the quiet. The Republic continues as a word on documents. A free state usually ends this way: a reasonable senator decides the shout is no longer worth it.',
      },
    ],
  },
];
