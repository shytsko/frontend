import { useParams } from "react-router-dom";
import { json } from "react-router-dom";
import PageHeader from "../components/common/PageHeader";
import { useDispatch, useSelector } from 'react-redux'
import ProductDetails from "../components/product/ProductDetails";

function ProductPage() {
    const { productId } = useParams();
    const product = useSelector((state) => state.products.data.find((prod) => prod.id === productId));

    if (product === undefined)
        throw json(
            {},
            { status: 404, statusText: "Product not fount" }
        );


    return (
        <>
            <ProductDetails product={product} />
        </>
    );
}

export default ProductPage;
