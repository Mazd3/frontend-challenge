import { createSlice } from '@reduxjs/toolkit'

import { type Cat } from '../../types/Cat'

interface InitialState {
  page: number
  allCats: Cat[]
  visibleCats: Cat[]
}

const initialState: InitialState = {
  allCats: JSON.parse(localStorage.getItem('favorites') as string) as Cat[],
  visibleCats: [],
  page: 1
}

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addCats(state) {
      const piece = state.allCats.slice(0, 20 * state.page)
      state.visibleCats = state.visibleCats.concat(piece)
      state.page += 1
    }
  }
})

export const favoritesReducer = favoritesSlice.reducer
