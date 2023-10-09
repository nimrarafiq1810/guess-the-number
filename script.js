'use strict';
/*console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Number Correct!!!';
console.log(document.querySelector('.message').textContent);
document.querySelector('.guess').value = 20;*/

const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscorevalue = 0;
console.log(secretNumber);

document.querySelector('.check').addEventListener('click', function () {
  const guess = document.querySelector('.guess').value;
  console.log(guess);
  if (score > 0) {
    if (!guess) {
      document.querySelector('.message').textContent = 'No Number Entered!';
    } else if (guess == secretNumber) {
      console.log('correct Number');
      document.querySelector('.message').textContent = 'Correct Number';
      document.querySelector('body').style.backgroundColor = '#355E3B';
      document.querySelector('.number').textContent = secretNumber;
      if (score > highscorevalue) {
        highscorevalue = score;
        document.querySelector('.highscore').textContent = highscorevalue;
      }
    } else if (guess > secretNumber) {
      document.querySelector('.message').textContent = 'Too High';
      score--;
      document.querySelector('.score').textContent = score;
    } else if (guess < secretNumber) {
      document.querySelector('.message').textContent = 'Too Low';
      score--;
      document.querySelector('.score').textContent = score;
    }
  } else {
    document.querySelector('.message').textContent = 'You Lose the Game!';
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  const secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = 'Start Guessing';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
});
