import { CatCard } from '../components/CatCard'
import { CatContainer } from '../components/CatContainer'
import { CatLoadingMessage } from '../components/CatLoadingMessage'
import { CatSkeleton } from '../components/CatSkeleton'
import { Layout } from '../components/Layout'
import { useFavorites } from '../hooks/useFavoritesCats'
import { useInfinityScroll } from '../hooks/useInfinityScrollCats'

export const Home = () => {
  const { cats, loading } = useInfinityScroll()
  const { favorites, setFavorites } = useFavorites()

  return (
    <Layout>
      <CatContainer>
        {cats.map((cat, index) => (
          <CatCard
            setFavorites={() => setFavorites(cat.id, cat.url)}
            favorite={Boolean(favorites.find(fav => fav.id === cat.id))}
            key={index}
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
  )
}
