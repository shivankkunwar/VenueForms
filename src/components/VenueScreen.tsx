import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from './Layout';
import { motion, AnimatePresence } from 'framer-motion';

interface VenueOption {
  id: string;
  title: string;
  description: string;
  icon: string;
}

const venueOptions: VenueOption[] = [
  {
    id: '5-star',
    title: '5 Star Hotels',
    description: 'High end amenities and exceptional service',
    icon: '/venue/fivestart.JPG',
  },
  {
    id: 'resorts',
    title: 'Resorts',
    description: 'Picturesque settings with luxury guest accommodation',
    icon: '/venue/resort.JPG',
  },
  {
    id: 'convention',
    title: 'Convention Hall',
    description: 'Indoor Halls for Grand Weddings',
    icon: '/venue/convention.JPG',
  },
  {
    id: '3-star',
    title: '3 Star Hotels',
    description: 'Affordable venues with good service',
    icon: '/venue/threestar.JPG',
  },
  {
    id: 'farmhouse',
    title: 'Farm houses',
    description: 'Green, open spaces for affordable outdoor Weddings',
    icon: '/venue/farmhouse.JPG',
  },
  {
    id: 'mantapa',
    title: 'Kalyan Mantapas',
    description: 'Indoor halls for traditional weddings',
    icon: '/venue/kalyan.JPG',
  },
];

export default function VenueSelection() {
  const navigate = useNavigate();
  const [selectedVenues, setSelectedVenues] = useState<string[]>(
    JSON.parse(localStorage.getItem('selectedVenues') || '[]')
  );

  const handleVenueToggle = (venueId: string) => {
    setSelectedVenues((prev) =>
      prev.includes(venueId) ? prev.filter((id) => id !== venueId) : [...prev, venueId]
    );
  };

  useEffect(() => {
    localStorage.setItem('selectedVenues', JSON.stringify(selectedVenues));
  }, [selectedVenues]);

  const handleBack = () => {
    localStorage.removeItem('selectedVenues');
    navigate('/guest', { state: { from: 'venue' } });
  };

  const handleNext = () => {
    navigate('/recommended');
  };

  return (
    <Layout
      step={3}
      totalSteps={6}
      title="What type of venues would you like?"
      subtitle="Select all options that you like."
      rightImage="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-4dgkWAfrbUmBImqO940gNdXdPZHUlt.png"
      rightText="People tend to choose airy outdoor venues like resorts for daytime weddings, and elegant indoor settings like convention halls for evening celebrations."
      onBack={handleBack}
    >
      <div className="flex flex-col h-full space-y-4">
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 auto-rows-min">
          {venueOptions.map((venue) => (
            <motion.button
              key={venue.id}
              onClick={() => handleVenueToggle(venue.id)}
              className={`p-3 rounded-lg bg-white shadow-sm border-2 transition-all 
                          flex flex-col items-center text-center space-y-1 
                          ${selectedVenues.includes(venue.id) 
                            ? 'border-[#FDB347]' 
                            : 'border-transparent hover:border-[#FDB347]/50'}`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <img src={venue.icon} alt="" className="w-12 h-12 object-contain" />
              <div>
                <h3 className="font-semibold text-gray-900 text-sm">{venue.title}</h3>
                <p className="text-xs text-gray-600">{venue.description}</p>
              </div>
            </motion.button>
          ))}
        </div>

        <AnimatePresence>
          {selectedVenues.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="w-full mt-auto"
            >
              <button
                onClick={handleNext}
                className="w-full py-3 text-lg bg-[#E91E63] hover:bg-[#D81B60] text-white rounded-full"
              >
                Next
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Layout>
  );
}

