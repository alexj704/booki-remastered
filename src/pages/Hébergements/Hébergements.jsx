import styles from "./Hébergements.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faMagnifyingGlass,
  faMoneyBillWave,
  faChild,
  faHeart,
  faDog,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import Cards from "../../components/Cards/Cards";

function Hébergements() {
  const [data, setData] = useState([]);
  const [initialData, setInitialData] = useState([]);
  const [error, setError] = useState(false);
  let modifData = [];

  useEffect(() => {
    fetch("../hebergements.json")
      .then((response) => response.json())
      .then((data) => {
        setInitialData(data);
        setData(data);
      })
      .catch((error) => {
        console.log(error);
        setError(true);
      });
  }, []);

  function ecoFilter() {
    if (document.querySelector("#ecoFilter").classList.contains("active")) {
      setData(initialData);
      document.querySelector("#ecoFilter").classList.remove("active");
    } else {
      modifData = initialData.filter((product) => product.price < 50);
      setData(modifData);
      document
        .querySelectorAll("button")
        .forEach((element) => element.classList.remove("active"));
      document.querySelector("#ecoFilter").classList.add("active");
    }
  }

  function animalsFilter() {
    if (document.querySelector("#animalsFilter").classList.contains("active")) {
      setData(initialData);
      document.querySelector("#animalsFilter").classList.remove("active");
    } else {
      modifData = initialData.filter((product) => product.animals === true);
      setData(modifData);
      document
        .querySelectorAll("button")
        .forEach((element) => element.classList.remove("active"));
      document.querySelector("#animalsFilter").classList.add("active");
    }
  }

  function familyFilter() {
    if (document.querySelector("#familyFilter").classList.contains("active")) {
      setData(initialData);
      document.querySelector("#familyFilter").classList.remove("active");
    } else {
      modifData = initialData.filter((product) => product.maxPerson >= 3);
      setData(modifData);
      document
        .querySelectorAll("button")
        .forEach((element) => element.classList.remove("active"));
      document.querySelector("#familyFilter").classList.add("active");
    }
  }

  return (
    <main className={styles.hebergementsContainer}>
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
        <h2 className={styles.filterTitle}>Filtres</h2>
        <button id="ecoFilter" className={styles.filters} onClick={ecoFilter}>
          <div className={styles.filtersIcon}>
            <FontAwesomeIcon icon={faMoneyBillWave} />
          </div>
          <p>Economique</p>
        </button>
        <button
          id="familyFilter"
          className={styles.filters}
          onClick={familyFilter}
        >
          <div className={styles.filtersIcon}>
            <FontAwesomeIcon icon={faChild} />
          </div>
          <p>Familial</p>
        </button>
        <button
          id="animalsFilter"
          className={styles.filters}
          onClick={animalsFilter}
        >
          <div className={styles.filtersIcon}>
            <FontAwesomeIcon icon={faDog} />
          </div>
          <p>Animaux autorisés</p>
        </button>
      </div>
      <section className={styles.allAccomodationsContainer}>
        <ul className={styles.allAccomodationsList}>
          {error ? (
            <span className={styles.errorText}>Oups il y a une erreur</span>
          ) : (
            data.map((profile, index) => (
              <Cards
                key={`${profile.id}-${index}`}
                title={profile.title}
                cover={profile.cover}
                price={profile.price}
                rating={profile.rating}
              />
            ))
          )}
        </ul>
      </section>
    </main>
  );
}

export default Hébergements;
