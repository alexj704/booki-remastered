import styles from "./Home.module.css";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faMagnifyingGlass,
  faMoneyBillWave,
  faChild,
  faHeart,
  faDog,
  faChartLine,
} from "@fortawesome/free-solid-svg-icons";
import Card from "../../components/Cards/Cards";

function Home() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch("hebergements.json")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => {
        console.log(error);
        setError(true);
      });
  }, []);

  const bestAccomodation = [...data].sort((a, b) =>
    a.rating < b.rating ? 1 : -1
  );

  return (
    <main className={styles.mainContainer}>
      <div className={styles.homeHeader}>
        <h1 className={styles.homeHeaderTitle}>
          Trouvez votre hébergement pour des vacances de rêves
        </h1>
        <p className={styles.homeHeaderText}>
          En plein centre ville ou en pleine nature
        </p>
      </div>
      <div className={styles.searchContainer}>
        <div className={styles.iconMapMarker}>
          <FontAwesomeIcon icon={faMapMarkerAlt} />
        </div>
        <form method="post" action="traitement.php">
          <input
            className={styles.city}
            type="search"
            placeholder="Marseille, France"
          />
        </form>
        <button className={styles.searchButton}>Rechercher</button>
        <div className={styles.iconGlass}>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </div>
      </div>
      <div className={styles.filterContainer}>
        <h2 className={styles.filterTitle}>Filtres: </h2>
        <div className={styles.filters}>
          <div className={styles.filtersIcon}>
            <FontAwesomeIcon icon={faMoneyBillWave} />
          </div>
          <p>Economique</p>
        </div>
        <div className={styles.filters}>
          <div className={styles.filtersIcon}>
            <FontAwesomeIcon icon={faChild} />
          </div>
          <p>Familial</p>
        </div>
        <div className={styles.filters}>
          <div className={styles.filtersIcon}>
            <FontAwesomeIcon icon={faHeart} />
          </div>
          <p>Romantique</p>
        </div>
        <div className={styles.filters}>
          <div className={styles.filtersIcon}>
            <FontAwesomeIcon icon={faDog} />
          </div>
          <p>Animaux autorisés</p>
        </div>
      </div>
      <div className={styles.topContainer}>
        <section className={styles.accomodationsContainer}>
          <h2 className={styles.accomodationsTitle}>
            Hébergements sur Marseille
          </h2>
          <ul className={styles.accomodationsList}>
            {error ? (
              <span className={styles.errorText}>Oups il y a une erreur</span>
            ) : (
              data.map(
                (profile, index) =>
                  index < 6 && (
                    <Card
                      key={`${profile.id}-${index}`}
                      title={profile.title}
                      cover={profile.cover}
                      price={profile.price}
                      rating={profile.rating}
                    />
                  )
              )
            )}
          </ul>
          <a href="#" className={styles.moreText}>
            Afficher plus
          </a>
        </section>
        <aside className={styles.mostPopularContainer}>
          <div className={styles.mostPopularHead}>
            <h2 className={styles.mostPopularTitle}>Les plus populaires</h2>
            <i className={styles.mostPopularIcon}>
              <FontAwesomeIcon icon={faChartLine} />
            </i>
          </div>
          <ul className={styles.mostPopularList}>
            {bestAccomodation.map(
              (profile, index) =>
                index < 3 && (
                  <Card
                    key={`${profile.id}-${index}`}
                    title={profile.title}
                    cover={profile.cover}
                    price={profile.price}
                    rating={profile.rating}
                  />
                )
            )}
          </ul>
        </aside>
      </div>
    </main>
  );
}

export default Home;
