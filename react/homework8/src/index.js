import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/general.scss';
import './styles/index.scss';
import './styles/header.scss'
import './styles/menu.scss'
import './styles/advantages.scss'
import './styles/subscribe.scss'
import './styles/footer.scss'
import './styles/home-page.scss'
import './styles/product-list.scss'
import './styles/catalog-page.scss'
import './styles/page-header.scss'
import './styles/pagination.scss'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Provider } from 'react-redux'
import { store } from './store/store';
import App from './App';
import ErrorPage from './pages/ErrorPage';
import HomePage from './pages/HomePage';
import CatalogPage from './pages/CatalogPage';

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
      {
        path: "/catalog",
        element: <CatalogPage />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode >
);

