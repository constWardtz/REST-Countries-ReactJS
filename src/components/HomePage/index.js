import React from "react";

import { Navbar, Actions, CountryList } from "./Elements/";

import { CostumLink } from "../shared/globalStyle";

const HomePage = ({
  countries,
  themeToggler,
  getRegion,
  region,
  getSearchValue,
  search,
  overViewSingleCountry,
}) => {
  return (
    <>
      <CostumLink to="/">
        <Navbar themeToggler={themeToggler} />
      </CostumLink>
      <Actions
        countries={countries}
        getRegion={getRegion}
        getSearchValue={getSearchValue}
      />
      <CountryList
        countries={countries}
        region={region}
        search={search}
        overViewSingleCountry={overViewSingleCountry}
      />
    </>
  );
};

export default HomePage;
