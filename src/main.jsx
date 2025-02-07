import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Mapfunction from './components/Map/Mappage.jsx'
import Webview from './components/Map/web.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App></App>
    <Webview />
  </StrictMode>,
)
