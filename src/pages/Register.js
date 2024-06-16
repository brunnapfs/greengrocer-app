import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Form.css';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Aqui você pode adicionar a lógica para enviar os dados para o backend ou simular o registro
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="form-container">
      <h2>Cadastro</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Nome"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Senha"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <button type="submit">Cadastrar</button>
      </form>
      <div className="social-login">
        <p>Ou registre-se com</p>
        <a href="https://www.facebook.com/login" className="btn-social btn-facebook">
          Facebook
        </a>
        <a href="https://www.gmail.com/login" className="btn-social btn-google">
          Gmail
        </a>
      </div>
      <p>
        Já tem uma conta? <Link to="/login">Voltar para o Login</Link>
      </p>
    </div>
  );
};

export default Register;
