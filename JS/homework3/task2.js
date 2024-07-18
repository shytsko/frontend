// Пользователь вводит с клавиатуры число, если ввёл текст, необходимо вывести что значение задано неверно
// Создать фукнцию, которая высчитывает 13% от данного числа и выводит в консоль текст "Размер заработной платы за вычетом налогов равен значение"

const getSalaryNetto = (salaryBrutto) => salaryBrutto * 0.87;

function viewSalaryNetto(salaryBrutto) {
    console.log(`Размер заработной платы за вычетом налогов равен ${getSalaryNetto(salaryBrutto)}`);

}

const salaryBrutto = +prompt("Введите заработную плату до вычета налогов");

if (isNaN(salaryBrutto)) {
    console.log("Значение задано не верно");
} else {
    viewSalaryNetto(salaryBrutto);
} 1