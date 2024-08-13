function createProductCard(product) {
    const productCard = document.createElement("article");
    productCard.innerHTML = `
            <div class="product-card__img">
            <img src="${product.img_url}" alt="Catalog image" />
            <div class="product-card__filter">
            <button class="product-card__add-cart-button">
                <img src="img/icon_cart.svg" width="26" alt="Cart" />
                Add to Cart
            </button>
            </div>
            </div>
            <div class="product-card__description">
                <h4 class="product-card__title">${product.name}</h4>
                <p class="product-card__text">${product.description}</p>
                <div class="product-card__price">${product.price}</div>
            </div>
        `;
    productCard.classList.add("product-card");

    const buttonAddCart = productCard.querySelector(".product-card__add-cart-button");
    buttonAddCart.dataset.productId = product.id;

    return productCard;

}

const productList = document.querySelector(".product-list");
const products = JSON.parse(productsData);

products.forEach(product => {
    const productCard = createProductCard(product);
    productList.append(productCard)
});

console.log(products);