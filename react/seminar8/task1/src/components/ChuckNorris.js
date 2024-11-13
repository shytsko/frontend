import { useState } from "react";

function ChuckNorris() {
    const API_URL = 'https://api.chucknorris.io/jokes/random';
    const [data, setData] = useState(null);
    const [error, setError] = useState(false);

    const requestJoke = () => {
        setError(false);
        fetch(API_URL)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`Request failed with status ${response.status}`);
                }

                return response.json();
            })
            .then((data) => setData(data))
            .catch((error) => {
                setError(error);
                console.error(error);
            });
    }

    return (
        <div>
            <button onClick={requestJoke}>Новая шутка</button>
            {error && <p>Что-то пошло не по плану</p>}
            {data
                ? <p>{data.value}</p>
                : <p>Пока не до шуток</p>}
        </div>
    );
}

export default ChuckNorris;