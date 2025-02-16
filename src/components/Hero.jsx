import { Button } from "./button.tsx"
import { Shield, MapPin, Bell } from "lucide-react"

export default function Hero() {
  return (
    <section className="pt-32 pb-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-transparent" />

      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 relative z-10">
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
            Suraksha
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                people where
              </span>
              it matters.
            </h1>

            <p className="text-xl text-gray-400">
              Advanced location tracking and safety features to protect your loved ones 24/7.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
                Get Started
              </Button>
              <Button size="lg" variant="outline" className="border-purple-600 text-purple-400 hover:bg-purple-600/10">
                Learn More
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8">
              {[
                { icon: Shield, text: "24/7 Protection" },
                { icon: MapPin, text: "Live Tracking" },
                { icon: Bell, text: "Instant Alerts" },
              ].map((item, i) => (
                <div key={i} className="text-center">
                  <div className="mx-auto w-12 h-12 rounded-full bg-purple-900/50 flex items-center justify-center mb-2">
                    <item.icon className="w-6 h-6 text-purple-400" />
                  </div>
                  <p className="text-sm text-gray-400">{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-3xl blur-3xl" />
            <div className="relative bg-gradient-to-r from-purple-900 to-pink-900 rounded-3xl p-6 transform rotate-3">
              <img
                src="https://sjc.microlink.io/Sl8nWTqp61TS6xJLPwjv5KZFnVINsZP-hTaGD7f3D5cscu-uoxNQRSEo_1D9LgYcmXVhNwvji9x9G0z1bzKFBA.jpeg"
                alt="Safety app interface"
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

