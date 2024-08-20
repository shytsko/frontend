// Дан объект numbers. Необходимо в консоль вывести все значения больше или равные 3.

const numbers = {
    keyin1: 1,
    keyin2: 2,
    keyin3: 3,
    keyin4: 4,
    keyin5: 5,
    keyin6: 6,
    keyin7: 7,
}

Object.values(numbers)
    .filter(item => item >= 3)
    .forEach(item => console.log(item));