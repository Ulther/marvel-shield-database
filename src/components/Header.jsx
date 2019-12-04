import React from "react";
import shieldLogo from "./shieldLogo.png"
import hydraLogo from "./hydraLogo.png"

let logo = shieldLogo;
const hailHydra=()=>{
if (logo===shieldLogo){
  logo = hydraLogo
}else{
  logo = shieldLogo
}
  return logo
}
const Header = () => {
  return (
    <header>
      <img className= "headerLogo" src={logo} onClick={hailHydra} alt="shield logo"  ></img>
      <h1>Super Secret S.H.I.E.L.D. Database</h1>
    </header>
  );
};

export default Header;
