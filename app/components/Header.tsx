import { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, ChevronDown, Globe } from 'lucide-react';

interface DropdownItem {
  name: string;
  href: string;
}

interface NavigationItem {
  name: string;
  hasDropdown: boolean;
  href?: string;
  dropdownItems?: DropdownItem[];
}

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const navigationItems: NavigationItem[] = [
    { 
      name: 'Features', 
      hasDropdown: true,
      dropdownItems: [
        { name: 'Text to 3D Model', href: '/features/text-to-3d' },
        { name: 'Image to 3D Model', href: '/features/image-to-3d' },
        { name: 'AI Texturing', href: '/features/ai-texturing' },
        { name: 'Animation', href: '/features/ai-animation-generator' },
        { name: 'API', href: '/api' }
      ]
    },
    { name: 'API', hasDropdown: false, href: '/api' },
    { name: 'Pricing', hasDropdown: false, href: '/pricing' },
    { 
      name: 'Community', 
      hasDropdown: true,
      dropdownItems: [
        { name: 'Showcase', href: '/community/showcase' },
        { name: 'Discord', href: '/community/discord' },
        { name: 'User Stories', href: '/community/user-stories' }
      ]
    },
    { 
      name: 'Resources', 
      hasDropdown: true,
      dropdownItems: [
        { name: 'Blog', href: '/blog' },
        { name: 'Tutorials', href: '/tutorials' },
        { name: 'Documentation', href: '/docs' },
        { name: 'Help Center', href: '/help' }
      ]
    },
  ];

  const toggleDropdown = (itemName: string) => {
    setOpenDropdown(openDropdown === itemName ? null : itemName);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div 
            className="flex items-center space-x-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-green-600 rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
              </svg>
            </div>
            <span className="text-xl font-bold text-white">Meshy</span>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <div key={item.name} className="relative">
                {item.hasDropdown ? (
                  <button
                    onClick={() => toggleDropdown(item.name)}
                    className="flex items-center space-x-1 text-white hover:text-green-400 transition-colors duration-200"
                  >
                    <span>{item.name}</span>
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${openDropdown === item.name ? 'rotate-180' : ''}`} />
                  </button>
                ) : (
                  <a
                    href={item.href}
                    className="flex items-center space-x-1 text-white hover:text-green-400 transition-colors duration-200"
                  >
                    <span>{item.name}</span>
                  </a>
                )}
                
                {/* Dropdown Menu */}
                {item.hasDropdown && openDropdown === item.name && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute top-full left-0 mt-2 w-80 bg-gray-900/95 backdrop-blur-md rounded-lg border border-white/10 py-4"
                  >
                    {/* Features Images */}
                    {item.name === 'Features' && (
                      <div className="px-4 mb-4">
                        <div className="grid grid-cols-2 gap-2">
                          <img 
                            src="https://cdn.meshy.ai/landing-assets/home/meshy-nav-features-image-to-3d-1.0.webp"
                            alt="Image to 3D"
                            className="w-full h-16 object-cover rounded-lg"
                          />
                          <img 
                            src="https://cdn.meshy.ai/landing-assets/home/meshy-nav-features-text-to-3d-1.webp"
                            alt="Text to 3D"
                            className="w-full h-16 object-cover rounded-lg"
                          />
                          <img 
                            src="https://cdn.meshy.ai/landing-assets/home/meshy-nav-features-ai-texturing.webp"
                            alt="AI Texturing"
                            className="w-full h-16 object-cover rounded-lg"
                          />
                          <img 
                            src="https://cdn.meshy.ai/landing-assets/home/meshy-nav-features-animation-1.0.webp"
                            alt="Animation"
                            className="w-full h-16 object-cover rounded-lg"
                          />
                        </div>
                      </div>
                    )}
                    
                    {/* Dropdown Items */}
                    <div className="px-2">
                      {item.dropdownItems?.map((dropdownItem, index) => (
                        <a 
                          key={index}
                          href={dropdownItem.href} 
                          className="flex items-center px-2 py-3 text-sm text-white hover:bg-white/10 transition-colors duration-200 rounded-lg"
                        >
                          <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                          {dropdownItem.name}
                        </a>
                      ))}
                    </div>
                  </motion.div>
                )}
              </div>
            ))}
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-4">
              <button className="text-white hover:text-green-400 transition-colors duration-200">
                Contact Sales
              </button>
              <button className="text-white hover:text-green-400 transition-colors duration-200">
                Log In
              </button>
            </div>
            
            <motion.button
              className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-green-500/25"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Sign Up Free
            </motion.button>
            
            <button className="text-white hover:text-green-400 transition-colors duration-200">
              <Globe className="w-5 h-5" />
            </button>

            {/* Mobile menu button */}
            <button
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-white/10"
          >
            <div className="py-4 space-y-2">
              {navigationItems.map((item) => (
                <div key={item.name}>
                  {item.hasDropdown ? (
                    <div className="px-4 py-2">
                      <div className="text-white font-semibold mb-2">{item.name}</div>
                      <div className="ml-4 space-y-1">
                        {item.dropdownItems?.map((dropdownItem, index) => (
                          <a
                            key={index}
                            href={dropdownItem.href}
                            className="block px-2 py-1 text-gray-300 hover:text-white hover:bg-white/10 rounded text-sm"
                          >
                            {dropdownItem.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <a
                      href={item.href}
                      className="block px-4 py-2 text-white hover:bg-white/10 rounded-lg"
                    >
                      {item.name}
                    </a>
                  )}
                </div>
              ))}
              <div className="pt-4 border-t border-white/10 space-y-2">
                <button className="block w-full text-left px-4 py-2 text-white hover:bg-white/10 rounded-lg">
                  Contact Sales
                </button>
                <button className="block w-full text-left px-4 py-2 text-white hover:bg-white/10 rounded-lg">
                  Log In
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </header>
  );
}
