import { useEffect, useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { Eye, Search, Home } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function LoaderScreen() {
  const navigate = useNavigate()
  const location = useLocation()
  const [venueText, setVenueText] = useState('Shortlisting venues to accommodate your wedding party')
  const [isBlinking, setIsBlinking] = useState(false)
  const [isExiting, setIsExiting] = useState(false)

  const path = new URLSearchParams(location.search).get('path') || '/guest'

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsExiting(true)
      setTimeout(() => {
        navigate(path)
      }, 500)
    }, 4000)

    return () => clearTimeout(timer)
  }, [path, navigate])

  useEffect(() => {
    if (path === '/venue') {
      const textTimer = setTimeout(() => {
        setVenueText('Curating styles that match your budget')
      }, 2000)

      return () => clearTimeout(textTimer)
    }
  }, [path])

  useEffect(() => {
    if (path === '/guest') {
      const blinkInterval = setInterval(() => {
        setIsBlinking(true)
        setTimeout(() => setIsBlinking(false), 200)
      }, 3000)

      return () => clearInterval(blinkInterval)
    }
  }, [path])

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#fdf8e7] overflow-hidden">
      <AnimatePresence>
        {!isExiting && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ 
              type: "spring",
              stiffness: 50,
              damping: 20
            }}
            className="relative w-80 h-80"
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-b from-white/30 to-white/10" />
            <div className="absolute inset-0 rounded-full bg-white backdrop-blur-sm shadow-[0_0_40px_rgba(255,255,255,0.5)]" />
            <motion.div 
              className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              {path === '/guest' && (
                <Eye 
                  className={`w-8 h-8 mb-6 text-gray-800 stroke-[1.5] transition-all duration-200 ${
                    isBlinking ? 'scale-y-0' : 'scale-y-100'
                  }`}
                />
              )}
              {path === '/venue' && (
                venueText.includes('Shortlisting') ? (
                  <Search className="w-8 h-8 mb-6 text-gray-800 stroke-[1.5]" />
                ) : (
                  <Home className="w-8 h-8 mb-6 text-gray-800 stroke-[1.5]" />
                )
              )}
              <motion.p 
                className="text-gray-800 text-lg font-medium"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                {path === '/guest' ? (
                  'Great, let our planners craft the perfect setting for your magical day.'
                ) : (
                  venueText
                )}
              </motion.p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

