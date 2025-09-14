import { motion } from 'framer-motion';
import { Workflow, Puzzle, Plug } from 'lucide-react';

export default function WorkflowIntegration() {
  const platforms = [
    { name: "Blender", logo: "🟠", color: "from-orange-500 to-orange-600" },
    { name: "Unity", logo: "⚪", color: "from-gray-400 to-gray-600" },
    { name: "Maya", logo: "🔵", color: "from-blue-500 to-blue-600" },
    { name: "Godot", logo: "🟦", color: "from-blue-400 to-blue-500" },
    { name: "Unreal", logo: "⚫", color: "from-gray-800 to-black" },
    { name: "Bambu", logo: "🟢", color: "from-[#ffb71b] to-[#e6a517]" }
  ];

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
              <Workflow className="w-5 h-5 text-white" />
            </div>
            <span className="text-[#ffb71b] font-semibold">Workflow Integration</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Seamless Integration with Your 3D Pipeline
          </h2>
          
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Meshy's plugins and API provide a frictionless bridge between asset creation and your preferred tools, 
            ensuring efficiency from ideation to in-engine deployment.
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* API Platform */}
          <motion.div
            className="relative bg-gradient-to-br from-blue-900 to-teal-900 rounded-3xl p-8 overflow-hidden"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-8 left-8 w-16 h-16 bg-white rounded-lg transform rotate-12"></div>
              <div className="absolute top-16 right-12 w-12 h-12 bg-white rounded-lg transform -rotate-12"></div>
              <div className="absolute bottom-12 left-16 w-8 h-8 bg-white rounded-lg transform rotate-45"></div>
            </div>
            
            {/* API Platform Icon */}
            <div className="relative z-10 mb-8">
              <div className="w-16 h-16 bg-blue-500 rounded-xl flex items-center justify-center">
                <img 
                  src="https://cdn.meshy.ai/landing-assets/home/feature-icon-api-platform.webp"
                  alt="API Platform"
                  className="w-8 h-8 object-cover"
                />
              </div>
            </div>
            
            <div className="relative z-10">
              <h3 className="text-3xl font-bold text-white mb-6">API Platform</h3>
              
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                Tap directly into Meshy's generation power via a robust, well-documented REST API—create tasks, 
                manage balance, and weave 3D creation into any pipeline or language with just a few lines of code.
              </p>
              
              {/* Code Example */}
              <div className="bg-black/50 rounded-xl p-4 border border-white/20">
                <pre className="text-[#ffb71b] text-sm">
                  <code>{`const response = await fetch(
  'https://api.meshy.ai/v1/text-to-3d',
  {
    method: 'POST',
    headers: {
      'Authorization': 'Bearer YOUR_API_KEY',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      prompt: 'A cute robot',
      mode: 'preview'
    })
  }
);`}</code>
                </pre>
              </div>
            </div>
          </motion.div>

          {/* 3D Platform Plugins */}
          <motion.div
            className="relative bg-gradient-to-br from-orange-900 to-red-900 rounded-3xl p-8 overflow-hidden"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-8 right-8 w-16 h-16 bg-white rounded-lg transform -rotate-12"></div>
              <div className="absolute top-16 left-12 w-12 h-12 bg-white rounded-lg transform rotate-12"></div>
              <div className="absolute bottom-12 right-16 w-8 h-8 bg-white rounded-lg transform -rotate-45"></div>
            </div>
            
            {/* 3D Platform Plugins Icon */}
            <div className="relative z-10 mb-8">
              <div className="w-16 h-16 bg-orange-500 rounded-xl flex items-center justify-center">
                <img 
                  src="https://cdn.meshy.ai/landing-assets/home/feature-icon-3d-platform-plugins.webp"
                  alt="3D Platform Plugins"
                  className="w-8 h-8 object-cover"
                />
              </div>
            </div>
            
            <div className="relative z-10">
              <h3 className="text-3xl font-bold text-white mb-6">3D Platform Plugins</h3>
              
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                Meshy integrates directly into your game engine and 3D pipeline with native plugins—import generated assets 
                seamlessly into Blender, Unity, Maya, Godot, Unreal Engine, and Bambu Studio.
              </p>
              
              {/* Platform Logos */}
              <div className="grid grid-cols-3 gap-4">
                {platforms.map((platform, index) => (
                  <motion.div
                    key={platform.name}
                    className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center hover:bg-white/20 transition-all duration-300 cursor-pointer"
                    whileHover={{ scale: 1.05, y: -5 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className={`w-12 h-12 bg-gradient-to-br ${platform.color} rounded-lg flex items-center justify-center mx-auto mb-2`}>
                      <span className="text-2xl">{platform.logo}</span>
                    </div>
                    <span className="text-white text-sm font-medium">{platform.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
