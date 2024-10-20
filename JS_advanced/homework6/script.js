// Разработка веб-приложения:

// • Создайте HTML-страницу с элементами: изображение, имя фотографа, кнопка "лайк" и счетчик лайков.
// • Используя JavaScript и ваш API-ключ, получите случайное изображение из Unsplash каждый раз, когда пользователь загружает страницу.
// • Отобразите информацию о фотографе под изображением.
// • Реализуйте функционал "лайка". Каждый раз, когда пользователь нажимает кнопку "лайк", счетчик должен увеличиваться на единицу.

// * Дополнительные задачи (по желанию):

// • Добавьте функцию сохранения количества лайков в локальное хранилище, чтобы при новой загрузке страницы счетчик не сбрасывался.
// • Реализуйте возможность просмотра предыдущих "фото дня" с сохранением их в истории просмотров.


const API_BASE_URL = "https://api.unsplash.com";
const API_KEY = "8ndvyiVkWpCUsQAqfH--ROZGLavDoKsGDpNG-28XB84";
const PHOTO_HISTOTY_KEY = "photoHistoty";
const PHOTO_LIKES_KEY = "photoLikes";

async function fetchRandomPhoto() {
    try {
        const response = await fetch(
            `${API_BASE_URL}/photos/random`,
            {
                headers: {
                    Authorization: `Client-ID ${API_KEY}`,
                }
            }
        );
        if (response.ok) {
            const photo = await response.json();
            return photo;
        } else {
            throw new Error("Ошибка загрузги файла")
        }
    } catch (error) {
        console.error("Ошибка: ", error);
        return null;
    }
}

async function fetchPhoto(photoId) {
    try {
        const response = await fetch(
            `${API_BASE_URL}/photos/${photoId}`,
            {
                headers: {
                    Authorization: `Client-ID ${API_KEY}`,
                }
            }
        );
        if (response.ok) {
            const photo = await response.json();
            return photo;
        } else {
            throw new Error("Ошибка загрузги файла")
        }
    } catch (error) {
        console.error("Ошибка: ", error);
        return null;
    }
}

function saveToHistory(photoId) {
    const history = JSON.parse(localStorage.getItem(PHOTO_HISTOTY_KEY) ?? '[]');
    history.push(photoId);
    localStorage.setItem(PHOTO_HISTOTY_KEY, JSON.stringify(history));
}

function getHistory() {
    return JSON.parse(localStorage.getItem(PHOTO_HISTOTY_KEY) ?? '[]');
}

function saveLikes(photoId, likesCount) {
    const likes = JSON.parse(localStorage.getItem(PHOTO_LIKES_KEY) ?? '{}');
    likes[photoId] = likesCount;
    localStorage.setItem(PHOTO_LIKES_KEY, JSON.stringify(likes));
}

function getLikes(photoId) {
    const likes = JSON.parse(localStorage.getItem(PHOTO_LIKES_KEY) ?? '{}');
    return likes[photoId];
}


const photoEl = document.querySelector('.photo');
const historyEl = document.querySelector('.history__box');
const img = photoEl.querySelector('img');
const photoDescriptionEl = photoEl.querySelector('.photo__description');
const photoLikesEl = photoEl.querySelector('.photo__likes span');
const photoAuthorEl = photoEl.querySelector('.photo__author span');
const photoLikeBtn = photoEl.querySelector('.photo__btn-like');


function renderHistory() {
    const history = getHistory();

    history.forEach((photoId) => {
        const newHistoryItemEl = document.createElement('div');
        const imgEl = document.createElement('img');
        newHistoryItemEl.append(imgEl);
        historyEl.append(newHistoryItemEl);
        fetchPhoto(photoId)
            .then(photo => {
                imgEl.src = photo.urls.thumb;
            });
    });
}
window.addEventListener('load', async () => {
    renderHistory();
    const photo = await fetchRandomPhoto();
    console.log(photo);
    img.src = photo.urls.small;
    photoDescriptionEl.textContent = photo.alt_description;
    photoAuthorEl.textContent = photo.user.name;
    photoLikeBtn.dataset.photoId = photo.id;
    saveToHistory(photo.id);

    let likesCount = getLikes(photo.id);
    if (likesCount === undefined) {
        likesCount = photo.likes;
        saveLikes(photo.id, likesCount);
    }
    photoLikesEl.textContent = likesCount;
})

photoLikeBtn.addEventListener('click', (e) => {
    const likesCount = +photoLikesEl.textContent + 1;
    photoLikesEl.textContent = likesCount;
    saveLikes(e.target.dataset.photoId, likesCount);
})


