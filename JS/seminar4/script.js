// // Создайте массив с элементами 1, 2, 3. Выведите на экран каждый из этих элементов.

// const arr = [1, 2, 3];

// console.log(`len = ${arr.length}`);

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }


// // Создайте массив с элементами 'a', 'b', 'c'. Запишите вместо первого элемента число 1,
// // вместо второго - 2, вместо третьего - 3.

// const arr2 = ['a', 'b', 'c'];

// arr2[0] = 1;
// arr2[1] = 2;
// arr2[2] = 3;

// console.log("---------------------");

// for (let i = 0; i < arr2.length; i++) {
//     console.log(arr2[i]);
// }

// // Создайте массив с элементами 1, 2 и 3. С помощью оператора ++ увеличьте каждый элемент массива на единицу.

// const arr = [1, 2, 3];

// for (let i = 0; i < arr.length; i++) {
//     arr[i]++;
// }

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// // Узнайте длину следующего массива:
// // const arr = [];
// // arr[3] = 'a';
// // arr[8] = 'b';

// const arr = [];
// arr[3] = 'a';
// arr[8] = 'b';

// console.log(arr.length);

// console.log(arr[0]);

// // Пусть дан такой массив:
// // const arr = [1, 2, 3];
// // Добавьте ему в конец элементы 4 и 5.

// const arr = [1, 2, 3];
// arr.push(4);
// arr.push(5);

// console.log(arr);


// // Создайте произвольный массив из 5 элементов, Удалите из него два элемента. Проверьте, какое станет значение
// // свойства length после этого.

// function getRandomInt(min, max) {
//     const minCeiled = Math.ceil(min);
//     const maxFloored = Math.floor(max);
//     return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
// }

// function addRandomValues(arr, count) {
//     for (i = 0; i < count; i++) {
//         arr.push(getRandomInt(0, 10));
//     }
// }

// const arr = [];

// addRandomValues(arr, 10);
// console.log(arr);

// arr.pop();
// arr.pop();
// console.log(arr);

// // 1. С помощью цикла for выведите в консоль числа от 11 до 33.
// // 2. С помощью цикла for выведите в консоль нечетные числа в промежутке от 1 до 99.
// // 3. С помощью цикла for выведите в консоль числа от 100 до 0.
// // 4. Дано число num с неким начальным значением. Умножайте его на 3 столько раз, пока результат умножения
// // не станет больше 1000. Какое число получится? Посчитайте количество итераций, необходимых для этого.

// for (let i = 11; i <= 33; i++) {
//     console.log(i);
// }

// console.log("--------------------");

// for (let i = 1; i <= 99; i += 2) {
//     console.log(i);
// }

// console.log("--------------------");

// for (let i = 100; i >= 0; i--) {
//     console.log(i);
// }

// console.log("--------------------");


// num = 15;

// counter = 0;

// while (num <= 1000) {
//     counter++;
//     num *= 3;
// }

// console.log(`num = ${num}; counter = ${counter}`);

// // 1. Дан массив const arr = [2, 5, 9, 15, 1, 4];
// // Выведите в консоль те элементы массива, которые больше 3-х, но
// // меньше 10.

// const arr = [2, 5, 9, 15, 1, 4];
// arr.forEach(element => {
//     if (element > 3 && element < 10) {
//         console.log(element);
//     }
// });

// // 1. Найдите сумму четных чисел от 2 до 100.

// let sum = 0;
// for (let i = 2; i <= 100; i += 2) {
//     sum += i;
// }

// console.log(sum);

// 2. Дан массив const = [2, 5, 9, 3, 1, 4];
// Найдите сумму элементов этого массива.


// const arr = [2, 5, 9, 3, 1, 4];
// let sum = 0;
// arr.forEach(element => {
//     sum += element;
// });

// console.log(sum);

// 1. С помощью цикла сформируйте строку '-1-2-3-4-5-6-7-8-9-'.

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// let str = '-';
// arr.forEach(element => {
//     str += element;
//     str += '-';
// });

// console.log(str);

// 2. Дан массив с числами. const = [2, 5, 9, 0, 3, 1, 4]; Запустите цикл,
// который будет по очереди выводить элементы этого массива в
// консоль до тех пор, пока не встретится элемент со значением 0.
// После этого цикл должен завершить свою работу.

const arr = [2, 5, 9, 0, 3, 1, 4];

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
    if (arr[i] === 0)
        break;
}