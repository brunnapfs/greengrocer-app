import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Promotions.css';

const Promotions = () => {
  return (
    <div className="promotions-container">
      <h2>Ofertas Especiais e Promoções</h2>
      <div className="promotion-items">
        <div className="promotion-item">
          <img src="https://via.placeholder.com/150" alt="Promoção 1" className="promotion-image" />
          <h3>Bananas Orgânicas</h3>
          <p>Aproveite 20% de desconto nas nossas deliciosas bananas orgânicas. Sabor e saúde em cada mordida!</p>
          <Link to="/products" className="btn-offer">Conferir Oferta</Link>
        </div>
        <div className="promotion-item">
          <img src="https://via.placeholder.com/150" alt="Promoção 2" className="promotion-image" />
          <h3>Cestas de Verduras Frescas</h3>
          <p>Compre 2 cestas de verduras frescas e leve a terceira grátis! Ideal para uma alimentação saudável.</p>
          <Link to="/products" className="btn-offer">Conferir Oferta</Link>
        </div>
        <div className="promotion-item">
          <img src="https://via.placeholder.com/150" alt="Promoção 3" className="promotion-image" />
          <h3>Tomates Heirloom</h3>
          <p>Frete grátis nas compras acima de R$ 100,00 de nossos exclusivos tomates Heirloom. Sabor autêntico direto da fazenda!</p>
          <Link to="/products" className="btn-offer">Conferir Oferta</Link>
        </div>
        <div className="promotion-item">
          <img src="https://via.placeholder.com/150" alt="Promoção 4" className="promotion-image" />
          <h3>Mel Orgânico</h3>
          <p>Desconto especial de 15% para membros do clube em nosso mel orgânico. Doçura natural e pura!</p>
          <Link to="/products" className="btn-offer">Conferir Oferta</Link>
        </div>
      </div>
    </div>
  );
};

export default Promotions;
