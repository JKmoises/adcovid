import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./App.css";
import "react-circular-progressbar/dist/styles.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Continentes } from "./pages/Continentes";
import { Globales, loader as globalesLoader } from "./pages/Globales";
import { Pais } from "./pages/Pais";
import { Vacunas } from "./pages/Vacunas";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Globales />,
        loader: globalesLoader,
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
