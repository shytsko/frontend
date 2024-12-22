import { useDispatch } from 'react-redux';
import { themes, toggleTheme } from '../store/theme/actions';

function ThemeSelector() {
    const dispatch = useDispatch();

    return (
        <div>
            <h3>Выберите тему</h3>
            <select onChange={(e) => dispatch(toggleTheme(e.target.value))}>
                {Object.keys(themes).map((theme =>
                    <option key={theme} value={theme}>{theme}</option>))}
            </select>
        </div>
    );
}

export default ThemeSelector;