import React from "react";
import { createRoot } from "react-dom/client";

import App from './App.jsx'

document.body.innerHTML = '<div id="app"></div>';
const root = createRoot(document.getElementById("app"));


root.render(<App />);

if (module.hot) {
  module.hot.accept('./App', () => { 
    root.render(<App />); // or replace the App component with the updated version
  });
}

