import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Form.css';

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login submitted:', { email, password });
    onLogin();
  };

  return (
    <div>
      <div className="left-content">
        <h1 className="green-grocer">GreenGrocer</h1>
      </div>
      <div className="form-container">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Entrar</button>
        </form>
        <p>
          Não tem uma conta? <Link to="/register" className='register'>Registre-se</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
