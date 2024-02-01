import { type Cat } from '../types/Cat'
import { api } from './instance'

export const getCats = (page: number) => {
  return api.get<Cat[]>(`/images/search?limit=15&page=${page}`)
}
