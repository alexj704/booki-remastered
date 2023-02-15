import styles from "./Rating.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

function Rating({ rating }) {
  const range = [1, 2, 3, 4, 5];

  return range.map((rangeElem) =>
    rating >= rangeElem ? (
      <span key={rangeElem.toString()}>
        <FontAwesomeIcon icon={faStar} className={styles.blueStar} />
      </span>
    ) : (
      <span key={rangeElem.toString()}>
        <FontAwesomeIcon icon={faStar} className={styles.greyStar} />
      </span>
    )
  );
}

export default Rating;
