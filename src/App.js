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
            throw new Error(`GitHub API error: ${text}`);
          });
        }
        return response.json();
      })
      .then(data => {
        console.log('Données GitHub complètes:', data);
        console.log('URL de l\'avatar:', data.avatar_url);
        setProfile(data);
      })
      .catch(error => {
        console.error('Erreur détaillée:', error);
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
