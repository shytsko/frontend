// Создать переменные num1, num2 которые пользователь вводит с клавиатуры
// Проверьте, что переменная num1 равна или меньше 1, а переменная num2 больше или равна 3.

const num1 = +prompt ("Введите первое число, равное или меньше 1");
const num2 = +prompt ("Введите второе число, большее или равное 3");

alert((num1 <=1 && num2 >= 3) ? "Условия выполнены" : "Условия не выполнены");

