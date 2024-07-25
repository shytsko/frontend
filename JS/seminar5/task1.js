// 1. Создайте объект с ключами от 1 до 7, в качестве значений содержащий имена дней недели. Выведите на
// экран “Вторник”
// 2. Создайте объект user с ключами 'name', 'surname', ‘age’. Выведите на экран фамилию, имя и возраст через дефис.
// 3. Добавьте в объект user свойство отчество, которое пользователь должен ввести с клавиатуры
// 4. Удалите свойство surname

const daysOfWeek = {
    1: "Понедельник",
    2: "Вторник",
    3: "Среда",
    4: "Четверг",
    5: "Пятница",
    6: "Суббота",
    7: "Воскресенье",
};
console.log(daysOfWeek[2]);

const user = {
    "name": "Иван",
    "surname": "Иванов",
    "age": 33
};

console.log(user);
console.log(`${user.name} - ${user.surname} - ${user.age}`);

user.midlename = prompt("Введите отчество");
console.log(user);
delete user.surname;
console.log(user);
