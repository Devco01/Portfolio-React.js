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
<<<<<<< Updated upstream
    fetch('https://api.github.com/users/Devco01', {
      headers: {
        'Authorization': `token ${process.env.REACT_APP_GITHUB_TOKEN}`,
        'Accept': 'application/vnd.github.v3+json'
      }
    })
      .then(response => {
        if (!response.ok) {
          console.log('Status:', response.status);
          return response.text().then(text => {
=======
    const token = process.env.REACT_APP_GITHUB_TOKEN;
    console.log('Token disponible:', !!token); // Vérifie si le token existe

    fetch('https://api.github.com/users/Devco01', {
      headers: {
        'Authorization': `token ${token}`,
        'Accept': 'application/vnd.github.v3+json',
        'Content-Type': 'application/json',
      }
    })
      .then(response => {
        console.log('Status de la réponse:', response.status);
        console.log('Headers:', [...response.headers.entries()]);
        
        if (!response.ok) {
          return response.text().then(text => {
            console.error('Erreur API:', text);
>>>>>>> Stashed changes
            throw new Error(`GitHub API error: ${text}`);
          });
        }
        return response.json();
      })
      .then(data => {
<<<<<<< Updated upstream
        console.log('Données GitHub complètes:', data);
        console.log('URL de l\'avatar:', data.avatar_url);
        setProfile(data);
      })
      .catch(error => {
        console.error('Erreur détaillée:', error);
=======
        console.log('Données GitHub reçues:', data);
        if (data.avatar_url) {
          console.log('Avatar URL:', data.avatar_url);
        }
        setProfile(data);
      })
      .catch(error => {
        console.error('Erreur lors de la récupération du profil:', error);
>>>>>>> Stashed changes
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