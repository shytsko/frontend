import ToggleButton from '@mui/material/ToggleButton';

function ThemeSwitcher({ theme, switchTheme }) {
    return (
        <ToggleButton
            value="dark"
            selected={theme === "dark"}
            onClick={switchTheme}
        >
            Dark theme
        </ToggleButton>
    );
}

export default ThemeSwitcher;