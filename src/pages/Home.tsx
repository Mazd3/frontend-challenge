import { CatCard } from '../components/CatCard'
import { CatContainer } from '../components/CatContainer'
import { CatLoadingMessage } from '../components/CatLoadingMessage'
import { CatSkeleton } from '../components/CatSkeleton'
import { Layout } from '../components/Layout'
import { useAppDispatch } from '../hooks/useAppDispatch'
import { useAppSelector } from '../hooks/useAppSelector'
import { useBottom } from '../hooks/useBottom'
import { getCats } from '../redux/cats/slice'
import { fetchCats } from '../redux/cats/thunks'
import { getFavorites } from '../redux/favorites/slice'

export const Home = () => {
  const dispatch = useAppDispatch()
  const { cats, isLoading, page } = useAppSelector(getCats)
  const { favorites } = useAppSelector(getFavorites)

  useBottom(() => {
    dispatch(fetchCats(page)).catch(() => console.error('Возникла ошибка при получении котиков'))
  }, isLoading)

  return (
    <Layout>
      <CatContainer>
        {cats.map((cat, index) => (
          <CatCard
            key={index} // апишка может отдавать одинаковые картинки :(
            isFavorite={Boolean(favorites.find(fav => fav.id === cat.id))}
            id={cat.id}
            url={cat.url}
          />
        ))}
        {isLoading &&
          Array(10)
            .fill(0)
            .map((_, index) => <CatSkeleton key={index} />)}
      </CatContainer>
      {isLoading && <CatLoadingMessage />}
    </Layout>
  )
}
