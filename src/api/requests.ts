import { type Cat } from '../types/Cat'
import { api } from './instance'

export const getCats = (limit: number, page: number) => {
  return api.get<Cat[]>(`/images/search?limit=${limit}&page=${page}`)
}
