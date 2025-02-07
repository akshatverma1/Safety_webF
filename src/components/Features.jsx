import { Shield, MapPin, Bell, Users, Lock, Phone } from "lucide-react"

const features = [
  {
    icon: Shield,
    title: "24/7 Protection",
    description: "Round-the-clock monitoring and safety alerts to keep you protected at all times.",
  },
  {
    icon: MapPin,
    title: "Live Location",
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
]

export default function Features() {
  return (
    <section className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-transparent to-transparent" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold mb-4">Advanced Safety Features</h2>
          <p className="text-gray-400">
            Comprehensive protection for you and your loved ones with cutting-edge technology.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-800 hover:border-purple-500/50 transition-colors"
            >
              <div className="w-12 h-12 rounded-full bg-purple-900/50 flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

