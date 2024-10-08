import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App/App.js';
import Notifications from './Notifications/Notifications.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const rootNotifications = ReactDOM.createRoot(document.getElementById('root-notifications'));
rootNotifications.render(
  <React.StrictMode>
    <Notifications />
  </React.StrictMode>
);
