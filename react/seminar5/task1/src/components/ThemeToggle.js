import { useContext } from 'react';
import ThemeContext from '../context/ThemeContext';

function ThemeToggle() {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <button onClick={toggleTheme}>
            Нажми чтобы переключится на {theme === 'light' ? 'темную' : 'светлую'} тему
        </button>
    );
}

export default ThemeToggle;