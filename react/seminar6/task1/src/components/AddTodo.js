import React, { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../store/reducers/todoListReducer';


function AddTodo() {
    const dispatch = useDispatch();
    const newTodoInput = useRef(null);

    const handleAddTodo = (e) => {
        e.preventDefault();
        const newTodoDescription = newTodoInput.current.value.trim()
        if (newTodoDescription) {
            dispatch(addTodo(newTodoInput.current.value.trim()));
            newTodoInput.current.value = '';
        }
    }

    return (
        <form onSubmit={handleAddTodo} style={{ paddingBottom: '30px' }}>
            <label> Новая задача:
                <textarea ref={newTodoInput} type='text' />
                <br />
                <button type='submit'>Добавить</button>
            </label>
        </form >
    );
}

export default AddTodo;