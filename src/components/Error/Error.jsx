import styles from "./Error.module.css";
import { Link } from "react-router-dom";

function Error() {
  return (
    <main className={styles.errorContainer}>
      <div className={styles.error404}>404</div>
      <span className={styles.errorText}>
        Oups la page que vous avez demandée n'existe pas
      </span>
      <Link to="/" className={styles.errorLink}>
        Retourner sur la page d'accueil
      </Link>
    </main>
  );
}

export default Error;
