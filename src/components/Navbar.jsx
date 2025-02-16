import { Link } from "react-router-dom"
import { Shield } from "lucide-react"
import { Button } from "./button.tsx"


export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-sm border-b border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <Shield className="w-8 h-8 text-purple-500" />
            <span className="text-xl font-bold">Suraksha</span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="/features" className="text-gray-300 hover:text-white transition-colors">
              Features
            </Link>
            <Link to="/about" className="text-gray-300 hover:text-white transition-colors">
              About
            </Link>
            <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">
              Contact
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <Link to={"/login"}>
              <Button variant="ghost" className="text-gray-300 hover:text-white">
                Sign In
              </Button>
            </Link>
            <form method ="GET" action={"https://safety-web-application-nu.vercel.app/"}>
            {/* <Link to={"/signup"}> */}
              <Button className="bg-purple-600 hover:bg-purple-700">Get Started</Button>
            {/* </Link> */}
            </form>
          </div>
        </div>
      </div>
    </nav>
  )
}

