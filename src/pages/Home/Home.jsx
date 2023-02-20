import styles from "./Home.module.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartLine } from "@fortawesome/free-solid-svg-icons";
import Card from "../../components/Cards/Cards";

import vieuxPort from "../../assets/activities/vieux-port.jpg";
import dameGarde from "../../assets/activities/notre-dame-garde.jpg";
import parcCalanques from "../../assets/activities/parc-calanques.jpg";
import fortPomegues from "../../assets/activities/fort-pomegues.jpg";

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
          <Link to="/hebergements/all" className={styles.moreText}>
            Afficher plus
          </Link>
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
      <section className={styles.activitiesContainer}>
        <h2 className={styles.activitiesTitle}>Activités à Marseille</h2>
        <div className={styles.activitiesList}>
          <div className={styles.activities}>
            <img
              src={vieuxPort}
              className={styles.activitiesImage}
              alt="Vieux port"
            />
            <h3 className={styles.activitiesName}>Vieux Port</h3>
          </div>
          <div className={styles.activities}>
            <img
              src={fortPomegues}
              className={styles.activitiesImage}
              alt="Fort de Pomègues"
            />
            <h3 className={styles.activitiesName}>Fort de Pomègues</h3>
          </div>
          <div className={styles.activities}>
            <img
              src={parcCalanques}
              className={styles.activitiesImage}
              alt="Parc National des Calanques"
            />
            <h3 className={styles.activitiesName}>
              Parc National des Calanques
            </h3>
          </div>
          <div className={styles.activities}>
            <img
              src={dameGarde}
              className={styles.activitiesImage}
              alt="Notre-Dame-de-la-Garde"
            />
            <h3 className={styles.activitiesName}>Notre-Dame-de-la-Garde</h3>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
