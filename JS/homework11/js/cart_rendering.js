function createCartItemCard(product, count, deleteFromCartHandler, changeCountHandler) {
    const cartItemCard = document.createElement("article");
    cartItemCard.insertAdjacentHTML('afterbegin',
        `
        <img class="cart__item-img" src="${product.img_url}" alt="Product image"/>
        <div class="cart__item-description">
            <h4 class="cart__item-title">${product.name}</h4>
            <p class="cart__item-text">Price: <span class="highlighted">$${product.price.toFixed(2)}</span></p>
            <p class="cart__item-text">Color: ${product.color}</p>
            <p class="cart__item-text">Size: ${product.size}</p>
            <p class="cart__item-text">Quantity:<input class="cart__item-count" type="number" value="${count}" min="0"/></p>
        </div>
        <button class="cart__item-del animate-button">
            <svg viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M11.2453 9L17.5302 2.71516C17.8285 2.41741 17.9962 2.01336 17.9966 1.59191C17.997 1.17045 17.8299 0.76611 17.5322 0.467833C17.2344 0.169555 16.8304 0.00177586 16.4089 0.00140366C15.9875 0.00103146 15.5831 0.168097 15.2848 0.465848L9 6.75069L2.71516 0.465848C2.41688 0.167571 2.01233 0 1.5905 0C1.16868 0 0.764125 0.167571 0.465848 0.465848C0.167571 0.764125 0 1.16868 0 1.5905C0 2.01233 0.167571 2.41688 0.465848 2.71516L6.75069 9L0.465848 15.2848C0.167571 15.5831 0 15.9877 0 16.4095C0 16.8313 0.167571 17.2359 0.465848 17.5342C0.764125 17.8324 1.16868 18 1.5905 18C2.01233 18 2.41688 17.8324 2.71516 17.5342L9 11.2493L15.2848 17.5342C15.5831 17.8324 15.9877 18 16.4095 18C16.8313 18 17.2359 17.8324 17.5342 17.5342C17.8324 17.2359 18 16.8313 18 16.4095C18 15.9877 17.8324 15.5831 17.5342 15.2848L11.2453 9Z"
                fill="#575757"
            />
            </svg>
        </button>`
    );
    cartItemCard.classList.add("cart__item");

    const buttonDeleteFromCart = cartItemCard.querySelector(".cart__item-del");
    buttonDeleteFromCart.dataset.productId = product.id;
    buttonDeleteFromCart.addEventListener('click', deleteFromCartHandler);

    const inputCount = cartItemCard.querySelector(".cart__item-count");
    inputCount.dataset.productId = product.id;
    inputCount.addEventListener('change', changeCountHandler);

    return cartItemCard;
}

function cartSectionRendering(products, cartSectionEl, deleteFromCartHandler, changeCountHandler, headerCartCounterEl) {
    const cartListEl = cartSectionEl.querySelector(".cart__list");
    cartListEl.innerHTML = "";

    if (!cart.isEmpty()) {
        let totalCount = 0;
        for (const productId in cart.items) {
            const product = products.find(item => item.id == productId);
            if (product) {
                const cartItemCard = createCartItemCard(product, cart.items[productId], deleteFromCartHandler, changeCountHandler)
                cartListEl.append(cartItemCard);
                totalCount += cart.items[productId];
            } else {
                console.log(`Invalid product id: ${productId}`);
            }
        }
        headerCartCounterEl.textContent = totalCount;
        cartSectionEl.style.display = "block";
        headerCartCounterEl.style.display = "block";
    } else {
        cartSectionEl.style.display = "none";
        headerCartCounterEl.style.display = "none";
    }
}