import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap'
import { BrowserRouter } from "react-router-dom";
import './assets/main.scss'
import { ShoppingCartProvider } from './context/ShoppingCartContext'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter >
      <ShoppingCartProvider>
      <App />
        </ShoppingCartProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
