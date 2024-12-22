import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

function Footer() {
    const year = new Date().getFullYear();

    const { theme } = useContext(ThemeContext);
    return (
        <footer style={{
            backgroundColor: theme === 'light' ? 'gray' : 'black',
            color: theme === 'light' ? 'black' : 'white'
        }}>
            <h3>&copy; {year}</h3>
        </footer >
    );
}

export default Footer;