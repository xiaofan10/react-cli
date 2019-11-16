import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter } from 'react-router-dom'
import App from './app'

let root = document.getElementById('root')

if (!root) {
  root = document.createElement('div')
  root.id = 'root'
  document.body.appendChild(root)
}

ReactDOM.render(
  <HashRouter>
    <App></App>
  </HashRouter>
  , root)

if (module.hot) {
  module.hot.accept()
}
