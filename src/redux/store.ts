import { configureStore } from '@reduxjs/toolkit'

import { catsReducer } from './cats/slice'
import { favoritesReducer } from './favorites/slice'

export const store = configureStore({
  reducer: {
    cats: catsReducer,
    favorites: favoritesReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
