import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { useState } from 'react';
import "./Counter.css"

function Counter({ theme }) {
    const [counter, setCounter] = useState(0);

    function increment() {
        setCounter((current) => current + 1)
    }
    function decrement() {
        setCounter((current) => current - 1)
    }

    return (
        <div className={`CounterBox ${theme === 'dark' && 'CounterBox_dark'}`}>
            <h3>Счетчик: {counter}</h3>
            <ButtonGroup variant="contained" aria-label="Counter button group">
                <Button onClick={decrement}>Декремент</Button>
                <Button onClick={increment}>Инкремент</Button>
            </ButtonGroup>

        </div>
    );
}

export default Counter;