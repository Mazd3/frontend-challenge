import { CatContainer } from "../components/CatContainer";
import { CatCard } from "../components/CatCard";
import { Layout } from "../components/Layout";
import { useInfinityScroll } from "../hooks/useInfinityScrollCats";
import { useFavorites } from "../hooks/useFavoritesCats";
import { CatSkeleton } from "../components/CatSkeleton";
import { CatLoadingMessage } from "../components/CatLoadingMessage";

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
            .map((_, index) => <CatSkeleton key={index} />)}
      </CatContainer>
      {loading && <CatLoadingMessage />}
    </Layout>
  );
}
