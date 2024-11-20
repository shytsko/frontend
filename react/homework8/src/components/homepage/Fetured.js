import { allProducts } from "../../data/products";
import ProductList from "../productslist/ProductList";


const feturedProducts = allProducts.slice(0, 6);

function Fetured() {
    return (
        <section className="fetured-items">
            <div className="fetured-items__wrap container">
                <h3 className="fetured-items__title">Fetured Items</h3>
                <p className="fetured-items__text">
                    Shop for items based on what we featured in this week
                </p>
                <ProductList products={feturedProducts} />
                <button className="fetured-items__button">Browse All Product</button>
            </div>
        </section>

    );
}

export default Fetured;