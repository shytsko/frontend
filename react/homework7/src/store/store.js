import { configureStore } from '@reduxjs/toolkit'
import taskListReducer from './reducers/taskListReducer'


const loggerMiddleware = (store) => (next) => (action) => {
    console.log('Действие:', action);
    console.log('Состояние до выполнения:', store.getState());
    let result = next(action);
    console.log('Состояние после выполнения:', store.getState());
    return result;
};

export default configureStore({
    reducer: {
        taskList: taskListReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(loggerMiddleware),
})