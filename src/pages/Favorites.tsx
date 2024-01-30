import { CatContainer } from "../components/CatContainer";
import { CatCard } from "../components/CatCard";
import { Layout } from "../components/Layout";
import { useFavorites } from "../hooks/useFavoritesCats";
import { NoCats } from "../components/NoCats";

export function Favorites() {
  const { favorites, setFavorites } = useFavorites();

  return (
    <Layout>
      <CatContainer>
        {favorites.length > 0 &&
          favorites.map((cat) => (
            <CatCard
              favorite
              setFavorites={() => setFavorites(cat.id, cat.url)}
              key={cat.id}
              src={cat.url}
            />
          ))}
      </CatContainer>
      {!favorites.length && <NoCats />}
    </Layout>
  );
}
