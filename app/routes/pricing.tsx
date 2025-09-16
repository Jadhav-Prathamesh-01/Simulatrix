import { motion } from 'framer-motion';
import { Check, Star, Zap, Crown, ArrowRight } from 'lucide-react';
import { Link } from 'react-router';
import Header from '../components/Header';
import Footer from '../components/Footer';

interface PricingPlan {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  cta: string;
  popular?: boolean;
  icon: React.ReactNode;
  color: string;
  bgGradient: string;
}

const pricingPlans: PricingPlan[] = [
  {
    name: 'Basic',
    price: '$19',
    period: '/month',
    description: 'Perfect for individuals and small projects',
    features: [
      '10 3D models per month',
      'Text to 3D generation',
      'Image to 3D conversion',
      'Basic AI texturing',
      'Standard quality output',
      'Community support',
      'Commercial license included'
    ],
    cta: 'Start Free Trial',
    icon: <Zap className="w-8 h-8" />,
    color: 'text-blue-400',
    bgGradient: 'from-blue-500/20 to-cyan-500/20'
  },
  {
    name: 'Standard',
    price: '$49',
    period: '/month',
    description: 'Ideal for growing businesses and teams',
    features: [
      '50 3D models per month',
      'All Basic features',
      'High-quality output',
      'Advanced AI texturing',
      'Animation generation',
      'Priority support',
      'API access',
      'Team collaboration tools',
      'Custom model training'
    ],
    cta: 'Start Free Trial',
    popular: true,
    icon: <Star className="w-8 h-8" />,
    color: 'text-[#ffb71b]',
    bgGradient: 'from-[#ffb71b]/20 to-orange-500/20'
  },
  {
    name: 'Pro',
    price: '$99',
    period: '/month',
    description: 'For enterprises and power users',
    features: [
      '200 3D models per month',
      'All Standard features',
      'Ultra-high quality output',
      'Advanced animation tools',
      'Custom AI model training',
      'Dedicated support',
      'White-label options',
      'Advanced API features',
      'Custom integrations',
      'SLA guarantee'
    ],
    cta: 'Contact Sales',
    icon: <Crown className="w-8 h-8" />,
    color: 'text-purple-400',
    bgGradient: 'from-purple-500/20 to-pink-500/20'
  }
];

export default function Pricing() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 pt-32">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Choose Your
              <span className="text-gradient block mt-2">3D Creation Plan</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your ideas into stunning 3D models with our powerful AI tools. 
              Start free and scale as you grow.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative bg-card-gradient rounded-2xl p-8 border ${
                  plan.popular 
                    ? 'border-[#ffb71b] shadow-2xl shadow-[#ffb71b]/20 scale-105' 
                    : 'border-white/10 hover:border-white/20'
                } transition-all duration-300`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-[#ffb71b] text-black px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </div>
                  </div>
                )}

                {/* Plan Header */}
                <div className="text-center mb-8">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${plan.bgGradient} mb-4`}>
                    <div className={plan.color}>
                      {plan.icon}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-gray-400 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-5xl font-bold">{plan.price}</span>
                    <span className="text-gray-400 ml-2">{plan.period}</span>
                  </div>
                </div>

                {/* Features List */}
                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-[#ffb71b] mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-4 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2 ${
                    plan.popular
                      ? 'bg-[#ffb71b] text-black hover:bg-[#e6a517] shadow-lg shadow-[#ffb71b]/25'
                      : 'bg-white/10 text-white hover:bg-white/20 border border-white/20'
                  }`}
                >
                  <span>{plan.cta}</span>
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-400">
              Everything you need to know about our pricing and plans
            </p>
          </motion.div>

          <div className="space-y-8">
            {[
              {
                question: "Can I change my plan at any time?",
                answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate any billing differences."
              },
              {
                question: "What happens if I exceed my monthly limit?",
                answer: "If you exceed your monthly model limit, you can purchase additional credits or upgrade to a higher plan. We'll notify you when you're approaching your limit."
              },
              {
                question: "Do you offer refunds?",
                answer: "We offer a 30-day money-back guarantee for all paid plans. If you're not satisfied, contact our support team for a full refund."
              },
              {
                question: "Is there a free trial?",
                answer: "Yes! All plans come with a 14-day free trial. No credit card required to get started."
              },
              {
                question: "Can I use the models commercially?",
                answer: "Absolutely! All plans include commercial licensing, so you can use your generated 3D models in commercial projects, games, and products."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-800/50 rounded-lg p-6 border border-white/10"
              >
                <h3 className="text-lg font-semibold mb-3">{faq.question}</h3>
                <p className="text-gray-300">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Start Creating?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of creators who are already using our AI-powered 3D tools
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/register">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-primary px-8 py-4 text-lg"
                >
                  Start Free Trial
                </motion.button>
              </Link>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary px-8 py-4 text-lg"
              >
                Contact Sales
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
