import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import store from './redux/configureStore';
import {  BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <Router>
    <App />
    </Router>
    </Provider>
  </React.StrictMode>
);

