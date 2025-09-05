"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import "leaflet/dist/leaflet.css"
import L from "leaflet"
import { DashboardLayout } from "@/components/dashboard"

// Fix leaflet default marker icon
const DefaultIcon = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
})
L.Marker.prototype.options.icon = DefaultIcon

export default function MapDashboard() {
  return (
    <DashboardLayout>
      {/* Force full screen width + height */}
      <div className="w-screen h-screen">
        <Card className="w-full h-full rounded-none border-none shadow-none">
          <CardContent className="w-full h-full p-0 m-0">
            <MapContainer
              center={[25.276987, 55.296249]} // Example: Dubai
              zoom={12}
              scrollWheelZoom={true}
              className="w-full h-full rounded-none"
            >
              {/* Map Style */}
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />

              {/* Example Markers */}
              <Marker position={[25.276987, 55.296249]}>
                <Popup>Dubai Center</Popup>
              </Marker>
              <Marker position={[25.204849, 55.270783]}>
                <Popup>Burj Khalifa</Popup>
              </Marker>
              <Marker position={[25.141, 55.185]}>
                <Popup>Dubai Marina</Popup>
              </Marker>
            </MapContainer>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}
