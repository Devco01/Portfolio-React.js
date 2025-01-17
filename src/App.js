import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';

import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Modal from './components/layout/Modal';

import Home from './components/pages/Home/Home';
import Portfolio from './components/pages/Portfolio/Portfolio';
import Contact from './components/pages/Contact/Contact';
import Legal from './components/pages/Legal/Legal';
import Services from './components/pages/Services/Services';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [githubProfile, setGithubProfile] = useState(null);

  useEffect(() => {
    fetch('https://api.github.com/users/Devco01')
      .then(response => response.json())
      .then(data => {
        setGithubProfile(data);
      })
      .catch(error => {
        console.error('Erreur lors de la récupération du profil:', error);
        setGithubProfile({
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

  return (
    <div className="App">
      <Header onGithubClick={() => setIsModalOpen(true)} />
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        profile={githubProfile}
      />
      <Routes>
        <Route path="/" element={<Home onButtonClick={() => setIsModalOpen(true)} />} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/mentions-legales" element={<Legal />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;