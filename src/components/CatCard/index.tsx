import { useState } from 'react'

import { useAppDispatch } from '../../hooks/useAppDispatch'
import { addCat, removeCatById } from '../../redux/favorites/slice'
import { HeartIcon } from '../HeartIcon'
import styles from './CatCard.module.css'

interface CatCardProps {
  isFavorite: boolean
  id: string
  url: string
}

export const CatCard: React.FC<CatCardProps> = ({ isFavorite, id, url }) => {
  const [isHovered, setIsHovered] = useState(false)
  const dispatch = useAppDispatch()

  const dispatchFavorite = () => {
    if (isFavorite) {
      dispatch(removeCatById(id))
    } else {
      dispatch(addCat({ id, url }))
    }
  }

  return (
    <div className={styles.card}>
      <img onLoad={() => console.log('loaded')} className={styles.image} src={url} alt='cat' />
      <div className={styles.overlay}>
        <button
          type='button'
          className={styles.button}
          onClick={dispatchFavorite}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <HeartIcon fill={isFavorite || isHovered} />
        </button>
      </div>
    </div>
  )
}
