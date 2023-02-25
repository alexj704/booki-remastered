import styles from "./Search.module.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";

function Search({ data, setData, initialData }) {
  const [searchData, setSearchData] = useState("");

  function inputFunction(e) {
    setSearchData(e.target.value);
    console.log(searchData);
  }

  function searchFunction(e) {
    e.preventDefault();
    if (searchData == "") {
      setData(initialData);
    } else {
      const modifData = initialData.filter((value) =>
        value.title.toLowerCase().includes(searchData.toLowerCase())
      );
      setData(modifData);
    }
  }

  return (
    <div className={styles.searchContainer}>
      <div className={styles.iconMapMarker}>
        <FontAwesomeIcon icon={faMapMarkerAlt} />
      </div>
      <input
        onInput={inputFunction}
        className={styles.city}
        type="search"
        placeholder="Rechercher..."
      />
      <button
        type="submit"
        onClick={searchFunction}
        className={styles.iconGlass}
      >
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </button>
    </div>
  );
}

export default Search;
