import logo from './logo.svg';
import './App.css';
import './components/Message'
import Message from './components/Message';

function App() {
  return (
    <div className="App">
      <Message text="Обычное сообщение" />
      <Message text="Обычное сообщение с заголовком" title="Просто сообщение" />
      <Message text="Сообщение об ошибке" type="error" />
      <Message text="Сообщение об ошибке с заголовком" type="error" title="Очень серьезная ошибка" />
    </div>
  );
}

export default App;
