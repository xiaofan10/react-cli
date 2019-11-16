import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Switch, Link } from 'react-router-dom';
import Child from './child.js';
import Card from './components/card'

import App from './app';

let root = document.getElementById('root');
if(!root) {
  root = document.createElement('div');
  root.id = 'root';
  document.body.appendChild(root);
}




ReactDOM.render(
  <HashRouter>
    <App></App>
  </HashRouter>
  ,root)

if (module.hot) {
  module.hot.accept();
}