'use strict';

let numbers = [];
let more = true;

const answerElement = document.getElementById('answer');

while (more) {
  const givenNumber = prompt('Give a nuber, or done to stop');
  if (givenNumber === 'done') {
    more = false;
  }
  numbers.push(parseInt(givenNumber));
}
for (const number of numbers) {
  if (number % 2 === 0) {
    answerElement.innerText += number + ', ';
  }
}
