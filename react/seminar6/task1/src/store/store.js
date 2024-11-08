import { configureStore } from '@reduxjs/toolkit'
import todoListReducer from './reducers/todoListReducer'

export default configureStore({
    reducer: {
        todoList: todoListReducer,
    },
})