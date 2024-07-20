// Необходимо вывести горку в консоль (используя цикл for), как показано на рисунке, только у вашей горки должно быть 20 рядов, а не 5:

// x
// xx
// xxx
// xxxx
// xxxxx

function generatePyramid(height, symbol) {
    const pyramid = [];

    for (let i = 1; i <= height; i++) {
        pyramid.push(symbol.repeat(i));
    }

    return pyramid;
}


const arr = generatePyramid(20, 'x');

arr.forEach(element => {
    console.log(element);
});