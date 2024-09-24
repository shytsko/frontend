// Вы создаете интерфейс, где пользователь вводит число.
// Ваша задача — проверить, является ли введенное значение числом или нет, и дать
// соответствующий ответ.
// 1. Создайте HTML-структуру: текстовое поле для ввода числа и кнопку
// "Проверить".
// 2. Добавьте место (например, div) для вывода сообщения пользователю.
// 3. Напишите функцию, которая будет вызвана при нажатии на кнопку. Эта функция
// должна использовать try и catch для проверки вводимого значения

const checkButton = document.querySelector('#check-btn');
const input = document.querySelector('#input');
const output = document.querySelector('#output');


checkButton.addEventListener('click', () => {
    try {
        checkNumber(input.value);
        output.textContent = `Value ${input.value} is number`;
    }
    catch (error) {
        output.textContent = error.message;
    }
}
)

function checkNumber(value) {
    if (isNaN(Number(value)))
        throw new Error(`Value ${value} is not number`);
}