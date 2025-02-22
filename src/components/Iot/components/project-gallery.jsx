"use client"

import { useState } from "react"
import Image from "image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "../../button"

const projectImages = [
  {
    type: "image",
    url: "/placeholder.svg?height=600&width=1200",
    alt: "IoT Dashboard Interface",
  },
  {
    type: "image",
    url: "/placeholder.svg?height=600&width=1200",
    alt: "Smart Home Sensors",
  },
  {
    type: "video",
    url: "https://example.com/demo-video.mp4",
    thumbnail: "/placeholder.svg?height=600&width=1200",
  },
  {
    type: "image",
    url: "/placeholder.svg?height=600&width=1200",
    alt: "Mobile App Interface",
  },
  {
    type: "image",
    url: "/placeholder.svg?height=600&width=1200",
    alt: "Hardware Components",
  },
]

export default function ProjectGallery() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % projectImages.length)
  }

  const previousImage = () => {
    setCurrentIndex((prev) => (prev - 1 + projectImages.length) % projectImages.length)
  }

  const goToImage = (index) => {
    setCurrentIndex(index)
  }

  return (
    <section className="mb-16">
      <div className="grid gap-4">
        <div className="relative aspect-[16/9] overflow-hidden rounded-xl bg-gray-900 group">
          {projectImages[currentIndex].type === "video" ? (
            <video
              src={projectImages[currentIndex].url}
              poster={projectImages[currentIndex].thumbnail}
              controls
              className="w-full h-full object-cover"
            />
          ) : (
            <Image
              src={projectImages[currentIndex].url || "/placeholder.svg"}
              alt={projectImages[currentIndex].alt}
              fill
              className="object-cover"
            />
          )}
          <div className="absolute inset-0 flex items-center justify-between p-4 opacity-0 group-hover:opacity-100 transition-opacity">
            <Button
              variant="outline"
              size="icon"
              onClick={previousImage}
              className="bg-black/50 hover:bg-black/70 text-white border-none"
            >
              <ChevronLeft className="h-8 w-8" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={nextImage}
              className="bg-black/50 hover:bg-black/70 text-white border-none"
            >
              <ChevronRight className="h-8 w-8" />
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-5 gap-4">
          {projectImages.map((image, index) => (
            <button
              key={index}
              onClick={() => goToImage(index)}
              className={`relative aspect-square overflow-hidden rounded-lg ${
                currentIndex === index ? "ring-2 ring-cyan-500" : ""
              }`}
            >
              <Image
                src={image.type === "video" ? image.thumbnail : image.url}
                alt={image.type === "video" ? "Video thumbnail" : image.alt}
                fill
                className="object-cover"
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}

