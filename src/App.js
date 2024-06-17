import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import {Footer} from './components/Footer';
import Login from './pages/Login';
import Home from './pages/Home';
import Register from './pages/Register';
import Profile from './pages/Profile';
import Products from './pages/Products';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Orders from './pages/Orders';
import Reviews from './pages/Reviews';
import Promotions from './pages/Promotions';
import Social from './pages/Social';
import Support from './pages/Support';
import { CartProvider } from './context/CartContext';
import './App.css';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  if (!isAuthenticated) {
    return (
      <Router>
        <Routes>
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </Router>
    );
  }

  return (
    <CartProvider>
      <Router>
        <div className="App">
          <Navbar onLogout={handleLogout} />
          <div className="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/products" element={<Products />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/orders" element={<Orders />} />
              <Route path="/reviews" element={<Reviews />} />
              <Route path="/promotions" element={<Promotions />} />
              <Route path="/social" element={<Social />} />
              <Route path="/support" element={<Support />} />
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </div>
          <Footer/>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
