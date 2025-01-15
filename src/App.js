import './App.css';
import React, { useState, useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Header from './components/Header';
import Home from './components/Home/Home';
import Footer from "./components/Footer";
import Modal from './components/Modal';
import "./index.css";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [profile, setProfile] = useState({});

  useEffect(() => {
    console.log('État de la modale changé:', isModalOpen);
  }, [isModalOpen]);

  useEffect(() => {
    fetch('https://api.github.com/users/Devco01')
      .then(response => {
        console.log('Status de la réponse:', response.status);
        return response.json();
      })
      .then(data => {
        console.log('Données GitHub reçues:', data);
        setProfile(data);
      })
      .catch(error => {
        console.error('Erreur lors de la récupération du profil:', error);
        // Définir un profil par défaut en cas d'erreur
        setProfile({
          login: 'Devco01',
          avatar_url: 'https://github.com/identicons/Devco01.png',
          bio: 'Développeur web full-stack',
          public_repos: 0,
          html_url: 'https://github.com/Devco01'
        });
      });
  }, []);

  const handleOpenModal = () => {
    console.log('Ouverture de la modale demandée');
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    console.log('Fermeture de la modale demandée');
    setIsModalOpen(false);
  };

  return (
    <div className="App">
      <Header />
      <Home onButtonClick={handleOpenModal} />
      <Footer />
      <Modal 
        isOpen={isModalOpen} 
        onClose={handleCloseModal} 
        profile={profile} 
      />
    </div>
  );
}

export default App;