import { useDispatch, useSelector } from 'react-redux'
import { deleteTask } from '../store/reducers/taskListReducer';

function TaskList() {
    const tasks = useSelector((state) => state.taskList.tasks)


    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {tasks.map((task) => <TaskItem key={task.id} task={task} />)}
        </div>
    );
}

function TaskItem({ task }) {
    const dispatch = useDispatch();

    const handleDeleteTask = (taskId) => {
        dispatch(deleteTask(taskId));
    }

    return (
        <div style={{ position: 'relative', minHeight: '60px', width: '360px', border: '1px solid black' }}>
            <p>{task.title}</p>
            {task.completed && <p style={{ color: 'green' }}>Завершено</p>}
            <button onClick={() => handleDeleteTask(task.id)}
                style={{ position: 'absolute', top: '5px', right: '5px' }}
            >Х</button>
        </div>
    );
}



export default TaskList;