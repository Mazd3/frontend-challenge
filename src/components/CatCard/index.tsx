import styles from './CatCard.module.css'

interface CatCardProps {
  src: string
  favorite: boolean
  setFavorites: () => void
}

export const CatCard: React.FC<CatCardProps> = ({ src, favorite, setFavorites }: CatCardProps) => {
  return (
    <div className={styles.card}>
      <img className={styles.image} src={src} alt='cat' />
      <div className={styles.overlay}>
        <button
          className={`${favorite ? styles.favorite_active : ''} ${styles.favorite}`}
          onClick={setFavorites}
        />
      </div>
    </div>
  )
}
