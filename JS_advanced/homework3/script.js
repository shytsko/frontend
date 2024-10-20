// Создайте интерактивную веб-страницу для оставления и просмотра отзывов о продуктах.
// Пользователи могут добавлять отзывы о различных продуктах и просматривать добавленные отзывы.

// Страница добавления отзыва:

// Поле для ввода названия продукта.
// Текстовое поле для самого отзыва.
// Кнопка "Добавить отзыв", которая сохраняет отзыв о продукте в LocalStorage.

// Страница просмотра отзывов:

// Показывает список всех продуктов, о которых были оставлены отзывы.
// При клике на название продукта отображается список всех отзывов по этому продукту.
// Возможность удаления отзыва (при нажатии на кнопку "Удалить" рядом с отзывом, данный отзыв удаляется из LocalStorage).


const reviewsStorage = {
    loadReviews() {
        return JSON.parse(localStorage.getItem('reviews') ?? '{}')
    },

    saveReviews(reviews) {
        localStorage.setItem('reviews', JSON.stringify(reviews))
    },

    addReview(productName, reviewText) {
        const reviews = this.loadReviews();
        if (productName in reviews) {
            reviews[productName].push(reviewText);
        } else {
            reviews[productName] = [reviewText];
        }
        this.saveReviews(reviews);
    },

    getProductsList() {
        return Object.keys(this.loadReviews());
    },

    getReviews(productName) {
        const reviews = this.loadReviews();
        return reviews[productName];
    },

    removeReview(productName, reviewIndex) {
        const reviews = this.loadReviews();
        reviews[productName].splice(reviewIndex, 1);
        this.saveReviews(reviews);
    }
};


function addReviewHandler(e) {
    const productNameEl = document.querySelector('#product-name');
    const reviewTextEl = document.querySelector('#review-text');

    if (productNameEl && reviewTextEl) {
        const productName = productNameEl.value.trim();
        if (!productName) {
            alert("Не заполнено название товара");
            productNameEl.focus();
            return;
        }

        const reviewText = reviewTextEl.value.trim();
        if (!reviewText) {
            alert("Не заполнен текст отзыва");
            reviewTextEl.focus();
            return;
        }
        reviewsStorage.addReview(productName, reviewText);
        viewProductList();
    } else {
        throw new Error("Incorrect document structure");
    }
}

function removeReviewHandler(e) {
    const target = e.target;
    const productIndex = target.dataset.productIndex;
    const reviewIndex = target.dataset.reviewIndex;
    if (productIndex && reviewIndex) {
        const productName = reviewsStorage.getProductsList()[productIndex];
        reviewsStorage.removeReview(productName, reviewIndex);
        viewReviews(productIndex);
    } else {
        throw new Error("Incorrect document structure");
    }
}

function productNameClickHandler(e) {
    const productEl = e.target;
    const productIndex = productEl.dataset.productIndex;
    if (productIndex) {
        viewReviews(productIndex);
    } else {
        throw new Error("Incorrect document structure");
    }
}


function viewAddReview() {
    const contentEl = document.querySelector('.content');
    contentEl.innerHTML = '';
    contentEl.insertAdjacentHTML('afterbegin',
        `
        <h1>Добавить новый отзыв</h1>
        <p>
          <label for="product-name">Название товара</label>
          <input type="text" name="product-name" id="product-name" />
        </p>
        <p>
          <label for="review-text">Отзыв о товаре</label>
          <textarea
            name="review-text"
            id="review-text"
            cols="30"
            rows="10"
          ></textarea>
        </p>
        <button id="add-review-button">Добавить отзыв</button>
        `
    );

    document.querySelector('#add-review-button').addEventListener('click', addReviewHandler);
}


function viewProductList() {
    const contentEl = document.querySelector('.content');
    contentEl.innerHTML = '';
    contentEl.insertAdjacentHTML('afterbegin',
        `
        <h1>Товары, о которых оставляли отзывы</h1>
        <div class="products-list"></div>
        <button id="add-review-button">Добавить новый отзыв</button>
        `
    );

    const productsListEl = contentEl.querySelector('.products-list');

    const products = reviewsStorage.getProductsList();
    products.forEach((product, index) => {
        const productEl = document.createElement("p");
        productEl.classList.add("product-list__item");
        productEl.textContent = product;
        productEl.dataset.productIndex = index;
        productEl.style.cursor = "pointer";
        productEl.addEventListener("click", productNameClickHandler);
        productsListEl.append(productEl);
    });

    document.querySelector('#add-review-button').addEventListener('click', viewAddReview);
}

function viewReviews(productIndex) {
    const contentEl = document.querySelector('.content');
    contentEl.innerHTML = '';
    const productName = reviewsStorage.getProductsList()[productIndex];
    const reviews = reviewsStorage.getReviews(productName);
    contentEl.insertAdjacentHTML('afterbegin',
        `
        <h1>Отзывы о товаре "${productName}"</h1>
        <div class="reviews-list"></div>
        <button id="to-products-button">К списку товаров</button>
        `
    );

    const reviewsListEl = contentEl.querySelector('.reviews-list');
    reviews.forEach((review, reviewIndex) => {
        const reviewEl = document.createElement("div");
        const reviewTextEl = document.createElement("p");
        reviewTextEl.classList.add("reviews-list__item");
        reviewTextEl.textContent = review;
        reviewEl.append(reviewTextEl);

        const removeReviewButton = document.createElement("button");
        removeReviewButton.classList.add("remove-review-button");
        removeReviewButton.textContent = "Удалить отзыв";
        removeReviewButton.dataset.productIndex = productIndex;
        removeReviewButton.dataset.reviewIndex = reviewIndex;
        removeReviewButton.addEventListener("click", removeReviewHandler);
        reviewEl.append(removeReviewButton);

        reviewsListEl.append(reviewEl);
    });

    document.querySelector('#to-products-button').addEventListener('click', viewProductList);
}

viewProductList();