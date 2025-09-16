import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle, Clock, MessageSquare, Users, Headphones } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
  company?: string;
  phone?: string;
}

interface FormStatus {
  type: 'idle' | 'loading' | 'success' | 'error';
  message: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
    company: '',
    phone: ''
  });

  const [formStatus, setFormStatus] = useState<FormStatus>({
    type: 'idle',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus({ type: 'loading', message: 'Sending message...' });

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: '0683ddef-931f-4ab1-a7b3-f1c13543dc46',
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          company: formData.company,
          phone: formData.phone,
          from_name: 'Simulatrix Contact Form',
          reply_to: formData.email,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setFormStatus({
          type: 'success',
          message: 'Thank you! Your message has been sent successfully. We\'ll get back to you soon.'
        });
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
          company: '',
          phone: ''
        });
      } else {
        throw new Error(result.message || 'Failed to send message');
      }
    } catch (error) {
      setFormStatus({
        type: 'error',
        message: 'Sorry, there was an error sending your message. Please try again or contact us directly.'
      });
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email Us',
      details: 'hello@simulatrix.com',
      description: 'Send us an email anytime'
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Call Us',
      details: '+1 (555) 123-4567',
      description: 'Mon-Fri from 9am to 6pm'
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Visit Us',
      details: 'San Francisco, CA',
      description: 'Come say hello at our office'
    }
  ];

  const supportOptions = [
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: 'General Support',
      description: 'Get help with your account, billing, or general questions',
      responseTime: 'Within 24 hours'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Sales Inquiry',
      description: 'Interested in our enterprise plans or custom solutions',
      responseTime: 'Within 4 hours'
    },
    {
      icon: <Headphones className="w-8 h-8" />,
      title: 'Technical Support',
      description: 'Need help with API integration or technical issues',
      responseTime: 'Within 2 hours'
    }
  ];

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
              Get in
              <span className="text-gradient block mt-2">Touch</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Have questions about our 3D AI tools? Need help with your project? 
              We're here to help you succeed.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-card-gradient rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-[#ffb71b]/20 to-orange-500/20 mb-4">
                  <div className="text-[#ffb71b]">
                    {info.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">{info.title}</h3>
                <p className="text-[#ffb71b] font-medium mb-2">{info.details}</p>
                <p className="text-gray-400 text-sm">{info.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Form */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-card-gradient rounded-2xl p-8 border border-white/10"
            >
              <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-gray-800/50 border border-white/20 rounded-lg focus:border-[#ffb71b] focus:outline-none transition-colors duration-200"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-gray-800/50 border border-white/20 rounded-lg focus:border-[#ffb71b] focus:outline-none transition-colors duration-200"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-800/50 border border-white/20 rounded-lg focus:border-[#ffb71b] focus:outline-none transition-colors duration-200"
                      placeholder="Your company name"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-800/50 border border-white/20 rounded-lg focus:border-[#ffb71b] focus:outline-none transition-colors duration-200"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800/50 border border-white/20 rounded-lg focus:border-[#ffb71b] focus:outline-none transition-colors duration-200"
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="sales">Sales & Pricing</option>
                    <option value="support">Technical Support</option>
                    <option value="partnership">Partnership</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-gray-800/50 border border-white/20 rounded-lg focus:border-[#ffb71b] focus:outline-none transition-colors duration-200 resize-none"
                    placeholder="Tell us how we can help you..."
                  />
                </div>

                {/* Form Status */}
                {formStatus.type !== 'idle' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`p-4 rounded-lg flex items-center space-x-3 ${
                      formStatus.type === 'success' 
                        ? 'bg-green-900/20 border border-green-500/20 text-green-400'
                        : formStatus.type === 'error'
                        ? 'bg-red-900/20 border border-red-500/20 text-red-400'
                        : 'bg-blue-900/20 border border-blue-500/20 text-blue-400'
                    }`}
                  >
                    {formStatus.type === 'success' && <CheckCircle className="w-5 h-5" />}
                    {formStatus.type === 'error' && <AlertCircle className="w-5 h-5" />}
                    {formStatus.type === 'loading' && <Clock className="w-5 h-5 animate-spin" />}
                    <span className="text-sm">{formStatus.message}</span>
                  </motion.div>
                )}

                <motion.button
                  type="submit"
                  disabled={formStatus.type === 'loading'}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-[#ffb71b] hover:bg-[#e6a517] disabled:bg-gray-600 disabled:cursor-not-allowed text-black font-semibold py-4 px-6 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <Send className="w-5 h-5" />
                  <span>{formStatus.type === 'loading' ? 'Sending...' : 'Send Message'}</span>
                </motion.button>
              </form>
            </motion.div>

            {/* Support Options */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-2xl font-bold mb-6">How can we help?</h2>
                <p className="text-gray-300 mb-8">
                  Choose the type of support you need and we'll make sure you get the right help quickly.
                </p>
              </div>

              <div className="space-y-6">
                {supportOptions.map((option, index) => (
                  <motion.div
                    key={option.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-gray-800/30 rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-gradient-to-r from-[#ffb71b]/20 to-orange-500/20 rounded-lg flex items-center justify-center">
                          <div className="text-[#ffb71b]">
                            {option.icon}
                          </div>
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold mb-2">{option.title}</h3>
                        <p className="text-gray-300 mb-3">{option.description}</p>
                        <div className="flex items-center space-x-2 text-sm text-[#ffb71b]">
                          <Clock className="w-4 h-4" />
                          <span>{option.responseTime}</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Additional Info */}
              <div className="bg-gradient-to-r from-[#ffb71b]/10 to-orange-500/10 rounded-xl p-6 border border-[#ffb71b]/20">
                <h3 className="text-lg font-semibold mb-3 text-[#ffb71b]">Need immediate help?</h3>
                <p className="text-gray-300 mb-4">
                  For urgent technical issues or critical support needs, our team is available 24/7.
                </p>
                <div className="flex items-center space-x-2 text-sm">
                  <Phone className="w-4 h-4 text-[#ffb71b]" />
                  <span className="text-[#ffb71b] font-medium">+1 (555) 123-4567</span>
                </div>
              </div>
            </motion.div>
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
              Quick answers to common questions about our services
            </p>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                question: "How quickly do you respond to inquiries?",
                answer: "We typically respond to general inquiries within 24 hours, sales inquiries within 4 hours, and technical support requests within 2 hours during business hours."
              },
              {
                question: "Do you offer custom solutions for enterprises?",
                answer: "Yes! We work with enterprise clients to create custom 3D AI solutions tailored to their specific needs. Contact our sales team to discuss your requirements."
              },
              {
                question: "What file formats do you support?",
                answer: "We support all major 3D file formats including OBJ, FBX, GLTF, STL, and more. Our API also provides multiple export options for seamless integration."
              },
              {
                question: "Is there a free trial available?",
                answer: "Yes! All our plans come with a 14-day free trial. No credit card required to get started and explore our 3D AI tools."
              },
              {
                question: "Do you provide API documentation?",
                answer: "Absolutely! We have comprehensive API documentation with code examples, SDKs for popular languages, and interactive testing tools."
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
      
      <Footer />
    </div>
  );
}
