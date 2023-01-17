import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
  RouterProvider,
} from 'react-router-dom';

import Layout from '@/components/Layout';
import { routes } from '@/navigation';
import Category from '@/pages/Category';
import Home from '@/pages/Home';
import Page404 from '@/pages/Page404';
import Product from '@/pages/Product';
import './index.css';
import Checkout from './pages/Checkout';
import {
  categoryLoader,
  layoutLoader,
  productLoader,
} from '@/features/routeLoaders';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path={routes.home} element={<Layout />} errorElement={<Page404 />}>
      <Route
        index
        element={<Home />}
        loader={() => layoutLoader({ transparentNav: true })}
      />
      <Route path={`${routes.product}`}>
        <Route index element={<Navigate to={routes.home} />} />
        <Route path=":productId" element={<Product />} loader={productLoader} />
      </Route>
      <Route path={`${routes.category}`}>
        <Route index element={<Navigate to={routes.home} />} />
        <Route
          path=":categoryId"
          element={<Category />}
          loader={categoryLoader}
        />
      </Route>
      <Route
        path={`${routes.checkout}`}
        element={<Checkout />}
        loader={() => layoutLoader({ removeAbout: true })}
      />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
