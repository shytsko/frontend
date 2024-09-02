// Напишите функцию getPrototypeChain(obj), которая будет
// возвращать цепочку прототипов для заданного объекта
// obj. Функция должна вернуть массив прототипов, начиная
// от самого объекта и заканчивая глобальным объектом
// Object.prototype.

function getPrototypeChain(obj) {
    const result = [obj];
    let nextProto = obj;
    do {
        nextProto = Object.getPrototypeOf(nextProto);
        result.push(nextProto)
    } while (nextProto !== Object.prototype);

    return result;
}


const objA = {
    propertyA: "propertyA"
};
const objB = {
    propertyB: "propertyB"
};

Object.setPrototypeOf(objB, objA);

const prototypeChain = getPrototypeChain(objB);

console.log(prototypeChain);