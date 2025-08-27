import React from 'react';
import ReactDOM from 'react-dom/client';   // ✅ use 'react-dom/client'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Service worker
serviceWorker.unregister();
