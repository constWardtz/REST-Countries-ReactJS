import React, { useState } from "react";

import { SearchContainer } from "./Search";

const Search = ({ getSearchValue }) => {
  const [search, setSearch] = useState("");

  const handleOnChange = (e) => {
    setSearch(e.target.value);
    getSearchValue(search);
  };

  return (
    <SearchContainer>
      <input
        type="text"
        placeholder="Search for a country.."
        value={search}
        onChange={handleOnChange}
      />
      <ion-icon name="search-outline"></ion-icon>
    </SearchContainer>
  );
};

export default Search;
