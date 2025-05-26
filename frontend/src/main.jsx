// main.jsx
import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import App from './App.jsx';
import { store } from './redux/store.js';
import './index.css';

// If you need this elsewhere, export after all imports
export const serverUrl = 'https://chat-app-m706.onrender.com';

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </StrictMode>
);
