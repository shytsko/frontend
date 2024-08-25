//   Напишите функцию createCounter, которая создает счетчик и возвращает объект с двумя методами: increment и decrement.
//   Метод increment должен увеличивать значение счетчика на 1, а метод decrement должен уменьшать значение счетчика на 1.
//   Значение счетчика должно быть доступно только через методы объекта, а не напрямую.
function createCounter() {
    let counter = 0;

    return {
        increment: () => ++counter,
        decrement: () => --counter,
        getValue: () => counter,
    };
}

const counter = createCounter();
counter.increment();
counter.increment();
counter.increment();
console.log(counter.getValue());
console.log(counter.decrement());
console.log(counter.getValue());