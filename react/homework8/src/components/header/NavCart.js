import CartCounter from "./CartCounter";

function NavCart() {
    return (
        <a className="header__cart" href="#">
            <img src="img/icon_cart.svg" alt="cart" />
            <CartCounter />
        </a>
    );
}

export default NavCart;