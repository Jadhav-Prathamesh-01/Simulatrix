import { motion } from 'framer-motion';
import { Twitter, Instagram, Youtube, MessageCircle, Music, Linkedin } from 'lucide-react';

export default function Footer() {
  const footerSections = {
    main: [
      { name: 'Pricing', href: '#' },
      { name: 'Community', href: '#' },
      { name: 'About', href: '#' },
      { name: 'Careers', href: '#' },
      { name: 'Status', href: '#' }
    ],
    features: [
      { name: 'Text to 3D Model', href: '#' },
      { name: 'Image to 3D Model', href: '#' },
      { name: 'AI Texturing', href: '#' },
      { name: 'Animation', href: '#' },
      { name: 'API', href: '#' }
    ],
    learn: [
      { name: 'Blog', href: '#' },
      { name: 'Tutorials', href: '#' },
      { name: 'Documentation', href: '#' },
      { name: 'Help Center', href: '#' }
    ],
    downloads: [
      { name: 'Blender Plugin', href: '#' },
      { name: 'Unity Plugin', href: '#' },
      { name: 'Unreal Plugin', href: '#' },
      { name: 'Godot Plugin', href: '#' },
      { name: 'Maya Plugin', href: '#' },
      { name: 'Media Kit', href: '#' }
    ],
    programs: [
      { name: 'Affiliate Program', href: '#' },
      { name: 'Creator Program', href: '#' },
      { name: 'Fellowship Program', href: '#' },
      { name: 'Referral Program', href: '#' },
      { name: 'Education Program', href: '#' }
    ],
    tools: [
      { name: '3D File Converter', href: '#' },
      { name: 'Online 3D Viewer', href: '#' }
    ]
  };

  const socialLinks = [
    { icon: Twitter, href: '#', name: 'X' },
    { icon: Instagram, href: '#', name: 'Instagram' },
    { icon: Youtube, href: '#', name: 'YouTube' },
    { icon: MessageCircle, href: '#', name: 'Discord' },
    { icon: Music, href: '#', name: 'TikTok' },
    { icon: Linkedin, href: '#', name: 'LinkedIn' }
  ];

  return (
    <footer className="bg-gray-900 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Top Section */}
        <div className="grid lg:grid-cols-6 gap-8 mb-12">
          {/* Logo and Main Links */}
          <div className="lg:col-span-2">
            <motion.div
              className="flex items-center space-x-2 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="w-8 h-8 bg-gradient-to-br from-[#ffb71b] to-[#e6a517] rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                  <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                  <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                </svg>
              </div>
              <span className="text-xl font-bold text-white">SIMULATRIX</span>
              <span className="bg-[#ffb71b] text-white text-xs px-2 py-1 rounded-full font-semibold">HIRING</span>
            </motion.div>
            
            <div className="space-y-2">
              {footerSections.main.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  className="block text-gray-300 hover:text-white transition-colors duration-200"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Features */}
          <div>
            <h3 className="text-white font-semibold mb-4">FEATURES</h3>
            <div className="space-y-2">
              {footerSections.features.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  className="block text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Learn */}
          <div>
            <h3 className="text-white font-semibold mb-4">LEARN</h3>
            <div className="space-y-2">
              {footerSections.learn.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  className="block text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
            
            <h3 className="text-white font-semibold mb-4 mt-8">DOWNLOADS</h3>
            <div className="space-y-2">
              {footerSections.downloads.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  className="block text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Programs */}
          <div>
            <h3 className="text-white font-semibold mb-4">PROGRAMS</h3>
            <div className="space-y-2">
              {footerSections.programs.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  className="block text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
            
            <h3 className="text-white font-semibold mb-4 mt-8">TOOLS</h3>
            <div className="space-y-2">
              {footerSections.tools.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  className="block text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            {/* Social Links */}
            <div className="flex items-center space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.1 }}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>

            {/* Copyright */}
            <motion.div
              className="text-gray-400 text-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              © 2025 SIMULATRIX. ALL RIGHTS RESERVED
            </motion.div>

            {/* Legal Links */}
            <div className="flex items-center space-x-4">
              {['TERMS OF USE', 'PRIVACY POLICY', 'ACCEPTABLE USE POLICY', 'COOKIE POLICY'].map((link, index) => (
                <motion.a
                  key={index}
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {link}
                </motion.a>
              ))}
              
              {/* Language Selector */}
              <motion.div
                className="flex items-center space-x-2 text-gray-400 text-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <span>English</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
