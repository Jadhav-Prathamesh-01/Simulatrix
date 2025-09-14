import { motion } from 'framer-motion';
import { Heart, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      text: "Incredible text to 3D and more! No limits to your imagination. If you have a creative mind, you can indulge yourself in creating everything that comes to mind, in a 3D version. The latest update has brought further improvements, furthermore in just 60 seconds 8 results of what we are going to create are generated.",
      author: "Max Casu",
      role: "AI Creator",
      rating: 5
    },
    {
      id: 2,
      text: "The level of texture and ease of the UI are incredible and unmatched. I use way too many 3D tools and this sits at the top of my workflow. Thanks Meshy!",
      author: "Tom Blake",
      role: "Digital Artist",
      rating: 5
    },
    {
      id: 3,
      text: "My current go-to for AI 3D model generation tool. The latest Meshy 4 generations have been a huge leap in terms of quality for both text and image to 3D. Plus I've already got lots of value out of the easy biped/quadruped rigging and walking animation option.",
      author: "Jon Draper",
      role: "AI Animator & Developer",
      rating: 5
    },
    {
      id: 4,
      text: "2025 is the year 3D AI takes over! Meshy AI lets you turn a single image into high-quality 3D model. Then, you can choose any angle and bring it to life with an AI video generator. 3D AI is the future of content creation.",
      author: "el.cine",
      role: "AI Creator",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-pink-500/5 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center mb-8">
            <motion.div
              className="w-16 h-16 bg-gradient-to-br from-pink-500 to-pink-600 rounded-2xl flex items-center justify-center mr-4 overflow-hidden"
              animate={{ 
                scale: [1, 1.1, 1],
                rotate: [0, 5, -5, 0]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <img 
                src="https://cdn.meshy.ai/landing-assets/home/handshake.webp"
                alt="Handshake"
                className="w-8 h-8 object-cover"
              />
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Loved By Creators
            </h2>
          </div>
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Current Testimonial */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="bg-gray-900/50 backdrop-blur-sm rounded-3xl p-8 border border-white/10 relative">
                {/* Quote Icon */}
                <div className="absolute top-8 left-8 w-12 h-12 text-pink-500">
                  <Quote className="w-12 h-12" />
                </div>
                
                {/* Testimonial Content */}
                <div className="pt-8">
                  <blockquote className="text-xl text-gray-300 leading-relaxed mb-8 italic">
                    "{testimonials[3].text}"
                  </blockquote>
                  
                  {/* Author */}
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-pink-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-semibold text-lg">
                        {testimonials[3].author.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <div className="text-white font-semibold">{testimonials[3].author}</div>
                      <div className="text-gray-400 text-sm">{testimonials[3].role}</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Side - Navigation and Stats */}
            <motion.div
              className="text-center"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="mb-12">
                <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  3D, On Command
                </h3>
                
                <motion.button
                  className="bg-gradient-to-r from-[#ffb71b] to-[#e6a517] hover:from-[#e6a517] hover:to-[#cc8f14] text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-2xl hover:shadow-[#ffb71b]/25 flex items-center space-x-3 mx-auto"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>Start Creating</span>
                  <span className="text-xl">✨</span>
                </motion.button>
              </div>

              {/* Navigation */}
              <div className="flex items-center justify-center space-x-4">
                <motion.button
                  className="w-12 h-12 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center transition-all duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <ChevronLeft className="w-6 h-6 text-white" />
                </motion.button>
                
                <div className="flex space-x-2">
                  {[1, 2, 3, 4].map((dot, index) => (
                    <button
                      key={dot}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === 3 ? 'bg-pink-500' : 'bg-gray-600'
                      }`}
                    />
                  ))}
                </div>
                
                <motion.button
                  className="w-12 h-12 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center transition-all duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <ChevronRight className="w-6 h-6 text-white" />
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Additional Testimonials Grid */}
        <motion.div
          className="grid md:grid-cols-3 gap-8 mt-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="bg-gray-900/30 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300"
            >
              {/* Rating */}
              <div className="flex space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400">⭐</span>
                ))}
              </div>
              
              {/* Quote */}
              <blockquote className="text-gray-300 text-sm leading-relaxed mb-4 italic">
                "{testimonial.text.substring(0, 120)}..."
              </blockquote>
              
              {/* Author */}
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-semibold text-sm">
                    {testimonial.author.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">{testimonial.author}</div>
                  <div className="text-gray-400 text-xs">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
