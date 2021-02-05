'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

//put this in win
document.querySelector('.number').textContent = secretNumber;

// again button
document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  // document.querySelector('.message').textContent = 'Start guesing...';
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = secretNumber;
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
// check button
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);
  // no input
  if (!guess) {
    //document.querySelector('.message').textContent = 'No Number!';
    displayMessage('No Number!');
  } // when player win
  else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = 'Correct Number!';
    displayMessage('Correct Number');
    document.querySelector('body').style.backgroundColor = '#06b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } // when guess too high or too low
  else if (guess !== secretNumber) {
    if (score > 1) {
      //document.querySelector('.message').textContent =
      // guess > secretNumber ? 'Too High!' : 'Too Low';
      displayMessage(guess > secretNumber ? 'Too High!' : 'Too Low');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You Lost';
      document.querySelector('.score').textContent = 0;
    }
  }
});
