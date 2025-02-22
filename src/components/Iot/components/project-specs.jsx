export default function ProjectSpecs() {
  const specifications = [
    {
      category: "Hardware",
      specs: [
        { label: "Processor", value: "ARM Cortex-M4 120MHz" },
        { label: "Memory", value: "256KB RAM" },
        { label: "Storage", value: "4MB Flash" },
        { label: "Connectivity", value: "WiFi 802.11 b/g/n, BLE 5.0" },
      ],
    },
    {
      category: "Software",
      specs: [
        { label: "Operating System", value: "FreeRTOS" },
        { label: "Programming Language", value: "C/C++, Python" },
        { label: "Cloud Platform", value: "AWS IoT Core" },
        { label: "Mobile App", value: "iOS & Android" },
      ],
    },
    {
      category: "Physical",
      specs: [
        { label: "Dimensions", value: "100mm x 60mm x 20mm" },
        { label: "Weight", value: "120g" },
        { label: "Power Supply", value: "5V DC USB-C" },
        { label: "Battery Life", value: "Up to 12 hours" },
      ],
    },
  ]

  return (
    <section className="mb-16">
      <h2 className="text-2xl font-bold mb-8 text-cyan-500">Technical Specifications</h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {specifications.map((section, index) => (
          <div
            key={index}
            className="p-6 rounded-xl bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700"
          >
            <h3 className="text-lg font-semibold mb-4 text-cyan-400">{section.category}</h3>
            <div className="space-y-3">
              {section.specs.map((spec, specIndex) => (
                <div key={specIndex} className="flex justify-between">
                  <span className="text-gray-400">{spec.label}</span>
                  <span className="text-gray-200">{spec.value}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

