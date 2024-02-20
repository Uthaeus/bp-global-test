import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import './styles/main.scss';

import UserContextProvider from './store/user-context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserContextProvider>
      <App />
    </UserContextProvider>
  </React.StrictMode>
);

