import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const greenIcon = new L.Icon({
  iconUrl: 'https://img.icons8.com/ios-filled/50/ff0000/circled-dot.png',
  shadowUrl: 'https://i.pinimg.com/736x/d9/23/98/d9239829a431f6b122cab13ce3cf52e2.jpg',
  iconSize: [10, 20],
  shadowSize: [0, 0],
});

function Geolocation({ onLocationFound }) {
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.watchPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          console.log(latitude+" "+ longitude);
          onLocationFound({ lat: latitude, lng: longitude });
        },
        (error) => console.error('Geolocation error:', error),
        { enableHighAccuracy: true }
      );
    }
  }, [onLocationFound]);

  return null;
}

function Markers({ data }) {
  return (
    <>
      {data.map((item, index) => (
        <Marker key={index} position={[item.lat, item.lng]} icon={greenIcon}>
          <Popup>{item.message}</Popup>
        </Marker>
      ))}
    </>
  );
}

function MapComponent() {
  const [userLocation, setUserLocation] = useState({ lat: 22, lng: 75 });
  const [markerData, setMarkerData] = useState([]);

  useEffect(() => {
    async function fetchMarkerData() {
      try {
        const response = await fetch("http://localhost:1000/mapdata");
        const data = await response.json();
        setMarkerData(data);
      } catch (error) {
        console.error('Error fetching marker data:', error);
      }
    }

    fetchMarkerData();
  }, []);

  return (
    <div style={{ height: '500px', width: '100%' }}>
      <MapContainer center={[userLocation.lat, userLocation.lng]} zoom={13} style={{ height: '100%', width: '100%' }}>
        <TileLayer
          url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; <a href='https://www.akshat.life'>AKSHAT</a> contributors"
        />
        <Markers data={markerData} />
        <Geolocation onLocationFound={setUserLocation} />
      </MapContainer>
    </div>
  );
}

export default MapComponent;
