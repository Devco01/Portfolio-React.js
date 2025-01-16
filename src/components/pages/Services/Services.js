import React from 'react';
import './Services.css';
import banner from '../../../assets/images/banner.jpg';

const Services = () => {
  return (
    <main>
      <div className="services-container">
        <div 
          className="services-hero" 
          style={{ backgroundImage: `url(${banner})` }}
        >
        </div>
        <div className="services-content">
          <h1>Mes Services</h1>
          <p className="services-subtitle">Des solutions adaptées à vos besoins</p>
          
          <section className="services-grid">
            <div className="service-card">
              <div className="service-icon">
                <img src={process.env.PUBLIC_URL + '/images/code.svg'} alt="Développement icon" />
              </div>
              <div className="service-content">
                <h3>UX Design</h3>
                <p>L'UX Design est une méthode de conception centrée sur l'utilisateur. Son but est d'offrir une expérience de navigation optimale à l'internaute.</p>
              </div>
            </div>

            <div className="service-card">
              <div className="service-icon">
                <img src={process.env.PUBLIC_URL + '/images/design.svg'} alt="Design icon" />
              </div>
              <div className="service-content">
                <h3>Développement Web</h3>
                <p>Le développement de sites web est la réalisation, la conception et la maintenance de sites web. Il sagit d'un processus qui suit des étapes précises.</p>
              </div>
            </div>

            <div className="service-card">
              <div className="service-icon">
                <img src={process.env.PUBLIC_URL + '/images/loupe.svg'} alt="Référencement icon" />
              </div>
              <div className="service-content">
                <h3>Référencement</h3>
                <p>Le référencement naturel (SEO) est une technique qui consiste à optimiser un site web pour le faire remonter dans les résultats des moteurs de recherche (Google, Bing, Yahoo, etc.). L'objectif est d'attirer un maximum de visiteurs qualifiés sur le site.</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}

export default Services; 