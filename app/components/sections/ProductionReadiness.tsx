import { motion } from 'framer-motion';
import { GraduationCap, Download, Shield, FileText, Settings, Check } from 'lucide-react';

export default function ProductionReadiness() {
  const features = [
    {
      icon: Download,
      title: "Asset Management",
      description: "Browse, preview, and manage your generated assets in one place. Label, search, and bulk download past assets anytime, so you spend less time digging and more time creating.",
      items: [
        { name: "Goblin", thumbnail: "👹", status: "completed" },
        { name: "Bust", thumbnail: "👤", status: "completed" },
        { name: "Dragon", thumbnail: "🐉", status: "completed" },
        { name: "Mug", thumbnail: "☕", status: "completed" },
        { name: "Crab", thumbnail: "🦀", status: "completed" },
        { name: "Head", thumbnail: "👨", status: "completed" }
      ],
      actions: ["Download", "Duplicate", "Delete"]
    },
    {
      icon: Shield,
      title: "Private Licensed",
      description: "Meshy offers a private license that lets you commercialize your generated models while protecting them from unauthorized use or sharing.",
      options: [
        { name: "CC BY 4.0", active: false, color: "bg-gray-600" },
        { name: "PRIVATE", active: true, color: "bg-green-500" }
      ]
    },
    {
      icon: FileText,
      title: "Multiple 3D File Formats Support",
      description: "Export model in FBX, GLB, OBJ, STL, 3MF, USDZ, BLEND formats for production use—no extra conversion needed.",
      formats: ["fbx", "obj", "glb", "usdz", "stl", "blend"],
      selectedFormat: "fbx"
    },
    {
      icon: Settings,
      title: "Resize and Pivot Tool",
      description: "Set accurate real-world dimensions and pivot points for perfect in-scene alignment or 3D-print readiness.",
      controls: {
        resize: { enabled: true, height: "3000", unit: "mm" },
        origin: { options: ["Bottom", "Center"], selected: "Bottom" }
      }
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-black relative overflow-hidden">
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
            <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center mr-3">
              <GraduationCap className="w-5 h-5 text-white" />
            </div>
            <span className="text-green-400 font-semibold">Production Readiness</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Ready for Professional Production, Instantly
          </h2>
          
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Meshy offers built-in post-processing to meet poly budgets, fix mesh issues, and export in industry-standard formats—no additional tools required.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Asset Management */}
          <motion.div
            className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center mr-4 overflow-hidden">
                <img 
                  src="https://cdn.meshy.ai/landing-assets/home/feature-hero-asset-management.webp"
                  alt="Asset Management"
                  className="w-6 h-6 object-cover"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Asset Management</h3>
                <p className="text-gray-400">Organize and manage your 3D assets</p>
              </div>
            </div>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              {features[0].description}
            </p>
            
            {/* Asset Grid */}
            <div className="grid grid-cols-3 gap-3 mb-6">
              {features[0].items.map((item, index) => (
                <div key={index} className="bg-gray-800/50 rounded-lg p-3 text-center relative">
                  <div className="text-2xl mb-2">{item.thumbnail}</div>
                  <div className="text-xs text-gray-300">{item.name}</div>
                  <div className="absolute top-1 right-1 w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                </div>
              ))}
            </div>
            
            {/* Action Buttons */}
            <div className="flex space-x-3">
              {features[0].actions.map((action, index) => (
                <button
                  key={index}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                    index === 0 
                      ? 'bg-green-500 hover:bg-green-600 text-white' 
                      : 'bg-gray-700 hover:bg-gray-600 text-white'
                  }`}
                >
                  {action}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Private Licensed */}
          <motion.div
            className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-700 rounded-xl flex items-center justify-center mr-4 overflow-hidden">
                <img 
                  src="https://cdn.meshy.ai/landing-assets/home/feature-hero-private-license.webp"
                  alt="Private Licensed"
                  className="w-6 h-6 object-cover"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Private Licensed</h3>
                <p className="text-gray-400">Protect your commercial assets</p>
              </div>
            </div>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              {features[1].description}
            </p>
            
            {/* License Options */}
            <div className="space-y-3">
              {features[1].options.map((option, index) => (
                <button
                  key={index}
                  className={`w-full ${option.color} text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:opacity-90 ${
                    option.active ? 'ring-2 ring-green-400' : ''
                  }`}
                >
                  {option.name}
                </button>
              ))}
            </div>
          </motion.div>

          {/* File Formats */}
          <motion.div
            className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-700 rounded-xl flex items-center justify-center mr-4 overflow-hidden">
                <img 
                  src="https://cdn.meshy.ai/landing-assets/home/feature-hero-multiple-3d-file-format-support.webp"
                  alt="Multiple 3D File Formats Support"
                  className="w-6 h-6 object-cover"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Multiple 3D File Formats Support</h3>
                <p className="text-gray-400">Export in industry-standard formats</p>
              </div>
            </div>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              {features[2].description}
            </p>
            
            {/* Format Dropdown */}
            <div className="relative">
              <select className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-green-500" defaultValue="glb">
                {features[2].formats.map((format, index) => (
                  <option key={index} value={format} className="bg-gray-800">
                    {format.toUpperCase()}
                  </option>
                ))}
              </select>
            </div>
          </motion.div>

          {/* Resize and Pivot Tool */}
          <motion.div
            className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-700 rounded-xl flex items-center justify-center mr-4 overflow-hidden">
                <img 
                  src="https://cdn.meshy.ai/landing-assets/home/feature-hero-resize-pivot.webp"
                  alt="Resize and Pivot Tool"
                  className="w-6 h-6 object-cover"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Resize and Pivot Tool</h3>
                <p className="text-gray-400">Set accurate dimensions and pivot points</p>
              </div>
            </div>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              {features[3].description}
            </p>
            
            {/* Controls */}
            <div className="space-y-4">
              {/* Resize Toggle */}
              <div className="flex items-center justify-between">
                <span className="text-gray-300">Resize</span>
                <div className={`w-12 h-6 rounded-full relative transition-colors duration-300 ${
                  features[3].controls.resize.enabled ? 'bg-green-500' : 'bg-gray-600'
                }`}>
                  <div className={`w-5 h-5 bg-white rounded-full absolute top-0.5 transition-transform duration-300 ${
                    features[3].controls.resize.enabled ? 'translate-x-6' : 'translate-x-0.5'
                  }`}></div>
                </div>
              </div>
              
              {/* Height Input */}
              <div className="flex items-center space-x-3">
                <span className="text-gray-300">Height</span>
                <div className="flex items-center bg-gray-800 rounded-lg px-3 py-2">
                  <input
                    type="number"
                    defaultValue={features[3].controls.resize.height}
                    className="bg-transparent text-white w-20 outline-none"
                  />
                  <span className="text-gray-400 ml-2">mm</span>
                </div>
              </div>
              
              {/* Origin Selection */}
              <div className="flex items-center space-x-3">
                <span className="text-gray-300">Origin</span>
                <div className="flex space-x-2">
                  {features[3].controls.origin.options.map((option, index) => (
                    <button
                      key={index}
                      className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                        option === features[3].controls.origin.selected
                          ? 'bg-green-500 text-white'
                          : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
