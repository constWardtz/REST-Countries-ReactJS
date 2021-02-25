import React from "react";
import { Contents, CostumLink } from "../shared/globalStyle";
import { Overview, Buttons, Column } from "./Style";

import Navbar from "../HomePage/Elements/Navbar";
import { ActionsContainer } from "../HomePage/Elements/Actions/Actions";

const Country = ({ singleCountry }) => {
  return (
    <Overview>
      {singleCountry.map((country) => (
        <>
          <div>
            <img src={country.flag} alt={country.name} />
          </div>
          <div>
            <h1>{country.name}</h1>

            <Column>
              <ul>
                <p>
                  <span>Native Name: </span>
                  {country.nativeName ? country.nativeName : "None"}
                </p>
                <p>
                  <span>Population: </span>
                  {country.population ? country.population : "None"}
                </p>
                <p>
                  <span>Region: </span>{" "}
                  {country.region ? country.region : "None"}
                  <p>
                    <span>Sub Region: </span>{" "}
                    {country.subregion ? country.subregion : "None"}
                  </p>
                  <p>
                    <span>Capital: </span>{" "}
                    {country.capital ? country.capital : "None"}
                  </p>
                </p>
              </ul>
              <ul>
                <p>
                  <span>Top Level Domain: </span>{" "}
                  {country.topLevelDomain
                    ? country.topLevelDomain.map((domain) => domain)
                    : "None"}
                </p>
                <p>
                  <span>Currencies: </span>{" "}
                  {country.currencies
                    ? country.currencies.map((currency) => currency.code)
                    : "None"}
                </p>
                <p>
                  <span>Languages: </span>{" "}
                  {country.languages
                    ? country.languages.map((language) => language.name)
                    : "None"}
                </p>
              </ul>
            </Column>

            <Buttons>
              <h1>Border Countries:</h1>
              <div>
                {country.borders.length
                  ? country.borders.map((border) => (
                      <button key={border}>{border}</button>
                    ))
                  : "None"}
              </div>
            </Buttons>
          </div>
        </>
      ))}
    </Overview>
  );
};
const CountryOverview = ({ themeToggler, singleCountry }) => {
  return (
    <>
      <Navbar themeToggler={themeToggler} />
      <Contents>
        <ActionsContainer top="3rem">
          <CostumLink to="/">
            <button>
              <ion-icon name="arrow-back-outline"></ion-icon> &nbsp;&nbsp;Back
            </button>
          </CostumLink>
        </ActionsContainer>
        <Country singleCountry={singleCountry} />
      </Contents>
    </>
  );
};

export default CountryOverview;
