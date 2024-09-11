const { calculateResultSum } = require('./calculateResultSum');
const colors = require('colors');

const total = calculateResultSum([12.1, 32.2, 43.1], 0.9);
const message = `Общая стоимость покупок: ${total} рублей`
console.log(total > 50 ? message.red : message.green);