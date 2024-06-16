import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Promotions.css';

const Promotions = () => {
  return (
    <div className="promotions-container">
      <h2>Ofertas Especiais e Promoções</h2>
      <div className="promotion-items">
        <div className="promotion-item">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4waDjwv0nVembekB7vz0h75TxVIMplwlVPA&s" alt="Promoção 1" className="promotion-image" />
          <h3>Bananas Orgânicas</h3>
          <p>Aproveite 20% de desconto nas nossas deliciosas bananas orgânicas. Sabor e saúde em cada mordida!</p>
          <Link to="/products" className="btn-offer">Conferir Oferta</Link>
        </div>
        <div className="promotion-item">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtC20fCBdu0lUXa5BCXbdiwJLFkgZwmgW91miU8-kKEG2PHuigGymp5CAg14C44MZu7sM&usqp=CAU" alt="Promoção 2" className="promotion-image" />
          <h3>Cestas de Verduras Frescas</h3>
          <p>Compre 2 cestas de verduras frescas e leve a terceira grátis! Ideal para uma alimentação saudável.</p>
          <Link to="/products" className="btn-offer">Conferir Oferta</Link>
        </div>
        <div className="promotion-item">
          <img src="https://sargazo.com/wp-content/uploads/2020/04/heirloom.jpg" alt="Promoção 3" className="promotion-image" />
          <h3>Tomates Heirloom</h3>
          <p>Frete grátis nas compras acima de R$ 100,00 de nossos exclusivos tomates Heirloom. Sabor autêntico direto da fazenda!</p>
          <Link to="/products" className="btn-offer">Conferir Oferta</Link>
        </div>
        <div className="promotion-item">
          <img src="https://cdn.awsli.com.br/300x300/1247/1247854/produto/51043047/4ae5d4be94.jpg" alt="Promoção 4" className="promotion-image" />
          <h3>Mel Orgânico</h3>
          <p>Desconto especial de 15% para membros do clube em nosso mel orgânico. Doçura natural e pura!</p>
          <Link to="/products" className="btn-offer">Conferir Oferta</Link>
        </div>
      </div>
    </div>
  );
};

export default Promotions;
