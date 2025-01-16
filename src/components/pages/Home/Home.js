import React from 'react';
import './Home.css';
import heroBg from '../../../assets/images/hero-bg.jpg';

const Home = ({ onButtonClick }) => {
  const handleClick = () => {
    console.log('Type de onButtonClick:', typeof onButtonClick);
    console.log('onButtonClick est-il une fonction ?', typeof onButtonClick === 'function');
    console.log('Bouton cliqué dans Home');
    if (onButtonClick) {
      console.log('Appel de onButtonClick');
      onButtonClick();
    } else {
      console.log('onButtonClick n\'est pas défini');
    }
  };

  return (
    <>
      {/* HeroSection */}
      <section className="hero-section" style={{ backgroundImage: `url(${heroBg})` }}>
        <div className="hero-content">
          <h1 className="hero-title">Bonjour, je suis John Doe</h1>
          <p className="hero-subtitle">Développeur web full-stack</p>
          <button className="btn btn-primary" onClick={handleClick}>En savoir plus</button>
        </div>
      </section>

      {/* AboutAndSkills */}
      <div className="about-skills-container">
        <div className="about-column">
          <h2>À propos</h2>
          <div className="about-content">
            <img src={process.env.PUBLIC_URL + '/images/john-doe-about.jpg'} alt="John Doe" className="about-image" />
            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Optio, necessitatibus consectetur tempore perferendis nostrum, ex delectus nisi</p>
            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Optio, necessitatibus consectetur tempore perferendis nostrum, ex delectus nisi</p>
            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Optio, necessitatibus consectetur tempore perferendis nostrum, ex delectus nisi</p>
          </div>
        </div>

        <div className="skills-column">
          <h2>Mes compétences</h2>
          <div className="skills-content">
            <div className="skill-item">
              <div className="skill-info">
                <span>HTML5</span>
                <span>90%</span>
              </div>
              <div className="skill-bar">
                <div className="skill-progress html" style={{width: '90%'}}></div>
              </div>
            </div>

            <div className="skill-item">
              <div className="skill-info">
                <span>CSS3</span>
                <span>80%</span>
              </div>
              <div className="skill-bar">
                <div className="skill-progress css" style={{width: '80%'}}></div>
              </div>
            </div>

            <div className="skill-item">
              <div className="skill-info">
                <span>JAVASCRIPT</span>
                <span>70%</span>
              </div>
              <div className="skill-bar">
                <div className="skill-progress js" style={{width: '70%'}}></div>
              </div>
            </div>

            <div className="skill-item">
              <div className="skill-info">
                <span>PHP</span>
                <span>60%</span>
              </div>
              <div className="skill-bar">
                <div className="skill-progress php" style={{width: '60%'}}></div>
              </div>
            </div>

            <div className="skill-item">
              <div className="skill-info">
                <span>REACT</span>
                <span>50%</span>
              </div>
              <div className="skill-bar">
                <div className="skill-progress react" style={{width: '50%'}}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home; 