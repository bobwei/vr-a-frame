import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './components/Main';
import './styles/App.scss';
import configureStore from './stores/configureStore';

/* initialize */
// to allow :active styles to work in your CSS on a page in Mobile Safari
document.addEventListener('touchstart', () => {}, true);
const store = configureStore({});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
