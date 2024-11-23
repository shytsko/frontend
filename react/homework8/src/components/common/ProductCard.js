function ProductCard({ product }) {
    console.log(product);
    return (
        <article className="product-card">
            <div className="product-card__img">
                <img src={product.imgURL} alt="Catalog image" />
                <div className="product-card__filter">
                    <button className="product-card__add-cart-button">
                        <img src="img/icon_cart.svg" width={26} alt="Cart" />
                        Add to Cart
                    </button>
                </div>
            </div>
            <div className="product-card__description">
                <h4 className="product-card__title">{product.title}</h4>
                <p className="product-card__text">{product.description}</p>
                <div className="product-card__price">${product.price.toFixed(2)}</div>
            </div>
        </article>);
}

export default ProductCard;