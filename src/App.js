import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import axios from "axios";

// COMPONENTS
import { HomePage, CountryOverview } from "./components";
import { AppContainer, GlobalStyle } from "./components/shared/globalStyle";
import { darkTheme, lightTheme } from "./components/shared/Themes";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [singleCountry, setSingleCountry] = useState([]);
  const [theme, setTheme] = useState("light");
  const [region, setRegion] = useState("");
  const [search, setSearch] = useState("");

  const fetchCountries = async () => {
    const { data } = await axios.get(`https://restcountries.eu/rest/v2/all`);
    setCountries(data);
  };

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  const getRegion = (region) => {
    setRegion(region);
  };

  const getSearchValue = (value) => {
    setSearch(value);
  };

  const overViewSingleCountry = (alpha3Code) => {
    setSingleCountry([
      countries.find((country) => country.alpha3Code === alpha3Code),
    ]);
  };

  useEffect(() => {
    fetchCountries();
  }, []);

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <AppContainer>
        <Router>
          {<GlobalStyle />}
          <Switch>
            <Route exact path="/">
              <HomePage
                countries={countries}
                themeToggler={themeToggler}
                getRegion={getRegion}
                region={region}
                getSearchValue={getSearchValue}
                search={search}
                overViewSingleCountry={overViewSingleCountry}
              />
            </Route>
            <Route exact path="/countryOverview">
              <CountryOverview
                countries={countries}
                themeToggler={themeToggler}
                singleCountry={singleCountry}
              />
            </Route>
          </Switch>
        </Router>
      </AppContainer>
    </ThemeProvider>
  );
};

export default App;
