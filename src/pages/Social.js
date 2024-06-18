// src/pages/Social.js
import React from 'react';
import '../styles/Social.css';

const Social = () => {
  const handleShare = (platform) => {
    console.log('Compartilhar no', platform);
  };

  return (
    <div className="social-container">
      <h2>Compartilhar nas Redes Sociais</h2>
      <div className="social-buttons">
        <button onClick={() => handleShare('Facebook')}>Compartilhar no Facebook</button>
        <button onClick={() => handleShare('Twitter')}>Compartilhar no Twitter</button>
        
      </div>
    </div>
  );
};

export default Social;
