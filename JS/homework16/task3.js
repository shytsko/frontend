// Напишите функцию changeStyleDelayed, которая принимает идентификатор элемента и время задержки (в миллисекундах)
// в качестве аргументов. Функция должна изменить стиль элемента через указанное время.

function changeStyleDelayed(elementId, delay) {
    const element = document.querySelector(`#${elementId}`);

    setTimeout(function () {
        element.style.color = 'red';
    }, delay);
}


changeStyleDelayed('element', 2000); // Через 2 секунды изменяет стиль элемента с id 'myElement'"