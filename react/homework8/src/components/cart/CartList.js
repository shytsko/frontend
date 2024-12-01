import CartItem from "./CartItem";

function CartList({ products }) {
    return (<div className="cart__list">
        {products.map((product => <CartItem key={product.id} product={product} />))}

        <div className="cart__buttons-box">
            <button className="cart__button animate-button">
                CLEAR SHOPPING CART
            </button>
            <button className="cart__button animate-button">
                CONTINUE SHOPPING
            </button>
        </div>
    </div>);
}

export default CartList;