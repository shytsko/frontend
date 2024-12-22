import { createStore, combineReducers } from 'redux';
import themeReducer from './theme/reducer';

const reducer = combineReducers({
    theme: themeReducer,
});

let store = createStore(reducer);

export default store;