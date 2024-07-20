// Используя Math.random() вам необходимо генерировать цифры от 0 до 9, и создать массив состоящий из 5 таких элементов
// 1. Рассчитать сумму элементов этого массива
// 2. Найти минимальное число
// 3. Найти есть ли в этом массиве число 3

function getRandomInt(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
}

function addRandomValues(arr, count) {
    for (i = 0; i < count; i++) {
        arr.push(getRandomInt(0, 10));
    }
}

const sumArray = (array) => {
    let sum = 0;
    array.forEach(element => {
        sum += element;
    });
    return sum;
}

const minValue = (array) => {
    let min = Infinity;
    array.forEach(element => {
        if (element < min)
            min = element
    });
    return min;
}

const isContains = (array, value) => {
    return array.indexOf(value) !== -1;
}

const arr = [];

addRandomValues(arr, 5);
console.log(`Создан массив: ${arr}`);
console.log(`Сумма элементов: ${sumArray(arr)}`);
console.log(`Минимальное число: ${minValue(arr)}`);


const num = 3;
console.log(isContains(arr, num) ? `Число ${num} есть в массиве` : `Числа ${num} нет в массиве`);
