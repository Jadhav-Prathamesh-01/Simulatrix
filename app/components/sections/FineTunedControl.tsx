import { motion } from 'framer-motion';
import { Settings, Image, Eye, Sparkles } from 'lucide-react';

export default function FineTunedControl() {
  return (
    <section className="py-20 bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center mb-6">
            <div className="w-8 h-8 bg-[#ffb71b] rounded-lg flex items-center justify-center mr-3">
              <Settings className="w-5 h-5 text-white" />
            </div>
            <span className="text-[#ffb71b] font-semibold">Fine-tuned Control</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Total Creative Authority and Control
          </h2>
          
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Meshy puts you in control—guide generation with input settings, iterate on results, 
            and fine-tune details until the asset aligns with your vision.
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Text to Image */}
          <motion.div
            className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center mr-4">
                <Image className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Text to Image</h3>
                <p className="text-gray-400">Generate captivating images from text prompts</p>
              </div>
            </div>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              Generate captivating images from text prompts using our Text to Single or Multiple Image tool, 
              making it easy to visualize your concepts.
            </p>
            
            {/* Input Area */}
            <div className="bg-gray-800/50 rounded-xl p-4 mb-4">
              <textarea
                className="w-full bg-transparent text-white placeholder-gray-400 resize-none border-none outline-none"
                placeholder="A chibi fantasy ice monster character..."
                rows={3}
                defaultValue="A chibi fantasy ice monster character..."
              />
            </div>
            
            {/* Controls */}
            <div className="flex items-center justify-between mb-6">
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="w-4 h-4 text-[#ffb71b] bg-gray-700 border-gray-600 rounded" defaultChecked />
                <span className="text-gray-300 text-sm">Generate Multi-view</span>
              </label>
              
              <motion.button
                className="bg-[#ffb71b] hover:bg-[#e6a517] text-white px-6 py-2 rounded-lg font-medium flex items-center space-x-2 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Sparkles className="w-4 h-4" />
                <span>Generate</span>
              </motion.button>
            </div>
            
            {/* Generated Images */}
            <div className="grid grid-cols-3 gap-2">
              <img 
                src="https://cdn.meshy.ai/landing-assets/home/feature-hero-text-to-3d.webp"
                alt="Generated Image 1"
                className="aspect-square bg-gradient-to-br from-blue-400 to-purple-600 rounded-lg object-cover"
              />
              <img 
                src="https://cdn.meshy.ai/landing-assets/home/feature-hero-text-to-3d-m.webp"
                alt="Generated Image 2"
                className="aspect-square bg-gradient-to-br from-blue-400 to-purple-600 rounded-lg object-cover"
              />
              <img 
                src="https://cdn.meshy.ai/landing-assets/home/feature-hero-ai-texturing.webp"
                alt="Generated Image 3"
                className="aspect-square bg-gradient-to-br from-blue-400 to-purple-600 rounded-lg object-cover"
              />
            </div>
          </motion.div>

          {/* Right Side - Multi-view Image to 3D */}
          <motion.div
            className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-700 rounded-xl flex items-center justify-center mr-4">
                <Eye className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Multi-view Image to 3D</h3>
                <p className="text-gray-400">Turn images into high-fidelity 3D models</p>
              </div>
            </div>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              Generate front, side, and back view images of your concept, then turn them into a high-fidelity 3D model that matches your vision.
            </p>
            
            {/* Multi-view Images */}
            <div className="flex space-x-2 mb-6">
              <img 
                src="https://cdn.meshy.ai/landing-assets/home/feature-hero-image-to-3d-1.webp"
                alt="Front View"
                className="flex-1 aspect-square bg-gradient-to-br from-blue-400 to-purple-600 rounded-lg object-cover"
              />
              <img 
                src="https://cdn.meshy.ai/landing-assets/home/feature-hero-image-to-3d-2.webp"
                alt="Side View"
                className="flex-1 aspect-square bg-gradient-to-br from-blue-400 to-purple-600 rounded-lg object-cover"
              />
              <img 
                src="https://cdn.meshy.ai/landing-assets/home/feature-hero-image-to-3d-1-m.webp"
                alt="Back View"
                className="flex-1 aspect-square bg-gradient-to-br from-blue-400 to-purple-600 rounded-lg object-cover"
              />
            </div>
            
            {/* 3D Model Display */}
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-900 to-purple-900 rounded-xl p-6 min-h-[200px] flex items-center justify-center">
                <motion.div
                  className="w-32 h-32 bg-gradient-to-br from-blue-400 to-purple-600 rounded-xl shadow-2xl relative overflow-hidden"
                  animate={{ 
                    rotateY: [0, 360],
                    scale: [1, 1.05, 1]
                  }}
                  transition={{ 
                    rotateY: { duration: 8, repeat: Infinity, ease: "linear" },
                    scale: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                  }}
                >
                  {/* Split view effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                  <div className="w-full h-full bg-gradient-to-br from-blue-300 to-purple-400 rounded-xl flex items-center justify-center">
                    <span className="text-2xl">🧊</span>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Additional Features */}
        <motion.div
          className="grid md:grid-cols-2 gap-8 mt-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Free Retry */}
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-[#ffb71b] to-[#e6a517] rounded-lg flex items-center justify-center mr-4">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white">Free Retry</h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              With the same prompt, you can re-generate models for free, so you achieve the result you want.
            </p>
          </div>

          {/* AI Texture Editing */}
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-700 rounded-lg flex items-center justify-center mr-4">
                <Settings className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white">AI Texture Editing</h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Create unlimited textures on the same mesh and refine colors, patterns, or materials simply by adjusting your prompts.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
