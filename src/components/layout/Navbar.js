import React, { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <a href="/" className="logo">JOHN DOE</a>
      
      <div className={`burger ${isOpen ? 'open' : ''}`} onClick={toggleMenu} aria-label="Menu">
        <span></span>
        <span></span>
        <span></span>
      </div>

      <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
        <li><a href="/" className="active" onClick={handleLinkClick}>HOME</a></li>
        <li><a href="/services" onClick={handleLinkClick}>SERVICES</a></li>
        <li><a href="/portfolio" onClick={handleLinkClick}>PORTFOLIO</a></li>
        <li><a href="/contact" onClick={handleLinkClick}>CONTACT</a></li>
        <li><a href="/mentions-legales" onClick={handleLinkClick}>MENTIONS LÉGALES</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
