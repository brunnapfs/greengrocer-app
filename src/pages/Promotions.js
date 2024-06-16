// src/pages/Promotions.js
import React from 'react';
import '../styles/Promotions.css';

const Promotions = () => {
  return (
    <div className="promotions-container">
      <h2>Ofertas Especiais e Promoções</h2>
      <div className="promotion-items">
        <div className="promotion-item">
          <h3>Oferta 1</h3>
          <p>Descrição da oferta 1.</p>
        </div>
        <div className="promotion-item">
          <h3>Oferta 2</h3>
          <p>Descrição da oferta 2.</p>
        </div>
        {/* Adicione mais itens de promoção conforme necessário */}
      </div>

    </div>
  );
};

export default Promotions;
