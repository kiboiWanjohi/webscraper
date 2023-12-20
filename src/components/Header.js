import React from "react";
import logo from "./logo.jpeg";
const Header = () => {
  const today = new Date().toString().slice(0, 10);
  return (
    <div>
      <header>
        <div className="textContainer">
          <h1>Dealfinder</h1>
          <p>{today}</p>
        </div>
        <div className="logo-container">
          <img src={logo} alt="logo" />
        </div>
      </header>
    </div>
  );
};

export default Header;
