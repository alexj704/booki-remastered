import styles from "./Cards.module.css";

function Cards({ cover, title, price, rating }) {
  return (
    <div className={styles.cardsContainer}>
      <img src={cover} alt={title} className={styles.cardsImages} />
      <div className={styles.cardsInfos}>
        <h2 className={styles.cardsTitle}>{title}</h2>
        <p className={styles.cardsPrice}>Nuit à partir de {price}€</p>
        <p className={styles.cardsRating}>{rating}</p>
      </div>
    </div>
  );
}

export default Cards;
