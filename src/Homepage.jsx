import React from "react"
import Hero from "./components/Hero"
import Features from "./components/Features"
import SafetyMap from "./components/SafetyMap"
import Navbar from "./components/Navbar"
import { Button } from "./components/button.tsx"
import { BrowserRouter, BrowserRouter as Router } from "react-router-dom"
import { Route,Routes } from "react-router-dom"
import WebViewComponent from "./components/Map/web.jsx"
// import { BrowserRouter,Router,Link,Route,Routes } from "react-router-dom"
export default function Homepage() {
  return (
   <BrowserRouter>
   <Navbar></Navbar>
   <Routes>
      <Route path="/" element={<Homepage></Homepage>} />
      
    </Routes>
      </BrowserRouter>
  )
}


