import './App.css';
import AddTask from './components/AddTask';
import TaskList from './components/TaskList';
import { useEffect } from 'react';
import { fetchTasks } from './store/reducers/taskListReducer';
import { useDispatch, useSelector } from 'react-redux'

function App() {
  const status = useSelector((state) => state.taskList.status)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  return (
    <div className="App">
      {status === 'resolved'
        ? <>
          <AddTask />
          <TaskList />
        </>
        : <h3>Loading ...</h3>
      }
    </div>
  );
}

export default App;
