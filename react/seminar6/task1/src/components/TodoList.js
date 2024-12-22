import { useDispatch, useSelector } from 'react-redux'
import { deleteTodo } from '../store/reducers/todoListReducer';

function TodoList() {
    const todos = useSelector((state) => state.todoList.todos)

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {todos.map((todo) => <TodoItem key={todo.id} todo={todo} />)}
        </div>
    );
}

function TodoItem({ todo }) {
    const dispatch = useDispatch();

    const handleDeleteTodo = (todoId) => {
        dispatch(deleteTodo(todoId));
    }

    return (
        <div style={{ position: 'relative', height: '60px', width: '360px', border: '1px solid black' }}>
            <p>{todo.description}</p>
            <button onClick={() => handleDeleteTodo(todo.id)}
                style={{ position: 'absolute', top: '5px', right: '5px' }}
            >Х</button>
        </div>
    );
}



export default TodoList;