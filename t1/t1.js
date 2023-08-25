'use strict';

const fruits = ['apple', 'banana', 'orange', 'grape', 'kiwi'];

console.log('fruits: ' + fruits.toString());

const lenght = fruits.length;
console.log('fruit lenght: ' + lenght); // fruit lenght

const secondIndexFruit = fruits[2];
console.log('second fruit on index: ' + secondIndexFruit); //second fruit on index

console.log('last fruit: ' + fruits[fruits.length - 1]); //last fruit

let vegetables = [];

const veggie1 = prompt('Give me a vegetable 1');
const veggie2 = prompt('Give me a vegetable 2');
const veggie3 = prompt('Give me a vegetable 3');
vegetables.push(veggie1);
vegetables.push(veggie2);
vegetables.push(veggie3);
console.log('Vegetables: ' + vegetables.toString());
console.log('Lenght of vegetables: ' + vegetables.length.toString());

document.getElementById('answer').innerHTML = '';
