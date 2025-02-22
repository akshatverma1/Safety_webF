import { Cpu, Wifi, Smartphone, Shield, Battery, BarChart } from "lucide-react"

export default function ProjectFeatures() {
  const features = [
    {
      icon: Cpu,
      title: "Advanced Processing",
      description: "Powerful microprocessor for real-time data processing and analysis",
    },
    {
      icon: Wifi,
      title: "Wireless Connectivity",
      description: "Seamless WiFi and Bluetooth integration for remote access and control",
    },
    {
      icon: Smartphone,
      title: "Mobile Control",
      description: "Intuitive mobile app interface for monitoring and controlling your devices",
    },
    {
      icon: Shield,
      title: "Enhanced Security",
      description: "End-to-end encryption and secure authentication protocols",
    },
    {
      icon: Battery,
      title: "Energy Efficient",
      description: "Optimized power consumption with smart sleep modes",
    },
    {
      icon: BarChart,
      title: "Data Analytics",
      description: "Advanced analytics and reporting for system performance",
    },
  ]

  return (
    <section className="mb-16">
      <h2 className="text-2xl font-bold mb-8 text-cyan-500">Key Features</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => {
          const Icon = feature.icon
          return (
            <div
              key={index}
              className="p-6 rounded-xl bg-gradient-to-br from-gray-900 to-gray-800 hover:from-gray-800 hover:to-gray-700 transition-colors border border-gray-700"
            >
              <Icon className="w-8 h-8 text-cyan-500 mb-4" />
              <h3 className="text-lg font-semibold mb-2 text-cyan-400">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          )
        })}
      </div>
    </section>
  )
}

