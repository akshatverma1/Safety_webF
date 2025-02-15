"use client"
import { useSpring, animated } from "react-spring"
import { Shield, CheckCircle } from "lucide-react"
import { Link } from "react-router-dom"

export default function SuccessfulLogin() {
  const fadeIn = useSpring({
    from: { opacity: 0, transform: "translateY(50px)" },
    to: { opacity: 1, transform: "translateY(0)" },
    config: { tension: 280, friction: 60 },
  })

  const popIn = useSpring({
    from: { transform: "scale(0)" },
    to: { transform: "scale(1)" },
    config: { tension: 200, friction: 10 },
    delay: 300,
  })

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-4">
      <animated.div style={fadeIn} className="max-w-md w-full space-y-8 text-center">
        <animated.div style={popIn} className="mx-auto">
          <div className="bg-purple-600 rounded-full p-3 inline-block">
            <Shield className="w-16 h-16 text-white" />
          </div>
        </animated.div>
        <h2 className="mt-6 text-3xl font-extrabold">Welcome back to SafeGuard!</h2>
        <p className="mt-2 text-xl text-gray-400">You've successfully logged in.</p>
        <div className="mt-8 space-y-4">
          <animated.div style={popIn}>
            <CheckCircle className="mx-auto w-16 h-16 text-green-500" />
          </animated.div>
          <p className="text-lg text-gray-300">Your account is now active and secure.</p>
        </div>
        <div className="mt-8">
          <Link
            to="/home"
            className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 md:py-4 md:text-lg md:px-10 transition duration-150 ease-in-out transform hover:scale-105"
          >
            Go to Dashboard
          </Link>
        </div>
      </animated.div>
    </div>
  )
}

