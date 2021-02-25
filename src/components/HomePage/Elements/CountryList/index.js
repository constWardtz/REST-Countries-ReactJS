import React from "react";

import { CountryListContainer } from "./CountryList";
import { Contents, CostumLink } from "../../../shared/globalStyle";

const RenderCountry = ({
  population,
  region,
  capital,
  flag,
  alpha3Code,
  name,
  overViewSingleCountry,
}) => {
  return (
    <div key={alpha3Code} onClick={() => overViewSingleCountry(alpha3Code)}>
      <ul>
        <img src={flag} alt={name + " flag"} />
      </ul>
      <ul>
        <h2>{name}</h2>
        <p>
          <span>Population:</span> {population}
        </p>
        <p>
          <span>Region:</span> {region}
        </p>
        <p>
          <span>Capital:</span> {capital}
        </p>
      </ul>
    </div>
  );
};

const CountryList = ({ countries, region, search, overViewSingleCountry }) => {
  return (
    <Contents>
      <CountryListContainer>
        {countries
          .filter((country) => region === country.region || region === "All")
          .filter(
            (country) =>
              country.name.toLowerCase().includes(search.toLowerCase()) ||
              country.alpha2Code.toLowerCase().includes(search.toLowerCase()) ||
              country.alpha3Code.toLowerCase().includes(search.toLowerCase())
          )
          .map((country) => (
            <CostumLink to="/countryOverview">
              <RenderCountry
                population={country.population}
                region={country.region}
                capital={country.capital}
                flag={country.flag}
                name={country.name}
                alpha3Code={country.alpha3Code}
                overViewSingleCountry={overViewSingleCountry}
              />
            </CostumLink>
          ))}
      </CountryListContainer>
    </Contents>
  );
};

export default CountryList;
