import React from 'react';
import '../styles/Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className="hero-section">
        <img src="https://cptstatic.s3.amazonaws.com/imagens/enviadas/materias/materia16006/28-de-julho-dia-do-agricultor.jpg" alt="Hero" className="hero-image" />
      </div>
      <div className="partners-section">
        <h3>Parceiros que confiam na GreenGrocer</h3>
        <div className="partners-logos">
          <img src="https://c1.klipartz.com/pngpicture/593/493/sticker-png-fruits-vegetable-logo-fruits-vegetable-fruit-vegetable-food-nut-bowl.png" alt="Parceiro 1" />
          <img src="https://c1.klipartz.com/pngpicture/593/493/sticker-png-fruits-vegetable-logo-fruits-vegetable-fruit-vegetable-food-nut-bowl.png" alt="Parceiro 2" />
          <img src="https://c1.klipartz.com/pngpicture/593/493/sticker-png-fruits-vegetable-logo-fruits-vegetable-fruit-vegetable-food-nut-bowl.png" alt="Parceiro 3" />
          <img src="https://c1.klipartz.com/pngpicture/593/493/sticker-png-fruits-vegetable-logo-fruits-vegetable-fruit-vegetable-food-nut-bowl.png" alt="Parceiro 4" />
          <img src="https://c1.klipartz.com/pngpicture/593/493/sticker-png-fruits-vegetable-logo-fruits-vegetable-fruit-vegetable-food-nut-bowl.png" alt="Parceiro 5" />
        </div>
      </div>
    </div>
  );
};

export default Home;
