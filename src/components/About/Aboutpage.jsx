import { Shield } from "lucide-react"

export default function Aboutpage() {
  return (
    <div className="min-h-screen bg-black text-white py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <Shield className="w-16 h-16 text-purple-500 mx-auto mb-6" />
          <h1 className="text-4xl font-bold mb-6">About SafeGuard</h1>
          <p className="text-xl text-gray-400 mb-8">
            SafeGuard is a cutting-edge family safety app designed to provide peace of mind in an increasingly connected
            world.
          </p>
        </div>
        <div className="mt-16 grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p className="text-gray-400">
              At SafeGuard, our mission is to empower families with the tools they need to stay connected, protected,
              and informed. We believe that by leveraging technology, we can create a safer world for everyone.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
            <p className="text-gray-400">
              Founded in 2023, SafeGuard was born out of a desire to address the growing concerns of family safety in
              the digital age. Our team of dedicated professionals combines expertise in technology, security, and user
              experience to deliver a comprehensive safety solution.
            </p>
          </div>
        </div>
        <div className="mt-16">
          <h2 className="text-2xl font-semibold mb-4 text-center">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Privacy",
                description: "We prioritize the privacy and security of our users' data above all else.",
              },
              { title: "Innovation", description: "We continuously innovate to provide cutting-edge safety features." },
              {
                title: "Reliability",
                description: "Our users trust us with their safety, and we take that responsibility seriously.",
              },
            ].map((value, index) => (
              <div key={index} className="bg-gray-900 p-6 rounded-lg border border-gray-800">
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-400">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

