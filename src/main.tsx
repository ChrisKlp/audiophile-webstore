import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from '@/pages/Home';
import Page404 from '@/pages/Page404';
import Category from '@/pages/Category';
import Product from '@/pages/Product';
import './index.css';
import { routes } from '@/navigation';

const router = createBrowserRouter([
  {
    path: routes.home,
    element: <Home />,
    errorElement: <Page404 />,
  },
  {
    path: `${routes.category}/:categoryId`,
    element: <Category />,
  },
  {
    path: `${routes.product}/:productId`,
    element: <Product />,
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
