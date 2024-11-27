import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <button
        className="menu-toggle"
        onClick={toggleMenu}
        aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={menuOpen}
      >
        <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} className="menu-icon" />
      </button>

      <nav className={`navbar ${menuOpen ? "show" : ""}`} aria-label="Main Navigation">
        <ul className="nav-list">
          <li className="nav-item">
            <a href="#home" className="nav-link" aria-label="Navigate to Home">Home</a>
          </li>
          <li className="nav-item">
            <a href="#about" className="nav-link" aria-label="Navigate to About">About</a>
          </li>
          <li className="nav-item">
            <a href="#menu" className="nav-link" aria-label="Navigate to Menu">Menu</a>
          </li>
          <li className="nav-item">
            <a href="#reservations" className="nav-link" aria-label="Navigate to Reservations">Reservations</a>
          </li>
          <li className="nav-item">
            <a href="#order-online" className="nav-link" aria-label="Navigate to Order Online">Order Online</a>
          </li>
          <li className="nav-item">
            <a href="#login" className="nav-link" aria-label="Navigate to Login">Login</a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
