"use client"

import { useEffect, useState } from "react"
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import "leaflet/dist/leaflet.css"
import { Icon } from "leaflet"

const customIcon = new Icon({
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  iconRetinaUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
})

export default function SafetyMap() {
  const [position, setPosition] = useState([51.505, -0.09])

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((pos) => {
        setPosition([pos.coords.latitude, pos.coords.longitude])
      })
    }
  }, [])

  return (
    <div className="relative rounded-3xl overflow-hidden shadow-2xl">
      <MapContainer
        center={position}
        zoom={13}
        className="w-full h-[500px] rounded-3xl [&_.leaflet-tile-pane]:brightness-[0.7] [&_.leaflet-tile-pane]:saturate-[0.3]"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position} icon={customIcon}>
          <Popup>Your current location</Popup>
        </Marker>
      </MapContainer>
    </div>
  )
}

