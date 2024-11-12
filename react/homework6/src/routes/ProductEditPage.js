import { useParams } from "react-router-dom";
import { useSelector } from 'react-redux'
import ProductForm from "../components/ProductForm";
import { json } from "react-router-dom";

function ProductEditPage() {
    const { productId } = useParams();
    const product = useSelector((state) => state.products.products[productId]);

    if (product === undefined)
        throw json(
            {},
            { status: 404, statusText: "Product not fount" }
        );

    return (
        <ProductForm product={product} />
    );
}

export default ProductEditPage;