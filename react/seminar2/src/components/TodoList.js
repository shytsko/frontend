// Создать компонент TodoList, который позволяет добавлять
// элементы в список дел через текстовое поле ввода. Список
// должен обновляться при добавлении нового дела.


import { useRef, useState } from "react";


function TodoList() {
    const [tasksList, setTasksList] = useState([]);
    const newTask = useRef(null);

    function addTask() {
        if (newTask.current.value) {
            setTasksList([...tasksList, newTask.current.value]);
            newTask.current.value = "";
        }
    }

    return (
        <div>
            <h3>Список задач</h3>
            <label>Новая задача <input type="text" ref={newTask}></input ></label>
            <button onClick={addTask}>Добавить</button>
            <ul>
                {tasksList.map((task, index) => <li key={`task${index}`}>{task}</li>)}
            </ul>
        </div>
    );
}

export default TodoList;