import { createAsyncThunk } from '@reduxjs/toolkit'

import { getCats } from '../../api/requests'
import { type Cat } from '../../types/Cat'

// interface FetchCatsArgs {
//   limit: number
//   page: number
// }

export const fetchCats = createAsyncThunk<Cat[], number>('cats/fetchCats', async page => {
  const res = await getCats(page)
  return res.data
})
