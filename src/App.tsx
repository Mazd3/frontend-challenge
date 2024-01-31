import { Provider } from 'react-redux'
import { createBrowserRouter, redirect, RouterProvider } from 'react-router-dom'

import { Favorites } from './pages/Favorites'
import { Home } from './pages/Home'
import { store } from './redux/store'

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

const App = () => (
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
)

export default App
