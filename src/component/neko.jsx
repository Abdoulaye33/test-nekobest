import React from "react";
import api_url from "./api_url";


 <article>
</article> 

async function nekoBest() {
  const response = await fetch(api_url);
  const json = await response.json();
  console.log(json.results);

const user = data.results[0];
let image = user.url;
let artistName = user.artist_name;
let artist = user.artist_href;
let source = user.source_url;

const article = document.querySelectorAll(article);
    let imgs = document.createElement("img");
    let paraGraphe = document.createElement("p");
    let divs = document.createElement("div");

    article.append(divs);
    divs.appendChild(imgs).src = image;
    article.append(paraGraphe).textContent = artistName;

}

nekoBest();

export default nekoBest;
