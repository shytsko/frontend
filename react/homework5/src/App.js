import './App.css';
import ThemeSelector from './components/ThemeSelector';
import { Provider } from "react-redux";
import store from './store/store';
import Content from './components/Content';


function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <ThemeSelector />
        <Content />
      </div>
    </Provider>
  );
}

export default App;
