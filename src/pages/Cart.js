import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import '../styles/Cart.css';

const Cart = () => {
  const { cartItems, removeFromCart, getTotalPrice } = useContext(CartContext);

  return (
    <div className="cart-container">
      <h2>Carrinho de Compras</h2>
      <div className="cart-items">
        {cartItems.length === 0 ? (
          <p>O carrinho está vazio.</p>
        ) : (
          cartItems.map(item => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.title} className="cart-item-image" />
              <div className="cart-item-details">
                <h3>{item.title}</h3>
                <p>Quantidade: {item.quantity}</p>
                <p>Preço: R${(item.price * item.quantity).toFixed(2)}</p>
                <button onClick={() => removeFromCart(item.id)}>Remover</button>
              </div>
            </div>
          ))
        )}
      </div>
      {cartItems.length > 0 && (
        <div className="cart-total">
          <h3>Total: R${getTotalPrice()}</h3>
        </div>
      )}
    </div>
  );
};

export default Cart;
