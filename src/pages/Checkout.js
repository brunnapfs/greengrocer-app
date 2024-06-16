// src/pages/Checkout.js
import React, { useState } from 'react';
import '../styles/Form.css';

const Checkout = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    address: '',
    city: '',
    paymentMethod: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Formulário de checkout enviado:', formData);
    // Aqui você pode adicionar a lógica para enviar o pedido para o backend ou simular o checkout
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="form-container">
      <h2>Checkout</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="fullName" placeholder="Nome Completo" value={formData.fullName} onChange={handleChange} required />
        <input type="text" name="address" placeholder="Endereço de Entrega" value={formData.address} onChange={handleChange} required />
        <input type="text" name="city" placeholder="Cidade" value={formData.city} onChange={handleChange} required />
        <select name="paymentMethod" value={formData.paymentMethod} onChange={handleChange} required>
          <option value="">Selecione o Método de Pagamento</option>
          <option value="credit-card">Cartão de Crédito</option>
          <option value="debit-card">Cartão de Débito</option>
          <option value="paypal">PayPal</option>
        </select>
        <button type="submit">Finalizar Compra</button>
      </form>
    </div>
  );
};

export default Checkout;
