import React from 'react';
import './Services.css';
import pinceauIcon from '../../../assets/icons/pinceau.svg';
import codeIcon from '../../../assets/icons/code.png';
import loupeIcon from '../../../assets/icons/loupe.svg';

const Services = () => {
  return (
    <main className="services-container">
      <section 
        className="services-hero" 
        style={{ 
          backgroundImage: `url(${process.env.PUBLIC_URL}/images/banner.jpg)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      ></section>
      
      <div className="services-content">
        <h1>Mon offre de services</h1>
        <p className="services-subtitle">Voici les prestations sur lesquelles je dois intervenir</p>

        <section className="services-grid">
          <div className="service-card">
            <div className="service-icon">
              <img 
                src={pinceauIcon}
                alt="UX Design icon"
                style={{width: '35px', height: '35px'}}
              />
            </div>
            <h3>UX Design</h3>
            <p>L'UX Design est une méthode de conception centrée sur l'utilisateur. Son but est d'offrir une expérience de navigation optimale à l'internaute.</p>
          </div>

          <div className="service-card">
            <div className="service-icon">
              <img 
                src={codeIcon}
                alt="Développement web icon"
                style={{width: '45px', height: '45px'}}
              />
            </div>
            <h3>Développement Web</h3>
            <p>Le développement de sites web est la réalisation, la conception et la maintenance de sites web. Il s'agit d'un processus qui suit des étapes précises.</p>
          </div>

          <div className="service-card">
            <div className="service-icon">
              <img 
                src={loupeIcon}
                alt="Référencement icon"
                style={{width: '35px', height: '35px'}}
              />
            </div>
            <h3>Référencement</h3>
            <p>Le référencement naturel (SEO) est une technique qui consiste à optimiser un site web pour le faire remonter dans les résultats des moteurs de recherche. L'objectif est d'attirer un maximum de visiteurs qualifiés.</p>
          </div>
        </section>
      </div>
    </main>
  );
}

export default Services; 