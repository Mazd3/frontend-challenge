import { createSlice } from '@reduxjs/toolkit'

import { type Cat } from '../../types/Cat'
import { type RootState } from '../store'
import { fetchCats } from './thunks'

export interface CatsInitialState {
  cats: Cat[]
  isLoading: boolean
  page: number
}

const initialState: CatsInitialState = {
  cats: [],
  isLoading: false,
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

export const getCats = (state: RootState) => state.cats

export const catsReducer = catsSlice.reducer
