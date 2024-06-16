import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-qEWPVOMVnojsN1F-IhCOjx5-pJTA_EwXQQ&s" alt="Logo" className="logo-image" />
        <span className="logo-title">GreenGrocer</span>
      </div>
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/" className="nav-link">Início</Link>
        </li>
        <li className="nav-item">
          <Link to="/profile" className="nav-link">Perfil</Link>
        </li>
        <li className="nav-item">
          <Link to="/products" className="nav-link">Produtos</Link>
        </li>
        <li className="nav-item">
          <Link to="/cart" className="nav-link">Carrinho</Link>
        </li>
        <li className="nav-item">
          <Link to="/checkout" className="nav-link">Checkout</Link>
        </li>
        <li className="nav-item">
          <Link to="/orders" className="nav-link">Meus Pedidos</Link>
        </li>
        <li className="nav-item">
          <Link to="/reviews" className="nav-link">Avaliações</Link>
        </li>
        <li className="nav-item">
          <Link to="/promotions" className="nav-link">Promoções</Link>
        </li>
        <li className="nav-item">
          <Link to="/social" className="nav-link">Redes Sociais</Link>
        </li>
        <li className="nav-item">
          <Link to="/support" className="nav-link">Suporte</Link>
        </li>
        <li className="nav-item">
          <Link to="/login" className="nav-link">Login</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
