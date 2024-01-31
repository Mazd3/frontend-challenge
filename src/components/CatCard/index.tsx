import { useState } from 'react'

import { HeartIcon } from '../HeartIcon'
import styles from './CatCard.module.css'

interface CatCardProps {
  src: string
  isFavorite: boolean
  setFavorite: () => void
}

export const CatCard: React.FC<CatCardProps> = ({ src, isFavorite, setFavorite }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div className={styles.card}>
      <img className={styles.image} src={src} alt='cat' />
      <div className={styles.overlay}>
        <button
          type='button'
          className={styles.button}
          onClick={setFavorite}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <HeartIcon fill={isFavorite || isHovered} />
        </button>
      </div>
    </div>
  )
}
