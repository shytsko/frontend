import { useSelector } from "react-redux";
import CartList from "../components/cart/CartList";
import PageHeader from "../components/common/PageHeader";
import FormShippin from "../components/cart/FormShippin";
import FormCheckout from "../components/cart/FormCheckout";

function CartPage() {
    const products = useSelector((state) => state.cart.items);

    return (
        <>
            <PageHeader title={'SHOPPING CART'} breadcrumbs={[]} />
            <section className="cart">
                <div className="cart__wrap container">
                    <CartList products={products} />
                    <div className="forms-box">
                        <FormShippin />
                        <FormCheckout subTotalAmount={900} grandTotalAmaunt={900} />
                    </div>
                </div>
            </section></>

    );
}

export default CartPage;