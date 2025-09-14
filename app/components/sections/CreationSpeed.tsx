import { motion } from 'framer-motion';
import { Zap, Upload, Wand2 } from 'lucide-react';

export default function CreationSpeed() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-6">
              <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center mr-3">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-green-400 font-semibold">Creation Speed</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Instant 3D Model Creation in Seconds
            </h2>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Meshy turbocharges every phase of 3D asset creation, slashing turnaround times from days to minutes. 
              From prompt to model, our integrated AI-powered tools let you iterate, generate, and refine with unmatched efficiency.
            </p>
          </motion.div>

          {/* Right Side - Interactive Demo */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* 3D Model Background */}
            <div className="relative bg-gradient-to-br from-amber-900 to-amber-700 rounded-3xl p-8 min-h-[500px] flex items-center justify-center">
              {/* 3D Model Placeholder */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  className="w-64 h-64 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl shadow-2xl overflow-hidden"
                  animate={{ 
                    rotateY: [0, 360],
                    scale: [1, 1.05, 1]
                  }}
                  transition={{ 
                    rotateY: { duration: 8, repeat: Infinity, ease: "linear" },
                    scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                  }}
                >
                  <img 
                    src="https://cdn.meshy.ai/landing-assets/home/feature-hero-image-to-3d-1.webp"
                    alt="3D Model Demo"
                    className="w-full h-full object-cover rounded-2xl"
                  />
                  <img 
                    src="https://cdn.meshy.ai/landing-assets/home/feature-hero-image-to-3d-2.webp"
                    alt="3D Model Demo 2"
                    className="absolute inset-0 w-full h-full object-cover rounded-2xl opacity-80"
                  />
                </motion.div>
              </div>

              {/* Image to 3D Input Panel */}
              <div className="relative z-10 bg-gray-900/90 backdrop-blur-sm rounded-2xl p-6 border border-white/20 max-w-sm mx-auto">
                <div className="text-center mb-4">
                  <h3 className="text-white font-semibold mb-2">Image to 3D Model</h3>
                  <p className="text-gray-400 text-sm">Turn your 2D images into stunning 3D models</p>
                </div>
                
                {/* Upload Area */}
                <div className="border-2 border-dashed border-gray-600 rounded-xl p-6 mb-4 hover:border-green-500 transition-colors duration-300 cursor-pointer">
                  <div className="text-center">
                    <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                    <p className="text-gray-400 text-sm">Click / Drag & Drop / Paste Image</p>
                  </div>
                </div>
                
                {/* Generate Button */}
                <motion.button
                  className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Wand2 className="w-5 h-5" />
                  <span>Generate</span>
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Feature Cards */}
        <motion.div
          className="grid md:grid-cols-3 gap-8 mt-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Text to 3D */}
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 group">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <span className="text-white font-bold text-lg">T</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Text to 3D Model</h3>
            <p className="text-gray-300 leading-relaxed">
              Create detailed 3D models from your ideas using our Text to 3D Model tool, 
              which generates accurate 3D models from simple text descriptions.
            </p>
          </div>

          {/* AI Texturing */}
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 group">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-700 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <span className="text-white font-bold text-lg">AI</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-4">AI Texturing</h3>
            <p className="text-gray-300 leading-relaxed">
              Enhance your 3D models—generated or uploaded—using text prompts or reference images 
              with our AI texture generator, crafting textures in any style you want.
            </p>
          </div>

          {/* Smart Remesh */}
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 group">
            <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-700 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <span className="text-white font-bold text-lg">∞</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Smart Remesh</h3>
            <p className="text-gray-300 leading-relaxed">
              Instantly adjust triangle or quad counts, switch topology types, and balance 
              detail and performance on export with options from 1k to 300k.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
