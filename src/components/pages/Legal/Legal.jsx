import React, { useState } from 'react';
import './Legal.css';

import homeIcon from '../../../assets/icons/carte.png';
import locationIcon from '../../../assets/icons/placeholder.png';
import phoneIcon from '../../../assets/icons/tel.png';
import mailIcon from '../../../assets/icons/email.png';
import globeIcon from '../../../assets/icons/globe.png';

const Legal = () => {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    if (openSection === section) {
      setOpenSection(null);
    } else {
      setOpenSection(section);
    }
  };

  return (
    <div className="legal">
      <div className="legal-container">
        <div className="legal-header">
          <h1>Mentions légales</h1>
          <div className="legal-subtitle"></div>
        </div>

        <div className="legal-content">
          <article className="legal-section">
            <div 
              className={`section-header ${openSection === 'editor' ? 'active' : ''}`}
              onClick={() => toggleSection('editor')}
            >
              <div className="section-title">Éditeur du site</div>
              <span className="arrow"></span>
            </div>
            <div className={`section-content ${openSection === 'editor' ? 'open' : ''}`}>
              <div className="editor-info">
                <div className="info-item name">
                  <span>John Doe</span>
                </div>
                <div className="info-item address">
                  <img src={homeIcon} alt="Adresse" className="contact-icon" />
                  <span>40 rue Laure Diebold</span>
                </div>
                <div className="info-item postal">
                  <img src={locationIcon} alt="Code postal" className="contact-icon" />
                  <span>69009 Lyon, France</span>
                </div>
                <div className="info-item">
                  <img src={phoneIcon} alt="Téléphone" className="contact-icon" />
                  <span>10 20 30 40 50</span>
                </div>
                <div className="info-item">
                  <img src={mailIcon} alt="Email" className="contact-icon" />
                  <span>john.doe@gmail.com</span>
                </div>
              </div>
            </div>
          </article>

          <article className="legal-section">
            <div 
              className={`section-header ${openSection === 'host' ? 'active' : ''}`}
              onClick={() => toggleSection('host')}
            >
              <div className="section-title">Hébergeur</div>
              <span className="arrow"></span>
            </div>
            <div className={`section-content ${openSection === 'host' ? 'open' : ''}`}>
              <div className="editor-info">
                <div className="info-item host-name">
                  <span>alwaysdata</span>
                </div>
                <div className="info-item">
                  <span>91 Rue du Faubourg Saint-Honoré, 75008 Paris</span>
                </div>
                <div className="info-item">
                  <img src={globeIcon} alt="Site web" className="contact-icon" />
                  <a href="https://www.alwaysdata.com" target="_blank" rel="noopener noreferrer">www.alwaysdata.com</a>
                </div>
              </div>
            </div>
          </article>

          <article className="legal-section">
            <div 
              className={`section-header ${openSection === 'credits' ? 'active' : ''}`}
              onClick={() => toggleSection('credits')}
            >
              <div className="section-title">Crédits</div>
              <span className="arrow"></span>
            </div>
            <div className={`section-content ${openSection === 'credits' ? 'open' : ''}`}>
              <div className="editor-info">
                <div className="info-item credits-title">
                  <span>Crédits</span>
                </div>
                <div className="info-item">
                  <span>Ce site a été réalisé par John Doe, étudiant au </span>
                  <a href="https://www.centre-europeen-formation.fr/" target="_blank" rel="noopener noreferrer">Centre Européen de formation</a>
                  <span>.</span>
                </div>
                <div className="info-item">
                  <span>Les images utilisées sur ce site sont libres de droits et ont été obtenues sur le site </span>
                  <a href="https://pixabay.com/" target="_blank" rel="noopener noreferrer">Pixabay</a>
                </div>
                <div className="info-item">
                  <span>La favicon de ce site a été fournie par </span>
                  <a href="https://www.flaticon.com/" target="_blank" rel="noopener noreferrer">John doe Icons erstellt von Freepik - Flaticon</a>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
};

export default Legal; 