import { createContext, useContext, useState } from 'react';
import './App.css';

const ThemeContext = createContext();
const NotesContext = createContext();

const useTheme = () => useContext(ThemeContext);
const useNotes = () => useContext(NotesContext);


function NotesList() {
  const { notes } = useNotes();

  return (
    <ul>
      {
        notes.map((note, index) => <li key={index}>{note}</li>)
      }
    </ul>
  );
}

function NoteInput() {
  const [inputValue, setInputValue] = useState('');
  const { addNote } = useNotes();

  function handleInputChange(e) {
    setInputValue(e.target.value);
  }

  function handleAddNote(e) {
    e.preventDefault()
    addNote(inputValue);
    setInputValue('');
  }

  return (
    <form onSubmit={handleAddNote}>
      <input value={inputValue} onChange={handleInputChange} />
      <button type='submit' >Добавить</button>
    </form>
  );
}


function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme}>
      Нажми чтобы переключится на {theme === 'light' ? 'темную' : 'светлую'} тему
    </button>
  );
}




function App() {
  const [theme, setTheme] = useState('light');
  const [notes, setNotes] = useState(['Элемент списка 1', 'Элемент списка 2']);

  function toggleTheme() {
    setTheme((currentTheme) => (currentTheme === 'light' ? 'dark' : 'light'));
  }

  function addNote(note) {
    setNotes((prevNotes) => [...prevNotes, note]);
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <NotesContext.Provider value={{ notes, addNote }}>
        <div style={
          theme === 'light'
            ? { color: 'black', background: 'white' }
            : { color: 'white', background: 'black' }
        }>
          <h1>Список</h1>
          <ThemeToggle />
          <NotesList />
          <NoteInput />
        </div>
      </NotesContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;
