import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Form.css';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Aqui você pode adicionar a lógica para autenticar o usuário
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="form-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
        <input type="password" name="password" placeholder="Senha" value={formData.password} onChange={handleChange} required />
        <button type="submit">Entrar</button>
      </form>
      <div className="register-link">
        <Link to="/register" className="nav-link">
          <button type="button">Registrar-se</button>
        </Link>
      </div>
    </div>
  );
};

export default Login;

