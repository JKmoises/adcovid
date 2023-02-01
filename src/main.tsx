import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css';
import "./App.css";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Continentes } from './pages/Continentes';
import { Globales } from './pages/Globales';
import { Pais } from './pages/Pais';
import { Vacunas } from './pages/Vacunas';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Globales />,

      },
      {
        path: "/casos-continente",
        element: <Continentes />,
      },
      {
        path: "/casos-pais",
        element: <Pais />,
      },
      {
        path: "/vacunas",
        element: <Vacunas />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
