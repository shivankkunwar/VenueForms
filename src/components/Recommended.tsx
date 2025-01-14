import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

export default function RecommendedVenues() {
    const navigate = useNavigate()
  useEffect(() => {
    const sendDataToBackend = async () => {
      try {
        const userData = {
          guestCount: localStorage.getItem('guestCount'),
          selectedVenues: JSON.parse(localStorage.getItem('selectedVenues') || '[]')
        }

        const response = await fetch('http://localhost:5000/api/user-preferences', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(userData)
        })

        if (!response.ok) {
          throw new Error('Failed to save preferences')
        }
      } catch (error) {
        console.error('Error saving preferences:', error)
      }
    }

    sendDataToBackend();

    const timer = setTimeout(() => {
      
      setTimeout(() => {
        navigate('/')
      }, 500)
    }, 4000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-4">
      <motion.div
        className="text-center space-y-6"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="mx-auto w-16 h-16 rounded-full bg-purple-600 flex items-center justify-center"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <Check className="w-8 h-8 text-white" />
          </motion.div>
        </motion.div>

        <motion.h1
          className="text-4xl font-playfair font-bold text-gray-900"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          Our top recommended
          <br />
          venues for you
        </motion.h1>

        <motion.p
          className="text-gray-600 max-w-md mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          Shortlist the venues you like so that our planner can
          understand your tastes better
        </motion.p>
      </motion.div>
    </div>
  )
}

