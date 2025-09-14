import { motion } from 'framer-motion';
import { Link } from 'react-router';
import { ArrowLeft, Home } from 'lucide-react';
import Lottie from 'lottie-react';
import { useState, useEffect } from 'react';

export default function NotFound() {
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    fetch('/loader.json')
      .then(response => response.json())
      .then(data => setAnimationData(data))
      .catch(error => console.error('Error loading animation:', error));
  }, []);

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4 sm:px-6 lg:px-8">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900"></div>
      <div className="absolute inset-0 bg-hero-gradient"></div>
      
      {/* Particles */}
      <div className="particles">
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 20}s`,
              animationDuration: `${20 + Math.random() * 10}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 w-full max-w-2xl text-center">
        {/* Lottie Animation */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="w-80 h-80 mx-auto mb-8">
            {animationData ? (
              <Lottie
                animationData={animationData}
                loop={true}
                autoplay={true}
                style={{ width: '100%', height: '100%' }}
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <div className="w-16 h-16 border-4 border-[#ffb71b]/20 border-t-[#ffb71b] rounded-full animate-spin"></div>
              </div>
            )}
          </div>
        </motion.div>

        {/* Coming Soon Message */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <p className="text-2xl sm:text-3xl font-bold text-[#ffb71b]">
            Coming Soon Next Month
          </p>
          <p className="text-lg sm:text-xl text-gray-300 italic">
            Join the waitlist
          </p>
        </motion.div>
      </div>
    </div>
  );
}
