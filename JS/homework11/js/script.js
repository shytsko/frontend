function addToCartHandler(e) {
    const target = e.currentTarget;
    cart.addItem(target.dataset.productId);
    cartUpdate();
    console.log(cart.items);
}

function deleteFromCartHandler(e) {
    const target = e.currentTarget;
    cart.removeItemAll(target.dataset.productId);
    cartUpdate();
    console.log(cart.items);
}


function changeCountHandler(e) {
    const target = e.currentTarget;
    cart.setItemCount(target.dataset.productId, +target.value);
    cartUpdate();
    console.log(cart.items);
}

function productListUpdate() {
    const productListEl = document.querySelector(".product-list");
    productListRendering(products, productListEl, addToCartHandler);
}

function cartUpdate() {
    const cartSectionEl = document.querySelector(".cart");
    const headerCartCounterEl = document.querySelector(".header__cart-counter");
    cartSectionRendering(products, cartSectionEl, deleteFromCartHandler, changeCountHandler, headerCartCounterEl)
}

productListUpdate();
cartUpdate();
