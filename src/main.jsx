import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '/JuviGamez/src/index.css'
import App from '/JuviGamez/src/App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
