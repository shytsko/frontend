import { useParams } from "react-router-dom";
import { json } from "react-router-dom";
import PageHeader from "../components/common/PageHeader";
import { useDispatch, useSelector } from 'react-redux'
import ProductDetails from "../components/product/ProductDetails";
import OtherProducts from "../components/product/OtherProducts";

function ProductPage() {
    let { productId } = useParams();
    productId = Number(productId);
    const product = useSelector((state) => state.products.data.find((prod) => prod.id === productId));

    if (product === undefined)
        throw json(
            {},
            { status: 404, statusText: "Product not fount" }
        );


    return (
        <>
            <PageHeader title={'NEW ARRIVALS'} breadcrumbs={['HOME', 'MEN', 'NEW ARRIVALS']} />
            <ProductDetails product={product} />
            <OtherProducts />
        </>
    );
}

export default ProductPage;
