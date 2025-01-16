import React from 'react';
import { createPortal } from 'react-dom';
import './Modal.css';

const Modal = ({ isOpen, onClose, profile }) => {
  if (!isOpen) return null;

  const modalContent = (
    <div className="modal-overlay">
      <div className="modal">
        <div className="modal-header">
          <span className="modal-title">Mon profil GitHub</span>
          <button className="close-icon" onClick={onClose}>×</button>
        </div>
        <div className="modal-body">
          <div className="modal-avatar">
            {profile?.avatar_url ? (
              <img 
                src={profile.avatar_url}
                alt="Avatar"
                onError={(e) => {
                  e.target.src = "https://github.com/identicons/Devco01.png";
                }}
              />
            ) : (
              <img 
                src="https://github.com/identicons/Devco01.png"
                alt="Avatar par défaut"
              />
            )}
          </div>
          <div className="modal-info">
            <a href={profile?.html_url || "https://github.com/Devco01"} target="_blank" rel="noopener noreferrer" className="info-item username">
              <img src={process.env.PUBLIC_URL + '/images/utilisateur.png'} alt="User" className="icon" />
              <span>{profile?.login || "John Doe"}</span>
            </a>
            <div className="info-item">
              <img src={process.env.PUBLIC_URL + '/images/placeholder.png'} alt="Location" className="icon" />
              <span>{profile?.location || ""}</span>
            </div>
            <div className="info-item bio">
              <img src={process.env.PUBLIC_URL + '/images/paragraphe.png'} alt="Bio" className="icon" />
              <span>{profile?.bio || "As we all know, John Doe's identity is unknown. I just wanted to contribute without being known."}</span>
            </div>
            <div className="info-item">
              <img src={process.env.PUBLIC_URL + '/images/cube.png'} alt="Repositories" className="icon" />
              <span>Repositories : {profile?.public_repos || "1"}</span>
            </div>
            <div className="info-item">
              <img src={process.env.PUBLIC_URL + '/images/followers.png'} alt="Followers" className="icon" />
              <span>Followers : {profile?.followers || "16"}</span>
            </div>
            <div className="info-item">
              <img src={process.env.PUBLIC_URL + '/images/followers.png'} alt="Following" className="icon" />
              <span>Following : {profile?.following || "0"}</span>
            </div>
          </div>
        </div>
        <div className="modal-footer">
          <button className="close-button" onClick={onClose}>Fermer</button>
        </div>
      </div>
    </div>
  );

  return createPortal(modalContent, document.body);
};

export default Modal; 