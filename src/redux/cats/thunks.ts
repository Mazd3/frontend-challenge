import { createAsyncThunk } from '@reduxjs/toolkit'

import { getCats } from '../../api/requests'
import { type Cat } from '../../types/Cat'

interface FetchCatsArgs {
  limit: number
  page: number
}

export const fetchCats = createAsyncThunk<Cat[], FetchCatsArgs>(
  'cats/fetchCats',
  async ({ limit, page }) => {
    const res = await getCats(limit, page)
    return res.data
  }
)
