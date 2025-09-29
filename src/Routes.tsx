import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./components/layouts/Layout";
import Popular from "./pages/movies/Popular";
import TopRated from "./pages/movies/TopRated";

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
          {
            path: "toprated",
            element: <TopRated />,
          },
        ],
      },
    ],
  },
]);
