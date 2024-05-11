import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.js'
import axios from 'axios'
import './index.css'


axios.defaults.baseURL = `http://localhost:8186`;

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
