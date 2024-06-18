import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import Spinner from '../components/Spinner';
import '../styles/Cart.css';

const Cart = () => {
  const { cartItems, removeFromCart } = useContext(CartContext);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleCheckout = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate('/checkout');
    }, 1000);
  };

  const getTotalPrice = () => {
    let totalPrice = 0;
    cartItems.forEach(item => {
      totalPrice += item.price * item.quantity;
    });
    return totalPrice.toFixed(2);
  };

  if (loading) {
    return <Spinner />;
  }

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
                <button onClick={() => removeFromCart(item.id)} className='btnRemover'>Remover</button>
              </div>
            </div>
          ))
        )}
      </div>
      {cartItems.length > 0 && (
        <div className="cart-summary">
          <h3>Total: R${getTotalPrice()}</h3>
          <button className="btn-checkout" onClick={handleCheckout}>
            Finalizar Compra
          </button>
        </div>
      )}
      <Link to={'/Orders'} className='btnMeusPedidos'>Meus Pedidos</Link>
    </div>
  );
};

export default Cart;
