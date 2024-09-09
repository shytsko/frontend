// Создайте объект calculator с методами add(), subtract() и multiply(),
// которые выполняют соответствующие математические операции над
// двумя числами. Используйте методы call и apply для вызова этих
// методов с передачей аргументов.


const calculator = {
    add(arg1, arg2) {
        return arg1 + arg2;
    },

    subtract(arg1, arg2) {
        return arg1 - arg2;
    },

    multiply(arg1, arg2) {
        return arg1 * arg2;
    },
}

console.log(calculator.add.call(null, 5, 3));
console.log(calculator.subtract.apply(null, [5, 3]));