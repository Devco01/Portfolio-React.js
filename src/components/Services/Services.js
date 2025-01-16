import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import './Services.css';
import pencilIcon from '../../images/pinceau.svg';
import codeIcon from '../../images/code.png';
import searchIcon from '../../images/loupe.svg';

const Services = () => {
  return (
    <>
      <Header />
      <main className="services-container">
        <section className="services-hero"></section>
        
        <div className="services-content">
          <h1>Mon offre de services</h1>
          <p className="services-subtitle">Voici les prestations sur lesquelles je dois intervenir</p>

          <section className="services-grid">
            <div className="service-card">
              <div className="service-icon">
                <img src={pencilIcon} alt="UX Design icon" />
              </div>
              <div className="service-content">
                <h3>UX Design</h3>
                <p>L'UX Design est une discipline qui consiste à concevoir des produits (sites web, applications mobiles, logiciels, objets connectés, etc.) en plaçant l'utilisateur au centre des préoccupations. L'objectif est de rendre l'expérience utilisateur la plus fluide et agréable possible.</p>
              </div>
            </div>

            <div className="service-card">
              <div className="service-icon">
                <img src={codeIcon} alt="Développement web icon" />
              </div>
              <div className="service-content">
                <h3>Développement web</h3>
                <p>Le développement de sites web consiste à créer des sites internet en utilisant des langages de programmation (HTML, CSS, JavaScript, PHP, etc.) et des frameworks (Bootstrap, React, Angular, etc.).</p>
              </div>
            </div>

            <div className="service-card">
              <div className="service-icon">
                <img src={searchIcon} alt="Référencement icon" />
              </div>
              <div className="service-content">
                <h3>Référencement</h3>
                <p>Le référencement naturel (SEO) est une technique qui consiste à optimiser un site web pour le faire remonter dans les résultats des moteurs de recherche (Google, Bing, Yahoo, etc.). L'objectif est d'attirer un maximum de visiteurs qualifiés sur le site.</p>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Services; 