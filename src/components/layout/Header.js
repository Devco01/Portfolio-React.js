import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="header-content">
        <span className="logo">John Doe</span>
        <button 
          className={`burger-menu ${isMenuOpen ? 'active' : ''}`} 
          onClick={toggleMenu}
          aria-label="Menu"
        >
          <span className="burger-bar"></span>
          <span className="burger-bar"></span>
          <span className="burger-bar"></span>
        </button>
        <nav className={isMenuOpen ? 'active' : ''}>
          <ul className="nav-links">
            <li><Link to="/">HOME</Link></li>
            <li><Link to="/services">SERVICES</Link></li>
            <li><Link to="/portfolio">PORTFOLIO</Link></li>
            <li><Link to="/contact">CONTACT</Link></li>
            <li><a href="#mentions">MENTIONS LÉGALES</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header; 