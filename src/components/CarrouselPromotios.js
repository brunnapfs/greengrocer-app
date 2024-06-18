import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Carrousel.css';

const promotionsData = [
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4waDjwv0nVembekB7vz0h75TxVIMplwlVPA&s',
    title: 'Bananas Orgânicas',
    description: 'Aproveite 20% de desconto nas nossas deliciosas bananas orgânicas. Sabor e saúde em cada mordida!',
    link: '/products'
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtC20fCBdu0lUXa5BCXbdiwJLFkgZwmgW91miU8-kKEG2PHuigGymp5CAg14C44MZu7sM&usqp=CAU',
    title: 'Cestas de Verduras Frescas',
    description: 'Compre 2 cestas de verduras frescas e leve a terceira grátis! Ideal para uma alimentação saudável.',
    link: '/products'
  },
  {
    img: 'https://sargazo.com/wp-content/uploads/2020/04/heirloom.jpg',
    title: 'Tomates Heirloom',
    description: 'Frete grátis nas compras acima de R$ 100,00 de nossos exclusivos tomates Heirloom. Sabor autêntico direto da fazenda!',
    link: '/products'
  },
  {
    img: 'https://cdn.awsli.com.br/300x300/1247/1247854/produto/51043047/4ae5d4be94.jpg',
    title: 'Mel Orgânico',
    description: 'Desconto especial de 15% para membros do clube em nosso mel orgânico. Doçura natural e pura!',
    link: '/products'
  },
  {
    img: 'https://p2.trrsf.com/image/fget/cf/1200/900/middle/images.terra.com/2021/09/12/1459546844-mamao.jpg',
    title: 'Mamão',
    description: 'Aproveite esta oportunidade única de levar para casa mamões de alta qualidade por apenas R$ 2,99 cada!',
    link: '/products'
  },
  {
    img: 'https://conteudo.imguol.com.br/c/entretenimento/4e/2020/03/23/pera-1584989626321_v2_4x3.jpg',
    title: 'Pêra',
    description: 'Leve para casa nossas pêras por apenas R$ 1.50!',
    link: '/products'
  }
];

const Promotions = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % promotionsData.length);
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % promotionsData.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + promotionsData.length) % promotionsData.length);
  };

  return (
    <div className="promotions-container">
      <h2>Ofertas Especiais e Promoções</h2>
      <div className="carousel">
        <button className="carousel-button prev" onClick={prevSlide}>&#10094;</button>
        <div className="carousel-track-container">
          <div
            className="carousel-track"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {promotionsData.map((promotion, index) => (
              <div className="promotion-item" key={index}>
                <img src={promotion.img} alt={promotion.title} className="promotion-image" />
                <h3>{promotion.title}</h3>
                <p>{promotion.description}</p>
                <Link to={promotion.link} className="btn-offer">Conferir Oferta</Link>
              </div>
            ))}
          </div>
        </div>
        <button className="carousel-button next" onClick={nextSlide}>&#10095;</button>
      </div>
    </div>
  );
};

export default Promotions;
