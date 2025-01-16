import React from 'react';
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
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
        <Footer />
        <Modal />
      </div>
    </Router>
  );
}

export default App;