import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Webview from './components/Map/web.jsx'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Homepage from './Homepage.jsx'
import Login from './components/Login/Loginpage.jsx'
import SignUp from './components/Signup/Signuppage.jsx'
import Contactpage from './components/Contact/Contactpage.jsx'
import Featurespage from './components/Features/Featurespage.jsx'
import Aboutpage from './components/About/Aboutpage.jsx'
import HomePage from './Homepage.jsx'
import Dashboard from './components/Dash.jsx'
import ImageDetectionApp from './components/Iot/iot.jsx'
import IotProjectPage from './components/Iot/page.jsx'
// import SuccessfulSignup from './components/Signup/Successignup.jsx'
// import SuccessfulLogin from './components/Login/Successloginpage.jsx'
// import Dashboard from './components/Dashboard/Dashboard.jsx'
// import LoginFailed from './components/Login/Loginfailed.jsx'
// import SignupFailed from './components/Signup/Signupfailed.jsx'

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  //   <App></App>
  // </StrictMode>,
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App></App>}></Route>
      <Route path='/home' element={<App></App>}></Route>
      <Route path='/webview' element={<Webview></Webview>}></Route>
      <Route path='/login' element={<Login></Login>}></Route>
      <Route path='/signup' element={<SignUp></SignUp>}></Route>
      <Route path='/contact' element={<Contactpage></Contactpage>}></Route>
      <Route path="/features" element={<Featurespage></Featurespage>}></Route>
      <Route path='/about' element={<Aboutpage></Aboutpage>}></Route>
      <Route path='homepage' element={<HomePage></HomePage>}></Route>
      {/* <Route path='/ssign' element={<SuccessfulSignup></SuccessfulSignup>}></Route>
      <Route path='/slogin' element={<SuccessfulLogin></SuccessfulLogin>}></Route> */}
      {/* <Route path='/loginfailed' element={<LoginFailed></LoginFailed>}></Route>
      <Route path='/signupfailed' element={<SignupFailed></SignupFailed>}></Route> */}
      <Route path='dash' element={<Dashboard></Dashboard>}></Route>
      <Route path='/iot' element={<ImageDetectionApp></ImageDetectionApp>}></Route>
      <Route path='/iotp'element={<IotProjectPage></IotProjectPage>}></Route>
    </Routes>
  </BrowserRouter>
);
