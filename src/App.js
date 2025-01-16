import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Layout Components
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Modal from './components/layout/Modal';

// Page Components
import Home from './components/pages/Home/Home';
import Services from './components/pages/Services/Services';
import Portfolio from './components/pages/Portfolio/Portfolio';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [profile, setProfile] = useState({});

  useEffect(() => {
    console.log('Récupération des données GitHub...');
    fetch('https://api.github.com/users/Devco01')
      .then(response => {
        console.log('Statut de la réponse:', response.status);
        return response.json();
      })
      .then(data => {
        console.log('Données GitHub reçues:', data);
        setProfile(data);
      })
      .catch(error => {
        console.error('Erreur lors de la récupération du profil:', error);
        setProfile({
          login: 'Devco01',
          avatar_url: 'https://github.com/identicons/Devco01.png',
          bio: 'Développeur web full-stack',
          public_repos: 0,
          followers: 16,
          following: 0,
          html_url: 'https://github.com/Devco01'
        });
      });
  }, []);

  const handleOpenModal = () => {
    console.log('Ouverture de la modale');
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    console.log('Fermeture de la modale');
    setIsModalOpen(false);
  };

  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home onButtonClick={handleOpenModal} />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
        <Footer />
        <Modal 
          isOpen={isModalOpen} 
          onClose={handleCloseModal} 
          profile={profile}
        />
      </div>
    </Router>
  );
}

export default App;