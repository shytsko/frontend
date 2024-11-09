import { useParams } from "react-router-dom";
import { useSelector } from 'react-redux'
import ProductForm from "../components/ProductForm";

function ProductEditPage() {
    const { productId } = useParams();
    const product = useSelector((state) => state.products.products[productId]);

    return (
        <ProductForm product={product} />
    );
}

export default ProductEditPage;