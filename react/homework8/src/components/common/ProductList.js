import Pagination from "./Pagination";
import ProductCard from "./ProductCard";

function ProductList({ products, pagination = null }) {
    console.log(products);
    return (
        <>
            <div className="product-list">
                {products.map((product => <ProductCard key={product.id} product={product} />))}
            </div>
            {pagination && <Pagination currentPage={pagination.page} totalPages={pagination.totalPages} />}
        </>
    );
}

export default ProductList;