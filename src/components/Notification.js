// src/components/Notification.js

import React, { useEffect, useState } from 'react';
import '../styles/Product.css';

const Notification = ({ message }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (message) {
      setIsVisible(true);
      setTimeout(() => {
        setIsVisible(false);
      }, 1000); 
    }
  }, [message]);

  return (
    <div className={`notification ${isVisible ? 'show' : ''}`}>
      {message}
    </div>
  );
};

export default Notification;
