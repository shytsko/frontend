import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import UserContext from "../context/UserContext";

function Header() {
    const { theme } = useContext(ThemeContext);
    const { user } = useContext(UserContext);

    return (
        <header style={{
            height: '100px',
            backgroundColor: theme === 'light' ? 'gray' : 'black',
            color: theme === 'light' ? 'black' : 'white'
        }}>
            <h3>Привет, {user}</h3>
        </header >);
}

export default Header;