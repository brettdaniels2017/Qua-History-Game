export const earlyDebates = [
  {
    id: 'power',
    numeral: 'I',
    title: 'The Power of Caesar',
    year: '50 BCE',
    question: 'Should Caesar keep extraordinary power?',
    senator: { name: 'Marcus Porcius Cato', mark: 'CATO' },
    sides: [
      { id: 'for', label: 'Argue for his power', text: 'His victories earned him the authority to go on.' },
      { id: 'against', label: 'Argue against his power', text: 'A command ends, or it stops being a republic.' },
    ],
    situation: [
      'It is 50 BCE. Caesar’s command in Gaul is ending. He wants to stand for consul without sending the army home, where a court can reach him.',
    ],
    chamber: [
      {
        speaker: 'Quintus Aelius',
        role: 'senator · fictional',
        text: 'Remember Sulla. Rome applauded him too, until the proscription lists went up.',
      },
    ],
    caesar() {
      return [
        'Gaul is quiet and the treasury is full. Why should the man who has secured Rome’s future be denied the authority to continue doing so?',
      ];
    },
    senate() {
      return [
        'Sulla was cheered too. Success is not a second term. End the command.',
      ];
    },
    responses: [
      {
        id: 'precedent',
        lead: 'Your victories are real. A precedent built on them would outlive you.',
        text: 'Praise a victorious general. Then end the command. Sulla already showed what happens when success becomes a claim on the state.',
        rating: 9,
        explanation: 'Exceptional. You grant the Gallic record, then insist success cannot renew itself as power. It is not a 10 only because you offer him no lawful way home.',
        rebuttal: 'I am not Sulla. I am the reason Gaul pays tribute instead of raiding Italy. If your precedent forbids you to trust the man who earned it, that is fear, not wisdom.',
      },
      {
        id: 'shared',
        lead: 'Rome was not built by crowning the strongest man in the room.',
        text: 'Two consuls share one year so neither can become a master. Your conquests belong to the Republic that lent you the command.',
        rating: 8,
        explanation: 'Strong. You separate honor from authority. It is not higher because you never answer his charge that the Senate is too weak to act.',
        rebuttal: 'Gaul was not pacified by a committee. Keep the old forms for processions. A ceremony will not hold a frontier.',
      },
      {
        id: 'control',
        lead: 'Commands begin and end here. Yours has lasted long enough.',
        text: 'Provinces are assigned by this body. An army is not a private estate, and next year’s appointments are not your reward.',
        rating: 5,
        explanation: 'Moderate. The rule is real, but the speech sounds like senators protecting their turn. You never say why his record should not be trusted.',
        rebuttal: 'You do not fear for Rome. You fear for your turn. This body uses appointments to reward cousins. You will need a better reason to send me home.',
      },
      {
        id: 'earned',
        side: 'for',
        lead: 'Rome should trust the man who has already saved it.',
        text: 'Gaul is quiet because of him. Take the command away and you punish the victory.',
        rating: 8,
        explanation: 'A clean case for him. You treat a finished war as a reason to renew the power that fought it.',
        rebuttal: 'Sulla was successful too. The command ends, or the man who holds it is no longer a magistrate.',
      },
      {
        id: 'practical',
        side: 'for',
        lead: 'The Senate is too divided to hold Gaul without him.',
        text: 'Send him home and the province does not govern itself. Someone has to keep what he won.',
        rating: 6,
        explanation: 'Practical, and thin. You assume the Republic cannot keep a province except through the man who took it.',
        rebuttal: 'Then appoint another general. A province only one citizen can hold is already his.',
      },
    ],
    interlude: 'A speech can be right and a vote can still start a war. What does the Senate actually do?',
    decisions: [
      {
        id: 'refuse',
        label: 'Refuse extraordinary power',
        text: 'No extension, and no consulship, until he dismisses the army and comes home as a citizen.',
        hints: ['The Senate hardliners rally.', 'The Forum hears an insult.', 'Peace becomes less likely.'],
        deltas: { argument: 3, senate: 10, popular: -7, stability: -5 },
        result: 'The optimates praise your nerve. Veterans ask why the man who filled the treasury is being prepared for a trial. You have drawn a line. It may be the last peaceful one.',
      },
      {
        id: 'grant',
        label: 'Grant him the authority',
        text: 'Extend his power. Rome cannot spare the general who has already won its wars.',
        hints: ['Citizens cheer.', 'The Senate’s hold on commands weakens.', 'The city steadies, for now.'],
        deltas: { argument: -6, senate: -12, popular: 9, stability: 5 },
        result: 'The cheer is outside, not in the Curia. You have agreed that success can renew extraordinary power. Caesar thanks you for noticing the obvious.',
      },
      {
        id: 'limited',
        label: 'Offer a conditional compromise',
        text: 'A triumph and a path to the consulship, but only after the army is dismissed.',
        hints: ['The law stays intact.', 'Hardliners call it soft.', 'The crisis cools.'],
        deltas: { argument: 1, senate: 1, popular: 4, stability: 5 },
        result: 'Neither a crown nor a prosecution. Caesar listens. Cato’s friends accuse you of softness. For the first time, there is a door that does not open onto a sword.',
      },
    ],
  },
  {
    id: 'legions',
    numeral: 'II',
    title: 'The Loyalty of the Legions',
    year: '50 BCE',
    question: 'Who do the legions belong to?',
    senator: { name: 'Lucius Domitius Ahenobarbus', mark: 'DOMITIUS' },
    sides: [
      { id: 'for', label: 'Argue for Caesar’s command', text: 'The soldiers follow the general who led them.' },
      { id: 'against', label: 'Argue the army is Rome’s', text: 'A legion answers the Republic, not its general.' },
    ],
    situation: [
      'His veterans take their pay and their land from him, not from the Senate. The Republic still says the army belongs to Rome.',
    ],
    chamber: [
      {
        speaker: 'A centurion’s letter',
        role: 'dramatized',
        text: 'We marched for Rome. We will not be handed to men who learned our battles from a couch.',
      },
    ],
    caesar(flags) {
      const decision = flags.decisions.power;
      let memory = 'Now say it about the men who won the honors.';
      if (decision === 'refuse') {
        memory = 'You stood in this chamber and told me the command should end. My soldiers heard that the Senate means to discard them.';
      } else if (decision === 'grant') {
        memory = 'You left the authority with me. Do not pretend it can be separated from the men who make it real.';
      } else if (decision === 'limited') {
        memory = 'You offered a triumph if I first dismissed the army. The Senate has spent ten years forgetting its pay.';
      }
      return [
        `${memory} Why should distant senators who have never faced the battlefield determine how these men are commanded?`,
      ];
    },
    senate(flags) {
      const decision = flags.decisions.power;
      const memory = decision === 'grant'
        ? 'You already left the authority with him. '
        : 'An army that loves its general first is a private weapon. ';
      return [`${memory}If they answer only Caesar, he can march them here.`];
    },
    responses: [
      {
        id: 'oath',
        lead: 'The army serves the Republic, not its commanders.',
        text: 'Pay them, settle them, and discharge them in Rome’s name. Gratitude to a general is human. A chain of command that ends with him is not.',
        rating: 7,
        explanation: 'Strong. You name pay and land, not only the oath. It is not higher because an oath will not move veterans whose future already sits in Caesar’s hands.',
        rebuttal: 'Call it the Republic when the Republic feeds them. They follow me because I have not lied about their pay. Find me the senator of whom that is true.',
      },
      {
        id: 'accountable',
        lead: 'Command the field. Answer for it afterward. You and Pompey both.',
        text: 'A general may lead a campaign. He may not own it. If the rule bends for one of you, it is a faction, not a law.',
        rating: 8,
        explanation: 'Strong. You hold Pompey to the same standard. It is an 8, not a 9, because you never say who disarms first.',
        rebuttal: 'Then begin with Pompey. He keeps legions under a Spanish command he does not even attend. Send me the order after he has obeyed it.',
      },
      {
        id: 'weapon',
        lead: 'A general whose soldiers are his own only needs to be threatened.',
        text: 'He does not have to wear a crown. If he is cornered, the army raised for the frontier turns toward the city. Sulla already marched.',
        rating: 9,
        explanation: 'Exceptional. You respect the soldiers and still name the danger: their future sits in one man’s hand. It is not a 10 only because the warning itself can provoke the march.',
        rebuttal: 'This Senate left veterans begging. If a march comes, it will be because you prefer an unpaid army and a prosecuted general to a settled peace.',
      },
      {
        id: 'trust',
        side: 'for',
        lead: 'Soldiers follow the general who led them.',
        text: 'Caesar earned that loyalty in the field. A decree will not make them love the Senate instead.',
        rating: 8,
        explanation: 'You state the fact the camps already live by. You never say what stops that loyalty from turning toward Rome.',
        rebuttal: 'That is the danger, not the defense. An army that answers one man can be marched wherever he points.',
      },
      {
        id: 'pay',
        side: 'for',
        lead: 'He pays them. The Senate has not.',
        text: 'Call it personal. The men will follow the hand that kept its promise.',
        rating: 7,
        explanation: 'A fair complaint about unpaid veterans, used as a reason to leave them in his hand.',
        rebuttal: 'Then let the treasury pay them. A debt owed to a general is a chain.',
      },
    ],
    interlude: 'The loyalty of the legions is no longer a theory. The Senate has to live under it, or against it.',
    decisions: [
      {
        id: 'shared',
        label: 'One law for both generals',
        text: 'Dated commands for Caesar and Pompey. Neither carries an army into politics. Veterans are settled by the state.',
        hints: ['Neither champion is favored.', 'The Forum can understand the rule.', 'The immediate danger eases.'],
        deltas: { argument: 2, senate: 4, popular: 1, stability: 3 },
        result: 'Neither man is delighted, which is how you know it is not a faction’s gift. One rule for both generals. It may not be enough. It is a start.',
      },
      {
        id: 'independent',
        label: 'Give the generals freer command',
        text: 'Let proven commanders keep looser control of reward, discipline, and how long they hold the army.',
        hints: ['The camps approve.', 'Senators hear the keys change hands.', 'Warlords become more likely.'],
        deltas: { argument: -5, senate: -10, popular: 5, stability: -6 },
        result: 'You have said aloud what the camps already believe. North of a small river, a precedent gets comfortable and stays.',
      },
      {
        id: 'strict',
        label: 'Bind the legions to the Senate',
        text: 'Fixed dates. No proconsul’s army in Italy. Pay, land, and discharge come from the treasury.',
        hints: ['Civilian control is clear.', 'The camps hear a threat.', 'The principle rises. The peace thins.'],
        deltas: { argument: 2, senate: 8, popular: -5, stability: -8 },
        result: 'The decree is clean, and it is feared. Caesar’s officers read it as preparation for a trial. You have strengthened the principle and shortened the peace.',
      },
    ],
  },
  {
    id: 'people',
    numeral: 'III',
    title: 'The People of Rome',
    year: 'Late 50 BCE',
    question: 'Who should relieve the people?',
    senator: { name: 'Marcus Porcius Cato', mark: 'CATO' },
    sides: [
      { id: 'for', label: 'Argue for Caesar’s relief', text: 'If the Senate will not feed them, he should.' },
      { id: 'against', label: 'Argue relief must be law', text: 'Help that depends on one man is not a public good.' },
    ],
    situation: [
      'Grain, debt, and land for veterans are already politics. He says he will do for ordinary Romans what the Senate will not.',
    ],
    chamber: [
      {
        speaker: 'A voice in the Forum',
        role: 'dramatized',
        text: 'My sons ate because a candidate paid for the grain. The Senate paid for neither.',
      },
    ],
    caesar(flags) {
      const decisions = flags.decisions;
      let memory = '';
      if (decisions.legions === 'strict') memory = 'First you would hand my soldiers to men who never learned their names. ';
      else if (decisions.legions === 'independent') memory = 'You let a general keep his army. Be consistent when he uses the victory to feed the city. ';
      else if (decisions.legions === 'shared') memory = 'You wanted one law for both generals. Which of us has offered the people anything but a speech? ';
      if (decisions.power === 'grant') memory += 'You already admitted Rome needs my authority. ';
      else if (decisions.power === 'refuse') memory += 'You refused me in the name of senators. They are not the ones in the grain line. ';
      return [
        `${memory}If that improves their lives, why should I be prevented from exercising it?`,
      ];
    },
    senate(flags) {
      const note = flags.decisions.legions === 'independent'
        ? 'You already loosened his hold on the army. '
        : '';
      return [`${note}A gift with one man’s name on it makes clients, not citizens.`];
    },
    responses: [
      {
        id: 'law',
        lead: 'Help them by law, not by a leash.',
        text: 'Land, debt, and grain should pass the assemblies and bind the next consul too. A benefit that dies with one patron was never a public good.',
        rating: 10,
        explanation: 'Exceptional. You accept that the poor have been failed, then refuse a gift that makes them clients. Laws outlast the giver. That answers him on his own ground.',
        rebuttal: 'A beautiful argument. It feeds no one this month. You are asking the hungry to prefer your definition of freedom to tomorrow’s bread.',
      },
      {
        id: 'patronage',
        lead: 'A generous king is still a king.',
        text: 'Grain, games, and a cancelled debt remind every receiver whose hand opened. Once the gift is personal, opposing him looks like cruelty to the people.',
        rating: 8,
        explanation: 'Strong. You name the trap: generosity becomes power. It is not higher because you say little about how the poor will actually be fed.',
        rebuttal: 'You would rather they receive nothing than receive it from me. The Senate has used hunger as prudence for years. Do not be surprised when empty hands stop caring what you call freedom.',
      },
      {
        id: 'crowd',
        lead: 'A crowd is not a constitution.',
        text: 'Rome has cheered men it later had to survive. The assemblies and the consulship already exist. Popular love is not a license to ignore them.',
        rating: 7,
        explanation: 'Strong, not exceptional. You refuse to treat popularity as a blank order. It sounds thin because you never admit how often those assemblies are blocked or bought.',
        rebuttal: 'Say “ancient ways” in the Subura and see what they buy. The assemblies you praise are managed by the same houses that stalled the land. I am opening the door.',
      },
      {
        id: 'bread',
        side: 'for',
        lead: 'A republic that lets its people go hungry has already failed them.',
        text: 'Caesar offers land and relief. If this chamber will not, he should.',
        rating: 8,
        explanation: 'You put the hunger first. You also hand the remedy to one patron.',
        rebuttal: 'Pass the law. Do not pass him the people. Bread from a single hand is remembered at the next vote.',
      },
      {
        id: 'speed',
        side: 'for',
        lead: 'The poor cannot eat a delayed vote.',
        text: 'His measures are faster than this chamber. Speed is the point.',
        rating: 6,
        explanation: 'Speed is real. It is not yet an argument for why the help must wear his name.',
        rebuttal: 'Speed is how a patron becomes necessary. The assembly can move if you stop standing in its door.',
      },
    ],
    interlude: 'The question is no longer whether Rome should help its citizens. It is whether the help may have only one signature.',
    decisions: [
      {
        id: 'assemblies',
        label: 'Relief as law, not as a gift',
        text: 'Back land for veterans and relief for debtors as statutes that outlast Caesar and belong to no patron.',
        hints: ['The Forum hears a republic that includes them.', 'Some senators bristle.', 'The city grows easier to govern.'],
        deltas: { argument: 2, senate: -3, popular: 8, stability: 5 },
        result: 'Purists on both sides are annoyed. In the Forum, for once, a defense of the Republic sounds like a defense of ordinary people.',
      },
      {
        id: 'block',
        label: 'Nothing without the Senate',
        text: 'Block personal distributions. Popular measures wait on this chamber, or they do not happen.',
        hints: ['The inner Senate understands.', 'The grain lines will not.', 'The streets grow easier to shake.'],
        deltas: { argument: 1, senate: 8, popular: -10, stability: -4 },
        result: 'By night the taverns say Valerius would rather they starve legally. You have protected the Senate’s gate, and nailed Caesar’s best speech to it.',
      },
      {
        id: 'bypass',
        label: 'Let him bypass the Senate',
        text: 'Let Caesar enact popular measures on his own authority if the Senate will not move.',
        hints: ['The Forum rewards the speed.', 'The Senate becomes an obstacle.', 'Order rises with his permission to ignore you.'],
        deltas: { argument: -6, senate: -12, popular: 12, stability: 3 },
        result: 'If the people’s hardship justifies setting the Senate aside, the Senate is no longer a partner. The applause outside is sincere. So is the silence inside.',
      },
    ],
  },
];
