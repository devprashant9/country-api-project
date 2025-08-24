import React, { useEffect, useState } from "react";
import MainShimmer from "./MainShimmer";
import Card from "../Card/Card";
import { useOutletContext } from "react-router";

function Main({ search }) {
  const [countriesData, setCountriesData] = useState([]);
  const mode = useOutletContext();

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/all?fields=name,capital,region,subregion,population,area,flags,languages,currencies,tld`)
      .then((res) => res.json())
      .then((data) => {
        setCountriesData(data);
      });
  }, []);

  search = search.toLowerCase();

  return (
    <main className={`${mode === "dark" ? "dark-bg" : ""}`}>
      <div className="countries-container">
        {countriesData.length === 0
          ? Array.from({ length: 12 }).map((_, index) => (
              <MainShimmer key={index} />
            ))
          : countriesData
              .filter(
                (country) =>
                  country.name.common.toLowerCase().includes(search) ||
                  country.region.toLowerCase().includes(search)
              )
              .map((country) => (
                <Card
                  key={country.name.common}
                  imageURL={country?.flags?.svg}
                  countryTitle={country.name.common}
                  countryArea={country.area}
                  countryRegion={country.region}
                  countryPopulation={country.population}
                />
              ))}
      </div>
    </main>
  );
}

export default Main;
