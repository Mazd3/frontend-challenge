import React, { useMemo } from "react";

import { CatContainer } from "../components/CatContainer";
import { CatCard, CatCardLoader, CatLoadingMessage } from "../components/Cat";
import { Layout } from "../components/Layout";
import { useInfinityScroll } from "../hooks/useInfinityScrollCats";
import { useFavorites } from "../hooks/useFavoritesCats";

export function Home() {
  const { cats, loading } = useInfinityScroll();
  const { favorites, setFavorites } = useFavorites();

  return (
    <Layout>
      <CatContainer>
        {cats.map((cat) => (
          <CatCard
            setFavorites={() => setFavorites(cat.id, cat.url)}
            favorite={Boolean(favorites.find((fav) => fav.id === cat.id))}
            key={cat.id}
            src={cat.url}
          />
        ))}
        {loading &&
          Array(10)
            .fill(0)
            .map((_, index) => <CatCardLoader key={index} />)}
      </CatContainer>
      {loading && <CatLoadingMessage />}
    </Layout>
  );
}
