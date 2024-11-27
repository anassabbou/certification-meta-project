import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo/logo.png";
import logoVerticalWhite from "../assets/images/logo/logoVerticalWhite.png";

function Logo({ variant = "horizontal", className = "" }) {
  const logoSrc = variant === "vertical" ? logoVerticalWhite : logo;
  const logoClass = variant === "vertical" ? "logo-vertical" : "logo";

  return (
    <div className={`logo-container ${className}`}>
      <Link to="/" aria-label="Navigate to Home">
        <img
          src={logoSrc}
          alt="Little Lemon Logo"
          className={logoClass}
          aria-hidden="true"
        />
      </Link>
    </div>
  );
}

Logo.propTypes = {
  variant: PropTypes.oneOf(["horizontal", "vertical"]),
  className: PropTypes.string,
};

export default Logo;
