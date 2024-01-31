import { Home } from "./pages/Home";
import { RouterProvider, createHashRouter, redirect } from "react-router-dom";
import { Favorites } from "./pages/Favorites";

const router = createHashRouter([
  {
    path: "/frontend-challenge",
    loader: () => redirect("/frontend-challenge/home"),
  },
  {
    path: "/frontend-challenge/home",
    element: <Home />,
  },
  {
    path: "/frontend-challenge/favorites",
    element: <Favorites />,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
