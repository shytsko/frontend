import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import UserContext from "../context/UserContext";

function Profile() {
    const { theme } = useContext(ThemeContext);
    const { user } = useContext(UserContext);

    return (
        <section style={{
            height: '300px',
            backgroundColor: theme === 'light' ? 'gray' : 'black',
            color: theme === 'light' ? 'black' : 'white'
        }}>
            <h3>Профиль пользователя {user}</h3>
        </section >
    );
}

export default Profile;