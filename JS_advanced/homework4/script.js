// Вы разрабатываете веб-страницу для отображения расписания занятий в спортивном клубе. Каждое занятие имеет название,
// время проведения, максимальное количество участников и текущее количество записанных участников.
// 1. Создайте веб-страницу с заголовком "Расписание занятий" и областью для отображения занятий.
// 2. Загрузите информацию о занятиях из предоставленных JSON-данных. Каждое занятие должно отображаться на странице с
// указанием его названия, времени проведения, максимального количества участников и текущего количества записанных участников.
// 3. Пользователь может нажать на кнопку "Записаться" для записи на занятие. Если максимальное количество участников
// уже достигнуто, кнопка "Записаться" становится неактивной.
// 4. После успешной записи пользователя на занятие, обновите количество записанных участников и
// состояние кнопки "Записаться".
// 5. Запись пользователя на занятие можно отменить путем нажатия на кнопку "Отменить запись". После отмены записи,
// обновите количество записанных участников и состояние кнопки.
// 6. Все изменения (запись, отмена записи) должны сохраняться и отображаться в реальном времени на странице.
// 7. При разработке используйте Bootstrap для стилизации элементов.


const scheduleJSON = `
    [
        {
            "name":"Волейбол",
            "time": "14:00",
            "maxParticipants": 12,
            "currentParticipants": 12
        },
        {
            "name":"Футбол",
            "time": "16:00",
            "maxParticipants": 22,
            "currentParticipants": 10
        },
        {
            "name":"Теннис",
            "time": "18:00",
            "maxParticipants": 10,
            "currentParticipants": 4
        },
        {
            "name":"Баскетбол",
            "time": "20:00",
            "maxParticipants": 10,
            "currentParticipants": 0
        }
    ]
`;



function renderShedule() {
    const schedule = JSON.parse(scheduleJSON);
    const tableBodyEl = document.querySelector('tbody');

    schedule.forEach((element, index) => {
        const newRowEl = document.createElement('tr');
        newRowEl.innerHTML = `
        <td>${element.name}</td>
        <td>${element.time}</td>
        <td>${element.maxParticipants}</td>
        <td>${element.currentParticipants}</td>
        <td>
          <button type="button" class="btn btn-success btn-registration">Записаться</button>
          <button type="button" class="btn btn-danger btn-cancel-registration">
            Отменить запись
          </button>
        </td>
        `;
        newRowEl.dataset.index = index;
        const registrationButtonEl = newRowEl.querySelector('.btn-registration');
        registrationButtonEl.addEventListener('click', registrationHandler);
        const cancelRegistrationButtonEl = newRowEl.querySelector('.btn-cancel-registration');
        cancelRegistrationButtonEl.addEventListener('click', cancelRegistrationHandler);


        registrationButtonEl.disabled = element.currentParticipants >= element.maxParticipants;
        cancelRegistrationButtonEl.disabled = element.currentParticipants === 0;
        tableBodyEl.append(newRowEl);
    });
}


function registrationHandler(e) {
    const row = e.target.closest('tr');
    const cells = row.children;
    const maxParticipants = +cells[2].textContent;
    let currentParticipants = +cells[3].textContent;
    cells[3].textContent = ++currentParticipants;
    e.target.disabled = currentParticipants === maxParticipants;
    e.target.nextElementSibling.disabled = false;
}

function cancelRegistrationHandler(e) {
    const row = e.target.closest('tr');
    const cells = row.children;
    const maxParticipants = +cells[2].textContent;
    let currentParticipants = +cells[3].textContent;
    cells[3].textContent = --currentParticipants;
    e.target.disabled = currentParticipants === 0;
    e.target.previousElementSibling.disabled = false;
}


renderShedule();