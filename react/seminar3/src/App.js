import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import { useState } from 'react';
import ThemeSwitcher from './components/ThemeSwitcher';


function App() {
  const [theme, setTheme] = useState("light");

  function switchTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  return (
    <div className="App">
      <ThemeSwitcher theme={theme} switchTheme={switchTheme} />
      <Counter theme={theme} />
    </div>
  );
}

export default App;
