import React from "react";
import { Link } from "react-router";

function Card({
  imageURL,
  countryTitle,
  countryArea,
  countryRegion,
  countryPopulation,
}) {
  return (
    <Link to={`/${countryTitle}`}>
      <div className="country-card">
        <img src={imageURL} alt={imageURL} />
        <div className="card-title">{countryTitle}</div>
        <div className="card-text">
          <p>Area: {countryArea}</p>
          <p>Region: {countryRegion}</p>
          <p>Population: {countryPopulation}</p>
        </div>
      </div>
    </Link>
  );
}

export default Card;
