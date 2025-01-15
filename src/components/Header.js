import React, { useState } from "react";
import "./Header.css";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <header className="header">
      <div className="header-content">
        <a href="/" className="logo">JOHN DOE</a>
        
        <button 
          className={`burger ${isOpen ? 'open' : ''}`} 
          onClick={toggleMenu} 
          aria-label="Menu"
          aria-expanded={isOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav>
          <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
            <li><a href="/" className="active" onClick={handleLinkClick}>HOME</a></li>
            <li><a href="/services" onClick={handleLinkClick}>SERVICES</a></li>
            <li><a href="/portfolio" onClick={handleLinkClick}>PORTFOLIO</a></li>
            <li><a href="/contact" onClick={handleLinkClick}>CONTACT</a></li>
            <li><a href="/mentions-legales" onClick={handleLinkClick}>MENTIONS LÉGALES</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header; 