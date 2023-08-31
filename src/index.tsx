import React from 'react';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
import './index.css';
import Root from './Root';
import MainPage from './pages/MainPage';
import GamePage from './pages/GamePage';
import ErrorPage from './pages/ErrorPage';
import { store } from './redux/store';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/',
        element: <MainPage />,
        errorElement: <ErrorPage />,
      },
      {
        path: ':gameId',
        element: <GamePage />,
        errorElement: <ErrorPage />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
