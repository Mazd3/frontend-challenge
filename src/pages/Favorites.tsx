import { CatCard } from '../components/CatCard'
import { CatContainer } from '../components/CatContainer'
import { Layout } from '../components/Layout'
import { NoCats } from '../components/NoCats'
import { useAppSelector } from '../hooks/useAppSelector'
import { getFavorites } from '../redux/favorites/slice'

export const Favorites = () => {
  const { favorites } = useAppSelector(getFavorites)

  return (
    <Layout>
      <CatContainer>
        {favorites.length > 0 &&
          favorites.map(cat => <CatCard isFavorite key={cat.id} id={cat.id} url={cat.url} />)}
      </CatContainer>
      {!favorites.length && <NoCats />}
    </Layout>
  )
}
