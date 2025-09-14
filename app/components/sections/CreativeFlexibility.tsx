import { motion } from 'framer-motion';
import { Palette, Wrench, Users, Sparkles } from 'lucide-react';

export default function CreativeFlexibility() {
  const features = [
    {
      icon: Palette,
      title: "Versatile Texture Styles",
      description: "Create in any style, from realistic and cartoon to hand painted and fantasy, with Meshy's broad range of texture options at your command."
    },
    {
      icon: Wrench,
      title: "Limitless Asset Types",
      description: "You can generate an endless variety of assets including characters, props, environments, and functional models like phone holders—your imagination sets the limit."
    },
    {
      icon: Users,
      title: "Vibrant Community",
      description: "Meshy's community of over 3 million creators shares, downloads, and remixes models. You can find collaboration, inspiration, and creative growth at Meshy community."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-green-500/5 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center mb-6">
            <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center mr-3">
              <Wrench className="w-5 h-5 text-white" />
            </div>
            <span className="text-green-400 font-semibold">Creative Flexibility</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Unlock Limitless Creative Freedom
          </h2>
          
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Unlock limitless creativity with Meshy—craft props, characters, and environments in any style, 
            from photorealistic to cartoon or sci-fi, all on your terms.
          </p>
        </motion.div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-700 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 overflow-hidden">
                {index === 0 && (
                  <img 
                    src="https://cdn.meshy.ai/landing-assets/home/feature-icon-prompt-helper.webp"
                    alt="Prompt Helper"
                    className="w-8 h-8 object-cover"
                  />
                )}
                {index === 1 && (
                  <img 
                    src="https://cdn.meshy.ai/landing-assets/home/feature-icon-pbr-maps.webp"
                    alt="PBR Maps"
                    className="w-8 h-8 object-cover"
                  />
                )}
                {index === 2 && (
                  <img 
                    src="https://cdn.meshy.ai/landing-assets/home/feature-icon-animation.webp"
                    alt="Animation"
                    className="w-8 h-8 object-cover"
                  />
                )}
              </div>
              
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-green-400 transition-colors duration-300">
                {feature.title}
              </h3>
              
              <p className="text-gray-300 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* 3D Models Showcase */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - AI Prompt Helper */}
            <div className="space-y-8">
              <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-700 rounded-xl flex items-center justify-center mr-4 overflow-hidden">
                    <img 
                      src="https://cdn.meshy.ai/landing-assets/home/feature-hero-prompt-helper.webp"
                      alt="AI Prompt Helper"
                      className="w-6 h-6 object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">AI Prompt Helper</h3>
                    <p className="text-gray-400">Transform vague ideas into clear prompts</p>
                  </div>
                </div>
                
                <div className="bg-gray-800/50 rounded-xl p-4 mb-4">
                  <textarea
                    className="w-full bg-transparent text-white placeholder-gray-400 resize-none border-none outline-none"
                    placeholder="A chibi fantasy ice monster character..."
                    rows={3}
                    defaultValue="A chibi fantasy ice monster character..."
                  />
                </div>
                
                <div className="flex items-center justify-between">
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" className="w-4 h-4 text-green-500 bg-gray-700 border-gray-600 rounded" defaultChecked />
                    <span className="text-gray-300 text-sm">Generate Multi-view</span>
                  </label>
                  
                  <motion.button
                    className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg font-medium flex items-center space-x-2 transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Sparkles className="w-4 h-4" />
                    <span>Generate</span>
                  </motion.button>
                </div>
              </div>
            </div>

            {/* Right Side - 3D Model Display */}
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-900 to-purple-900 rounded-3xl p-8 min-h-[400px] flex items-center justify-center">
                {/* 3D Model Placeholder */}
                <div className="relative">
                  <motion.div
                    className="w-64 h-64 bg-gradient-to-br from-blue-400 to-purple-600 rounded-2xl shadow-2xl relative overflow-hidden"
                    animate={{ 
                      rotateY: [0, 360],
                      scale: [1, 1.02, 1]
                    }}
                    transition={{ 
                      rotateY: { duration: 10, repeat: Infinity, ease: "linear" },
                      scale: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                    }}
                  >
                    {/* Ice Monster Model */}
                    <div className="w-full h-full bg-gradient-to-br from-blue-300 to-purple-400 rounded-2xl flex items-center justify-center relative">
                      {/* Split view effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                      <div className="w-24 h-24 bg-white/30 rounded-full flex items-center justify-center">
                        <span className="text-4xl">🧊</span>
                      </div>
                    </div>
                  </motion.div>
                  
                  {/* PBR Maps */}
                  <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    <div className="w-8 h-8 bg-purple-500 rounded-full"></div>
                    <div className="w-8 h-8 bg-gray-500 rounded-full"></div>
                    <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-blue-500 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
