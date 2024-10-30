import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useState } from 'react';

function TemperatureConverter() {
    const [celsiusValue, setCelsiusValue] = useState(0);
    const [fahrenheitValue, setFahrenheitValue] = useState(0);

    function handleChangeCelsius(e) {
        setCelsiusValue(e.target.value);
        setFahrenheitValue(Number(e.target.value) * 9 / 5 + 32);
    }

    function handleChangeFahrenheit(e) {
        setFahrenheitValue(e.target.value);
        setCelsiusValue((Number(e.target.value) - 32) * 5 / 9);
    }

    return (
        <Box
            component="div"
            sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
            noValidate
            autoComplete="off"
        >
            <TextField
                onChange={handleChangeCelsius}
                id="celsius"
                type="number"
                label="Градусы Цельсия"
                variant="outlined"
                value={celsiusValue}
            />
            <TextField
                onChange={handleChangeFahrenheit}
                id="fahrenheit"
                type="number"
                label="Градусы Фаренгейта"
                variant="outlined"
                value={fahrenheitValue}
            />
        </Box>);
}

export default TemperatureConverter;