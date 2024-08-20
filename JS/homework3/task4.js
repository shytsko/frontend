// Необходимо реализовать четыре функции, каждая функция должна принимать по два числа и выполнять одну из
//  операций (каждая функция выполняет одну из них):
// 1. Сложение
// 2. Разность
// 3. Умножение
// 4. Деление
// Необходимо сделать так, чтобы функция вернула число, например выражение console.log(sum(2, 6)); должно
// вывести число 8 в консоль (sum - функция сложения в данном примере, ваши названия функций могут отличаться).
// Округлять значения, которые возвращают функции не нужно, однако, обратите внимание на разность, функция
// должна вычесть из большего числа меньшее, либо вернуть 0, если числа равны. Функциям всегда передаются
// корректные числа, проверки на NaN, Infinity делать не нужно.

const sum = (x, y) => x + y;
const sub = (x, y) => x > y ? x - y : y - x;
const mul = (x, y) => x * y;
const div = (x, y) => x / y;

console.log(sum(2, 6));
console.log(sub(2, 6));
console.log(sub(6, 2));
console.log(mul(2, 6));
console.log(div(2, 6));