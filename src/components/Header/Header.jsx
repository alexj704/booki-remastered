import Booki from "../../assets/Booki.png";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className={styles.headerContainer}>
      <Link className={styles.imgLink} to="/">
        <img src={Booki} alt="logo booki" className={styles.headerLogo} />
      </Link>
      <nav className={styles.headerNav}>
        <Link to="/" className={styles.headerLinks}>
          Accueil
        </Link>
        <a href="#" className={styles.headerLinks}>
          Activités
        </a>
      </nav>
    </header>
  );
}

export default Header;
