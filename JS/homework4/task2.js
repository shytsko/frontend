// Дан массив [1, 2, 3, 4, 5, 6, 7]
// Сделайте из этого массива следующий [1, 2, 3, 6, 7]

const arr = [1, 2, 3, 4, 5, 6, 7];

const newArr = arr.slice(undefined, 3).concat(arr.slice(-2, undefined));
console.log(newArr);


// Второй вариант
const newArr2 = arr.slice();
newArr2.splice(3, 2);
console.log(newArr2);

