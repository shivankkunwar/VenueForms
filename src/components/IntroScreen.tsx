import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const IntroScreen: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      localStorage.setItem('userName', name);
      localStorage.setItem('userEmail', email);
      navigate('/welcome');
    } catch (error) {
      console.error('Error storing user data:', error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#fdf8e7]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md"
      >
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Get Your Free Wedding Proposal</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FDB347]"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FDB347]"
            required
          />
          <button
            type="submit"
            className="w-full bg-[#FDB347] text-white p-3 rounded-lg hover:bg-[#FDA347] transition-colors duration-300 font-semibold"
          >
            Get Started
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default IntroScreen;

