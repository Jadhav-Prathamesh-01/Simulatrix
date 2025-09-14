import { motion } from 'framer-motion';
import { Plane, Shield, Users, Play, Settings, Zap } from 'lucide-react';

export default function MainFeatures() {
  const features = [
    {
      icon: Plane,
      title: "Text to 3D Model",
      description: "Create detailed 3D models from your ideas using our Text to 3D Model tool, which generates accurate 3D models from simple text descriptions.",
      image: "/api/placeholder/300/200",
      controls: [
        { label: "2K Triangles", type: "button", variant: "secondary" },
        { label: "3K Quads", type: "button", variant: "primary" }
      ]
    },
    {
      icon: Shield,
      title: "AI Texturing",
      description: "Enhance your 3D models—generated or uploaded—using text prompts or reference images with our AI texture generator, crafting textures in any style you want.",
      image: "/api/placeholder/300/200",
      controls: [
        { label: "A/T Pose", type: "toggle", active: true }
      ]
    },
    {
      icon: Settings,
      title: "Smart Remesh",
      description: "Instantly adjust triangle or quad counts, switch topology types, and balance detail and performance on export with options from 1k to 300k.",
      image: "/api/placeholder/300/200",
      controls: []
    },
    {
      icon: Users,
      title: "Rigging and Animation",
      description: "Easily rig your characters with automatic rigging, and prepare them for animation and industry-standard workflows.",
      image: "/api/placeholder/300/200",
      controls: []
    }
  ];

  return (
    <section className="py-20 bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Grid Layout */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column */}
          <div className="space-y-12">
            {features.slice(0, 2).map((feature, index) => (
              <motion.div
                key={index}
                className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 group"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="flex flex-col lg:flex-row items-start space-y-6 lg:space-y-0 lg:space-x-6">
                  {/* Feature Image */}
                  <div className="w-full lg:w-64 h-48 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl overflow-hidden group-hover:scale-105 transition-transform duration-300">
                    {index === 0 && (
                      <img 
                        src="https://cdn.meshy.ai/landing-assets/home/feature-hero-text-to-3d.webp"
                        alt="Text to 3D"
                        className="w-full h-full object-cover"
                      />
                    )}
                    {index === 1 && (
                      <img 
                        src="https://cdn.meshy.ai/landing-assets/home/feature-hero-ai-texturing.webp"
                        alt="AI Texturing"
                        className="w-full h-full object-cover"
                      />
                    )}
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#ffb71b] transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed mb-6">
                      {feature.description}
                    </p>
                    
                    {/* Controls */}
                    {feature.controls.length > 0 && (
                      <div className="flex space-x-4">
                        {feature.controls.map((control, controlIndex) => (
                          control.type === 'button' ? (
                            <button
                              key={controlIndex}
                              className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                                'variant' in control && control.variant === 'primary' 
                                  ? 'bg-[#ffb71b] hover:bg-[#e6a517] text-white' 
                                  : 'bg-gray-700 hover:bg-gray-600 text-white'
                              }`}
                            >
                              {control.label}
                            </button>
                          ) : (
                            <div key={controlIndex} className="flex items-center space-x-2">
                              <span className="text-gray-300 text-sm">{control.label}</span>
                              <div className={`w-12 h-6 rounded-full relative transition-colors duration-300 ${
                                'active' in control && control.active ? 'bg-[#ffb71b]' : 'bg-gray-600'
                              }`}>
                                <div className={`w-5 h-5 bg-white rounded-full absolute top-0.5 transition-transform duration-300 ${
                                  'active' in control && control.active ? 'translate-x-6' : 'translate-x-0.5'
                                }`}></div>
                              </div>
                            </div>
                          )
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Column */}
          <div className="space-y-12">
            {features.slice(2).map((feature, index) => (
              <motion.div
                key={index + 2}
                className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 group"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: (index + 2) * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="flex flex-col lg:flex-row items-start space-y-6 lg:space-y-0 lg:space-x-6">
                  {/* Feature Image */}
                  <div className="w-full lg:w-64 h-48 bg-gradient-to-br from-[#ffb71b] to-[#e6a517] rounded-xl overflow-hidden group-hover:scale-105 transition-transform duration-300">
                    {index === 0 && (
                      <img 
                        src="https://cdn.meshy.ai/landing-assets/home/feature-hero-smart-remesh.webp"
                        alt="Smart Remesh"
                        className="w-full h-full object-cover"
                      />
                    )}
                    {index === 1 && (
                      <img 
                        src="https://cdn.meshy.ai/landing-assets/home/feature-hero-rigging-animation-1.webp"
                        alt="Rigging Animation"
                        className="w-full h-full object-cover"
                      />
                    )}
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#ffb71b] transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Additional Features */}
        <motion.div
          className="grid md:grid-cols-3 gap-8 mt-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Multiple Concurrent Tasks */}
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-700 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Zap className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Multiple Concurrent Tasks</h3>
            <p className="text-gray-300 leading-relaxed">
              Accelerate your workflow with bulk generation—Meshy can handle 50+ 3D model and texture tasks at once.
            </p>
          </div>

          {/* Multilingual Support */}
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <span className="text-white font-bold text-xl">A~</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Multilingual Support</h3>
            <p className="text-gray-300 leading-relaxed">
              Besides English, Meshy supports prompts in multiple languages—type in Spanish, French, Chinese, Japanese, and more to create with ease.
            </p>
          </div>

          {/* Simulation Library */}
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-[#ffb71b] to-[#e6a517] rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Play className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Simulation Library</h3>
            <p className="text-gray-300 leading-relaxed">
              SIMULATRIX's simulation library offers 500+ game-ready motions—from basic walks and jumps to complex shooting stances, fights, and dance moves.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
