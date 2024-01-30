import { Home } from "./pages/Home";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Favorites } from "./pages/Favorites";
import { PageNonFound } from "./pages/PageNotFound";

const router = createBrowserRouter([
  {
    path: "/frontend-challenge",
    element: <Home />,
  },
  {
    path: "/frontend-challenge/favorites",
    element: <Favorites />,
  },
  {
    path: "*",
    element: <PageNonFound />,
  },
]);

export default function App() {
  console.log(router);
  return <RouterProvider router={router} />;
}
