import { useState } from 'react';
import './App.css';
import ThemeContext from './context/ThemeContext';
import ThemeToggle from './components/ThemeToggle';

function App() {
  const [theme, setTheme] = useState('light');

  function toggleTheme() {
    setTheme((currentTheme) => (currentTheme === 'light' ? 'dark' : 'light'));
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <ThemeToggle />
    </ThemeContext.Provider>
  );
}

export default App;
