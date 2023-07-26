import React, { useState, useEffect } from "react";
import { api_url } from "./api_url";
import "../scss/style.css";


function NekoBest() {
  const [nekoData, setNekoData] = useState(null);
  const [refresh, setRefresh] = useState(false);

  const handleRefresh = () => {
    setRefresh(!refresh);
  };

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(api_url);
      const json = await response.json();
      setNekoData(json.results[0]);
    }

    fetchData();
  }, [refresh]);

  if (!nekoData) {
    return <span className="loader"></span>;
  }

  const {
    
      url: image,
      artist_name: artistName,
      artist_href: artist,
      source_url: source
      
      } = nekoData;

  return (
    <article>
      <div>
        <button onClick={handleRefresh}>Rafraichir</button>
        <ul>
          <li>
            <h2>NekoBest</h2>
          </li>
          <li>
            <img src={image} alt="Neko" />
          </li>
          <li>
            <strong>Artist Name : {artistName}</strong>
          </li>
          <li>
            <a href={artist}>Artist Social</a>
          </li>
          <li>
            <a href={source}>Source</a>
          </li>
        </ul>
      </div>
    </article>
  );
}

export default NekoBest;
