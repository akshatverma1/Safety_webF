import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Webview from './components/Map/web.jsx'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Homepage from './Homepage.jsx'
import Login from './components/Login/Loginpage.jsx'
import SignUp from './components/Signup/Signuppage.jsx'

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  //   <App></App>
  // </StrictMode>,
  <BrowserRouter>
    <Routes>
      <Route path='/home' element={<App></App>}></Route>
      <Route path='/webview' element={<Webview></Webview>}></Route>
      <Route path='/login' element={<Login></Login>}></Route>
      <Route path='/signup' element={<SignUp></SignUp>}></Route>
    </Routes>
  </BrowserRouter>
);
