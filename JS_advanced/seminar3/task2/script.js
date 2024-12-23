// Создать интерактивную веб-страницу, где пользователи могут вводить текст, сохранять его в localStorage,
// а затем загружать или удалять сохраненные данные.
// Разработка Интерфейса:
// Создать HTML-страницу с:
// ● Одним текстовым полем для ввода данных пользователем.
// ● Тремя кнопками: "Сохранить", "Загрузить" и "Очистить".
// ● Местом для отображения сохраненного текста.
// Программирование Логики на JavaScript:
// 1. При нажатии на "Сохранить", введенный текст должен сохраняться в localStorage.
// 2. При нажатии на "Загрузить", текст из localStorage должен отображаться на странице.
// 3. При нажатии на "Очистить", сохраненный текст должен быть удален из localStorage, и соответствующее
// сообщение отображается на странице.

const input = document.getElementById("input-text");
const output = document.getElementById("output-text");

document.getElementById("button-save").addEventListener('click', e => {
    localStorage.setItem('text', input.value.trim());
});

document.getElementById("button-load").addEventListener('click', e => {
    output.textContent = localStorage.getItem('text');
});

document.getElementById("button-clear").addEventListener('click', e => {
    localStorage.removeItem('text');
    output.textContent = 'Data removed';
});


