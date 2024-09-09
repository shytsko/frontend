// Создайте объект Person, представляющий человека, со следующими свойствами: name, age и gender.
// Добавьте также методы introduce и changeName. Метод introduce должен выводить информацию о человеке,
// включая его имя, возраст и пол. Метод changeName должен изменять имя человека на новое заданное значение.
const Person = {
    name: "John",
    age: 25,
    gender: "male",

    introduce: function (params) {
        return `My name is ${this.name}. I'm ${this.age} years old and I ${this.gender}.`;
    },

    changeName: function (newName) {
        this.name = newName;
    }
}

console.log(Person.introduce());
Person.changeName("Mike");
console.log(Person.introduce()); 