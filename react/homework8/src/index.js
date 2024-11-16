import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.scss';
import './styles/header.scss'
import './styles/menu.scss'
import './styles/advantages.scss'
import './styles/footer.scss'
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

