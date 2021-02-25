import React from "react";

import Search from "./Search";
import Select from "./Select";
import { Contents } from "../../../shared/globalStyle";
import { ActionsContainer } from "./Actions";

const Actions = ({ countries, getRegion, getSearchValue }) => {
  return (
    <Contents>
      <ActionsContainer>
        <Search getSearchValue={getSearchValue} />
        <Select countries={countries} getRegion={getRegion} />
      </ActionsContainer>
    </Contents>
  );
};

export default Actions;
