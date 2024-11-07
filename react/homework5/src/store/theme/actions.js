export const TOGGLE_THEME = 'TOGGLE_THEME';

export const themes = {
    'light': { background: 'white', color: 'black' },
    'dark': { background: 'black', color: 'grey' },
    'grey': { background: 'grey', color: 'white' }
}

export function toggleTheme(theme) {
    return { type: TOGGLE_THEME, theme };
}
