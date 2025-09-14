import { motion } from 'framer-motion';
import { Play, Sparkles } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen bg-hero-gradient flex items-center justify-center overflow-hidden">
      {/* Background Particles */}
      <div className="particles">
        {Array.from({ length: 50 }).map((_, i) => (
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

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="text-center">
          {/* Main Headline */}
          <motion.h1
            className="text-5xl sm:text-5xl md:text-6xl lg:text-[72px] font-bold text-white mb-6 leading-[1.2] max-w-6xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Create 3D Models from Text and Images with AI
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-sm sm:text-base font-medium text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed mt-5"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Meet the world's most popular and intuitive free AI 3D model generator. 
            Transform text and images into stunning 3D models in seconds with our 
            text & image to 3D model tool—no experience required!
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.button
              className="inline-flex items-center space-x-3 bg-gradient-to-r from-[#ffb71b] to-[#e6a517] hover:from-[#e6a517] hover:to-[#cc8f14] text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-2xl hover:shadow-[#ffb71b]/25"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Start Creating</span>
            </motion.button>
          </motion.div>
        </div>

        {/* 3D Models Showcase */}
        <motion.div
          className="mt-20 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          {/* Product Design */}
          <motion.div
            className="relative group cursor-pointer"
            whileHover={{ scale: 1.05, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <div className="bg-gradient-to-br from-purple-500 to-purple-700 rounded-2xl h-48 flex items-center justify-center relative overflow-hidden">
              <img 
                src="https://cdn.meshy.ai/landing-assets/home/meshy-use-case-hero-product-design.webp"
                alt="Product Design"
                className="w-full h-full object-cover rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-2xl"></div>
              <div className="absolute bottom-4 left-4 right-4 text-center">
                <span className="text-white text-sm font-medium drop-shadow-lg">Product Design</span>
              </div>
            </div>
          </motion.div>

          {/* Education */}
          <motion.div
            className="relative group cursor-pointer"
            whileHover={{ scale: 1.05, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <div className="bg-gradient-to-br from-orange-500 to-orange-700 rounded-2xl h-48 flex items-center justify-center relative overflow-hidden">
              <img 
                src="https://cdn.meshy.ai/landing-assets/home/meshy-use-case-hero-education.webp"
                alt="Education"
                className="w-full h-full object-cover rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-2xl"></div>
              <div className="absolute bottom-4 left-4 right-4 text-center">
                <span className="text-white text-sm font-medium drop-shadow-lg">Education</span>
              </div>
            </div>
          </motion.div>

          {/* 3D Printing */}
          <motion.div
            className="relative group cursor-pointer"
            whileHover={{ scale: 1.05, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <div className="bg-gradient-to-br from-red-500 to-red-700 rounded-2xl h-48 flex items-center justify-center relative overflow-hidden">
              <img 
                src="https://cdn.meshy.ai/landing-assets/home/meshy-use-case-3d-printing.webp"
                alt="3D Printing"
                className="w-full h-full object-cover rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-2xl"></div>
              <div className="absolute bottom-4 left-4 right-4 text-center">
                <span className="text-white text-sm font-medium drop-shadow-lg">3D Printing</span>
              </div>
            </div>
          </motion.div>

          {/* VR/AR */}
          <motion.div
            className="relative group cursor-pointer"
            whileHover={{ scale: 1.05, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <div className="bg-gradient-to-br from-indigo-500 to-indigo-700 rounded-2xl h-48 flex items-center justify-center relative overflow-hidden">
              <img 
                src="https://cdn.meshy.ai/landing-assets/home/meshy-use-case-hero-vr-ar.webp"
                alt="VR/AR"
                className="w-full h-full object-cover rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-2xl"></div>
              <div className="absolute bottom-4 left-4 right-4 text-center">
                <span className="text-white text-sm font-medium drop-shadow-lg">VR/AR</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
