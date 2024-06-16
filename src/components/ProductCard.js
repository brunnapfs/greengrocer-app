import React, { useState } from 'react';
import '../styles/ProductCard.css';

const ProductCard = ({ product, addToCart }) => {
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  return (
    <div className="product-card">
      <h3>{product.title}</h3>
      <img src={product.image} alt={product.title} />
      <p>{product.description}</p>
      <p>Preço: R${product.price.toFixed(2)}</p>
      <div className="quantity-input-container">
        <input
          type="number"
          className="quantity-input"
          value={quantity}
          onChange={(e) => setQuantity(parseInt(e.target.value))}
          min="1"
        />
      </div>
      <div className="add-to-cart-button">
        <button onClick={handleAddToCart}>Adicionar ao Carrinho</button>
      </div>
    </div>
  );
};

export default ProductCard;
