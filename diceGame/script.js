let rollScore,
  currentScore0 = 0,
  score0 = 0,
  currentScore1 = 0,
  score1 = 0;
playerCounter = 1;

const switchPlayers = function () {
  if (playerCounter % 2 !== 0) {
    return score0, currentScore0;
  } else {
    return score1, currentScore1;
  }
};

const changePic = function (rollScore) {
  //idk
  document.querySelector('dice');
};

const hold = document.querySelector('.btn--hold');
const roll = document.querySelector('.btn--roll');

const diceRoll = function (currentScore, rollScore) {
  rollScore = Math.trunc(Math.random() * 6) + 1;
  currentScore += rollScore;
  changePic(rollScore);
  document.querySelector('#current--0').textContent = currentScore;
  if (rollScore === 1) {
    currentScore = 0;
    document.querySelector('#current--0').textContent = currentScore;
    playerCounter++;
    switchPlayers();
    //switch players
  }
};

const holdScore = function (score, currentScore) {
  score += currentScore;
  document.querySelector('#score--0').textContent = score;
  if (score > 100) {
    return;
  }
  //switch players
};

hold.addEventListener('click', holdScore(score0, currentScore0));
roll.addEventListener('click', diceRoll(currentScore0, rollscore));

//new game btn
//dice pic change
//switch players wala func implementation
//chnage clr on winning
