import { Link } from 'react-router-dom'

import styles from './NoCats.module.css'

export const NoCats = () => {
  return (
    <p>
      Здесь появятся ваши любимые котики.{' '}
      <Link className={styles.link} to='/frontend-challenge'>
        Смотреть котиков
      </Link>
    </p>
  )
}
