import TemperatureConverter from './components/TemperatureConverter';
import './App.css';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="App">
      <Typography variant="h4" gutterBottom>
        Задание 1: Температурный конвертер
      </Typography>
      <TemperatureConverter />
      <Divider sx={{
        margin: "20px 0 50px"
      }} />
      <Typography variant="h4" gutterBottom>
        Задание 2: Список дел
      </Typography>
      <TodoList />
    </div>
  );
}

export default App;
