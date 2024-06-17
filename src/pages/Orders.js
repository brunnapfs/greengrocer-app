// src/pages/Orders.js
import React, { useState, useEffect } from 'react';
import '../styles/Orders.css';
import Support from './Support'
import { Link } from 'react-router-dom';

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    
    const fetchOrders = async () => {
      
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
      <div className='btntLink'>
      <Link to={'/Support'} className='btnSuporte'>
        Suporte
       </Link>
      </div>
    </div>
  );
};

export default Orders;
