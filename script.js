'use strict';

/*
console.log(document.querySelector('.message').textContent); //reading the content which is written on HTML doc
console.log(document.querySelector('.label-highscore').textContent);

//DOM manipulation => interact with the webpage.
document.querySelector('.message').textContent = 'Correct Number'; //Changed the readable doc of HTML by JS
console.log(
  (document.querySelector('.message').textContent = 'Correct Number')
);

document.querySelector('.score').textContent = 13;
document.querySelector('.number').textContent = 10;
document.querySelector('.guess').value = 14;
console.log(document.querySelector('.guess').value);*/

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

let number = Math.trunc(Math.random() * 20) + 1;

let score = 20;

let highScore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = document.querySelector('.guess').value;
  console.log(guess);

  if (!guess) {
    // document.querySelector('.message').textContent = 'No Number Provided!';
    displayMessage('No number provided!');
  } else if (guess == number) {
    // document.querySelector('.message').textContent = 'Correct number';
    displayMessage('Correct Number!');
    document.querySelector('.number').textContent = number;

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess !== number) {
    if (score === 1) {
      // document.querySelector('.message').textContent = `You Loose! Press again to restart the game`;
      displayMessage('You Loose! Press Again to restart the game.');
      document.querySelector('body').style.backgroundColor = 'red';
    } else {
      displayMessage(
        guess > number ? 'Number is too high!' : 'Number is too low!'
      );
      score--;
      document.querySelector('.score').textContent = score;
    }
  }
  // } else if (guess > number) {
  //   if (score === 1) {
  //     document.querySelector('.message').textContent =
  //       'You loose, Please press again to restart!';
  //   } else {
  //     score--;
  //     // highScore++;
  //     // document.querySelector('.highscore').textContent = highScore;
  //     document.querySelector('.score').textContent = score;
  //     document.querySelector('.message').textContent = 'Number is too high!';
  //     document.querySelector('body').style.backgroundColor = 'red';
  //   }
  // } else if (guess < number) {
  //   if (score === 1) {
  //     document.querySelector('.message').textContent =
  //       'You loose, Please press again to restart!';
  //   } else {
  //     score--;
  //     // highScore++;
  //     // document.querySelector('.highscore').textContent = highScore;
  //     document.querySelector('.score').textContent = score;
  //     document.querySelector('.message').textContent = 'Number is too low!';
  //     document.querySelector('body').style.backgroundColor = 'red';
  //   }
  // }
});

/*document.querySelector('.again').addEventListener('click', function () {
  window.location.reload(); //easy way to relod the page.
});*/

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  number = Math.trunc(Math.random() * 20) + 1;
  // const guess = document.querySelector('.guess').value;
  // console.log(guess);

  // if (guess == number) {}
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = ' ';

  // document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing');
  document.querySelector('.score').textContent = score;

  document.querySelector('.number').style.width = '15rem';
  document.querySelector('body').style.backgroundColor = '#222';
});
