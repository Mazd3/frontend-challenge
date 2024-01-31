import styles from './CatContainer.module.css'

interface CatContainerProps {
  children: React.ReactNode
}

export const CatContainer: React.FC<CatContainerProps> = ({ children }) => {
  return <div className={styles.container}>{children}</div>
}
