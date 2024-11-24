import Pagination from "./Pagination";
import ProductCard from "./ProductCard";

function ProductList({ products }) {
    console.log(products);
    return (
        <>
            <div className="product-list">
                {products.map((product => <ProductCard key={product.id} product={product} />))}
            </div>
            <Pagination currentPage={1} totalPages={20} />
        </>
    );
}

export default ProductList;