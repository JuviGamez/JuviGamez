import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './JuviGamez/index.css'
import App from './JuviGamez/App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
