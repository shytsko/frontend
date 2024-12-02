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
import './styles/product-page.scss'
import './styles/cart-page.scss'
import './styles/registration-page.scss'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Provider } from 'react-redux'
import { store } from './store/store';
import App from './App';
import ErrorPage from './routes/ErrorPage';
import HomePage from './routes/HomePage';
import CatalogPage from './routes/CatalogPage';
import ProductPage from './routes/ProductPage';
import CartPage from './routes/CartPage';
import RegistrationPage from './routes/RegistrationPage';

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
      {
        path: "/product/:productId",
        element: <ProductPage />,
      },
      {
        path: "/cart",
        element: <CartPage />,
      },
      {
        path: "/registration",
        element: <RegistrationPage />,
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

