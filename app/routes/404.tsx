import { motion } from 'framer-motion';
import { Link } from 'react-router';
import { ArrowLeft, Home } from 'lucide-react';

export default function NotFound() {
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
        {/* 404 Animation */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Loader Animation */}
          <div className="relative w-32 h-32 mx-auto mb-8">
            <motion.div
              className="w-full h-full border-4 border-[#ffb71b]/20 rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="absolute top-0 left-0 w-full h-full border-4 border-transparent border-t-[#ffb71b] rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="absolute top-2 left-2 w-[calc(100%-16px)] h-[calc(100%-16px)] border-4 border-transparent border-r-[#ffb71b]/60 rounded-full"
              animate={{ rotate: -360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#ffb71b] to-[#e6a517] rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-2xl">S</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Main Content */}
        <motion.div
          className="space-y-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {/* 404 Text */}
          <div className="space-y-4">
            <h1 className="text-8xl sm:text-9xl font-bold text-white/20">404</h1>
            <h2 className="text-4xl sm:text-5xl font-bold text-white">Page Not Found</h2>
          </div>

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

          {/* Action Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            <Link
              to="/"
              className="inline-flex items-center px-6 py-3 bg-[#ffb71b] hover:bg-[#e6a517] text-white rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-[#ffb71b]/25"
            >
              <Home className="w-5 h-5 mr-2" />
              Go Home
            </Link>
            
            <Link
              to="/"
              className="inline-flex items-center px-6 py-3 border border-white/20 hover:border-[#ffb71b] text-white hover:text-[#ffb71b] rounded-lg font-medium transition-all duration-300"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Go Back
            </Link>
          </motion.div>
        </motion.div>

        {/* Additional Info */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          <p className="text-gray-400 text-sm">
            The page you're looking for is under development.
          </p>
          <p className="text-gray-500 text-xs mt-2">
            We're working hard to bring you something amazing!
          </p>
        </motion.div>
      </div>
    </div>
  );
}
