import React from "react";
import Navbar from "./Navbar";
import Logo from "./Logo";

function Header() {
  return (
    <header className="header" aria-label="Main Header">
      <div className="header-container container">
        <div className="header-logo" aria-labelledby="header-logo-label">
          <Logo />
          <span id="header-logo-label" className="visually-hidden">
            Little Lemon Logo
          </span>
        </div>

        <Navbar />
      </div>
    </header>
  );
}

export default Header;
