import { useState } from 'react';
import './App.css';
import ThemeContext from './context/ThemeContext';
import UserContext from './context/UserContext';
import ThemeToggle from './components/ThemeToggle';
import Profile from './components/Profile';
import Header from './components/Header';
import Footer from './components/Footer';
import ChangeUser from './components/ChangeUser';

function App() {
  const [theme, setTheme] = useState('light');

  const [user, setUser] = useState('Гость')

  function toggleTheme() {
    setTheme((currentTheme) => (currentTheme === 'light' ? 'dark' : 'light'));
  }

  function changeUser(newUser) {
    setUser(() => newUser);
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <UserContext.Provider value={{ user, changeUser }}>
        <ThemeToggle />
        <ChangeUser />
        <Header />
        <Profile />
        <Footer />
      </UserContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;
