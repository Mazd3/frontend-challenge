import styles from "./Cat.module.css";

interface CatCardProps {
  src: string;
  favorite: boolean;
  setFavorites: () => void;
}

export function CatCard({ src, favorite, setFavorites }: CatCardProps) {
  return (
    <div className={styles.card}>
      <img className={styles.image} src={src} alt="cat" />
      <div className={styles.overlay}>
        <button
          className={`${favorite ? styles.favorite_active : ""} ${
            styles.favorite
          }`}
          onClick={setFavorites}
        />
      </div>
    </div>
  );
}

export function CatCardLoader() {
  return <div className={styles.loader} />;
}

export function CatLoadingMessage() {
  return <p className={styles.message}>... загружаем котиков ...</p>;
}
