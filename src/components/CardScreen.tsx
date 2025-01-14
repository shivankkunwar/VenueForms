import { motion } from 'framer-motion';
import { ChevronLeft } from 'lucide-react';

const GuestCountStep = () => {
  const options = [
    { value: '< 100', label: '< 100' },
    { value: '100-250', label: '100 - 250' },
    { value: '250-500', label: '250 - 500' },
    { value: '500-1000', label: '500 - 1000' },
    { value: '>1000', label: '>1000' }
  ];

  return (
    <div className="min-h-screen bg-[#FFF9E7] flex">
    
      <div className="w-1/2 p-8 relative">
     
        <div className="mb-16">
          <div className="flex items-center mb-4">
            <motion.button
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              className="p-2 rounded-lg bg-orange-400 text-white hover:bg-orange-500"
            >
              <ChevronLeft className="w-5 h-5" />
            </motion.button>
            <div className="ml-4 flex-1">
              <div className="h-2 bg-gray-200 rounded-full">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: '16.66%' }}
                  className="h-full bg-orange-400 rounded-full"
                />
              </div>
            </div>
          </div>
          <div className="text-gray-500 text-sm">Step 1/6</div>
        </div>

    
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="max-w-md mx-auto"
        >
          <h1 className="text-4xl font-serif mb-4 text-center">
            How many guests are you expecting?
          </h1>
          <p className="text-gray-600 text-center mb-8">
            Please choose the number of people attending your biggest function
          </p>

          <div className="grid grid-cols-2 gap-4">
            {options.map((option, index) => (
              <motion.button
                key={option.value}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                className="px-6 py-3 rounded-full border-2 border-gray-300 hover:border-orange-400 text-gray-700 hover:text-orange-400 transition-colors"
              >
                {option.label}
              </motion.button>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Right Section */}
      <div className="w-1/2 p-8 flex items-center justify-center">
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-full p-12 relative"
        >
          <div className="text-center mb-6">
            <span className="text-amber-400 text-2xl">💡</span>
            <p className="text-gray-600 mt-2">
              In receptions, expect about 35% of guests in the floating crowd, and ensure
              ample standing and mingling space.
            </p>
          </div>
          <img 
            src="/api/placeholder/400/400"
            alt="Wedding Reception Layout"
            className="w-full"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default GuestCountStep;