import React from 'react';
import './NotificationCard.css'; 

const NotificationItem = ({ message }) => {
    return (
      <div className="message-notification-card">
        <p>{message}</p>
      </div>
    );
};

export default NotificationItem;