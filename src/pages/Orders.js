import React, { useState, useEffect } from 'react';
import '../styles/Orders.css';
import { Link } from 'react-router-dom';

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [deliveryStatus, setDeliveryStatus] = useState({});
  const [showMapModal, setShowMapModal] = useState(false);

  useEffect(() => {
    const fetchOrders = async () => {
      const mockOrders = [
        { id: 1, date: '2023-06-15', total: 50.00, status: 'Entregue', location: 'Localização 1' },
        { id: 2, date: '2023-06-14', total: 30.00, status: 'Pendente', location: 'Localização 2' }
      ];
      setOrders(mockOrders);
    };

    fetchOrders();
  }, []);

  const simulateDelivery = (orderId) => {
    const updatedStatus = { ...deliveryStatus, [orderId]: 'Entregue' };
    setDeliveryStatus(updatedStatus);
  };

  const openMapModal = () => {
    setShowMapModal(true);
  };

  const closeMapModal = () => {
    setShowMapModal(false);
  };

  return (
    <div className="orders-container">
      <h2>Meus Pedidos</h2>
      <div className="orders-list">
        {orders.map(order => (
          <div key={order.id} className="order-item">
            <p>Data: {order.date}</p>
            <p>Total: R$ {order.total.toFixed(2)}</p>
            <p>Status: {deliveryStatus[order.id] || order.status}</p>
            <button onClick={openMapModal} className="btnSuporte">
              Ver Mapa de Entrega
            </button>
          </div>
        ))}
      </div>
      {showMapModal && (
        <div className="map-modal">
          <button onClick={closeMapModal} className="btnSuporte">
            Fechar
          </button>
          <img src="https://agileprocess.com.br/app/uploads/2017/05/geolocation-1.jpg" alt="Mapa de Entrega" style={{ width: '100%', height: '400px' }} />
        </div>
      )}
      <Link to={'/Support'} className='btnSuporte'>
        Suporte
      </Link>
    </div>
  );
};

export default Orders;
