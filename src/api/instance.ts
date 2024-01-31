import axios from 'axios'

const BASE_URL = import.meta.env.VITE_API_URL as string
const API_KEY = import.meta.env.VITE_API_KEY as string

export const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'x-api-key': API_KEY
  }
})
