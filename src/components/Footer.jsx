import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faInstagram, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import Logo from "./Logo";

function Footer() {
  return (
    <footer className="footer" aria-label="Footer">
      <div className="footer-container container">
        <div className="footer-logo" aria-labelledby="footer-logo">
          <Logo variant="vertical" />
          <p id="footer-logo" className="visually-hidden">Little Lemon Logo</p>
        </div>

        {/* Navigation Menu */}
        <nav className="footer-section" aria-labelledby="footer-nav-heading">
          <h3 id="footer-nav-heading">Navigation Menu</h3>
          <ul>
            <li><a href="/" aria-label="Go to Home page">Home</a></li>
            <li><a href="/about" aria-label="Go to About page">About</a></li>
            <li><a href="/menu" aria-label="Go to Menu page">Menu</a></li>
            <li><a href="/reservations" aria-label="Go to Reservations page">Reservations</a></li>
            <li><a href="/order-online" aria-label="Order food online">Order online</a></li>
            <li><a href="/login" aria-label="Login to your account">Login</a></li>
          </ul>
        </nav>

        {/* Contacts */}
        <div className="footer-section" aria-labelledby="footer-contacts-heading">
          <h3 id="footer-contacts-heading">Contacts</h3>
          <ul>
            <li>
              <FontAwesomeIcon icon={faMapMarkerAlt} aria-hidden="true" />
              <span>123 Lemon Street</span>
            </li>
            <li>
              <FontAwesomeIcon icon={faPhone} aria-hidden="true" />
              <a href="tel:+18005551234" aria-label="Call us at +1 (800) 555-1234">+1 (800) 555-1234</a>
            </li>
            <li>
              <FontAwesomeIcon icon={faEnvelope} aria-hidden="true" />
              <a href="mailto:info@littlelemon.com" aria-label="Email us at info@littlelemon.com">info@littlelemon.com</a>
            </li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div className="footer-section" aria-labelledby="footer-social-heading">
          <h3 id="footer-social-heading">Social Media Links</h3>
          <ul>
            <li>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit our Facebook page"
              >
                <FontAwesomeIcon icon={faFacebookF} aria-hidden="true" /> Facebook
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit our Instagram page"
              >
                <FontAwesomeIcon icon={faInstagram} aria-hidden="true" /> Instagram
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit our LinkedIn page"
              >
                <FontAwesomeIcon icon={faLinkedinIn} aria-hidden="true" /> LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-credit">
        <p className="footer-text container" role="contentinfo">
          &copy; 2024 Little Lemon. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
