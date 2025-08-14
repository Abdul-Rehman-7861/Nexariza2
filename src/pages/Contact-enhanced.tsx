import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle,
  Globe,
  Calendar,
  User,
  Building,
  DollarSign,
  MessageSquare,
  Zap,
  Heart,
  Star,
  ArrowRight,
  Shield,
  Award,
  TrendingUp,
  Users,
  Brain,
  Code,
  Eye,
  Bot,
  Smartphone,
  Database,
  Lightbulb
} from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    projectType: '',
    budget: '',
    timeline: '',
    description: '',
    requirements: [],
    location: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [estimatedPrice, setEstimatedPrice] = useState(0);
  const [locationMultiplier, setLocationMultiplier] = useState(1);

  // Location-based pricing
  const locationPricing = {
    'USA': 1.0,
    'Canada': 0.95,
    'UK': 0.9,
    'Germany': 0.85,
    'France': 0.85,
    'Australia': 0.8,
    'UAE': 0.75,
    'India': 0.3,
    'Pakistan': 0.25,
    'Bangladesh': 0.2,
    'Philippines': 0.3,
    'Other': 0.5
  };

  // Project type base prices
  const projectBasePrices = {
    'AI Chatbot': 2500,
    'Computer Vision': 4000,
    'Recommendation System': 3500,
    'Document Processing': 3000,
    'Voice Assistant': 3500,
    'Predictive Analytics': 4500,
    'Custom AI Solution': 5000,
    'Web Application': 2000,
    'Mobile App': 3000,
    'Consultation': 500
  };

  useEffect(() => {
    calculateEstimatedPrice();
  }, [formData]);

  const calculateEstimatedPrice = () => {
    const basePrice = projectBasePrices[formData.projectType] || 0;
    const budgetMultiplier = getBudgetMultiplier(formData.budget);
    const timelineMultiplier = getTimelineMultiplier(formData.timeline);
    const locationMult = locationPricing[formData.location] || 0.5;
    
    setLocationMultiplier(locationMult);
    
    const total = basePrice * budgetMultiplier * timelineMultiplier * locationMult;
    setEstimatedPrice(Math.round(total));
  };

  const getBudgetMultiplier = (budget: string) => {
    const multipliers: { [key: string]: number } = {
      'Under $5,000': 0.8,
      '$5,000 - $15,000': 1.0,
      '$15,000 - $50,000': 1.3,
      '$50,000+': 1.8
    };
    return multipliers[budget] || 1.0;
  };

  const getTimelineMultiplier = (timeline: string) => {
    const multipliers: { [key: string]: number } = {
      'ASAP (Rush)': 1.5,
      '1-2 weeks': 1.3,
      '1 month': 1.0,
      '2-3 months': 0.9,
      '3+ months': 0.8
    };
    return multipliers[timeline] || 1.0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleRequirementToggle = (requirement: string) => {
    setFormData(prev => ({
      ...prev,
      requirements: prev.requirements.includes(requirement)
        ? prev.requirements.filter(r => r !== requirement)
        : [...prev.requirements, requirement]
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const nextStep = () => {
    if (currentStep < 3) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const projectTypes = [
    { name: 'AI Chatbot', icon: <Bot size={20} />, description: 'Intelligent conversational AI' },
    { name: 'Computer Vision', icon: <Eye size={20} />, description: 'Image and video analysis' },
    { name: 'Recommendation System', icon: <Brain size={20} />, description: 'Personalized suggestions' },
    { name: 'Document Processing', icon: <Code size={20} />, description: 'Automated data extraction' },
    { name: 'Voice Assistant', icon: <MessageSquare size={20} />, description: 'Speech recognition & synthesis' },
    { name: 'Predictive Analytics', icon: <TrendingUp size={20} />, description: 'Future insights from data' },
    { name: 'Custom AI Solution', icon: <Lightbulb size={20} />, description: 'Tailored AI for your needs' },
    { name: 'Web Application', icon: <Globe size={20} />, description: 'Modern web solutions' },
    { name: 'Mobile App', icon: <Smartphone size={20} />, description: 'iOS and Android apps' },
    { name: 'Consultation', icon: <Users size={20} />, description: 'Expert AI guidance' }
  ];

  const requirements = [
    'Real-time processing',
    'Multi-language support',
    'Mobile optimization',
    'API integration',
    'Analytics dashboard',
    'User authentication',
    'Cloud deployment',
    'Documentation',
    'Training & support',
    'Maintenance plan'
  ];

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-12 text-center"
      >
        <CheckCircle className="text-green-400 mx-auto mb-6" size={64} />
        <h2 className="text-3xl font-bold text-white mb-4">Thank You!</h2>
        <p className="text-gray-300 mb-6">
          Your project request has been submitted successfully. Our team will review your requirements and get back to you within 24 hours with a detailed proposal.
        </p>
        <div className="bg-green-500/20 border border-green-500/30 rounded-xl p-4 mb-6">
          <div className="text-green-300 font-semibold">Estimated Project Value</div>
          <div className="text-2xl font-bold text-green-400">${estimatedPrice.toLocaleString()}</div>
          <div className="text-sm text-green-300 mt-1">
            Location-adjusted pricing for {formData.location} (×{locationMultiplier})
          </div>
        </div>
        <button
          onClick={() => {
            setIsSubmitted(false);
            setCurrentStep(1);
            setFormData({
              name: '', email: '', company: '', phone: '', projectType: '', 
              budget: '', timeline: '', description: '', requirements: [], location: ''
            });
          }}
          className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
        >
          Submit Another Request
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Progress Bar */}
      <div className="flex items-center justify-between mb-8">
        {[1, 2, 3].map((step) => (
          <div key={step} className="flex items-center">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all duration-300 ${
              currentStep >= step ? 'bg-blue-500 border-blue-500 text-white' : 'border-white/40 text-gray-400'
            }`}>
              {step}
            </div>
            {step < 3 && (
              <div className={`w-20 h-1 mx-4 transition-all duration-300 ${
                currentStep > step ? 'bg-blue-500' : 'bg-white/20'
              }`}></div>
            )}
          </div>
        ))}
      </div>

      <AnimatePresence mode="wait">
        {currentStep === 1 && (
          <motion.div
            key="step1"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Project Details</h3>
            
            {/* Project Type Selection */}
            <div>
              <label className="block text-white font-medium mb-4">Project Type</label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {projectTypes.map((type) => (
                  <button
                    key={type.name}
                    type="button"
                    onClick={() => setFormData(prev => ({ ...prev, projectType: type.name }))}
                    className={`p-4 rounded-xl border-2 transition-all duration-300 text-left ${
                      formData.projectType === type.name
                        ? 'border-blue-500 bg-blue-500/20'
                        : 'border-white/20 bg-white/5 hover:border-white/40'
                    }`}
                  >
                    <div className="flex items-center mb-2">
                      <div className="text-blue-400 mr-3">{type.icon}</div>
                      <div className="text-white font-medium">{type.name}</div>
                    </div>
                    <div className="text-gray-300 text-sm">{type.description}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Budget and Timeline */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-white font-medium mb-3">Budget Range</label>
                <select
                  name="budget"
                  value={formData.budget}
                  onChange={handleInputChange}
                  className="w-full p-4 bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl text-white focus:border-white/40 focus:outline-none"
                >
                  <option value="">Select budget range</option>
                  <option value="Under $5,000">Under $5,000</option>
                  <option value="$5,000 - $15,000">$5,000 - $15,000</option>
                  <option value="$15,000 - $50,000">$15,000 - $50,000</option>
                  <option value="$50,000+">$50,000+</option>
                </select>
              </div>

              <div>
                <label className="block text-white font-medium mb-3">Timeline</label>
                <select
                  name="timeline"
                  value={formData.timeline}
                  onChange={handleInputChange}
                  className="w-full p-4 bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl text-white focus:border-white/40 focus:outline-none"
                >
                  <option value="">Select timeline</option>
                  <option value="ASAP (Rush)">ASAP (Rush delivery)</option>
                  <option value="1-2 weeks">1-2 weeks</option>
                  <option value="1 month">1 month</option>
                  <option value="2-3 months">2-3 months</option>
                  <option value="3+ months">3+ months</option>
                </select>
              </div>
            </div>

            {/* Location for Pricing */}
            <div>
              <label className="block text-white font-medium mb-3">Your Location</label>
              <select
                name="location"
                value={formData.location}
                onChange={handleInputChange}
                className="w-full p-4 bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl text-white focus:border-white/40 focus:outline-none"
              >
                <option value="">Select your location</option>
                {Object.keys(locationPricing).map(location => (
                  <option key={location} value={location}>{location}</option>
                ))}
              </select>
            </div>

            {/* Price Estimate */}
            {estimatedPrice > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-gradient-to-r from-green-500/20 to-blue-500/20 border border-green-500/30 rounded-xl p-6"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-green-300 font-medium">Estimated Project Value</div>
                    <div className="text-3xl font-bold text-green-400">${estimatedPrice.toLocaleString()}</div>
                    <div className="text-sm text-green-300">
                      Adjusted for {formData.location} market (×{locationMultiplier})
                    </div>
                  </div>
                  <DollarSign className="text-green-400" size={48} />
                </div>
              </motion.div>
            )}
          </motion.div>
        )}

        {currentStep === 2 && (
          <motion.div
            key="step2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Requirements & Details</h3>
            
            {/* Project Description */}
            <div>
              <label className="block text-white font-medium mb-3">Project Description</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                rows={5}
                placeholder="Describe your project requirements, goals, and any specific features you need..."
                className="w-full p-4 bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl text-white placeholder-gray-400 focus:border-white/40 focus:outline-none resize-none"
              />
            </div>

            {/* Additional Requirements */}
            <div>
              <label className="block text-white font-medium mb-4">Additional Requirements</label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {requirements.map((requirement) => (
                  <button
                    key={requirement}
                    type="button"
                    onClick={() => handleRequirementToggle(requirement)}
                    className={`p-3 rounded-lg border transition-all duration-300 text-sm ${
                      formData.requirements.includes(requirement)
                        ? 'border-blue-500 bg-blue-500/20 text-blue-300'
                        : 'border-white/20 bg-white/5 text-gray-300 hover:border-white/40'
                    }`}
                  >
                    {requirement}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {currentStep === 3 && (
          <motion.div
            key="step3"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-white font-medium mb-3">Full Name *</label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl text-white placeholder-gray-400 focus:border-white/40 focus:outline-none"
                    placeholder="Enter your full name"
                  />
                </div>
              </div>

              <div>
                <label className="block text-white font-medium mb-3">Email Address *</label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl text-white placeholder-gray-400 focus:border-white/40 focus:outline-none"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div>
                <label className="block text-white font-medium mb-3">Company Name</label>
                <div className="relative">
                  <Building className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl text-white placeholder-gray-400 focus:border-white/40 focus:outline-none"
                    placeholder="Enter company name"
                  />
                </div>
              </div>

              <div>
                <label className="block text-white font-medium mb-3">Phone Number</label>
                <div className="relative">
                  <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl text-white placeholder-gray-400 focus:border-white/40 focus:outline-none"
                    placeholder="Enter phone number"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Navigation Buttons */}
      <div className="flex justify-between pt-6">
        {currentStep > 1 && (
          <button
            type="button"
            onClick={prevStep}
            className="px-6 py-3 bg-white/10 backdrop-blur-lg border border-white/20 text-white font-medium rounded-xl hover:border-white/40 transition-all duration-300"
          >
            Previous
          </button>
        )}
        
        {currentStep < 3 ? (
          <button
            type="button"
            onClick={nextStep}
            disabled={!formData.projectType || !formData.budget || !formData.timeline}
            className="ml-auto px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
          >
            Next Step
            <ArrowRight size={20} className="ml-2" />
          </button>
        ) : (
          <button
            type="submit"
            disabled={isSubmitting || !formData.name || !formData.email}
            className="ml-auto px-8 py-4 bg-gradient-to-r from-green-500 to-blue-600 text-white font-bold rounded-xl hover:from-green-600 hover:to-blue-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
          >
            {isSubmitting ? (
              <>
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                Submitting...
              </>
            ) : (
              <>
                <Send size={20} className="mr-2" />
                Submit Request
              </>
            )}
          </button>
        )}
      </div>
    </form>
  );
};

const ContactInfo = ({ icon, title, info, link }: any) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="flex items-center p-6 bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl hover:border-white/40 transition-all duration-300 group"
  >
    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
      {icon}
    </div>
    <div className="ml-4">
      <h3 className="text-white font-semibold mb-1">{title}</h3>
      {link ? (
        <a href={link} className="text-blue-400 hover:text-blue-300 transition-colors">
          {info}
        </a>
      ) : (
        <p className="text-gray-300">{info}</p>
      )}
    </div>
  </motion.div>
);

export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Get In Touch
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
              Ready to transform your business with AI? Let's discuss your project and create something amazing together. 
              Our expert team is here to bring your vision to life.
            </p>
          </motion.div>

          {/* Quick Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
          >
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent mb-2">
                24h
              </div>
              <div className="text-gray-300">Response Time</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-2">
                500+
              </div>
              <div className="text-gray-300">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent mb-2">
                98%
              </div>
              <div className="text-gray-300">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-400 to-red-500 bg-clip-text text-transparent mb-2">
                24/7
              </div>
              <div className="text-gray-300">Support</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8"
              >
                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-white mb-4">Start Your Project</h2>
                  <p className="text-gray-300">
                    Tell us about your project and we'll provide you with a detailed proposal and cost estimate.
                  </p>
                </div>
                
                <ContactForm />
              </motion.div>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Contact Details */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <h2 className="text-2xl font-bold text-white mb-6">Contact Information</h2>
                
                <ContactInfo
                  icon={<Mail className="text-white" size={24} />}
                  title="Email Us"
                  info="contact@nexariza.com"
                  link="mailto:contact@nexariza.com"
                />
                
                <ContactInfo
                  icon={<Phone className="text-white" size={24} />}
                  title="Call Us"
                  info="+971 50 123 4567"
                  link="tel:+971501234567"
                />
                
                <ContactInfo
                  icon={<MapPin className="text-white" size={24} />}
                  title="Visit Us"
                  info="Dubai, United Arab Emirates"
                />
                
                <ContactInfo
                  icon={<Clock className="text-white" size={24} />}
                  title="Business Hours"
                  info="24/7 Available"
                />
              </motion.div>

              {/* Global Presence */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6"
              >
                <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                  <Globe className="mr-3 text-blue-400" size={24} />
                  Global Presence
                </h3>
                <div className="space-y-3 text-gray-300">
                  <div className="flex justify-between">
                    <span>Headquarters:</span>
                    <span className="text-white">Dubai, UAE</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Serving:</span>
                    <span className="text-white">40+ Countries</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Time Zones:</span>
                    <span className="text-white">All Covered</span>
                  </div>
                </div>
              </motion.div>

              {/* Why Choose Us */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-lg border border-white/20 rounded-2xl p-6"
              >
                <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                  <Award className="mr-3 text-yellow-400" size={24} />
                  Why Choose Nexariza?
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center text-gray-300">
                    <Shield className="mr-3 text-green-400" size={16} />
                    <span>100% Free & Open Source Technologies</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <Zap className="mr-3 text-blue-400" size={16} />
                    <span>Lightning Fast Delivery</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <TrendingUp className="mr-3 text-purple-400" size={16} />
                    <span>Location-based Competitive Pricing</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <Heart className="mr-3 text-red-400" size={16} />
                    <span>24/7 Dedicated Support</span>
                  </div>
                </div>
              </motion.div>

              {/* Testimonial */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6"
              >
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="text-yellow-400 fill-current" size={16} />
                  ))}
                </div>
                <p className="text-gray-300 italic mb-4">
                  "Nexariza delivered our AI chatbot in just 2 weeks. The quality and cost-effectiveness exceeded our expectations!"
                </p>
                <div className="flex items-center">
                  <img
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face"
                    alt="Client"
                    className="w-10 h-10 rounded-full mr-3"
                  />
                  <div>
                    <div className="text-white font-semibold">Mark Johnson</div>
                    <div className="text-gray-400 text-sm">CEO, TechStart Inc.</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent mb-6">
              Frequently Asked Questions
            </h2>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                question: "How do you keep costs so low while maintaining quality?",
                answer: "We use exclusively free and open-source technologies like Gemini API, Web Speech API, and open-source frameworks. This eliminates licensing costs while still delivering enterprise-grade solutions."
              },
              {
                question: "What's included in the location-based pricing?",
                answer: "Our pricing adapts to local market conditions. For example, projects in developing countries cost significantly less than the same project in developed markets, making AI accessible globally."
              },
              {
                question: "How quickly can you deliver a project?",
                answer: "Most projects are completed within 2-8 weeks depending on complexity. We offer rush delivery options for urgent requirements with 24-48 hour turnaround for simple solutions."
              },
              {
                question: "Do you provide ongoing support and maintenance?",
                answer: "Yes! We offer 24/7 support, regular updates, and maintenance plans. All our solutions come with comprehensive documentation and training for your team."
              },
              {
                question: "Can you integrate with our existing systems?",
                answer: "Absolutely! Our AI solutions are designed to integrate seamlessly with existing infrastructure through APIs, webhooks, and custom connectors."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 hover:border-white/40 transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-white mb-3">{faq.question}</h3>
                <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
