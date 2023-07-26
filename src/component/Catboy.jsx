import React, { useState, useEffect } from "react";
import { api_url, api_Catboy } from "./api_url";
import "../scss/style.css";


function Catboy() {
  const [catData, setCatData] = useState(null);
  const [refresh, setRefresh] = useState(false);

  const handleRefresh = () => {
    setRefresh(!refresh);
  };

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(api_Catboy);
      const json = await response.json();
      setCatData(json); // Pas besoin de spécifier json.results[0], car l'objet complet est retourné.
    }

    fetchData();
  }, [refresh]);

  if (!catData) {
    return <span className="loader"></span>;
  }

  const { url: image, artist: ArtistName, artist_url: artist, source_url: source } = catData;

  return (
    <section>
    <div>
      <button onClick={handleRefresh}>Rafraichir</button>
      <ul>
        <li>
          <h2>Catboy</h2>
        </li>
        <li>
          <img src={image} alt="" />
        </li>
        <li>
          <strong>Artist Name : {ArtistName}</strong>
        </li>
        <li>
          <a href={artist}>Artist Social</a>
        </li>
        <li>
          <a href={source}>Source</a>
        </li>
      </ul>
    </div>
    </section>
  );
}

export default Catboy;
