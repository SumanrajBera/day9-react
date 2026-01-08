import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import AllProducts from './context/AllProducts.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <AllProducts>
        <App />
      </AllProducts>
    </BrowserRouter>
  </StrictMode>,
)
