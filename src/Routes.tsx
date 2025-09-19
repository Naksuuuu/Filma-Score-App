import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./components/layouts/Layout";
import Movies from "./pages/Movies";

export const Routes = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/movies",
        element: <Movies />,
      },
    ],
  },
]);
