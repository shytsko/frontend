import { useContext, useRef } from "react";
import UserContext from "../context/UserContext";

function ChangeUser() {
    const { changeUser } = useContext(UserContext);
    const userInput = useRef(null);

    function handleSubscribeUserInput(e) {
        e.preventDefault();
        changeUser(userInput.current.value.trim());
    }

    return (
        <>
            <h4>Сменить пользователя</h4>
            <form onSubmit={handleSubscribeUserInput}>
                <label>Имя пользователя
                    <input ref={userInput} type="text" />
                </label>
            </form>
        </>
    );
}

export default ChangeUser;