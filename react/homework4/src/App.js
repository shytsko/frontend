import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import HomePage from "./routes/HomePage";
import AboutPage from "./routes/AboutPage";
import NavBar from "./components/NavBar";
import NotFoundPage from "./routes/NotFoundPage";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
