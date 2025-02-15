"use client"

import { useState } from "react"
import { Shield, MapPin, Bell, Users, Settings, Phone, Menu, AlertTriangle } from "lucide-react"
import { Link } from "react-router-dom"

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const navItems = [
    { icon: MapPin, text: "Map", path: "/map" },
    { icon: Users, text: "Family", path: "/family" },
    { icon: Bell, text: "Alerts", path: "/alerts" },
    { icon: Settings, text: "Settings", path: "/settings" },
  ]

  return (
    <aside
      className={`fixed top-0 left-0 z-40 w-64 h-screen bg-gray-900 text-white transition-transform duration-300 ease-in-out ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } lg:translate-x-0`}
    >
      <div className="flex items-center justify-between p-4 border-b border-gray-800">
        <Link to="/" className="flex items-center space-x-2">
          <Shield className="w-8 h-8 text-purple-500" />
          <span className="text-xl font-bold">SafeGuard</span>
        </Link>
        <button onClick={toggleSidebar} className="lg:hidden">
          <Menu className="w-6 h-6" />
        </button>
      </div>
      <nav className="mt-5">
        <ul>
          {navItems.map((item, index) => (
            <li key={index}>
              <Link to={item.path} className="flex items-center space-x-2 px-4 py-3 hover:bg-gray-800">
                <item.icon className="w-5 h-5" />
                <span>{item.text}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  )
}

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen)

  return (
    <div className="min-h-screen bg-black text-white">
      <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />

      <div className="lg:ml-64 transition-all duration-300 ease-in-out">
        <header className="bg-gray-900 p-4 flex justify-between items-center">
          <button onClick={toggleSidebar} className="lg:hidden">
            <Menu className="w-6 h-6" />
          </button>
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <div className="flex items-center space-x-4">
            <Bell className="w-6 h-6" />
            <img src="https://i.pravatar.cc/32" alt="User Avatar" className="w-8 h-8 rounded-full" />
          </div>
        </header>

        <main className="p-4">
          <section className="mb-8">
            <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg" style={{ height: "50vh" }}>
              {/* Map placeholder */}
              <div className="w-full h-full flex items-center justify-center text-gray-400">
                <MapPin className="w-12 h-12 mr-2" />
                <span className="text-xl">Map Area</span>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <button className="w-full bg-red-600 text-white py-4 rounded-lg text-lg font-bold flex items-center justify-center space-x-2 hover:bg-red-700 transition duration-300">
              <Phone className="w-6 h-6" />
              <span>Emergency Call</span>
            </button>
          </section>

          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { title: "Family Members", value: "5", color: "bg-purple-600", icon: Users },
              { title: "Active Alerts", value: "2", color: "bg-yellow-600", icon: AlertTriangle },
              { title: "Safe Zones", value: "3", color: "bg-green-600", icon: MapPin },
            ].map((item, index) => (
              <div
                key={index}
                className={`${item.color} rounded-lg p-6 text-center transition-transform duration-300 hover:scale-105`}
              >
                <item.icon className="w-8 h-8 mx-auto mb-2" />
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-3xl font-bold">{item.value}</p>
              </div>
            ))}
          </section>
        </main>
      </div>
    </div>
  )
}

