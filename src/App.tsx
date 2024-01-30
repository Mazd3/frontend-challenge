import { Home } from "./pages/Home";
import {
  RouterProvider,
  createBrowserRouter,
  redirect,
} from "react-router-dom";
import { Favorites } from "./pages/Favorites";

const router = createBrowserRouter([
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
  console.log(router);
  return <RouterProvider router={router} />;
}
