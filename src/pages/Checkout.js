import React, { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import '../styles/Checkout.css';

const Checkout = () => {
  const { getTotalPrice } = useContext(CartContext);
  const [address, setAddress] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('credit_card');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      alert('Compra confirmada!'); // Simula a confirmação da compra
    }, 2000);
  };

  if (loading) {
    return (
      <div className="spinner-container">
        <div className="spinner"></div>
      </div>
    );
  }

  return (
    <div className="checkout-container">
      <h3>Checkout</h3>
      <h2>Finalizar Compra</h2>
      <p>Total a pagar: R${getTotalPrice()}</p>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="address">Endereço de Entrega:</label>
          <input
            type="text"
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="payment-method">Método de Pagamento:</label>
          <select
            id="payment-method"
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
            required
          >
            <option value="credit_card">Cartão de Crédito</option>
            <option value="debit_card">Cartão de Débito</option>
            <option value="paypal">PayPal</option>
          </select>
        </div>
        <button type="submit" className="btn-confirm">Confirmar Compra</button>
      </form>
    </div>
  );
};

export default Checkout;
