import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./components/layouts/Layout";
import Popular from "./pages/movies/Popular";

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
        children: [
          {
            path: "popular",
            element: <Popular />,
          },
        ],
      },
    ],
  },
]);
