import React from 'react';
import ReactDOM from 'react-dom';
import Child from './child.js';
import Layout from './components/Layout';
const WORLD = 'HELLO WORLD';
const child = new Child('黎明');

let root = document.getElementById('root');
if(!root) {
  root = document.createElement('div');
  root.id = 'root';
  document.body.appendChild(root);
}
const App = () => {
  return (
    <div>
      <Layout />
    </div>
  );
}
ReactDOM.render(
  <App />
  ,root)

if (module.hot) {
  module.hot.accept();
}