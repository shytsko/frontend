import { createSlice } from '@reduxjs/toolkit'

export const todoListSlice = createSlice({
    name: 'todoList',
    initialState: {
        todos: [],
    },
    reducers: {
        addTodo: (state, action) => {
            state.todos.push({
                id: crypto.randomUUID(),
                description: action.payload,
                isCompleted: false
            });
        },
        deleteTodo: (state, action) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload);
        }
    },
})

export const { addTodo, deleteTodo } = todoListSlice.actions

export default todoListSlice.reducer