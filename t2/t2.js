'use strict';
let numbers = [];

for (let i = 0; i < 5; i++) {
  const number = parseInt(prompt('give a number: ' + (i + 1)));
  numbers.push(number);
}

document.getElementById('answer').textContent = `numbers: ${numbers}`;

const numberToCheck = prompt('Give another number to check');

if (numbers.includes(parseInt(numberToCheck))) {
  alert('number ' + numberToCheck + ' WAS found in numbers array');
} else {
  alert('number ' + numberToCheck + ' was NOT found in numbers array');
}

numbers.pop();
console.log('Updated numbers: ' + numbers);

numbers.sort((a, b) => a - b);
console.log('Sorted numbers: ' + numbers);
