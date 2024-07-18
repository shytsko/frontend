// Пользователь с клавиатуры вводит 3 числа, необходимо создать функцию, которая определяет максимальное значение среди этих чисел

const max2 = (x, y) => x > y ? x : y;

const max3 = (x, y, z) => max2(max2(x, y), z);

const num1 = prompt("Первое число");
const num2 = prompt("Второе число");
const num3 = prompt("Третье число");

console.log(max3(num1, num2, num3));
console.log(max3(num2, num1, num3));
console.log(max3(num2, num3, num1));
console.log(max3(num2, num1, num3));
