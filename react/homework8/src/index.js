import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.scss';
import './styles/header.scss'
import './styles/menu.scss'
import './styles/advantages.scss'
import './styles/subscribe.scss'
import './styles/footer.scss'
import './styles/home-page.scss'
import './styles/product-list.scss'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App';
import ErrorPage from './pages/ErrorPage';
import HomePage from './pages/HomePage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

