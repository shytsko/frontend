// Создать компонент Counter, который отображает кнопку и число.
// Число увеличивается на 1 каждый раз, когда пользователь нажимает на кнопку

import { useState } from "react";


function Counter({ increment = 1 }) {
    const [counter, setCounter] = useState(0);

    // function click() {
    //     setCounter(
    //         (c) => c + increment
    //     )
    // }
    return (
        <>
            <h3>Значение счетчика: {counter}</h3>
            <button onClick={() => setCounter((c) => c + increment)}>+{increment}</button>
        </>
    );
}

export default Counter