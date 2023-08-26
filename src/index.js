import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './styles/index.css';
import { Provider } from 'react-redux';
import App from './App';
import store from './redux/store';
import { update } from './redux/sessions/auth';

const root = ReactDOM.createRoot(document.getElementById('root'));
store.dispatch(update());
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
);
