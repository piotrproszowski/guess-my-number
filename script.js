'use strict';
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Correct Number! 🎉';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  //   console.log(guess, typeof guess);

  // no input
  if (!guess) {
    // document.querySelector('.message').textContent = '⛔ No number!';
    displayMessage('⛔ No number!');

    // win
  } else if (guess === secretNumber) {
    // document.querySelector('.message').textContent =
    //   '🎉 superb you got it ! 🎉';
    displayMessage('🎉 superb you got it ! 🎉');
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    // when is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      displayMessage(guess > secretNumber ? '📈 too high !!' : '📉 too low !!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('you lost the game');
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = ' ';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  secretNumber = Math.trunc(Math.random() * 20) + 1;
});
