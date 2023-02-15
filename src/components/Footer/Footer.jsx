import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footerContainer}>
      <ul className={styles.footerList}>
        <h3 className={styles.footerTitle}>A propos</h3>
        <a href="#" className={styles.footerLinks}>
          Fonctionnement du site
        </a>
        <a href="#" className={styles.footerLinks}>
          Conditions générales
        </a>
        <a href="#" className={styles.footerLinks}>
          Données et confidentialité
        </a>
      </ul>
      <ul className={styles.footerList}>
        <h3 className={styles.footerTitle}>Nos hébergements</h3>
        <a href="#" className={styles.footerLinks}>
          Charte qualité
        </a>
        <a href="#" className={styles.footerLinks}>
          Proposer votre hôtel
        </a>
      </ul>
      <ul className={styles.footerList}>
        <h3 className={styles.footerTitle}>Assistance</h3>
        <a href="#" className={styles.footerLinks}>
          Centre d'aide
        </a>
        <a href="#" className={styles.footerLinks}>
          Nous contacter
        </a>
      </ul>
    </footer>
  );
}

export default Footer;
