'use strict';
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');
const score0 = document.getElementById('score--0');
const score1 = document.getElementById('score--1');
const current0 = document.getElementById('current--0');
const current1 = document.getElementById('current--1');

const imgDice = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
//display scores 0
score0.textContent = 0;
score1.textContent = 0;
current0.textContent = 0;
current1.textContent = 0;
let currentScore = 0;
let playing = true;
let scores = [0, 0];
let activePlayer = 0;
//dice img hidden
imgDice.classList.add('hidden');
//creating event handler for ROLL DICE button
btnRoll.addEventListener('click', function () {
  //generating a rondom number and adding a current score
  if (playing) {
    const dice = Math.trunc(Math.random() * 6) + 1;
    imgDice.classList.remove('hidden');
    imgDice.src = `dice-${dice}.png`;
    if (dice !== 1) {
      currentScore += dice;
      document.getElementById(
        `current--${activePlayer}`
      ).textContent = currentScore;
    } else {
      //switch player if dice==1
      document.getElementById(`current--${activePlayer}`).textContent = 0;
      currentScore = 0;
      activePlayer = activePlayer == 0 ? 1 : 0;
      player0.classList.toggle('player--active');
      player1.classList.toggle('player--active');
    }
  }
});
//creating event handler for hold button
btnHold.addEventListener('click', function () {
  //adding current score to the total score
  if (playing) {
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    //if score is greater than or equal to 50 the player win the game and the game will terminate
    if (scores[activePlayer] >= 50) {
      playing = false;
      imgDice.classList.add('hidden');

      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      //if score is not equal to 50 then switch player
      document.getElementById(`current--${activePlayer}`).textContent = 0;
      currentScore = 0;
      activePlayer = activePlayer == 0 ? 1 : 0;
      player0.classList.toggle('player--active');
      player1.classList.toggle('player--active');
    }
  }
});
//event handler for new game.it will initialze from start.
btnNew.addEventListener('click', function () {
  score0.textContent = 0;
  score1.textContent = 0;
  current0.textContent = 0;
  current1.textContent = 0;
  currentScore = 0;
  playing = true;
  scores = [0, 0];
  activePlayer = 0;
  imgDice.classList.add('hidden');
  player0.classList.remove('player--winner');
  player1.classList.remove('player--winner');
  player0.classList.add('player--active');
  player1.classList.remove('player--active');
});
