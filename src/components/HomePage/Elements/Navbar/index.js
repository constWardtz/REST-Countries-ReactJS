import React from "react";

import { Nav } from "./Navbar";
import { Contents } from "../../../shared/globalStyle";

const Navbar = ({ themeToggler }) => {
  return (
    <Nav>
      <Contents>
        <div>
          <h1>Where in the world?</h1>
          <span onClick={themeToggler}>
            <ion-icon name="moon-outline"></ion-icon>Dark Mode
          </span>
        </div>
      </Contents>
    </Nav>
  );
};

export default Navbar;
