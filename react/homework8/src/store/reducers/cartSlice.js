import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    items: [],
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const product = state.items.find((item) => item.id === action.payload.id);
            if (product) {
                product.quantity++;
            } else {
                state.items.push({ ...action.payload, quantity: 1 })
            }
        },
        removeFromCart: (state, action) => {
            state.items = state.items.filter(item => item.id !== action.payload.id);
        },
        changeQuantity: (state, action) => {
            const product = state.items.find((item) => item.id === action.payload.id);
            if (product) {
                product.count = action.payload.newCount;
            }
        },
        clearCart: (state) => {
            state.items = [];
        },
    },
})

export const { addToCart, removeFromCart, changeQuantity, clearCart } = cartSlice.actions

export default cartSlice.reducer