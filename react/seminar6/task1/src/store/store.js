import { configureStore } from '@reduxjs/toolkit'
import todoListReducer from './reducers/todoListReducer'


const loggerMiddleware = (store) => (next) => (action) => {
    console.log('Действие:', action);
    console.log('Состояние до выполнения:', store.getState());
    let result = next(action);
    console.log('Состояние после выполнения:', store.getState());
    return result;
};

export default configureStore({
    reducer: {
        todoList: todoListReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(loggerMiddleware),
})