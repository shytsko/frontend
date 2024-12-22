// Создать компонент TextInput, который содержит текстовое
// поле ввода и отображает введённый текст под ним в реальном
// времени.


import { useState } from "react";

function TextInput({ initText }) {
    const [text, setText] = useState(initText);

    return (
        <div>
            <input maxLength={10} onChange={(e) => setText(e.target.value)} value={text}></input>
            <p>{text}</p>
        </div>
    );
}

export default TextInput;