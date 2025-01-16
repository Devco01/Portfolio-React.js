import React from 'react';
import './Portfolio.css';

const portfolioData = [
    {
        id: 1,
        title: "Fresh Food",
        description: "Site de vente de produits frais en ligne",
        image: "/images/portfolio/fresh-food.jpg",
        tech: "Site réalisé avec PHP et MySQL",
        link: "#"
    },
    {
        id: 2,
        title: "Restaurant Akira",
        description: "Site de vente de produits frais en ligne",
        image: "/images/portfolio/restaurant-japonais.jpg",
        tech: "Site réalisé avec WordPress",
        link: "#"
    },
    {
        id: 3,
        title: "Espace bien-être",
        description: "Site de vente de produits frais en ligne",
        image: "/images/portfolio/espace-bien-etre.jpg",
        tech: "Site réalisé avec LARAVEL",
        link: "#"
    },
    {
        id: 4,
        title: "SEO",
        description: "Amélioration du référencement d'un site e-commerce",
        image: "/images/portfolio/seo.jpg",
        tech: "Utilisation des outils SEO",
        link: "#"
    },
    {
        id: 5,
        title: "Création d'une API",
        description: "Création d'une API RESTFULL publique",
        image: "/images/portfolio/coder.jpg",
        tech: "PHP - SYMFONY",
        link: "#"
    },
    {
        id: 6,
        title: "Maquette d'un site web",
        description: "Création du prototype d'un site",
        image: "/images/portfolio/screens.jpg",
        tech: "Réalisé avec FIGMA",
        link: "#"
    }
];

const Portfolio = () => {
    return (
        <main className="portfolio-container">
            <section className="portfolio-hero" style={{ 
              backgroundImage: `url(${process.env.PUBLIC_URL}/images/banner.jpg)`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}></section>
            
            <section className="portfolio">
                <h1>Portfolio</h1>
                <p className="portfolio-subtitle">Voici quelques-unes de mes réalisations.</p>
                
                <div className="portfolio-grid">
                    {portfolioData.map(project => (
                        <div key={project.id} className="portfolio-card">
                            <img src={`${process.env.PUBLIC_URL}${project.image}`} alt={project.title} />
                            <div className="portfolio-card-content">
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>
                                <a href={project.link} className="btn-view">Voir le site</a>
                                <p className="tech-info">{project.tech}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
};

export default Portfolio; 