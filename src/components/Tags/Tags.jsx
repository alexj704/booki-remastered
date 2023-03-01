import styles from "./Tags.module.css";

function Tags({ tags }) {
  return <li className={styles.tagItem}>{tags}</li>;
}

export default Tags;
