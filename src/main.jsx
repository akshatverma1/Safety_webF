import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Webview from './components/Map/web.jsx'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Homepage from './Homepage.jsx'

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  //   <App></App>
  // </StrictMode>,
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App></App>}></Route>
    </Routes>
  </BrowserRouter>
);
