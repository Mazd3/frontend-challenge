import { createBrowserRouter, redirect, RouterProvider } from 'react-router-dom'

import { Favorites } from './pages/Favorites'
import { Home } from './pages/Home'

const router = createBrowserRouter([
  {
    path: '/frontend-challenge',
    loader: () => redirect('/frontend-challenge/home')
  },
  {
    path: '/frontend-challenge/home',
    element: <Home />
  },
  {
    path: '/frontend-challenge/favorites',
    element: <Favorites />
  }
])

const App = () => <RouterProvider router={router} />

export default App
