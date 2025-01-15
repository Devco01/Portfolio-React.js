import React from 'react';
import './Modal.css';

const Modal = ({ isOpen, onClose, profile }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <h2>Mon profil GitHub</h2>
          <button className="close-icon" onClick={onClose}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
              <path d="M3.72 3.72a.75.75 0 011.06 0L8 6.94l3.22-3.22a.75.75 0 111.06 1.06L9.06 8l3.22 3.22a.75.75 0 11-1.06 1.06L8 9.06l-3.22 3.22a.75.75 0 01-1.06-1.06L6.94 8 3.72 4.78a.75.75 0 010-1.06z"/>
            </svg>
          </button>
        </div>
        <div className="modal-body">
          {profile?.avatar_url ? (
            <img 
              src={profile.avatar_url}
              alt="Avatar"
              onError={(e) => {
                console.log('Erreur de chargement de l\'image');
                e.target.src = "https://github.com/identicons/Devco01.png";
              }}
            />
          ) : (
            <img 
              src="https://github.com/identicons/Devco01.png"
              alt="Avatar par défaut"
            />
          )}
          <div className="modal-info">
            <div className="info-section">
              <p>
                <svg height="16" width="16" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
                </svg>
                <a 
                  href="https://github.com/Devco01" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="github-link"
                >
                  {profile.name || "Nicolas.B"}
                </a>
              </p>
            </div>
            
            <div className="info-section">
              <p>
                <svg height="16" width="16" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M11.536 3.464a5 5 0 010 7.072L8 14.07l-3.536-3.535a5 5 0 117.072-7.072v.001zm1.06 8.132a6.5 6.5 0 10-9.192 0l3.535 3.536a1.5 1.5 0 002.122 0l3.535-3.536zM8 9a2 2 0 100-4 2 2 0 000 4z"/>
                </svg>
              </p>
            </div>

            <div className="info-section">
              <p>
                <svg height="16" width="16" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M8 1.5c-2.363 0-4 1.69-4 3.75 0 .984.424 1.625.984 2.304l.214.253c.223.264.47.556.673.848.284.411.537.896.621 1.49a.75.75 0 01-1.484.211c-.04-.282-.163-.547-.37-.847a8.695 8.695 0 00-.542-.68c-.084-.1-.173-.205-.268-.32C3.201 7.75 2.5 6.766 2.5 5.25 2.5 2.31 4.863 0 8 0s5.5 2.31 5.5 5.25c0 1.516-.701 2.5-1.328 3.259-.095.115-.184.22-.268.319-.207.245-.383.453-.541.681-.208.3-.33.565-.37.847a.75.75 0 01-1.485-.212c.084-.593.337-1.078.621-1.489.203-.292.45-.584.673-.848.075-.088.147-.173.213-.253.561-.679.985-1.32.985-2.304 0-2.06-1.637-3.75-4-3.75zM6 15.25a.75.75 0 01.75-.75h2.5a.75.75 0 010 1.5h-2.5a.75.75 0 01-.75-.75zM5.75 12a.75.75 0 000 1.5h4.5a.75.75 0 000-1.5h-4.5z"/>
                </svg>
                {profile.bio || "As we all know, John Doe's identity is unknown. I just wanted to contribute without being known."}
              </p>
            </div>

            <div className="info-section">
              <div className="github-stats">
                <p>
                  <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true">
                    <path fill="currentColor" d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8ZM5 12.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.25a.25.25 0 0 1-.4.2l-1.45-1.087a.249.249 0 0 0-.3 0L5.4 15.7a.25.25 0 0 1-.4-.2Z"></path>
                  </svg>
                  Repositories : {profile.public_repos || "1"}
                </p>
                <p>
                  <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true">
                    <path fill="currentColor" d="M2 5.5a3.5 3.5 0 1 1 5.898 2.549 5.508 5.508 0 0 1 3.034 4.084.75.75 0 1 1-1.482.235 4 4 0 0 0-7.9 0 .75.75 0 0 1-1.482-.236A5.507 5.507 0 0 1 3.102 8.05 3.493 3.493 0 0 1 2 5.5ZM11 4a.75.75 0 1 1 0 1.5 1.5 1.5 0 0 1 .666 2.844.75.75 0 0 0-.416.672v.352a.75.75 0 0 0 .574.73c1.2.289 2.162 1.2 2.522 2.372a.75.75 0 1 1-1.434.44 5.01 5.01 0 0 0-2.56-3.012A3 3 0 0 1 11 4Z"></path>
                  </svg>
                  Followers : {profile.followers || "16"}
                </p>
                <p>
                  <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true">
                    <path fill="currentColor" d="M2 5.5a3.5 3.5 0 1 1 5.898 2.549 5.508 5.508 0 0 1 3.034 4.084.75.75 0 1 1-1.482.235 4 4 0 0 0-7.9 0 .75.75 0 0 1-1.482-.236A5.507 5.507 0 0 1 3.102 8.05 3.493 3.493 0 0 1 2 5.5ZM11 4a.75.75 0 1 1 0 1.5 1.5 1.5 0 0 1 .666 2.844.75.75 0 0 0-.416.672v.352a.75.75 0 0 0 .574.73c1.2.289 2.162 1.2 2.522 2.372a.75.75 0 1 1-1.434.44 5.01 5.01 0 0 0-2.56-3.012A3 3 0 0 1 11 4Z"></path>
                  </svg>
                  Following : {profile.following || "0"}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="modal-footer">
          <button className="close-button" onClick={onClose}>
            Fermer
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal; 