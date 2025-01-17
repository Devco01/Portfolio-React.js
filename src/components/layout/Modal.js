import React from 'react';
import { createPortal } from 'react-dom';
import './Modal.css';
import userIcon from '../../assets/icons/utilisateur.png';
import locationIcon from '../../assets/icons/placeholder.png';
import bioIcon from '../../assets/icons/paragraphe.png';
import repoIcon from '../../assets/icons/cube.png';
import followersIcon from '../../assets/icons/followers.png';

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
              <img src={userIcon} alt="User" className="icon" />
              <span>{profile?.login || "John Doe"}</span>
            </a>
            <div className="info-item">
              <img src={locationIcon} alt="Location" className="icon" />
              <span>{profile?.location || ""}</span>
            </div>
            <div className="info-item bio">
              <img src={bioIcon} alt="Bio" className="icon" />
              <span>{profile?.bio || "As we all know, John Doe's identity is unknown. I just wanted to contribute without being known."}</span>
            </div>
            <div className="info-item">
              <img src={repoIcon} alt="Repositories" className="icon" />
              <span>Repositories : {profile?.public_repos || "1"}</span>
            </div>
            <div className="info-item">
              <img src={followersIcon} alt="Followers" className="icon" />
              <span>Followers : {profile?.followers || "16"}</span>
            </div>
            <div className="info-item">
              <img src={followersIcon} alt="Following" className="icon" />
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