
function createProductCard(product, addToCartHandler) {
    const productCard = document.createElement("article");
    productCard.insertAdjacentHTML('afterbegin',
        `
                <div class="product-card__img">
                <img src="${product.img_url}" alt="Catalog image" />
                <div class="product-card__filter">
                <button class="product-card__add-cart-button animate-button">
                    <img src="img/icon_cart.svg" width="26" alt="Cart" />
                    Add to Cart
                </button>
                </div>
                </div>
                <div class="product-card__description">
                    <h4 class="product-card__title">${product.name}</h4>
                    <p class="product-card__text">${product.description}</p>
                    <div class="product-card__price">$${product.price.toFixed(2)}</div>
                </div>
                `
    );
    productCard.classList.add("product-card");
    const buttonAddCart = productCard.querySelector(".product-card__add-cart-button");
    buttonAddCart.dataset.productId = product.id;
    buttonAddCart.addEventListener('click', addToCartHandler);
    return productCard;
}

function productListRendering(products, productListEl, addToCartHandler) {
    products.forEach(product => {
        const productCard = createProductCard(product, addToCartHandler);
        productListEl.append(productCard)
    });
}