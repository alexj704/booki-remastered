import styles from "./Cards.module.css";
import Rating from "../Rating/Rating";

function Cards({ cover, title, price, rating }) {
  return (
    <div className={styles.cardsContainer}>
      <img src={cover} alt={title} className={styles.cardsImages} />
      <div className={styles.cardsInfos}>
        <h2 className={styles.cardsTitle}>{title}</h2>
        <p className={styles.cardsPrice}>Nuit à partir de {price}€</p>
        <p className={styles.cardsRating}>
          <Rating rating={rating} />
        </p>
      </div>
    </div>
  );
}

export default Cards;
