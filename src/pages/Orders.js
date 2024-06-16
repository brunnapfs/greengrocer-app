// src/pages/Orders.js
import React, { useState, useEffect } from 'react';
import '../styles/Orders.css';

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // Simulando requisição para obter pedidos (substitua com sua lógica real)
    const fetchOrders = async () => {
      // Aqui você pode fazer uma requisição GET para obter os pedidos do usuário
      // Exemplo com dados simulados:
      const mockOrders = [
        { id: 1, date: '2023-06-15', total: 50.00, status: 'Entregue' },
        { id: 2, date: '2023-06-14', total: 30.00, status: 'Pendente' }
      ];
      setOrders(mockOrders);
    };

    fetchOrders();
  }, []);

  return (
    <div className="orders-container">
      <h2>Meus Pedidos</h2>
      <div className="orders-list">
        {orders.map(order => (
          <div key={order.id} className="order-item">
            <p>Data: {order.date}</p>
            <p>Total: R$ {order.total.toFixed(2)}</p>
            <p>Status: {order.status}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
