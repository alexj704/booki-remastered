import Booki from "../../assets/Booki.png";
import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.headerContainer}>
      <img src={Booki} alt="logo booki" className={styles.headerLogo} />
      <nav className={styles.headerNav}>
        <a href="#" className={styles.headerLinks}>
          Hébergements
        </a>
        <a href="#" className={styles.headerLinks}>
          Activités
        </a>
      </nav>
    </header>
  );
}

export default Header;
