import React from "react";
import shieldLogo from "./shieldLogo.png"

const Header = () => {
  return (
    <header>
      <img className= "headerLogo" src={shieldLogo} alt="shield logo"  ></img>
      <h1>Super Secret S.H.I.E.L.D. Database</h1>
    </header>
  );
};

export default Header;
