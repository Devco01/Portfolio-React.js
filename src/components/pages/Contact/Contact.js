import React from 'react';
import './Contact.css';
import mapIcon from '../../../assets/icons/carte.png';
import phoneIcon from '../../../assets/icons/tel.png';
import placeholderIcon from '../../../assets/icons/placeholder.png';

function Contact() {
  return (
    <div className="contact">
      <div className="contact-container">
        <div className="contact-header">
          <h1>Contact</h1>
          <p className="contact-subtitle">
            Pour me contacter en vue d'un entretien ou d'une future collaboration, merci de remplir le formulaire de contact
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-form-section">
            <h2>Formulaire de contact</h2>
            <form className="contact-form">
              <div className="form-group">
                <input type="text" placeholder="Nom" required />
              </div>
              <div className="form-group">
                <input type="email" placeholder="Email" required />
              </div>
              <div className="form-group">
                <input type="tel" placeholder="Téléphone" required />
              </div>
              <div className="form-group">
                <input type="text" placeholder="Sujet" required />
              </div>
              <div className="form-group">
                <textarea placeholder="Message" required></textarea>
              </div>
              <button type="submit">Envoyer</button>
            </form>
          </div>

          <div className="contact-info-section">
            <h2>Mes coordonnées</h2>
            <div className="contact-info">
              <div className="info-item name">
                <span>John Doe</span>
              </div>
              <div className="info-item">
                <img src={mapIcon} alt="Adresse" className="contact-icon" />
                <span>40 rue Laure Diebold</span>
              </div>
              <div className="info-item">
                <img src={placeholderIcon} alt="Code postal" className="contact-icon" />
                <span>69009 Lyon, France</span>
              </div>
              <div className="info-item">
                <img src={phoneIcon} alt="Téléphone" className="contact-icon" />
                <span>10 20 30 40 50</span>
              </div>
              <div className="info-item">
                <i className="fas fa-envelope"></i>
                <span>john.doe@gmail.com</span>
              </div>
            </div>
            <div className="contact-map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2782.6269657540546!2d4.796403776657667!3d45.77866571240251!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4eb65edac5b3f%3A0xe01c47049cb2e2b9!2s40%20Rue%20Laure%20Diebold%2C%2069009%20Lyon!5e0!3m2!1sfr!2sfr!4v1705419943940!5m2!1sfr!2sfr"
                width="100%"
                height="450"
                style={{ border: 0 }}
                title="Carte de localisation du bureau"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                sandbox="allow-scripts allow-same-origin allow-popups"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact; 