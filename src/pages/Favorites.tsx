import { CatCard } from '../components/CatCard'
import { CatContainer } from '../components/CatContainer'
import { Layout } from '../components/Layout'
import { NoCats } from '../components/NoCats'
import { useFavorites } from '../hooks/useFavoritesCats'

export const Favorites = () => {
  const { favorites, setFavorites } = useFavorites()

  return (
    <Layout>
      <CatContainer>
        {favorites.length > 0 &&
          favorites.map(cat => (
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
  )
}
