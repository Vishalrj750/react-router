import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { MyStateProvider } from './Contexts/StateContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <MyStateProvider>
        <App />
      </MyStateProvider>
    </BrowserRouter>
  </React.StrictMode>
);
