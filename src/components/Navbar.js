import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = ({ onLogout }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    onLogout();
    navigate('/login');
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <img
          src="/greegrocer.ico"
          alt="Logo"
          className="logo-image"
        />
        <span className="logo-title">
          <Link to={'/'} className='nav-link'>GreenGrocer</Link>
        </span>
      </div>
      <div className="navbar-links">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>Início</Link>
          </li>
          <li className="nav-item">
            <Link to="/products" className={`nav-link ${location.pathname === '/products' ? 'active' : ''}`}>Produtos</Link>
          </li>
          <li className="nav-item">
            <Link to="/cart" className={`nav-link ${location.pathname === '/cart' ? 'active' : ''}`}>🛒</Link>
          </li>
          <li className="nav-item">
            <Link to="/profile" className={`nav-link ${location.pathname === '/profile' ? 'active' : ''}`}>Perfil</Link>
          </li>
          <li className="nav-item">
            <Link to={'/chat'} className={`nav-link ${location.pathname === '/chat' ? 'active' : ''}`}>Chat</Link>
          </li>
        </ul>
      </div>
      <div className="nav-item">
        <button onClick={handleLogout} className="btn-logout">Sair</button>
      </div>
    </nav>
  );
};

export default Navbar;
