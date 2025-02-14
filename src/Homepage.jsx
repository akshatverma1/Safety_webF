"use client"

import { useState } from "react"
import { MapPin, Bell, Settings, LogOut } from "lucide-react"
import SafetyMap from "./components/Map/web.jsx"

export default function HomePage() {
  const [user, setUser] = useState({
    name: "John Doe",
    avatar: "https://i.pravatar.cc/150?img=68",
  })

  const [familyMembers, setFamilyMembers] = useState([
    { id: 1, name: "Sarah Doe", location: "Home", lastSeen: "2 min ago" },
    { id: 2, name: "Mike Doe", location: "School", lastSeen: "5 min ago" },
    { id: 3, name: "Emma Doe", location: "Work", lastSeen: "1 min ago" },
  ])

  return (
    <div className="min-h-screen bg-black text-white">
      <header className="bg-gray-900 shadow-lg">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <img src={user.avatar || "/placeholder.svg"} alt={user.name} className="w-10 h-10 rounded-full" />
            <span className="font-semibold">Welcome, {user.name}</span>
          </div>
          <nav className="flex items-center space-x-4">
            <button className="p-2 rounded-full hover:bg-gray-800">
              <Bell className="w-6 h-6" />
            </button>
            <button className="p-2 rounded-full hover:bg-gray-800">
              <Settings className="w-6 h-6" />
            </button>
            <button className="p-2 rounded-full hover:bg-gray-800">
              <LogOut className="w-6 h-6" />
            </button>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold mb-4">Location</h2>
            <div className="bg-gray-900 rounded-lg overflow-hidden shadow-lg" style={{ height: "70vh" }}>
              <SafetyMap />
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">Family Members</h2>
            <div className="bg-gray-900 rounded-lg shadow-lg p-4">
              {familyMembers.map((member) => (
                <div
                  key={member.id}
                  className="flex items-center justify-between py-3 border-b border-gray-800 last:border-b-0"
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
      </main>
    </div>
  )
}

