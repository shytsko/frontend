import './App.css';
import { Route, Routes, BrowserRouter, NavLink } from "react-router-dom"
import HomePage from './routes/HomePage';
import AboutPage from './routes/AboutPage';

function App() {
  return (
    <BrowserRouter>
      <nav id="nav" style={{ display: "flex", gap: "10px" }}>
        <NavLink to="/">Главная</NavLink>
        <NavLink to="/about">О нас</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
