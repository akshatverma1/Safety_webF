import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

const LocationMap = () => {
  const [position, setPosition] = useState([51.505, -0.09]);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((pos) => {
        const { latitude, longitude } = pos.coords;
        setPosition([latitude, longitude]);
      });
    }
  }, []);

  const handleShare = async () => {
    const shareData = {
      title: 'My Location',
      text: `Check out my location: https://www.google.com/maps?q=${position[0]},${position[1]}`,
      url: `https://www.google.com/maps?q=${position[0]},${position[1]}`
    };

    try {
      // Share via Web Share API if supported
      if (navigator.share) {
        await navigator.share(shareData);
        console.log('Location shared successfully');
      } else {
        // Fallback: Copy link or notify user
        navigator.clipboard.writeText(shareData.url);
        alert('Link copied to clipboard: ' + shareData.url);
      }

      // Send location to backend
      await fetch('http://localhost:1000/share-location', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ latitude: position[0], longitude: position[1] })
      });

    } catch (err) {
      console.error('Error sharing location:', err);
    }
  };

  return (
    <div className="h-screen">
      <MapContainer center={position} zoom={13} style={{ height: '80vh', width: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; OpenStreetMap contributors"
        />
        <Marker position={position} icon={L.icon({
          iconUrl: 'https://leafletjs.com/examples/custom-icons/leaf-green.png',
          iconSize: [38, 38],
        })}>
          <Popup>Your Current Location</Popup>
        </Marker>
      </MapContainer>

      <div className="text-center mt-4">
        <button onClick={handleShare} className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700">
          Share My Location
        </button>
      </div>
    </div>
  );
};

export default LocationMap;
