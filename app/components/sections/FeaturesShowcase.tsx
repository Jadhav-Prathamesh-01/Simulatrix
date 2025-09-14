import { motion } from 'framer-motion';
import { Users, Zap, TrendingUp, Handshake } from 'lucide-react';

export default function FeaturesShowcase() {
  const features = [
    {
      icon: Users,
      title: "3D Content Creation Democratized",
      description: "Empower anyone to create production-ready 3D assets from a simple text prompt or reference images in seconds, no need for learning specialized modeling skills.",
      gradient: "from-teal-500 to-blue-500"
    },
    {
      icon: Zap,
      title: "10x Faster Than Traditional Methods",
      description: "Reduce hours or days of manual modeling and texturing to mere minutes, lightning fast generation speed saves you time in the development cycle and ensures your projects stay on schedule.",
      gradient: "from-yellow-500 to-orange-500"
    },
    {
      icon: TrendingUp,
      title: "Scale Creation without Scaling Costs",
      description: "Create thousands of assets simultaneously at a fraction of traditional costs, cutting expenses for scaled 3D content creation by up to 100x.",
      gradient: "from-orange-500 to-red-500"
    }
  ];

  const partners = [
    { name: "KIRI Engine", logo: "🔧" },
    { name: "byrst", logo: "⚡" },
    { name: "SUPERCELL", logo: "🎮" },
    { name: "FUNPLUS", logo: "🎯" },
    { name: "houzz", logo: "🏠" },
    { name: "YAHAHA", logo: "🎪" },
    { name: "chitubox", logo: "📦" },
    { name: "ELEGCO", logo: "🖨️" }
  ];

  return (
    <section className="py-20 bg-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/20 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="relative group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 h-full border border-white/10 hover:border-white/20 transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-green-500/10">
                {/* Benefit Image */}
                <div className={`w-full h-48 bg-gradient-to-br ${feature.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300 overflow-hidden`}>
                  {index === 0 && (
                    <img 
                      src="https://cdn.meshy.ai/landing-assets/home/meshy-benefits-3d-content-creation-democratized.webp"
                      alt="3D Content Creation Democratized"
                      className="w-full h-full object-cover rounded-xl"
                    />
                  )}
                  {index === 1 && (
                    <img 
                      src="https://cdn.meshy.ai/landing-assets/home/meshy-benefits-faster-than-traditional-methods.webp"
                      alt="Faster Than Traditional Methods"
                      className="w-full h-full object-cover rounded-xl"
                    />
                  )}
                  {index === 2 && (
                    <img 
                      src="https://cdn.meshy.ai/landing-assets/home/meshy-benefits-scale-creation-without-scaling-costs.webp"
                      alt="Scale Creation Without Scaling Costs"
                      className="w-full h-full object-cover rounded-xl"
                    />
                  )}
                </div>
                
                {/* Content */}
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-green-400 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Partners Section */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center mb-8">
            <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center mr-4">
              <Handshake className="w-5 h-5 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-white">
              Trusted by partners and customers across industries to build the future of 3D creation
            </h2>
          </div>
          
          {/* Partners Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6 max-w-6xl mx-auto">
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                className="bg-gray-900/30 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="text-center">
                  <div className="text-3xl mb-2">{partner.logo}</div>
                  <span className="text-sm text-gray-300 font-medium">{partner.name}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
