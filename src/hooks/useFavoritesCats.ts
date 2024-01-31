import { useEffect, useState } from 'react'

import type { Cat } from '../types/Cat'

export function useFavorites() {
  const [favorites, changeFavorites] = useState<Cat[] | []>([])

  useEffect(() => {
    const favoritesString = localStorage.getItem('favorites')
    if (!favoritesString) return
    const favoritesArr = JSON.parse(favoritesString) as Cat[]
    changeFavorites(favoritesArr)
  }, [])

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites))
  }, [favorites])

  function setFavorite(id: string, url: string) {
    if (favorites && favorites.find(cat => cat.id === id)) {
      changeFavorites(favorites.filter(cat => cat.id !== id))
    } else {
      changeFavorites([...favorites, { id, url }])
    }
  }

  return {
    favorites,
    setFavorite
  }
}
