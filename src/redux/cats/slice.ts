import { createSlice } from '@reduxjs/toolkit'

import { type Cat } from '../../types/Cat'
import { fetchCats } from './thunks'

interface InitialState {
  cats: Cat[]
  isLoading: boolean
  page: number
}

const initialState: InitialState = {
  cats: [],
  isLoading: true,
  page: 0
}

const catsSlice = createSlice({
  name: 'cats',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchCats.pending, state => {
        state.isLoading = true
      })
      .addCase(fetchCats.fulfilled, (state, action) => {
        state.cats = state.cats.concat(action.payload)
        state.isLoading = false
        state.page += 1
      })
  }
})

export const catsReducer = catsSlice.reducer
