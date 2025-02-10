import { Shield, MapPin, Bell, Users, Lock, Phone, Clock, Zap, Smartphone } from "lucide-react"

const features = [
  {
    icon: Shield,
    title: "24/7 Protection",
    description: "Round-the-clock monitoring and safety alerts to keep you protected at all times.",
  },
  {
    icon: MapPin,
    title: "Live Location Tracking",
    description: "Real-time location tracking with precise GPS coordinates and location history.",
  },
  {
    icon: Bell,
    title: "Instant Alerts",
    description: "Immediate notifications for emergency situations and safety concerns.",
  },
  {
    icon: Users,
    title: "Family Circles",
    description: "Create groups for family members and trusted contacts for better coordination.",
  },
  {
    icon: Lock,
    title: "Secure & Private",
    description: "End-to-end encryption ensures your location data stays private and secure.",
  },
  {
    icon: Phone,
    title: "Emergency SOS",
    description: "Quick access to emergency services and trusted contacts with one tap.",
  },
  {
    icon: Clock,
    title: "Activity Timeline",
    description: "View a detailed timeline of your loved ones' activities and locations.",
  },
  {
    icon: Zap,
    title: "Low Battery Alerts",
    description: "Receive notifications when a family member's device is running low on battery.",
  },
  {
    icon: Smartphone,
    title: "Cross-Platform Support",
    description: "Use SafeGuard on iOS, Android, and web browsers for seamless protection.",
  },
]

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-black text-white py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Features</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-900 p-6 rounded-lg border border-gray-800 hover:border-purple-500 transition-colors"
            >
              <feature.icon className="w-12 h-12 text-purple-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

