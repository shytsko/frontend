// Найдите сумму элементов приведенного объекта.

const obj = {
    key1: {
        key1: 1,
        key2: 2,
        key3: 3,
    },
    key2: {
        key1: 4,
        key2: 5,
        key3: 6,
    },
    key3: {
        key1: 7,
        key2: 8,
        key3: 9,
    },
}

let sum = 0;

for (const key1 in obj) {
    for (const key2 in obj[key1]) {
        sum += obj[key1][key2];
    }
}

console.log(sum);


let sum2 = 0;
Object.values(obj).forEach(element => {
    sum2 += Object.values(element).reduce((accumulator, currentValue) => accumulator + currentValue);
});

console.log(sum2);