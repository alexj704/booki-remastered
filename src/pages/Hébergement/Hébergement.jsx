import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBan, faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import styles from "./Hébergement.module.css";
import Tags from "../../components/Tags/Tags";
import Rating from "../../components/Rating/Rating";

function Hébergement() {
  const [data, setData] = useState({
    id: "",
    title: "",
    cover: "",
    price: "",
    rating: "",
    location: "",
    animals: false,
    maxPerson: "",
    tags: [],
  });
  const params = useParams();
  const Navigate = useNavigate();

  useEffect(() => {
    fetch("../hebergements.json")
      .then((response) => response.json())
      .then((data) => {
        const accomodation = data.find((element) => element.id === params.id);
        if (accomodation === undefined) {
          Navigate("/notfound");
        } else {
          setData(accomodation);
          document.title = `${accomodation.title} - Booki`;
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, [Navigate, params]);

  return (
    <main>
      <div className={styles.titleContainer}>
        <h1 className={styles.accomodationTitle}>{data.title}</h1>
      </div>
      <div className={styles.accomodationContainer}>
        <img
          src={data.cover}
          alt={data.title}
          className={styles.imageContainer}
        />
        <div className={styles.infosContainer}>
          <div className={styles.tagsAndPrice}>
            <ul className={styles.tagsList}>
              {data.tags.map((tags, index) => (
                <Tags tags={tags} key={index} />
              ))}
            </ul>
            <div className={styles.price}>
              <strong>Prix par personne:</strong> {data.price} €
            </div>
          </div>
          <div className={styles.ratingAndAnimals}>
            <div className={styles.ratingContainer}>
              <strong>Popularité: </strong>
              <Rating rating={data.rating} />
            </div>
            <div className={styles.animalsAndMax}>
              <div className={styles.animals}>
                <strong>Animaux: </strong>
                {"  "}
                {data.animals ? (
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className={styles.icon}
                  />
                ) : (
                  <FontAwesomeIcon icon={faBan} className={styles.icon} />
                )}
              </div>
              <div className={styles.maxPerson}>
                <strong>Nombre max de personnes: </strong>
                {data.maxPerson}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Hébergement;
