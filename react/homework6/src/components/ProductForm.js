import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, TextField, Button } from "@mui/material";
import { addProduct, updateProduct } from "../store/reducers/ProductReducer"
import { useDispatch } from 'react-redux'
import { Typography } from "@mui/material";

function ProductForm({ product, saveRedirectURL = '/', cancelRedirectURL = '/' }) {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const addMode = product === undefined;
    const [name, setName] = useState(addMode ? '' : product.name);
    const [description, setDescription] = useState(addMode ? '' : product.description);
    const [price, setPrice] = useState(addMode ? '' : product.price);

    const handleSubmit = (e) => {
        e.preventDefault();
        const newProductData = {
            name: name,
            description: description,
            price: Number(price)
        };
        if (addMode)
            dispatch(addProduct(newProductData))
        else
            dispatch(updateProduct({ id: product.id, ...newProductData }))
        navigate(saveRedirectURL)
    }

    return (
        <>
            <Typography variant="h3">{addMode ? 'Добавление нового товара' : 'Редактирование товара'}</Typography>
            <Box
                component="form"
                sx={{ m: 1, display: 'flex', flexDirection: 'column', gap: '20px' }}
                onSubmit={handleSubmit}
            >
                <TextField
                    required
                    id="product-name"
                    label="Название товара"
                    variant="standard"
                    fullWidth
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <TextField
                    id="product-description"
                    label="Описание товара"
                    multiline
                    maxRows={4}
                    fullWidth
                    required
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                <TextField
                    required
                    id="product-price"
                    label="Цена"
                    variant="standard"
                    fullWidth
                    type="number"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                />
                <Box sx={{ display: 'flex', gap: '20px' }}>
                    <Button type="submit" variant="contained">Сохранить</Button>
                    <Button onClick={() => navigate(cancelRedirectURL)} variant="contained">Отмена</Button>
                </Box>
            </Box >
        </>
    );
}

export default ProductForm;