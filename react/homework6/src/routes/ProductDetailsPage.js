import { Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import { useSelector } from 'react-redux'

function ProductDetailsPage() {
    const { productId } = useParams();
    const product = useSelector((state) => state.products.products[productId]);

    return (
        <>
            <Typography variant="h3">Информация о товаре</Typography>
            <Typography gutterBottom variant="h4" component="div">
                {product.name}
            </Typography>
            {!product.available && <Typography variant="body2" sx={{ color: 'red' }} gutterBottom>
                Товар не доступен
            </Typography >}
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                {product.description}
            </Typography>
            <Typography variant="body1" sx={{ mt: '20px' }}>
                Цена: {product.price}
            </Typography>
        </>
    );

}

export default ProductDetailsPage;