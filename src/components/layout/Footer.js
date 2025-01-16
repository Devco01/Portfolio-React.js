import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <p>John Doe</p>
          <p>40 rue Laure Diebold</p>
          <p>69009 Lyon, France</p>
          <p>10 20 30 40 50</p>
          <p>john.doe@gmail.com</p>
          <div className="footer-social">
            <a href="https://github.com/johndoe" target="_blank" rel="noopener noreferrer">
              <img src={process.env.PUBLIC_URL + '/images/github.png'} alt="GitHub" />
            </a>
            <a href="https://twitter.com/johndoe" target="_blank" rel="noopener noreferrer">
              <img src={process.env.PUBLIC_URL + '/images/twitter.png'} alt="Twitter" />
            </a>
            <a href="https://linkedin.com/in/johndoe" target="_blank" rel="noopener noreferrer">
              <img src={process.env.PUBLIC_URL + '/images/linkedin.png'} alt="LinkedIn" />
            </a>
          </div>
        </div>
        <div className="footer-section">
          <h3>Liens utiles</h3>
          <ul>
            <li><Link to="/">Accueil</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/portfolio">Portfolio</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/mentions-legales">Mentions légales</Link></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Mes dernières réalisations</h3>
          <ul>
            <li><Link to="/portfolio">Fresh Food</Link></li>
            <li><Link to="/portfolio">Restaurant Akira</Link></li>
            <li><Link to="/portfolio">Espace bien être</Link></li>
            <li><Link to="/portfolio">SEO</Link></li>
            <li><Link to="/portfolio">Création d'une API</Link></li>
            <li><Link to="/portfolio">Maquette d'un site</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
