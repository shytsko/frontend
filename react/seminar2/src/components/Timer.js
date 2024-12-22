// Создать компонент Timer, который отображает таймер, увеличивающийся на 1
// каждую секунду. Использовать useEffect для установки и очистки интервала.

import { useState, seEffect, useEffect } from "react";

function Timer() {
    const [time, setTime] = useState((new Date).toLocaleTimeString())

    useEffect(() => {
        const timerId = setInterval(() => {
            setTime((new Date).toLocaleTimeString());
        }, 1000);

        return () => clearInterval(timerId);
    }, []);

    return (
        <div>
            <p>{time}</p>
        </div>
    );
}

export default Timer;