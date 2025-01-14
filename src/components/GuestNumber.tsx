import { useEffect, useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import Layout from './Layout'
import { motion } from 'framer-motion'

const guestRanges = [
  '< 100',
  '100 - 250',
  '250 - 500',
  '500 - 1000',
  '> 1000'
]

export default function GuestCount() {
  const navigate = useNavigate()
  const location = useLocation()
  const [selectedRange, setSelectedRange] = useState<string | null>(
    localStorage.getItem('guestCount')
  )
  const [shouldNavigate, setShouldNavigate] = useState(false)

  useEffect(() => {
    if (selectedRange && shouldNavigate && !location.state?.from) {
      const timer = setTimeout(() => {
        navigate('/loader?path=/venue')
      }, 2000)
      return () => clearTimeout(timer)
    }
  }, [selectedRange, shouldNavigate, navigate, location.state])

  const handleSelection = (range: string) => {
    setSelectedRange(range)
    localStorage.setItem('guestCount', range)
    setShouldNavigate(true)
    navigate('.', { replace: true, state: {} })
  }

  const handleBack = () => {
    localStorage.removeItem('guestCount')
    navigate('/')
  }

  return (
    <Layout
      step={1}
      totalSteps={6}
      title="How many guests are you expecting?"
      subtitle="Please choose the number of people attending your biggest function"
      rightImage="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-FbNTPduwPNHNUJ1JBMTxyoEXvIbNn0.png"
      rightText="In receptions, expect about 35% of guests in the floating crowd, and ensure ample standing and mingling space."
      onBack={handleBack}
    >
      <div className="grid grid-cols-2 gap-4">
        {guestRanges.map((range) => (
          <motion.button
            key={range}
            onClick={() => handleSelection(range)}
            className={`
              py-3 px-6 rounded-full border-2 transition-all
              ${selectedRange === range 
                ? 'border-[#FDB347] bg-[#FDB347] text-white' 
                : 'border-gray-200 hover:border-[#FDB347]'
              }
            `}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {range}
          </motion.button>
        ))}
      </div>
    </Layout>
  )
}

