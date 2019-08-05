// import 'core-js/stable';
// import 'regenerator-runtime/runtime';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import 'antd/dist/antd.css';
import './assets/styles/index.scss';
import MainApp from './MainApp';
import configureStore from './configureStore';

window.__localeId__ = 'ru'; // eslint-disable-line

const store = configureStore();
render(
  <Provider store={store}>
    <MainApp />
  </Provider>,
  document.getElementById('root'),
);
