'use strict';

// Selecting elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// Declaring variables for the init function below
let scores, playing, currentScore, activePlayer;

// Setting the starting conditions in the initialize function
const init = function () {
  playing = true;
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;

  current0El.textContent = 0;
  current1El.textContent = 0;
  score0El.textContent = 0;
  score1El.textContent = 0;

  diceEl.classList.add('hidden');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
};
init();

// Displaying the text content of the score of the active player
const displayActiveScore = function (score) {
  document.getElementById(`score--${activePlayer}`).textContent = score;
};

// Displaying the text content for the current score of the active player
const displayActiveCurrentScore = function (currentScore) {
  document.getElementById(`current--${activePlayer}`).textContent =
    currentScore;
};

// Switching the active player
const switchPlayer = function () {
  displayActiveCurrentScore(0);
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentScore = 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

// Rolling dice functionality
btnRoll.addEventListener('click', function () {
  if (playing) {
    // 1. Generating a random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;
    console.log(dice);

    // 2. Display a dice.
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    // 3. Check for rolled 1: if true, switch to the next player.
    if (dice !== 1) {
      // Add dice to the current score
      currentScore += dice;
      displayActiveCurrentScore(currentScore);
    } else {
      // switch to the next player
      switchPlayer();
    }
  }
});

// Hold functionality
btnHold.addEventListener('click', function () {
  if (playing) {
    // 1. Add current score to active player's score
    scores[activePlayer] += currentScore;
    // document.getElementById(`score--${activePlayer}`).textContent =
    //   scores[activePlayer];
    displayActiveScore(scores[activePlayer]);
    // 2. Check if player's score is >= 100
    if (scores[activePlayer] >= 100) {
      // Finish the game
      playing = false;
      diceEl.classList.add('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    }
  }
  // Switch to the next player
  switchPlayer();
});

// Start a new game via the init function using the new game button
btnNew.addEventListener('click', init);
