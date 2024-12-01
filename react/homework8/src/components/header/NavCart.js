import CartQuantity from "./CartQuantity";

function NavCart() {
    return (
        <a className="header__cart" href="#">
            <img src="/img/icon_cart.svg" alt="cart" />
            <CartQuantity />
        </a>
    );
}

export default NavCart;