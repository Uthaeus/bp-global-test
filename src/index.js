import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import './styles/main.scss';

import UserContextProvider from './store/user-context';
import OrdersContextProvider from './store/orders-context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserContextProvider>
      <OrdersContextProvider>
        <App />
      </OrdersContextProvider>
    </UserContextProvider>
  </React.StrictMode>
);

