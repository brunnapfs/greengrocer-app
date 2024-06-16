// src/pages/Support.js
import React from 'react';
import '../styles/Support.css';

const Support = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para enviar mensagem de suporte
    alert('Mensagem de suporte enviada');
  };

  return (
    <div className="support-container">
      <h2>Suporte ao Cliente</h2>
      <form onSubmit={handleSubmit}>
        <textarea placeholder="Digite sua mensagem" required></textarea>
        <button type="submit">Enviar Mensagem</button>
      </form>
    </div>
  );
};

export default Support;
