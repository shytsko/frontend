import React, { useRef } from 'react'
import { addTask } from '../store/reducers/taskListReducer';
import { useDispatch, useSelector } from 'react-redux'

function AddTask() {
    const dispatch = useDispatch();
    const newTaskInput = useRef(null);

    const handleAddTask = (e) => {
        e.preventDefault();
        const newTaskDescription = newTaskInput.current.value.trim()
        if (newTaskDescription) {
            dispatch(addTask(newTaskInput.current.value.trim()));
            newTaskInput.current.value = '';
        }
    }

    return (
        <form onSubmit={handleAddTask} style={{ paddingBottom: '30px' }}>
            <label> Новая задача:
                <textarea ref={newTaskInput} type='text' />
                <br />
                <button type='submit'>Добавить</button>
            </label>
        </form >
    );
}

export default AddTask;