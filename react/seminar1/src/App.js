import logo from './logo.svg';
import './App.css';
import './components/Greeting'
import Greeting from './components/Greeting';
import CurrentTime from './components/CurrentTime';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>First app</h2>
        <Greeting />
        <CurrentTime />
      </header>
    </div>
  );
}

export default App;
