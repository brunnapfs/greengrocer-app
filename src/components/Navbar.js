import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = ({ onLogout }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout();
    navigate('/login');
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <img src="https://img.freepik.com/fotos-premium/diseno-logotipos-verduras-frutas-frescas-vibrantes-ia-generativa_627719-3667.jpg" alt="Logo" className="logo-image" />
        <span className="logo-title">GreenGrocer</span>
      </div>
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/" className="nav-link">Início</Link>
        </li>
        <li className="nav-item">
          <Link to="/products" className="nav-link">Produtos</Link>
        </li>
        <li className="nav-item">
          <Link to="/cart" className="nav-link">Carrinho</Link>
        </li>
        <li className="nav-item">
          <Link to="/promotions" className="nav-link">Promoções</Link>
        </li>
        <li className="nav-item">
          <Link to="/orders" className="nav-link">Meus Pedidos</Link>
        </li>
        <li className="nav-item">
          <Link to="/reviews" className="nav-link">Avaliações</Link>
        </li>
        <li className="nav-item">
          <Link to="/social" className="nav-link">Redes Sociais</Link>
        </li>
        <li className="nav-item">
          <Link to="/profile" className="nav-link">Perfil</Link>
        </li>
        <li className="nav-item">
          <Link to="/support" className="nav-link">Suporte</Link>
        </li>
        <li className="nav-item">
          <button onClick={handleLogout} className="nav-link btn-logout">Sair</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
