import "primeicons/primeicons.css";
import "primereact/resources/primereact.min.css";
import React from 'react';
import ReactDOM from 'react-dom';
import './assets/main.css';
import App from './App';
import "primereact/resources/themes/nova/theme.css"
import "primeicons/primeicons.css";
import "./assets/Custom.css"

ReactDOM.render(
  <React.StrictMode>
    <div style={{backgroundColor:"#050505"}}>

    <App />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);
