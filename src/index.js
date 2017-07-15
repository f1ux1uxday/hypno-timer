
import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
global.jQuery = require('jquery');
require('bootstrap');


ReactDOM.render(
  <App />,
  document.getElementById('root')
);
