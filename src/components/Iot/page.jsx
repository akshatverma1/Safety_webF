// import ProjectGallery from "./components/project-gallery"
import ProjectDetails from "./components/project-details"
import ProjectFeatures from "./components/project-features"
import ProjectSpecs from "./components/project-specs"

export default function IotProjectPage() {
  return (
    <div className="min-h-screen bg-black text-white pt-20">
      <main className="container mx-auto px-4 py-8">
        {/* <ProjectGallery /> */}
        <ProjectDetails />
        <ProjectFeatures />
        <ProjectSpecs />
      </main>
    </div>
  )
}

