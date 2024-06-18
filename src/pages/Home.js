// src/pages/Home.js
import React, { useEffect } from 'react';
import '../styles/Home.css';
import { Link } from 'react-router-dom';
import Social from './Social';
import Reviews from './Reviews';
import Promotions from '../components/CarrouselPromotios';

const Home = () => {
  // Função para animar elementos ao scroll
  const handleScrollAnimation = () => {
    const elements = document.querySelectorAll('.fade-in');
    elements.forEach((element) => {
      if (isElementInViewport(element)) {
        element.classList.add('visible');
      }
    });
  };

  // Função para verificar se um elemento está visível na viewport
  const isElementInViewport = (el) => {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  };

  // Efeito de scroll para adicionar animação ao entrar na viewport
  useEffect(() => {
    window.addEventListener('scroll', handleScrollAnimation);
    // Limpar o listener no unmount
    return () => {
      window.removeEventListener('scroll', handleScrollAnimation);
    };
  }, []);

  return (
    <div className="home-container">
      <h2 className="fade-in-immediate">Bem Vindo ao GreenGrocer</h2>
      <h4 className="fade-in-immediate">O melhor lugar para você comprar mais barato</h4>
      <div className="home-section fade-in">
        <h4>Confira nossos produtos <Link to="/products" className="link">aqui</Link></h4>
      </div>
      <div className="home-section fade-in">
        <Promotions />
      </div>
      <div className="home-section fade-in">
        <Social />
      </div>
      <div className="home-section fade-in">
        <Reviews />
      </div>
      <div className="partners-section fade-in">
        <h3>Parceiros que confiam na GreenGrocer</h3>
        <div className="partners-logos">
          <img src="https://imgs.search.brave.com/ziOD6ICPoePhOCR1CT-LCgYwBkCYqdLy6SjQvQJCf4Y/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/c29tb3NpY2V2LmNv/bS93cC1jb250ZW50/L3VwbG9hZHMvMjAy/NC8wMi9sb2dvLWlj/ZXYtbm92by5wbmc" alt="Parceiro 1" className="fade-in" />
          <img src="https://imgs.search.brave.com/Grp2e-ou7WA-ZPastyQ1SiOnFKVJhw-yXpB_453g6-c/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9sb2dv/c21hcmNhcy5uZXQv/d3AtY29udGVudC91/cGxvYWRzLzIwMjAv/MDQvQW1hem9uLUxv/Z28tNjUweDM2Ni5w/bmc" alt="Parceiro 2" className="fade-in" />
          <img src="https://imgs.search.brave.com/V9xLXt0W0fnqcVlIvjWDcGjrX0V8iNFQqYPrqFQ1vtQ/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9zZWVr/bG9nby5jb20vaW1h/Z2VzL1AvcGFvLWFjdWNhci1sb2dv/LUYwNDkzRDBFRTAt/c2Vla2xvZ28uY29t/LnBuZw" alt="Parceiro 3" className="fade-in" />
          <img src="https://imgs.search.brave.com/zjqE_36w__kAmEXk4gpp7E4pA0eE1sAimsQw213yp7o/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9sb2dv/c3BuZy5vcmcvZG93/bmxvYWQvYnVyZ2Vy/LWtpbmcvbG9nby1i/dXJnZXIta2luZy0x/MDI0LnBuZw" alt="Parceiro 4" className="fade-in" />
          <img src="https://imgs.search.brave.com/X0ZvhGDB9f-WdCxyApcL3Gc_dVPlNx_k-ZnalALtmO0/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/bWNkb25hbGRzLmNv/bS9jb250ZW50L2Rh/bS9zaXRlcy9kZS9u/ZmwvbmV3c3Jvb20v/UHJlc3NlLU1jRF9M/b2dvX0dvbGRlbkFy/Y2hlcy5wbmc" alt="Parceiro 5" className="fade-in" />
        </div>
      </div>
    </div>
  );
};

export default Home;
