import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import TextInput from './components/TextInput';
import TodoList from './components/TodoList';
import Timer from './components/Timer';


function App() {
  return (
    <div className="App">
      <Timer />
      <Counter />
      <Counter increment={3} />
      <Counter increment={5} />
      <TextInput initText="new text" />
      <TodoList />

    </div>
  );
}

export default App;
