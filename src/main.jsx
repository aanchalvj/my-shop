// src/main.jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css' //  Tailwind CSS
import AOS from 'aos';
import 'aos/dist/aos.css';
import { BrowserRouter } from 'react-router-dom'; // 👈 Import Router

// Initialize AOS animation
AOS.init({
  duration: 800,
  once: true,
});

// Render App with Router enabled
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>  {/*  Wrap in BrowserRouter */}
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
