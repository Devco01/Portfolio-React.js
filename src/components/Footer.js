import React from "react";
import "./Footer.css";
import githubIcon from "../images/github.png";
import twitterIcon from "../images/twitter.png";
import linkedinIcon from "../images/linkedin.png";

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
            <a href="https://github.com/Devco01" target="_blank" rel="noopener noreferrer">
              <img src={githubIcon} alt="GitHub" />
            </a>
            <a href="https://twitter.com/votre_compte" target="_blank" rel="noopener noreferrer">
              <img src={twitterIcon} alt="Twitter" />
            </a>
            <a href="https://linkedin.com/in/votre_compte" target="_blank" rel="noopener noreferrer">
              <img src={linkedinIcon} alt="LinkedIn" />
            </a>
          </div>
        </div>
        <div className="footer-section">
          <h3>Liens utiles</h3>
          <ul>
            <li>Accueil</li>
            <li>Services</li>
            <li>Portfolio</li>
            <li>Contact</li>
            <li>Mentions légales</li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Mes dernières réalisations</h3>
          <ul>
            <li>Fresh Food</li>
            <li>Restaurant Akira</li>
            <li>Espace bien être</li>
            <li>SEO</li>
            <li>Création d'une API</li>
            <li>Maquette d'un site</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
