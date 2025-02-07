import React from "react"
import { BrowserRouter as Router } from "react-router-dom"
import Hero from "./components/Hero"
import Features from "./components/Features"
import SafetyMap from "./components/SafetyMap"
import Navbar from "./components/Navbar"
import { Button } from "./components/button.tsx"

function App() {
  return (
    <Router>
      <main className="min-h-screen bg-black text-white">
        <Navbar />

        

        {/* Safety Map Preview */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-pink-900/20" />
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-4xl font-bold">
                  Real-time Safety <br />
                  <span className="text-purple-400">Wherever You Go</span>
                </h2>
                <p className="text-gray-400 text-lg">
                  Stay connected with your loved ones and ensure their safety with advanced location tracking and
                  instant alerts.
                </p>
                <div className="flex gap-4">
                  <Button variant="default" className="bg-purple-600 hover:bg-purple-700">
                    Start Tracking
                  </Button>
                  <Button variant="outline" className="border-purple-600 text-purple-400 hover:bg-purple-600/10">
                    Learn More
                  </Button>
                </div>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-3xl" />
                <React.Suspense fallback={<div>Loading map...</div>}>
                  <SafetyMap />
                </React.Suspense>
              </div>
            </div>
          </div>
        </section>

        {/* Hero Section */}
        <Hero />

        {/* Features */}
        <Features />
      </main>
    </Router>
  )
}

export default App

