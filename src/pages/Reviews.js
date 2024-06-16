// src/pages/Reviews.js
import React, { useState } from 'react';
import '../styles/Form.css';

const Reviews = () => {
  const [review, setReview] = useState('');
  const [rating, setRating] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Avaliação enviada:', { review, rating });
    // Aqui você pode adicionar a lógica para enviar a avaliação para o backend ou simular o envio
  };

  return (
    <div className="form-container">
      <h2>Comentários e Sugestões</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          placeholder="Digite sua sugestão"
          value={review}
          onChange={(e) => setReview(e.target.value)}
          required
        ></textarea>
        <h2> Avalie de 1 a 5</h2>
        <input
          type="number"
          placeholder="Classificação (1-5)"
          value={rating}
          onChange={(e) => setRating(parseInt(e.target.value))}
          min="1"
          max="5"
          required
        />
        <button type="submit">Enviar Avaliação</button>
      </form>
    </div>
  );
};

export default Reviews;
