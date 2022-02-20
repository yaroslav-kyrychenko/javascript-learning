'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const displayScore = function (score) {
  document.querySelector('.score').textContent = score;
};

const displaySecretMessage = function (secretNumber) {
  document.querySelector('.number').textContent = secretNumber;
};

const changeBackgroundColor = function (color) {
  document.querySelector('body').style.backgroundColor = color;
};

const changeNumberWidth = function (width) {
  document.querySelector('.number').style.width = width;
};

// Event listener for the "check" button
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // When there is no input
  if (!guess) {
    displayMessage('No number!');
  } // When player wins
  else if (guess === secretNumber) {
    displayMessage('Correct Number!');
    displaySecretMessage(secretNumber);
    changeBackgroundColor('#60b347');
    changeNumberWidth('30rem');

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } // When guess is wrong
  else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'Too high!' : 'Too low!');
      score--;
      displayScore(score);
    } else {
      displayMessage('You lost the game!');
      displayScore(0);
    }
  }
});

// Event listener for the "Again!" button.
document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;

  displayMessage('Start guessing...');
  displayScore(score);
  displaySecretMessage('?');
  document.querySelector('.guess').value = '';

  changeBackgroundColor('#222');
  changeNumberWidth('15rem');
});
