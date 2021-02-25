import React from "react";

import { SelectContainer } from "./Select";

const Select = ({ countries, getRegion }) => {
  // Remove duplication in regions.
  const COUNTRY_REGIONS = [
    ...new Set(countries.map((country) => country.region)),
  ];

  COUNTRY_REGIONS.sort();
  COUNTRY_REGIONS.shift();
  COUNTRY_REGIONS.push("All");

  const handleOnChange = (e) => {
    getRegion(e.target.value);
  };

  return (
    <SelectContainer>
      <select onChange={handleOnChange}>
        <option disabled selected defaultValue="">
          Filter by region
        </option>
        {COUNTRY_REGIONS.map((region) => (
          <>
            <option key={region} defaultValue={region}>
              {region}
            </option>
          </>
        ))}
      </select>
    </SelectContainer>
  );
};

export default Select;
