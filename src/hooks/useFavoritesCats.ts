import { useEffect, useState } from "react";
import { Cat } from "../types/Cat";

export function useFavorites() {
  const [favorites, changeFavorites] = useState<Cat[] | []>([]);

  useEffect(() => {
    const favoritesString = localStorage.getItem("favorites");
    if (!favoritesString) return;
    const favoritesArr: Cat[] = JSON.parse(favoritesString);
    changeFavorites(favoritesArr);
  }, []);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  function setFavorites(id: string, url: string) {
    if (favorites && favorites.find((cat) => cat.id === id)) {
      changeFavorites(favorites.filter((cat) => cat.id !== id));
    } else {
      changeFavorites([...favorites, { id, url }]);
    }
  }

  return {
    favorites,
    setFavorites,
  };
}
