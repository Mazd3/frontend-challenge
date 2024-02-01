import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'

import { type Cat } from '../../types/Cat'
import { type RootState } from '../store'

interface InitialState {
  favorites: Cat[]
}

const initialState: InitialState = {
  favorites: JSON.parse(localStorage.getItem('favorites') as string) as Cat[]
}

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addCat(state, action: PayloadAction<Cat>) {
      state.favorites.push({ id: action.payload.id, url: action.payload.url })
      localStorage.setItem('favorites', JSON.stringify(state.favorites))
    },
    removeCatById(state, action: PayloadAction<string>) {
      state.favorites = state.favorites.filter(cat => cat.id !== action.payload)
      localStorage.setItem('favorites', JSON.stringify(state.favorites))
    }
  }
})

export const { addCat, removeCatById } = favoritesSlice.actions

export const getFavorites = (state: RootState) => state.favorites

export const favoritesReducer = favoritesSlice.reducer
