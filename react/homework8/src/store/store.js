import { configureStore } from '@reduxjs/toolkit'
import productsReducer from './reducers/productsSlice'
import cartSlice from './reducers/cartSlice'

export const store = configureStore({
    reducer: {
        products: productsReducer,
        cart: cartSlice,
    },
})