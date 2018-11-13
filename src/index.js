import React from 'react';
import ReactDOM from 'react-dom';
import { App } from 'containers';
import store from 'containers/App/stores';
import registerServiceWorker from './registerServiceWorker';
import 'normalize.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap/scss/bootstrap.scss';
import 'scss/index.scss';

/* eslint-disable react/jsx-filename-extension */
ReactDOM.render(<App store={ store } />, document.getElementById('root'));
registerServiceWorker();
