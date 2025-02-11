"use client"

import { useState } from "react"
import { Shield, MapPin, Bell, Settings, LogOut, Home, Users, HelpCircle, Menu, X } from "lucide-react"
import SafetyMap from "./components/Map/web.jsx"
import { Link } from "react-router-dom"

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const navItems = [
    { icon: Home, text: "Dashboard", path: "/home" },
    { icon: MapPin, text: "Map View", path: "/map" },
    { icon: Users, text: "Family", path: "/family" },
    { icon: Bell, text: "Alerts", path: "/alerts" },
    { icon: Settings, text: "Settings", path: "/settings" },
    { icon: HelpCircle, text: "Help & Support", path: "/help" },
  ]

  return (
    <aside
      className={`bg-gray-900 text-white w-64 min-h-screen flex flex-col transition-all duration-300 ease-in-out ${isOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0 fixed lg:static z-30`}
    >
      <div className="flex items-center justify-between p-4 border-b border-gray-800">
        <Link to="/home" className="flex items-center space-x-2">
          <Shield className="w-8 h-8 text-purple-500" />
          <span className="text-xl font-bold">SafeGuard</span>
        </Link>
        <button onClick={toggleSidebar} className="lg:hidden">
          <X className="w-6 h-6" />
        </button>
      </div>
      <nav className="flex-1 overflow-y-auto py-4">
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

const Header = ({ toggleSidebar, user }) => (
  <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
    <button onClick={toggleSidebar} className="lg:hidden">
      <Menu className="w-6 h-6" />
    </button>
    <div className="flex items-center space-x-4">
      <span className="font-semibold">Welcome, {user.name}</span>
      <img src={user.avatar || "/placeholder.svg"} alt={user.name} className="w-8 h-8 rounded-full" />
      <button className="p-2 rounded-full hover:bg-gray-700">
        <LogOut className="w-5 h-5" />
      </button>
    </div>
  </header>
)

export default function HomePage() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [user, setUser] = useState({
    name: "John Doe",
    avatar: "https://i.pravatar.cc/150?img=68",
  })

  const [familyMembers, setFamilyMembers] = useState([
    { id: 1, name: "Sarah Doe", location: "Home", lastSeen: "2 min ago" },
    { id: 2, name: "Mike Doe", location: "School", lastSeen: "5 min ago" },
    { id: 3, name: "Emma Doe", location: "Work", lastSeen: "1 min ago" },
  ])

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen)

  return (
    <div className="flex h-screen bg-black text-white">
      <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header toggleSidebar={toggleSidebar} user={user} />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-900 p-4">
          <div className="container mx-auto">
            <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
            <div className="grid lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <h2 className="text-xl font-semibold mb-4">Family Location</h2>
                <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg" style={{ height: "60vh" }}>
                  <SafetyMap height="100%" />
                </div>
              </div>
              <div>
                <h2 className="text-xl font-semibold mb-4">Family Members</h2>
                <div className="bg-gray-800 rounded-lg shadow-lg p-4">
                  {familyMembers.map((member) => (
                    <div
                      key={member.id}
                      className="flex items-center justify-between py-3 border-b border-gray-700 last:border-b-0"
                    >
                      <div>
                        <h3 className="font-semibold">{member.name}</h3>
                        <p className="text-sm text-gray-400">
                          <MapPin className="w-4 h-4 inline mr-1" />
                          {member.location}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-gray-400">Last seen</p>
                        <p className="text-sm">{member.lastSeen}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

