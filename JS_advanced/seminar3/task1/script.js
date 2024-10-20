// Вы разрабатываете прототип веб-приложения для чтения новостей. Статьи "хранятся" во внутреннем массиве
// (имитируя базу данных). Когда пользователь нажимает на кнопку "Загрузить новости", ваш код должен
// имитировать задержку, словно происходит реальная загрузка данных из внешнего источника, а после этой
// задержки — отображать новости на странице.
// 1. Создайте базовую HTML-структуру с кнопкой для загрузки новостей и контейнером для их отображения.
// 2. Реализуйте функцию fetchNews(), возвращающую промис. Эта функция должна имитировать
// задержку в 2 секунды перед успешным возвращением данных из "виртуальной" базы данных. Для
// добавления интереса: с вероятностью 10% она должна возвращать ошибку вместо данных.
// 3. При нажатии на кнопку "Загрузить новости" вызывайте функцию fetchNews(), обрабатывая успешное
// выполнение и ошибки с использованием then() и catch().
// 4. При успешной загрузке отобразите статьи на странице. При ошибке покажите сообщение об ошибке.
// 5. Добавьте функционал, который отключает кнопку загрузки на время "загрузки" новостей и активирует
// её снова после завершения операции (будь то успешная загрузка или ошибка).

function fetchNews() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.9)
                resolve({ title: "News", text: "News text" });
            else
                reject(Error("Could not load news"));
        }, 2000);
    });
}

document.querySelector('.load-news-button').addEventListener(
    'click',
    (e) => {
        e.target.disabled = true;
        fetchNews()
            .then((data) => {
                const newsContainerEl = document.querySelector('.news-container');
                newsContainerEl.insertAdjacentHTML('afterbegin', `<h2>${data.title}</h2><p>${data.text}</p>`);
            })
            .catch((err) => {
                const newsContainerEl = document.querySelector('.news-container');
                newsContainerEl.insertAdjacentHTML('afterbegin', `<h2>Error</h2><p>${err.message}</p>`);
            })
            .finally(() => {
                e.target.disabled = false;
            });
    });


