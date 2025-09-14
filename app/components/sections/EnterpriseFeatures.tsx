import { motion } from 'framer-motion';
import { Users, Shield, Key, Database, Headphones, Archive, CreditCard } from 'lucide-react';

export default function EnterpriseFeatures() {
  const features = [
    {
      icon: Users,
      title: "Multi-Team Management",
      description: "For enterprise organizations managing multiple games and large teams, Meshy enables you to create and manage multiple team workspaces with centralized control and oversight.",
      subFeatures: [
        {
          icon: Users,
          title: "Shared Team Workspace",
          description: "Shared credits and a unified asset library keep your team in sync and enable seamless collaboration throughout the workflow."
        },
        {
          icon: Shield,
          title: "ISO27001 Certification",
          description: "Meshy delivers enterprise-grade security across every layer of our platform. Our core production environment is certified under ISO 27001."
        },
        {
          icon: Key,
          title: "Single Sign-On (SSO)",
          description: "Meshy Enterprise supports SSO via SAML, enabling secure, centralized login for large teams using identity providers like Okta, Google Workspace, or Microsoft Entra."
        }
      ]
    },
    {
      icon: Database,
      title: "Increased Data Privacy",
      description: "Enterprise customer data is stored in a separate, secure database to ensure privacy and meet organizational compliance needs."
    },
    {
      icon: Headphones,
      title: "Dedicated Account Support",
      description: "Dedicated account executives and solutions engineers are here to support your enterprise setup and assist with any general inquiries promptly."
    },
    {
      icon: Archive,
      title: "Forever Asset Retention",
      description: "Once generated, your models are always available for download—anytime you need them."
    },
    {
      icon: CreditCard,
      title: "Centralized Billing",
      description: "All team members share a single billing account, making it easier for IT and finance teams to manage payments and invoices."
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
              <Users className="w-5 h-5 text-white" />
            </div>
            <span className="text-green-400 font-semibold">Enterprise-Grade Controls</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Enterprise-grade Controls and Administration
          </h2>
          
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Meshy empowers organizations with robust tools for secure access, data privacy, collaboration, and governance, 
            making it the perfect solution for enterprise-level, multi-team, multi-project environments.
          </p>
        </motion.div>

        {/* Organization Chart */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-white/10 max-w-4xl mx-auto">
            {/* Organization */}
            <div className="mb-8">
              <div className="w-24 h-12 bg-gray-700 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-white" />
              </div>
              <span className="text-white font-semibold">Organization</span>
            </div>
            
            {/* Studios */}
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              {['Studio A', 'Studio B', 'Studio C'].map((studio, index) => (
                <div key={studio} className="text-center">
                  <div className="w-20 h-16 bg-gray-700 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Users className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-white text-sm font-medium">{studio}</span>
                  
                  {/* Team Members */}
                  <div className="flex justify-center space-x-1 mt-2">
                    {[1, 2, 3].map((member) => (
                      <div key={member} className="w-6 h-6 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center">
                        <span className="text-xs text-white">👤</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            
            {/* Create Workspace Button */}
            <div className="flex justify-center">
              <motion.button
                className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-medium flex items-center space-x-2 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>+</span>
                <span>Create Workspace</span>
              </motion.button>
            </div>
          </div>
          
          <div className="mt-8">
            <h3 className="text-2xl font-bold text-white mb-4">Multi-Team Management</h3>
            <p className="text-gray-300 max-w-3xl mx-auto">
              For enterprise organizations managing multiple games and large teams, Meshy enables you to create and manage 
              multiple team workspaces with centralized control and oversight.
            </p>
          </div>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.slice(1).map((feature, index) => (
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
                    src="https://cdn.meshy.ai/landing-assets/home/feature-icon-iso27001-certification.webp"
                    alt="ISO 27001 Certification"
                    className="w-8 h-8 object-cover"
                  />
                )}
                {index === 1 && (
                  <img 
                    src="https://cdn.meshy.ai/landing-assets/home/feature-icon-single-sign-on.webp"
                    alt="Single Sign-On"
                    className="w-8 h-8 object-cover"
                  />
                )}
                {index === 2 && (
                  <img 
                    src="https://cdn.meshy.ai/landing-assets/home/feature-icon-data-privacy.webp"
                    alt="Data Privacy"
                    className="w-8 h-8 object-cover"
                  />
                )}
                {index === 3 && (
                  <img 
                    src="https://cdn.meshy.ai/landing-assets/home/feature-icon-dedicated-support.webp"
                    alt="Dedicated Support"
                    className="w-8 h-8 object-cover"
                  />
                )}
                {index === 4 && (
                  <img 
                    src="https://cdn.meshy.ai/landing-assets/home/feature-icon-forever-asset-retention.webp"
                    alt="Forever Asset Retention"
                    className="w-8 h-8 object-cover"
                  />
                )}
                {index === 5 && (
                  <img 
                    src="https://cdn.meshy.ai/landing-assets/home/feature-icon-centralized-billing.webp"
                    alt="Centralized Billing"
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

        {/* Special Features for Multi-Team Management */}
        <motion.div
          className="grid md:grid-cols-3 gap-8 mt-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {features[0].subFeatures.map((subFeature, index) => (
            <div
              key={index}
              className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 group"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-700 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 overflow-hidden">
                <img 
                  src="https://cdn.meshy.ai/landing-assets/home/feature-icon-shared-team-workspace.webp"
                  alt="Shared Team Workspace"
                  className="w-8 h-8 object-cover"
                />
              </div>
              
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-green-400 transition-colors duration-300">
                {subFeature.title}
              </h3>
              
              <p className="text-gray-300 leading-relaxed">
                {subFeature.description}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
