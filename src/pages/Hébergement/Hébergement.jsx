import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import styles from "./Hébergement.module.css";

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
      <h1 className={styles.accomodationTitle}>{data.title}</h1>
      <div className={styles.accomodationContainer}>
        {/* <div
          className={styles.imageContainer}
          style={{ backgroundImage: `url(${data.cover})` }}
        ></div> */}
        <img
          src={data.cover}
          alt={data.title}
          className={styles.imageContainer}
        />
      </div>
    </main>
  );
}

export default Hébergement;
