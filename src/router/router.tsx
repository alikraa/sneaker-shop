import { createBrowserRouter } from 'react-router-dom';
import App from '../App.tsx';
import MainContent from '../components/main-content/MainContent.tsx';
import ProductItemDetails from '../components/product-list/ProductItemDetails.tsx';
import Cart from '../components/cart/Cart.tsx';
import Favorites from '../components/favorites/Favorites.tsx';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <MainContent />,
      },
      {
        path: '/product-list/:productItemId',
        element: <ProductItemDetails />,
      },
      {
        path: '/cart',
        element: <Cart />,
      },
      {
        path: '/favorites',
        element: <Favorites />,
      },
    ],
  },
]);
