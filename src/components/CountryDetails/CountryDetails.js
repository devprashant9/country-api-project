import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import CountryDetailsShimmer from "./CountryDetailsShimmer";

function CountryDetails() {
  let { country } = useParams();
  const [countryData, setCountryData] = useState([]);

  //   console.log(countryData?.borders)

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/name/${country.toLocaleLowerCase()}`)
      .then((res) => res.json())
      .then(([data]) => {
        setCountryData({
          flag: data.flags.svg,
          name: data.name.common,
          nativename: Object.values(data.name.nativeName || {})[0].official,
          population: data.population.toLocaleString("en-IN"),
          region: data.region,
          subregion: data.region,
          capital: data.capital.join(", "),
          tld: data.tld.join(", "),
          currencies: Object.values(data.currencies)[0].name,
          languages: Object.values(data.languages).join(", "),
          borders: [],
        });

        if(!data.borders) {
            data.borders = [];
        }

        Promise.all(
          data.borders.map((border) => {
            return fetch(`https://restcountries.com/v3.1/alpha/${border}`)
              .then((res) => res.json())
              .then(([data]) => data.name.common);
          })
        ).then((data) =>
          setCountryData((prev) => ({ ...prev, borders: data }))
        );
      })

      .catch((err) => console.log(err));
  }, [country]);

  return (
    <>
      {countryData.length === 0 ? (
        <CountryDetailsShimmer />
      ) : (
        <main>
          <div className="country-details-container">
            <span className="back-button" onClick={() => history.back()}>
              <i className="fa-solid fa-arrow-left"></i>&nbsp; Back
            </span>
            <div className="country-details">
              <img src={countryData.flag} alt={countryData.flag} />
              <div className="details-text-container">
                <h1>{countryData.name}</h1>
                <div className="details-text">
                  <p>
                    <b>Native Name: </b>
                    <span className="native-name">
                      {countryData.nativename}
                    </span>
                  </p>
                  <p>
                    <b>Population: </b>
                    <span className="population">{countryData.population}</span>
                  </p>
                  <p>
                    <b>Region: </b>
                    <span className="region">{countryData.region}</span>
                  </p>
                  <p>
                    <b>Sub Region: </b>
                    <span className="sub-region">{countryData.subregion}</span>
                  </p>
                  <p>
                    <b>Capital: </b>
                    <span className="capital">{countryData.capital}</span>
                  </p>
                  <p>
                    <b>Top Level Domain: </b>
                    <span className="top-level-domain">{countryData.tld}</span>
                  </p>
                  <p>
                    <b>Currencies: </b>
                    <span className="currencies">{countryData.currencies}</span>
                  </p>
                  <p>
                    <b>Languages: </b>
                    <span className="languages">{countryData.languages}</span>
                  </p>
                </div>
                {countryData.borders.length !== 0 && (
                  <div className="border-countries">
                    <b>Border Countries: </b>&nbsp;
                    {countryData.borders.map((border) => {
                      return (
                        <Link key={border} to={`/${border}`}>
                          {border}
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>
          </div>
        </main>
      )}
    </>
  );
}

export default CountryDetails;
