import React from "react";

import { CatContainer } from "../components/CatContainer";
import { CatCard } from "../components/Cat";
import { Layout } from "../components/Layout";
import { useFavorites } from "../hooks/useFavoritesCats";

export function Favorites() {
  const { favorites, setFavorites } = useFavorites();

  return (
    <Layout>
      <CatContainer>
        {favorites.map((cat) => (
          <CatCard
            favorite
            setFavorites={() => setFavorites(cat.id, cat.url)}
            key={cat.id}
            src={cat.url}
          />
        ))}
      </CatContainer>
    </Layout>
  );
}
