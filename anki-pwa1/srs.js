/**
 * SM-2 Spaced Repetition Algorithm
 * Grade: 0=Again, 1=Hard, 2=Good, 3=Easy
 */

const ONE_DAY_MS = 24 * 60 * 60 * 1000;

function scheduleCard(card, grade) {
  const now = Date.now();
  let { interval = 1, ease = 2.5, reps = 0, lapses = 0 } = card;

  if (grade === 0) {
    // Again - reset
    lapses += 1;
    interval = 1;
    ease = Math.max(1.3, ease - 0.2);
    reps = 0;
  } else {
    // Hard / Good / Easy
    if (reps === 0) {
      interval = grade === 1 ? 1 : grade === 2 ? 1 : 4;
    } else if (reps === 1) {
      interval = grade === 1 ? 3 : grade === 2 ? 4 : 7;
    } else {
      const multiplier = grade === 1 ? 1.2 : grade === 2 ? ease : ease * 1.3;
      interval = Math.round(interval * multiplier);
    }

    if (grade === 1) ease = Math.max(1.3, ease - 0.15);
    else if (grade === 3) ease = ease + 0.15;

    reps += 1;
  }

  const due = now + interval * ONE_DAY_MS;

  return { ...card, interval, ease, reps, lapses, due, lastReviewed: now };
}

function isDue(card) {
  return !card.due || Date.now() >= card.due;
}

function getDueCards(cards) {
  return cards.filter(isDue);
}

function getNewCards(cards) {
  return cards.filter(c => !c.reps || c.reps === 0);
}

export { scheduleCard, isDue, getDueCards, getNewCards };
