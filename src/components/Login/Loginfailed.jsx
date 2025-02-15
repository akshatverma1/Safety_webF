"use client"
import { useSpring, animated } from "react-spring"
import { Shield, AlertCircle, RefreshCw } from "lucide-react"
import { Link } from "react-router-dom"

export default function LoginFailed() {
  const fadeIn = useSpring({
    from: { opacity: 0, transform: "translateY(50px)" },
    to: { opacity: 1, transform: "translateY(0)" },
    config: { tension: 280, friction: 60 },
  })

  const shake = useSpring({
    from: { transform: "translateX(0)" },
    to: async (next) => {
      await next({ transform: "translateX(-10px)" })
      await next({ transform: "translateX(10px)" })
      await next({ transform: "translateX(-10px)" })
      await next({ transform: "translateX(10px)" })
      await next({ transform: "translateX(0)" })
    },
    config: { duration: 100 },
    delay: 300,
  })

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-4">
      <animated.div style={fadeIn} className="max-w-md w-full space-y-8 text-center">
        <animated.div style={shake} className="mx-auto">
          <div className="bg-red-600 rounded-full p-3 inline-block">
            <AlertCircle className="w-16 h-16 text-white" />
          </div>
        </animated.div>
        <h2 className="mt-6 text-3xl font-extrabold">Login Failed</h2>
        <p className="mt-2 text-xl text-gray-400">Oops! Something went wrong during login.</p>
        <div className="mt-8 space-y-4">
          <p className="text-lg text-gray-300">Please check your credentials and try again.</p>
        </div>
        <div className="mt-8 space-y-4">
          <Link
            to="/login"
            className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 md:py-4 md:text-lg md:px-10 transition duration-150 ease-in-out transform hover:scale-105"
          >
            <RefreshCw className="w-5 h-5 mr-2" />
            Retry Login
          </Link>
          <Link
            to="/"
            className="w-full flex items-center justify-center px-8 py-3 border border-purple-600 text-base font-medium rounded-md text-purple-300 bg-transparent hover:bg-purple-900 md:py-4 md:text-lg md:px-10 transition duration-150 ease-in-out"
          >
            <Shield className="w-5 h-5 mr-2" />
            Back to Home
          </Link>
        </div>
      </animated.div>
    </div>
  )
}

