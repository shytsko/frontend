import { themes, TOGGLE_THEME } from './actions'

const initTheme = { theme: 'light', style: themes['light'] }

function themeReducer(state = initTheme, action) {
    switch (action.type) {
        case TOGGLE_THEME:
            return { ...state, theme: action.theme, style: themes[action.theme] };
        default:
            return state;
    }
}

export default themeReducer;