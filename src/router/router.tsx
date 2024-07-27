import { createBrowserRouter } from 'react-router-dom';
import App from '../App.tsx';
import MainContent from '../components/main-content/MainContent.tsx';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <MainContent />,
      },
    ],
  },
]);
