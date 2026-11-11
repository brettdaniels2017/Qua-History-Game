function beat(a, b) {
  return [
    { id: a[0], nudge: 0, lead: a[1], text: a[2], answer: a[3] },
    { id: b[0], nudge: 0, lead: b[1], text: b[2], answer: b[3] },
  ];
}

export const DETAILS = {
  precedent: beat(
    ['sulla', 'Look at the last man who was allowed to finish his war.', 'Sulla marched in 88, became dictator in 82, and posted proscriptions. The applause came first. The lists came after. A precedent does not ask whether the next man will be as restrained as you claim to be.', 'Sulla restored the Senate and laid the office down. You are using a dead man’s crimes to refuse a living province.'],
    ['date', 'The law already named the day.', 'The Gallic command was extended, not invented. It still had an end. Keeping you past that day, with the army still under your standard and a consulship waiting, teaches every proconsul that the date is a suggestion.', 'The date was politics. My enemies moved it whenever a prosecution looked convenient. A calendar in their hands is not a constitution.'],
  ),
  shared: beat(
    ['consuls', 'Two consuls, one year, on purpose.', 'Rome splits the highest office so neither man can finish a year as master. Your conquests were made with a commission this body lent you. The glory can be yours. The commission goes back.', 'Two consuls did not pacify Gaul. A shared office is how you honor a city. It is not how you hold a frontier that still has enemies.'],
    ['successor', 'Name the man who replaces you.', 'A successor, paid by the treasury, takes the province on a written day. You get the triumph if the army is no longer yours when you cross the boundary. That is honor without a second term.', 'Name him. Until he is in the camp, with the legions paid, your successor is a blank line and my soldiers know it.'],
  ),
  control: beat(
    ['assignment', 'Provinces are assigned in this room.', 'Every command starts as a vote. Gaul was assigned, then lengthened, because the war required it. The same vote can close it. An army is not an estate you improve and then keep.', 'You assign provinces to friends and call the habit a principle. My enemies already have the court. The assignment is how they disarm me.'],
    ['absentia', 'He wants the consulship without coming home.', 'Standing for consul while still holding the army means the voters face a candidate they cannot put on trial. Come back as a citizen, or do not stand. The campaign and the command do not share a year.', 'Come back unarmed, into a city my enemies already hold. You are describing a trial and calling it an election.'],
  ),
  earned: beat(
    ['treasury', 'The treasury is full because the war was authorized.', 'Gaul pays tribute. That tribute belongs to the Republic that commissioned the war, not to a private claim on next year’s imperium. Gratitude can be a triumph. It is not a renewal.', 'Tribute does not garrison itself. Take the man and you will spend the tribute hiring the next army to do the same work worse.'],
    ['term', 'Write the extension in days, not in trust.', 'Settle the tribes still under arms, then stop. A short, dated extension is a reward for the work. An open one is a new kind of office, held by whoever wins the next war.', 'Days are how senators comfort themselves. The work ends when the province is quiet, not when a tablet says the fear should stop.'],
  ),
  practical: beat(
    ['govern', 'A province can outlive its conqueror.', 'Gaul needs garrisons, taxes, and a governor who can be recalled. Those are ordinary tools. They do not require the same citizen every year until he decides the job is finished.', 'Ordinary tools in the hands of men the legions do not know. Recall is a word. Obedience is a habit, and they learned it under me.'],
    ['fear', 'Fear of the Senate is not a plan for Gaul.', 'You say the chamber is too divided to hold what you won. Then the remedy is a funded successor and a land bill, not a confession that only one Roman can be trusted with a province.', 'Fund him, then. You have not, in ten years of promising veterans their farms. Division is the policy. I am the exception you keep needing.'],
  ),
  oath: beat(
    ['marius', 'Marius changed who serves. He did not change who they serve.', 'Once the legions were filled with men who owned nothing, their future sat with the general who could get them land. That is a fact. It is not a surrender of the oath. Pay them as Rome, and the oath has somewhere to stand.', 'Rome has had a generation to pay them and preferred to argue. The oath they trust is the one that came with a share of the spoil.'],
    ['discharge', 'Discharge them in the city’s name.', 'A public discharge, land from the treasury, and no general’s seal on the farm. Do that before either camp is told the other side means to discard them. Loyalty follows the hand that signs the release.', 'Sign it. My centurions have heard a public discharge before. It arrived years late, and smaller than the promise.'],
  ),
  accountable: beat(
    ['pompey', 'Pompey keeps Spain without living there.', 'He holds a Spanish command and stays in Italy. If the rule is that a general answers for his army, it is his rule too. One order, two names, the same morning.', 'Begin with him, in writing, while my legions can see the courier leave. I have offered that order. Your friends refused it because they needed only one of us weak.'],
    ['city', 'No army of either man inside Italy.', 'The danger is not the distant camp. It is a proconsul’s legions within a march of the gates. Forbid that for both of us. The field can keep its general. The city keeps the law.', 'Italy is where my enemies are gathering his army. A rule that clears me from the gate and leaves him on the road is not neutral.'],
  ),
  weapon: beat(
    ['sulla-march', 'Sulla already showed the march.', 'In 88 a Roman army entered the city because its general decided the Senate had become the enemy. The soldiers were not wicked. Their future was in one man’s hand. That is the weapon. It does not need a crown.', 'And the Senate that provoked him called the march a surprise. Corner a general, withhold the land, and then act astonished.'],
    ['land', 'Give them the land before anyone is cornered.', 'A dated discharge and farms from the treasury, published before any trial. If the soldiers’ future sits with the state, a threat does not turn them around. If it sits with me, you have built the march you fear.', 'Publish the farms. You have described my own offer and then spent the afternoon warning the city about me.'],
  ),
  trust: beat(
    ['field', 'The field explains their trust. It does not own them.', 'They followed you through Gaul because you shared the risk and kept the pay. That is reason to honor you. It is not a reason the next campaign must also be yours, or that a senator’s order is an insult.', 'An order from a man who never saw the winter is an insult. Honor me by leaving the command with the general they already obey.'],
    ['paymaster', 'Move the paymaster, not the reputation.', 'Let your name stay on the victory. Let the treasury sign the next pay and the next farm. Trust can survive a second payer. A chain of command that ends in one tent cannot.', 'The treasury’s signature has been late for a decade. They will believe the tent until the coin is actually in the hand.'],
  ),
  pay: beat(
    ['coin', 'Then let Rome be the hand that kept the promise.', 'Match the pay in public, this quarter, and take your name off the gift. A debt to a general is a chain. A debt to the treasury is a state. The men can tell the difference if the coin arrives.', 'Arrive with the coin, not the speech. I have watched this chamber promise a settlement and deliver a debate.'],
    ['chain', 'A kept promise can still face the city.', 'If they follow the hand that paid, and that hand is yours alone, the next order does not have to be a battle. It can be a march on the men who argue about their farms. Payment without a second payer is the danger.', 'They will march on the men who cheated them. If that is this Senate, do not ask me to apologize for feeding them.'],
  ),
  law: beat(
    ['fifty-nine', 'He has done this once already.', 'In his consulship of 59 the land law went through, and the Senate learned what a bill looks like when one man is determined. Do it again as statute, in the assembly, with the next consul bound by it. A law outlasts the giver.', '59 worked because I would not wait for this room to love the poor. Your statute will wait. They will not.'],
    ['name', 'No single name on the grain.', 'Write the grain, the debt, and the veterans’ land so a clerk can enforce them after you are a private citizen. If the benefit dies when your authority dies, it was a client list.', 'Clerks do not face a mob that missed its distribution. A name is how a city knows the promise is real.'],
  ),
  patronage: beat(
    ['clients', 'Count the clients, not the loaves.', 'A cancelled debt and a basket of grain teach every receiver whose hand opened. The next time this chamber opposes you, it looks like cruelty to those people. That is how generosity becomes a government.', 'Cruelty is what they already call you. I did not invent the hunger in order to be thanked for ending it.'],
    ['statute-now', 'Pass the same basket as a law before dawn.', 'Take the distribution you condemn and rewrite it tonight as a statute with no patron. Then opposing you is not the same as emptying the line. Leave it personal, and the line is yours.', 'Tonight, again. I will believe the statute when the grain is on the table and your friends have not talked it out.'],
  ),
  crowd: beat(
    ['subura', 'The Subura is not the constitution. It is also not a rumor.', 'Men in this city eat because a candidate paid. That is corruption of a kind, and it is also a failed republic. Cheer is not a license. Neither is pretending the assemblies are free when the same houses buy them.', 'You have admitted the assemblies are bought and then told me to use them. I am using a door your friends do not own.'],
    ['offices', 'The offices are the answer only if they can still open.', 'Consuls, tribunes, assemblies: they exist so a crowd does not have to become a government. If they are blocked, say so and force the vote. Do not hand the crowd a single name and call the blockage an argument for him.', 'Force the vote, then. I have watched tribunes be driven out for trying. The office that cannot open is scenery.'],
  ),
  bread: beat(
    ['assembly', 'Let the assembly own the relief.', 'He can stand up and propose the land and the grain. The vote has to be the city’s, recorded, binding the next year. Speed with a ballot is still a republic. Speed with a patron is a household.', 'A ballot your allies count is a patron with extra wax. If the vote is free, stop standing between it and the bill.'],
    ['month', 'Name the month the bread arrives.', 'A hungry line cannot live on the word statute. Put a date on the distribution and a magistrate who can be punished if the date slips. That is how you answer him without leaving the poor in his hands.', 'Punish the magistrate after the month they starved. My date is tomorrow, and it does not need a second speech.'],
  ),
  speed: beat(
    ['calendar', 'Speed is a date, not a person.', 'Call the assembly this week. Publish the grain. If the bill fails in the open, the city will see who stopped it. If it passes, it does not need your name to remain true next year.', 'This week is the promise your colleagues break by talking. They have practiced it. I have stopped believing the calendar in their hands.'],
    ['lawful', 'Late and lawful still beats a personal gift.', 'I would rather the line eat next month under a law than tomorrow under a man who can close his hand. The wait is ugly. The leash is worse, because it is still there when the grain is gone.', 'Next month is easy to say after breakfast. Ask the line which ugly thing they prefer. You will not like the count.'],
  ),
  safer: beat(
    ['year', 'A consul’s year is the safety.', 'You can be brilliant and still be gone in December. That is the point of the office. A clumsy republic removes its masters by the calendar. The efficiency you are selling does not have a December.', 'December has not saved the debtors, or the veterans, or the provinces your colleagues loot and then debate. A year of that is not safety. It is repetition.'],
    ['task', 'Give the year one hard bill.', 'Prosecute a bribe even if the man is a friend. Date one command so it cannot be renewed by fear. Pass one land law with nobody’s name on it. Clumsy is allowed. Idle is how you prove him right.', 'One bill, from a room that has avoided it for a decade. I will watch the friends you have to prosecute. So will the city.'],
  ),
  reform: beat(
    ['bribes', 'Start with the men on your own benches.', 'Ambitus, the buying of elections, is a trade in this room. If the repair cannot touch a friend, it is a pamphlet. Name a case, fund the court, and stop pretending the rot is only his.', 'Name the case. Your colleagues will discover a procedure that lasts until I am either king or gone. I have seen that procedure.'],
    ['commands', 'Extraordinary commands are the crack.', 'Long wars taught Rome to hand a man a province for as long as he was useful, and then to panic when he would not give it back. Sunset every command of that size. The land law can follow. The panic is the lesson.', 'Sunset the command after the war is held by someone else. Until then, the crack is the only thing keeping Gaul from becoming next year’s invasion.'],
  ),
  checks: beat(
    ['veto', 'A tribune’s veto is the fence.', 'One tribune can stand in the door. That delay has saved the city from quick injustice, and it has also been used to starve a land bill. Keep the veto. Admit it has been captured. A fence you will not inspect is scenery.', 'Inspect it, then. The tribunes who stood in my door were not saving the poor. They were saving the families who like the poor hungry.'],
    ['speed-abuse', 'Name an injustice that arrived slowly.', 'If a late decision is always safer, then a stolen election, a blocked farm bill, and a paid gang are acceptable so long as they take a season. Say that out loud, or admit speed is not the only abuse.', 'I am saying it for you. This room tolerates any wound that bleeds at the traditional pace. The pace is the permission.'],
  ),
  deadlock: beat(
    ['date-power', 'Action with a day it must be returned.', 'Let him cut through the stalled bills, grain and land and the courts, and write the day the power comes back to two consuls. An emergency that cannot name its end is not an emergency. It is a resignation.', 'Returned to the men who stalled the bills. You keep describing the disease as the cure I am supposed to hand the power back to.'],
    ['who', 'Say who is actually blocking the vote.', 'It is not “the Senate” as a cloud. It is names, marriages, and debts. If those men cannot be moved, the argument for him gets stronger. If they can, you do not need a single chair to break a stall.', 'Move them, then. I have waited through their names. The cloud is the result, and the city lives under the result.'],
  ),
  results: beat(
    ['quiet', 'Quiet has a lender.', 'The treasury, the roads, the pause in the gangs: judge them. Also ask who can cancel the quiet by dying, or by being offended. Order that only one man can end is a pause he owns.', 'And disorder that only this Senate can end has lasted your whole career. You noticed it when I offered to stop it.'],
    ['calendar-office', 'Keep the results. Date the office.', 'Let the settlements and the accounts stand, and put a year on the authority that produced them. If the work is real, it can survive a magistrate who replaces you. If it cannot, it was never a reform.', 'A magistrate the troops have never seen, replacing the man who paid them. You are dating an office and hoping the camp believes in parchment.'],
  ),
  'no-force': beat(
    ['both', 'The third future was both armies down.', 'You offered to dismiss your legions if Pompey dismissed his. That offer is the answer to your own question. Renew it in public, with the tribunes back in the Senate, and neither camp gets to be the constitution.', 'I offered it. Antony and Cassius were driven out, and his army stayed. How many times do you renew an offer the other side has answered with a final decree?'],
    ['second-army', 'Pompey’s legions are not a law either.', 'Answering a renegade army with a loyal one repeats the crime at a different tent. Courts and a joint dismissal are slower. They are the only tools that do not make the next war the government.', 'Slower, while his legions sit between me and a court my enemies chose. You are asking the defendant to admire the procedure.'],
  ),
  'above-law': beat(
    ['citizen', 'A citizen does not bring the province with him.', 'You could have laid down the command on the same morning he did, then stood for consul without a legion at the gate. A prosecution after that would have been ugly. An army south of the Rubicon makes the prosecution your excuse.', 'Ugly is a gentle word for a trial designed to end in exile or worse. The river is what men cross when the court is a weapon.'],
    ['decree', 'The final decree was blunt. It was still not a march.', 'On 7 January the Senate told the consuls to see that the state took no harm. That weapon has been used before, against men who frightened this room. It did not entitle you to treat Italy as a rebel province.', 'It entitled them to destroy me by any means the consuls liked. I chose not to stand still for it and call the stillness law.'],
  ),
  proof: beat(
    ['rubicon-line', 'The river was the edge of the commission.', 'North of it, the army was a province’s army. South of it, the commission is over and the soldiers are in Italy under one man’s orders. That is the proof the earlier debate was about. Turn them back before they learn the streets.', 'They learned the direction from your friends, who preferred a cornered general to the joint dismissal. A river does not rewind because you have become precise.'],
    ['faces', 'They know your face, not the innocent from the guilty.', 'A legion does not hold a hearing on which senators captured the Republic. It salutes the man who paid it. That is why a political dispute cannot be carried south by men who love one general.', 'Pompey’s men salute him too. You are shocked only because their love currently votes with you.'],
  ),
  forced: beat(
    ['tribunes', 'They drove his tribunes out.', 'Mark Antony and Quintus Cassius fled the city after the final decree. That is a real grievance, and it is the sort of grievance a republic answers by restoring the men and disarming both generals. It is not a license to occupy Italy.', 'Restoring them after the army has been declared a crime is a pardon you would like me to beg for. I am not a petitioner. I am the man they tried to strip.'],
    ['offer', 'The offer was still on the table when he crossed.', 'Disarm together. Stand as a citizen. Those were roads that did not require a battle to prove the Senate cruel. A trap can be real and the march can still be the wrong way out of it.', 'A table in a city his soldiers already influenced. I crossed because the table had become a knife with witnesses.'],
  ),
  corrupt: beat(
    ['list', 'Name the faction. Then beat them without eagles.', 'If particular men have captured the Senate, list them and take the assemblies. A ballot can remove a clique. A legion removes everyone who did not salute in time, and calls the rest corruption.', 'Your ballot is the clique. The same houses count it. The eagles are the first instrument in years those houses do not own.'],
    ['direction', 'The direction of the march is the argument.', 'They are not going north to a reform meeting. They are coming toward the city that still holds the treasury, the courts, and Pompey. Calling that a march against a faction does not change which roofs are in the way.', 'The roofs of the men who passed the decree. If the innocent are among them, your friends chose the company.'],
  ),
  successors: beat(
    ['heir', 'He will die. The chair will not, unless you kill the chair.', 'No heir has been named as a king, and none needs to be. The powers of a life dictatorship are a set of keys. The next man who can count legions will pick them up. Limit the keys while the current hand is still warm.', 'You are disarming a peace because of a thief who is not in the room. Judge the man who ended the war, not the ghost you are saving the chair from.'],
    ['no-heir', 'Refuse the shape, not a rumor.', 'I do not need his successor’s name. An office that outlives the emergency, packs the Senate, and cannot be declined by the city is already the danger. The next appetite only inherits what you vote to leave on the table.', 'The Senate was packed because the old list could not govern. You are defending the list and calling the repair a rumor.'],
  ),
  'no-one': beat(
    ['expire', 'Dictator was built to expire.', 'The office exists for a war or a panic, and then it ends. For life, it confesses that the panic is convenient. Put the calendar, the debt, and the colonies into statutes that do not need you in the chair.', 'Statutes the next coalition will unwind while the veterans are still armed. The chair is why they have not tried it this month.'],
    ['record', 'Late is not the same as never.', 'If I was quieter on the smaller votes, the record can say so. It can also say that a life office is a different creature from a command, a grain bill, or a postponed trial. I am allowed to notice the difference at the end.', 'You noticed when the title became embarrassing. The power was built while you were being reasonable. I do not owe a speech to a conscience that arrives for the portrait.'],
  ),
  mortal: beat(
    ['morning', 'Count the morning after the funeral.', 'Pharsalus was 48. The ten-year dictatorship was 46. Life is 44. If you die in this office, the men with legions will not send for the consuls. They will send for each other. That auction is the constitution you are writing.', 'Then build a Senate that can survive a funeral. You have used the years since Pharsalus to describe it. The armies are still here.'],
    ['ides', 'His death would not restore the old Republic.', 'Killing you, or waiting for a fever, does not rewind the city to a time before personal armies. It opens the next war. The Republic was the system that outlived its talented men. A peace inside one body is only an intermission.', 'An intermission you have no other way to fill. When I am gone you will miss the quiet faster than you miss the procedure.'],
  ),
  peace: beat(
    ['title', 'Keep the quiet. Retire the life title.', 'The civil war is over because he won it. The city can keep the courts, the grain, and the settlements under magistrates who end. A life dictatorship teaches every camp that peace is a prize, not a law.', 'Magistrates who end do not frighten a legion that has just watched a republic fail. The title is the fright. Remove it and you invite the test.'],
    ['hand', 'Leaving the hand there makes it the prize.', 'Every officer who can count will see a Republic that survived by appointing one man for life. When the hand drops, they will reach for the same appointment. That is how a peace becomes the next war’s advertisement.', 'They will reach anyway. Better they reach for a chair that already kept the peace than for a Senate that could not.'],
  ),
  reforms: beat(
    ['calendar', 'The calendar can live without the chair.', 'In 46 he repaired the year itself. Debt, colonies, and the courts have paper that a clerk can follow. If the work is real, copy it into laws and let the dictatorship lapse. A tool that only one man can lift will be fought over when it drops.', 'A clerk did not face the armies at Pharsalus. The paper holds because the camp believes the man. You are asking the camp to believe the clerk.'],
    ['colonies', 'Settle the veterans in the law’s name.', 'The colonies are the soldiers’ future. Put them under a statute the next consul must honor, and you have answered the fear that the work dies with him. Leave them as his personal gift and the work was always a clientele.', 'The next consul will honor it until a crowd, or a rival, makes breaking it profitable. My name is the surety. You have not offered another.'],
  ),
};
