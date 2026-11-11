export const CHARACTERS = {
  player: {
    name: 'Lucius Valerius',
    role: 'Senator of Rome · fictional',
    summary:
      'A senator in his fifties who still believes a republic is a system of limits, not a prize for the most useful man in the room.',
    points: [
      'Defender of the Roman Republic, and a fictional man standing in for the argument the historical record cannot stage as a private debate.',
      'Believes political authority must be shared among institutions, and that a year, a colleague, and a law should be able to tell any citizen no.',
      'Believes the Senate must remain powerful enough to refuse a general, a crowd, or a friend.',
      'Opposes unlimited individual authority, including authority that calls itself temporary, necessary, or popular.',
      'Believes Rome’s institutions matter more than any single leader, even a brilliant one.',
    ],
  },
  caesar: {
    name: 'Gaius Julius Caesar',
    role: 'General and politician',
    summary:
      'Conqueror of Gaul, writer of his own victories, and the most dangerous speaker in Rome because he does not sound reckless.',
    points: [
      'Roman general and politician, pontifex maximus, and the leading popularis of his generation.',
      'An extremely successful military commander, nine years in Gaul, with soldiers who trust the man more than the city.',
      'Popular among many Roman citizens and soldiers, who have felt his victories, his promises, and his contempt for senatorial delay.',
      'Believes the Republic is inefficient and politically corrupt, run by families who confuse their own rank with the safety of Rome.',
      'Argues that strong centralized leadership is necessary if Rome is to survive its enemies, its poor, and its own elite.',
    ],
  },
};

export const INTRO_BEATS = [
  {
    kicker: 'Rome · 50 BCE',
    paragraphs: [
      'Rome has conquered vast territories, defeated its enemies, and become the most powerful civilization in the Mediterranean. Yet beneath its military success, the Republic is struggling. Political corruption, wealth inequality, and competition between powerful generals threaten the stability of its institutions.',
    ],
  },
  {
    kicker: 'The man outside the gates',
    paragraphs: [
      'One man has emerged as Rome’s most powerful figure: Gaius Julius Caesar. After years of military victories in Gaul, Caesar commands the loyalty of thousands of soldiers and enjoys widespread popularity among Roman citizens.',
      'But his growing influence has alarmed the Senate.',
    ],
  },
  {
    kicker: 'Your summons',
    paragraphs: [
      'You are Senator Lucius Valerius. Each debate, you choose a side. Argue for Caesar, and another senator answers you. Argue against him, and Caesar does.',
      'What follows is a dramatization. Lucius is fictional. The private exchanges are not transcripts. The crisis around them is historical. Listen for the argument, not for a quotation you can footnote.',
    ],
    dossiers: true,
  },
];

export const HOW_TO = {
  kicker: 'Before you enter the Curia',
  title: 'How to Play',
  lede: 'Pick a side, then argue it. The person across from you is whoever took the other one.',
  sections: [
    {
      heading: 'Six debates',
      paragraphs: [
        'Each topic opens with a short point. You take a side, answer in a sentence or two, and the other side answers back. The Senate then moves. A strong case pulls them your way. A weak one pushes them off it.',
        'He remembers which way they moved. A loss on the legions can come back at the river.',
      ],
    },
    {
      heading: 'How an argument is rated',
      paragraphs: [
        'The score is how well you made the case you chose. From 8 up, the Senate moves with you. At 6 or 7, they split. Below that, they move against you.',
        'Senate Support counts senators still holding the Republic. A strong case against Caesar raises it. A strong case for him spends it: they followed you, toward Caesar.',
      ],
    },
    {
      heading: 'The four measures',
      paragraphs: [
        'You begin with Republican Argument Strength at 50, Senate Support at 52, Public Support at 38, and Political Stability at 58. Caesar is already more loved in the streets than a senator who talks about procedure. The city is strained and not yet at war.',
        'Each speech against Caesar pulls argument strength toward that rating. A speech for him does not. The Senate’s move follows the rating, not a second vote.',
        'Senate support moves with the argument. A strong case can still unsettle the city: winning the chamber at the Rubicon is not the same as keeping the peace.',
      ],
    },
    {
      heading: 'Three endings',
      paragraphs: [
        'The Republic Survives only if the case is strong, the Senate still stands with you, the city is not already broken, and you did not accept a dictator for life.',
        'The Age of Caesar arrives if you hand him that title, if the Senate’s support drains away, or if the argument itself was never truly made. A late speech cannot refill an empty chamber.',
        'The Fall of the Republic comes if the peace collapses. Winning every hard argument can do that. Killing Caesar is not a choice here, and in history it did not restore the Republic.',
      ],
    },
  ],
};

export const HISTORY = {
  kicker: 'What a student should know first',
  title: 'Historical Context',
  lede: 'The Roman Republic was not a modern democracy wearing togas. It was an oligarchy with elections, a powerful aristocracy, and a set of limits designed to stop any one citizen from becoming a king. Those limits failed. This is the shape of the failure.',
  sections: [
    {
      heading: 'A republic, not a modern democracy',
      paragraphs: [
        'Adult male Roman citizens could vote and stand for office. Women could not. Slaves could not. For a long time, the Italians who fought Rome’s wars could not, until the Social War of 91–88 BCE forced the city to extend citizenship across Italy. Even among citizens, votes were not equal. The centuriate assembly, which elected consuls, was weighted toward the rich. A poor man’s voice was real and smaller.',
        'Patricians were the old hereditary aristocracy. Plebeians were everyone else, and by the late Republic rich plebeian families had long since entered the ruling class. The Conflict of the Orders was mostly over. What remained was a narrower club: the nobiles, families that had already held the consulship, and a wider circle of senators and equestrians who competed for the same offices. “The people” in a Roman speech often means citizens in assembly. It rarely means every person Rome ruled.',
      ],
    },
    {
      heading: 'How the Republic was supposed to work',
      paragraphs: [
        'Two consuls held the highest ordinary power, called imperium: the right to command armies and punish. They served for one year, and each could obstruct the other. Praetors judged and, later, governed. After a year in office, a magistrate might be sent to a province as a promagistrate, still holding imperium far from the city’s eyes.',
        'Tribunes of the plebs were sacrosanct. They could veto acts that harmed plebeians and propose laws to the plebeian assembly. The veto was one of the Republic’s real brakes. It was also a weapon, and tribunes were sometimes beaten or killed for using it.',
        'A dictator was an emergency magistrate, traditionally named for six months at most, to fight a war or hold elections the consuls could not. The office was built to expire. That fact matters more than almost any other in this game. When Caesar becomes dictator perpetuo — dictator for life — the emergency has been turned into a constitution.',
      ],
    },
    {
      heading: 'What the Senate actually possessed',
      paragraphs: [
        'The Senate was not a modern parliament and it did not, by itself, pass most laws. It was a council of several hundred former magistrates, dominated by the great families. Its decrees, senatus consulta, were advice. In practice they directed foreign policy, finance, the assignment of provinces, and the religious calendar of politics. Magistrates who ignored the Senate did so at their peril, until they didn’t.',
        'Laws were passed and magistrates elected by assemblies of citizens. The Senate’s power was custom, prestige, and the fact that the men who ran the assemblies were usually senators themselves. When Caesar and others took legislation straight to the people, or later ruled by their own authority, they were attacking that custom. They could say, not always falsely, that the custom had stopped serving anyone outside the families who owned it.',
        'In a crisis the Senate could pass a senatus consultum ultimum, the “final decree,” urging the consuls to see that the state took no harm. It was not a statute with clean edges. It was used against Gaius Gracchus and against Catiline. In January 49 BCE it was used against Caesar. He called it the end of negotiation. His enemies called it the last legal answer to a man who would not lay down his army.',
      ],
    },
    {
      heading: 'Who Julius Caesar was',
      paragraphs: [
        'Gaius Julius Caesar was born in 100 BCE into a patrician family that was old and, at the time, not the richest. He was a popularis in political style: he took his cause to the assemblies, cultivated the urban crowd, and treated senatorial obstruction as something to go around. He was also a blue-blooded aristocrat who cried when he thought he had not yet matched Alexander.',
        'In 60 BCE he joined Pompey and Crassus in what later writers call the First Triumvirate. It was not a legal office. It was a private pact among the three most powerful men in Rome. Caesar received the consulship of 59 and then an extraordinary command in Gaul. From 58 to 50 BCE he conquered an enormous territory, wrote the Commentaries that told Rome how to remember it, and built an army that had lived under his name for years.',
        'He was intelligent, physically brave, personally generous to friends and soldiers, and ruthless when ruthlessness shortened a war or a political problem. He is not, in this game or in history, a cartoon tyrant who hates the poor. The serious case against him is that he answered real failures of the Republic by making himself irreplaceable.',
      ],
    },
    {
      heading: 'Why the Republic was already weakening',
      paragraphs: [
        'The crisis did not begin with Caesar. In 133 and 123 BCE the Gracchi tried to redistribute public land and were killed. In 107 Marius enrolled the landless in the legions. Soldiers who owned nothing began to look to their general for a farm when the war ended, because the Senate often failed to give them one. The army was still sworn to Rome. Its future increasingly sat in one man’s will.',
        'In 88 and again in 83, Sulla marched Roman legions on Rome itself. He became dictator, proscribed his enemies, packed the Senate with his own settlement, and then resigned. The Republic resumed. The lesson did not resign with him: a general could seize the city and call it a restoration.',
        'By Caesar’s adulthood the ordinary machinery was buckling. Bribery at elections, ambitus, was notorious. Political gangs broke up assemblies. Pompey’s veterans waited years for promised land because rivals found the delay useful. Extraordinary commands — long, huge, and hard to take back — became the only way the Republic finished its wars. Then the Republic panicked at the men it had created. Optimates and populares were loose ways of doing politics, not modern parties. The first tended to defend senatorial control. The second took programs to the people. Both sides broke rules. Neither was a democracy waiting to happen.',
      ],
    },
    {
      heading: 'Why Caesar’s army was controversial',
      paragraphs: [
        'A Roman general’s imperium was supposed to end where his province ended. The Rubicon, a small river in northern Italy, marked that line for Caesar. Inside Italy, soldiers were citizens under the city’s law. A proconsul who crossed with his legion was not “returning home.” He was invading his own state.',
        'Caesar’s case was not empty. His enemies, including Cato and a Senate increasingly aligned with Pompey, wanted him to dismiss his army before he stood for a second consulship. He believed, with reason, that as a private citizen he would be prosecuted and destroyed. He offered, more than once, to lay down his command if Pompey laid down his. They did not trust each other, and the men around them preferred a test to a bargain. In January 49 BCE Caesar crossed.',
        'Pompey was not a mild republican either. He had held extraordinary commands of his own and an army in Spain he did not personally attend. A fair argument in this game is allowed to say so. The constitutional danger was personal armies, not one man’s character alone. Caesar proved the danger in the most famous way. He did not invent it.',
      ],
    },
    {
      heading: 'From the Rubicon to the Principate',
      paragraphs: [
        'Caesar defeated Pompey at Pharsalus in 48 BCE. Pompey fled to Egypt and was murdered. Caesar was appointed dictator, then in 46 BCE dictator for ten years, and in 44 BCE dictator for life. He reformed the calendar, settled veterans, revised the grain dole, enlarged the Senate with his supporters, and accepted honors that looked, to Roman eyes, uncomfortably like monarchy. At the Lupercalia in February 44, Mark Antony offered him a diadem. He refused it in public. He kept the power.',
        'On the Ides of March, 44 BCE, a group of senators stabbed him to death and called themselves liberators. The people of Rome did not rise to restore the Senate. They mourned him. Another civil war followed: the Second Triumvirate of Antony, Octavian, and Lepidus; the killings at Philippi; and at last the war between Antony and Octavian, ended at Actium in 31 BCE.',
        'In 27 BCE the Senate granted Octavian the name Augustus. He became the first Roman emperor. He ruled through the Principate: consuls, Senate, and assemblies remained, and the real power settled in one man and his control of the armies. Julius Caesar prepared that world. He did not live in it. Calling him the first emperor is a common mistake, and this game will not make it.',
      ],
    },
    {
      heading: 'What this game invents',
      paragraphs: [
        'Lucius Valerius is fictional. So are Quintus Aelius and the unnamed voices from the Forum. Lines given to Cicero and Antony are dramatized, not quotations. Caesar’s words in these rooms are written for the game. They track his known case — his offers to disarm if Pompey disarmed, his fear of prosecution, his popular measures, his contempt for senatorial delay — but they are not a document.',
        'The debate about the people is staged in late 50 BCE, when the claim was already his weapon, rather than in 46, when he had the power to decree the full program. The story stays in order so the Rubicon can still be a shock. The historical timeline below is the one to memorize. The game is an argument conducted along it.',
      ],
    },
  ],
  timeline: [
    ['133–121 BCE', 'The Gracchi attempt land reform and are killed. Political murder enters the Republic’s toolkit.'],
    ['107 BCE', 'Marius recruits the landless. A soldier’s future begins to depend on his general.'],
    ['88–79 BCE', 'Sulla marches on Rome, dictates a new settlement, and resigns. The precedent stays.'],
    ['60 BCE', 'Caesar, Pompey, and Crassus form an informal alliance, later called the First Triumvirate.'],
    ['58–50 BCE', 'Caesar conquers Gaul, writes his own legend, and holds an army that knows his name.'],
    ['7 January 49 BCE', 'The Senate passes the senatus consultum ultimum against Caesar.'],
    ['10–11 January 49 BCE', 'Caesar crosses the Rubicon. Civil war begins.'],
    ['48 BCE', 'Caesar defeats Pompey at Pharsalus. Pompey is murdered in Egypt.'],
    ['46 BCE', 'After further victories, Caesar is appointed dictator for ten years.'],
    ['15 February 44 BCE', 'At the Lupercalia, Antony offers Caesar a crown. Caesar refuses it.'],
    ['44 BCE', 'Caesar is named dictator perpetuo and assassinated on 15 March, the Ides.'],
    ['43–31 BCE', 'Further civil wars. The Second Triumvirate. Antony falls at Actium.'],
    ['27 BCE', 'Octavian becomes Augustus, the first emperor. The old offices remain. The Principate has begun.'],
  ],
};
