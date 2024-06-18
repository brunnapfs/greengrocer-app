import React, { useState } from 'react';
import '../styles/Reviews.css';

const Reviews = () => {
  const [review, setReview] = useState('');
  const [rating, setRating] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Avaliação enviada:', { review, rating });
  };

  const renderStars = (count) => {
    return '★'.repeat(count) + '☆'.repeat(5 - count);
  };

  return (
    <div className="reviews-container">
      <h2>O que nossos usuários dizem?</h2>
      <div className="reviews">
        <div className="review-card">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRU7fHqjl9ZNnunEad4pqSMySAMY49WkJ31A&s" alt="Celia Almeida" className="profile-photo" />
          <h3>Celia Almeida</h3>
          <p>Secretário</p>
          <p>Ótimos produtos e excelente atendimento! {renderStars(4)}</p>
        </div>
        <div className="review-card">
          <img src="https://smartcdn.gprod.postmedia.digital/torontosun/wp-content/uploads/2024/01/natalie_reynolds_body_paint_gym-e1704226634239.jpg?quality=100&strip=all" alt="Nat Reynolds" className="profile-photo" />
          <h3>Nat Reynolds</h3>
          <p>Contador chefe</p>
          <p>Variedade incrível e qualidade incomparável. {renderStars(5)}</p>
        </div>
        <div className="review-card">
          <img src="https://i.ytimg.com/vi/QRizQTLmAMU/maxresdefault.jpg" alt="Bob Roberts" className="profile-photo" />
          <h3>Bob Roberts</h3>
          <p>Gerente de vendas</p>
          <p>Preço justo e entrega rápida. {renderStars(3)}</p>
        </div>
      </div>

      <h2>Deixe sua Avaliação</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          placeholder="Digite sua sugestão"
          value={review}
          onChange={(e) => setReview(e.target.value)}
          required
        ></textarea>
        <div className="star-rating">
          {[1, 2, 3, 4, 5].map((value) => (
            <span
              key={value}
              className={`star ${value <= rating ? 'selected' : ''}`}
              onClick={() => setRating(value)}
            >
              ★
            </span>
          ))}
        </div>
        <button type="submit">Enviar Avaliação</button>
      </form>
    </div>
  );
};

export default Reviews;
