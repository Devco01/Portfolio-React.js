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
    // Appel sans token pour les données publiques
    fetch('https://api.github.com/users/Devco01')
      .then(response => {
        console.log('Status de la réponse:', response.status);
        
        if (!response.ok) {
          return response.text().then(text => {
            console.error('Erreur API:', text);
            throw new Error(`GitHub API error: ${text}`);
          });
        }
        return response.json();
      })
      .then(data => {
        console.log('Données GitHub reçues:', data);
        setProfile(data);
      })
      .catch(error => {
        console.error('Erreur lors de la récupération du profil:', error);
      });
  }, []);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="App">
      <Header />
      <Home onButtonClick={handleOpenModal} />
      <Footer />
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} profile={profile} />
    </div>
  );
}

export default App;