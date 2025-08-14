import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Brain, 
  Bot, 
  Eye, 
  Mic, 
  FileText, 
  BarChart3,
  Globe,
  Smartphone,
  ArrowRight,
  ArrowLeft,
  CheckCircle,
  DollarSign,
  Clock,
  Users,
  Zap,
  Star,
  Download,
  Send,
  MessageSquare,
  Calculator,
  Target,
  Lightbulb,
  Rocket,
  Settings,
  Play,
  Code,
  Database,
  Cloud,
  Shield,
  Award,
  TrendingUp
} from 'lucide-react';

const ProjectTypeCard = ({ type, isSelected, onSelect }: any) => (
  <motion.div
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
    onClick={() => onSelect(type)}
    className={`cursor-pointer p-6 rounded-2xl border-2 transition-all duration-300 ${
      isSelected
        ? 'border-blue-500 bg-blue-500/20 backdrop-blur-lg'
        : 'border-white/20 bg-white/10 backdrop-blur-lg hover:border-white/40'
    }`}
  >
    <div className={`w-12 h-12 rounded-xl mb-4 flex items-center justify-center bg-gradient-to-r ${type.gradient}`}>
      <type.icon className="text-white" size={24} />
    </div>
    <h3 className="text-lg font-bold text-white mb-2">{type.name}</h3>
    <p className="text-gray-300 text-sm mb-3">{type.description}</p>
    <div className="text-blue-400 font-semibold">{type.basePrice}</div>
  </motion.div>
);

const FeatureSelector = ({ features, selectedFeatures, onToggle }: any) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    {features.map((feature: any, index: number) => (
      <motion.button
        key={feature.id}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.1 }}
        onClick={() => onToggle(feature.id)}
        className={`p-4 rounded-xl border transition-all duration-300 text-left ${
          selectedFeatures.includes(feature.id)
            ? 'border-green-500 bg-green-500/20'
            : 'border-white/20 bg-white/10 hover:border-white/40'
        }`}
      >
        <div className="flex items-start justify-between mb-2">
          <div className="flex items-center">
            <feature.icon size={20} className="text-blue-400 mr-3" />
            <span className="text-white font-medium">{feature.name}</span>
          </div>
          {selectedFeatures.includes(feature.id) && (
            <CheckCircle size={20} className="text-green-400" />
          )}
        </div>
        <p className="text-gray-300 text-sm mb-2">{feature.description}</p>
        <div className="text-blue-400 font-semibold">+${feature.price}</div>
      </motion.button>
    ))}
  </div>
);

const PricingCalculator = ({ projectData, locationMultiplier }: any) => {
  const calculateTotal = () => {
    const basePrice = projectData.selectedType?.basePrice || 0;
    const featuresPrice = projectData.selectedFeatures.reduce((total: number, featureId: string) => {
      const feature = projectData.availableFeatures.find((f: any) => f.id === featureId);
      return total + (feature?.price || 0);
    }, 0);
    
    const timelineMultiplier = {
      'rush': 1.5,
      '1-2weeks': 1.3,
      '1month': 1.0,
      '2-3months': 0.9,
      '3+months': 0.8
    }[projectData.timeline] || 1.0;

    const complexityMultiplier = {
      'basic': 1.0,
      'standard': 1.3,
      'advanced': 1.6,
      'enterprise': 2.0
    }[projectData.complexity] || 1.0;

    const subtotal = (basePrice + featuresPrice) * complexityMultiplier * timelineMultiplier;
    return Math.round(subtotal * locationMultiplier);
  };

  const total = calculateTotal();

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="bg-gradient-to-r from-green-500/20 to-blue-500/20 backdrop-blur-xl border border-white/20 rounded-2xl p-6"
    >
      <div className="flex items-center mb-4">
        <Calculator className="text-green-400 mr-3" size={24} />
        <h3 className="text-xl font-bold text-white">Project Estimate</h3>
      </div>
      
      <div className="space-y-3 mb-4">
        <div className="flex justify-between text-gray-300">
          <span>Base Price:</span>
          <span>${projectData.selectedType?.basePrice || 0}</span>
        </div>
        <div className="flex justify-between text-gray-300">
          <span>Features:</span>
          <span>+${projectData.selectedFeatures.reduce((total: number, featureId: string) => {
            const feature = projectData.availableFeatures.find((f: any) => f.id === featureId);
            return total + (feature?.price || 0);
          }, 0)}</span>
        </div>
        <div className="flex justify-between text-gray-300">
          <span>Complexity:</span>
          <span>×{projectData.complexity === 'basic' ? '1.0' : projectData.complexity === 'standard' ? '1.3' : projectData.complexity === 'advanced' ? '1.6' : '2.0'}</span>
        </div>
        <div className="flex justify-between text-gray-300">
          <span>Timeline:</span>
          <span>×{projectData.timeline === 'rush' ? '1.5' : projectData.timeline === '1-2weeks' ? '1.3' : projectData.timeline === '1month' ? '1.0' : projectData.timeline === '2-3months' ? '0.9' : '0.8'}</span>
        </div>
        <div className="flex justify-between text-gray-300">
          <span>Location:</span>
          <span>×{locationMultiplier}</span>
        </div>
        <hr className="border-white/20" />
        <div className="flex justify-between text-2xl font-bold text-green-400">
          <span>Total:</span>
          <span>${total.toLocaleString()}</span>
        </div>
      </div>

      <div className="bg-blue-500/20 border border-blue-500/30 rounded-lg p-3 text-center">
        <div className="text-blue-300 text-sm">Location-adjusted pricing for your region</div>
        <div className="text-blue-400 font-semibold">Save up to 70% compared to traditional AI services</div>
      </div>
    </motion.div>
  );
};

const ProjectSummary = ({ projectData, totalPrice }: any) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6"
  >
    <h3 className="text-xl font-bold text-white mb-4 flex items-center">
      <Target className="mr-3 text-purple-400" size={24} />
      Project Summary
    </h3>
    
    <div className="space-y-4">
      <div>
        <div className="text-gray-400 text-sm">Project Type</div>
        <div className="text-white font-semibold">{projectData.selectedType?.name}</div>
      </div>
      
      <div>
        <div className="text-gray-400 text-sm">Complexity</div>
        <div className="text-white font-semibold capitalize">{projectData.complexity}</div>
      </div>
      
      <div>
        <div className="text-gray-400 text-sm">Timeline</div>
        <div className="text-white font-semibold">
          {projectData.timeline === 'rush' ? 'ASAP (Rush)' :
           projectData.timeline === '1-2weeks' ? '1-2 weeks' :
           projectData.timeline === '1month' ? '1 month' :
           projectData.timeline === '2-3months' ? '2-3 months' :
           '3+ months'}
        </div>
      </div>
      
      <div>
        <div className="text-gray-400 text-sm">Selected Features</div>
        <div className="space-y-1">
          {projectData.selectedFeatures.map((featureId: string) => {
            const feature = projectData.availableFeatures.find((f: any) => f.id === featureId);
            return feature ? (
              <div key={featureId} className="text-white text-sm">• {feature.name}</div>
            ) : null;
          })}
        </div>
      </div>
      
      <div className="border-t border-white/20 pt-4">
        <div className="text-gray-400 text-sm">Total Investment</div>
        <div className="text-3xl font-bold text-green-400">${totalPrice.toLocaleString()}</div>
      </div>
    </div>
  </motion.div>
);

export default function ProjectBuilder() {
  const [currentStep, setCurrentStep] = useState(1);
  const [projectData, setProjectData] = useState({
    selectedType: null,
    complexity: '',
    timeline: '',
    selectedFeatures: [],
    availableFeatures: [],
    requirements: '',
    contactInfo: {
      name: '',
      email: '',
      company: '',
      phone: ''
    }
  });
  const [locationMultiplier, setLocationMultiplier] = useState(0.5);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  const projectTypes = [
    {
      id: 'chatbot',
      name: 'AI Chatbot',
      description: 'Intelligent conversational AI for customer support',
      icon: Bot,
      gradient: 'from-blue-500 to-cyan-600',
      basePrice: 2500
    },
    {
      id: 'computer-vision',
      name: 'Computer Vision',
      description: 'Image and video analysis solutions',
      icon: Eye,
      gradient: 'from-purple-500 to-pink-600',
      basePrice: 4000
    },
    {
      id: 'voice-ai',
      name: 'Voice AI',
      description: 'Speech recognition and synthesis systems',
      icon: Mic,
      gradient: 'from-green-500 to-teal-600',
      basePrice: 3500
    },
    {
      id: 'document-ai',
      name: 'Document AI',
      description: 'Automated document processing and extraction',
      icon: FileText,
      gradient: 'from-orange-500 to-red-600',
      basePrice: 3000
    },
    {
      id: 'analytics',
      name: 'Predictive Analytics',
      description: 'Machine learning for business insights',
      icon: BarChart3,
      gradient: 'from-indigo-500 to-purple-600',
      basePrice: 4500
    },
    {
      id: 'web-app',
      name: 'AI Web App',
      description: 'Intelligent web applications',
      icon: Globe,
      gradient: 'from-cyan-500 to-blue-600',
      basePrice: 2000
    }
  ];

  const features = [
    {
      id: 'realtime',
      name: 'Real-time Processing',
      description: 'Process data and respond in real-time',
      icon: Zap,
      price: 1000
    },
    {
      id: 'multilang',
      name: 'Multi-language Support',
      description: 'Support for multiple languages',
      icon: Globe,
      price: 800
    },
    {
      id: 'mobile',
      name: 'Mobile Optimization',
      description: 'Optimized for mobile devices',
      icon: Smartphone,
      price: 600
    },
    {
      id: 'api',
      name: 'API Integration',
      description: 'Custom API connections',
      icon: Code,
      price: 700
    },
    {
      id: 'dashboard',
      name: 'Analytics Dashboard',
      description: 'Real-time analytics and reporting',
      icon: BarChart3,
      price: 1200
    },
    {
      id: 'auth',
      name: 'User Authentication',
      description: 'Secure user login and management',
      icon: Shield,
      price: 500
    },
    {
      id: 'cloud',
      name: 'Cloud Deployment',
      description: 'Scalable cloud infrastructure',
      icon: Cloud,
      price: 800
    },
    {
      id: 'training',
      name: 'Training & Support',
      description: 'Team training and ongoing support',
      icon: Users,
      price: 1000
    },
    {
      id: 'maintenance',
      name: 'Maintenance Plan',
      description: '6 months maintenance included',
      icon: Settings,
      price: 1500
    }
  ];

  useEffect(() => {
    setProjectData(prev => ({ ...prev, availableFeatures: features }));
  }, []);

  const handleTypeSelect = (type: any) => {
    setProjectData(prev => ({ ...prev, selectedType: type }));
  };

  const handleFeatureToggle = (featureId: string) => {
    setProjectData(prev => ({
      ...prev,
      selectedFeatures: prev.selectedFeatures.includes(featureId)
        ? prev.selectedFeatures.filter(id => id !== featureId)
        : [...prev.selectedFeatures, featureId]
    }));
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsComplete(true);
  };

  const nextStep = () => {
    if (currentStep < 5) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const calculateTotal = () => {
    const basePrice = projectData.selectedType?.basePrice || 0;
    const featuresPrice = projectData.selectedFeatures.reduce((total, featureId) => {
      const feature = features.find(f => f.id === featureId);
      return total + (feature?.price || 0);
    }, 0);
    
    const timelineMultiplier = {
      'rush': 1.5,
      '1-2weeks': 1.3,
      '1month': 1.0,
      '2-3months': 0.9,
      '3+months': 0.8
    }[projectData.timeline] || 1.0;

    const complexityMultiplier = {
      'basic': 1.0,
      'standard': 1.3,
      'advanced': 1.6,
      'enterprise': 2.0
    }[projectData.complexity] || 1.0;

    const subtotal = (basePrice + featuresPrice) * complexityMultiplier * timelineMultiplier;
    return Math.round(subtotal * locationMultiplier);
  };

  if (isComplete) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-2xl w-full bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-12 text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring' }}
            className="w-24 h-24 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6"
          >
            <CheckCircle className="text-white" size={48} />
          </motion.div>
          
          <h2 className="text-4xl font-bold text-white mb-4">Project Proposal Created!</h2>
          <p className="text-gray-300 mb-8">
            Your custom AI project proposal has been generated. Our team will review your requirements and contact you within 24 hours with a detailed implementation plan.
          </p>
          
          <div className="bg-green-500/20 border border-green-500/30 rounded-xl p-6 mb-8">
            <div className="text-green-300 font-semibold mb-2">Total Project Value</div>
            <div className="text-4xl font-bold text-green-400 mb-2">${calculateTotal().toLocaleString()}</div>
            <div className="text-green-300 text-sm">Location-adjusted pricing included</div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-300">
              Download Proposal
            </button>
            <button 
              onClick={() => {
                setIsComplete(false);
                setCurrentStep(1);
                setProjectData({
                  selectedType: null,
                  complexity: '',
                  timeline: '',
                  selectedFeatures: [],
                  availableFeatures: features,
                  requirements: '',
                  contactInfo: { name: '', email: '', company: '', phone: '' }
                });
              }}
              className="px-8 py-4 bg-white/10 backdrop-blur-lg border border-white/20 text-white font-bold rounded-xl hover:border-white/40 transition-all duration-300"
            >
              Build Another Project
            </button>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
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
                Project Builder
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
              Build your custom AI solution with our intelligent project builder. Get instant pricing, 
              timeline estimates, and a detailed proposal tailored to your needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Project Builder */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Progress Bar */}
          <div className="flex items-center justify-center mb-12">
            <div className="flex items-center">
              {[1, 2, 3, 4, 5].map((step) => (
                <div key={step} className="flex items-center">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center border-2 transition-all duration-300 ${
                    currentStep >= step ? 'bg-blue-500 border-blue-500 text-white' : 'border-white/40 text-gray-400'
                  }`}>
                    {step}
                  </div>
                  {step < 5 && (
                    <div className={`w-16 h-1 mx-4 transition-all duration-300 ${
                      currentStep > step ? 'bg-blue-500' : 'bg-white/20'
                    }`}></div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8">
                <AnimatePresence mode="wait">
                  {/* Step 1: Project Type */}
                  {currentStep === 1 && (
                    <motion.div
                      key="step1"
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -50 }}
                    >
                      <h2 className="text-3xl font-bold text-white mb-6">Choose Your AI Solution</h2>
                      <p className="text-gray-300 mb-8">Select the type of AI solution you want to build</p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {projectTypes.map((type) => (
                          <ProjectTypeCard
                            key={type.id}
                            type={type}
                            isSelected={projectData.selectedType?.id === type.id}
                            onSelect={handleTypeSelect}
                          />
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {/* Step 2: Complexity & Timeline */}
                  {currentStep === 2 && (
                    <motion.div
                      key="step2"
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -50 }}
                    >
                      <h2 className="text-3xl font-bold text-white mb-6">Project Specifications</h2>
                      <p className="text-gray-300 mb-8">Define the complexity and timeline for your project</p>
                      
                      <div className="space-y-8">
                        <div>
                          <label className="block text-white font-semibold mb-4">Project Complexity</label>
                          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                            {[
                              { id: 'basic', name: 'Basic', desc: 'Simple implementation' },
                              { id: 'standard', name: 'Standard', desc: 'Advanced features' },
                              { id: 'advanced', name: 'Advanced', desc: 'Custom algorithms' },
                              { id: 'enterprise', name: 'Enterprise', desc: 'Full customization' }
                            ].map((complexity) => (
                              <button
                                key={complexity.id}
                                onClick={() => setProjectData(prev => ({ ...prev, complexity: complexity.id }))}
                                className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                                  projectData.complexity === complexity.id
                                    ? 'border-blue-500 bg-blue-500/20'
                                    : 'border-white/20 bg-white/10 hover:border-white/40'
                                }`}
                              >
                                <div className="text-white font-semibold">{complexity.name}</div>
                                <div className="text-gray-300 text-sm">{complexity.desc}</div>
                              </button>
                            ))}
                          </div>
                        </div>

                        <div>
                          <label className="block text-white font-semibold mb-4">Timeline</label>
                          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
                            {[
                              { id: 'rush', name: 'ASAP', desc: 'Rush delivery' },
                              { id: '1-2weeks', name: '1-2 weeks', desc: 'Fast track' },
                              { id: '1month', name: '1 month', desc: 'Standard' },
                              { id: '2-3months', name: '2-3 months', desc: 'Thorough' },
                              { id: '3+months', name: '3+ months', desc: 'Comprehensive' }
                            ].map((timeline) => (
                              <button
                                key={timeline.id}
                                onClick={() => setProjectData(prev => ({ ...prev, timeline: timeline.id }))}
                                className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                                  projectData.timeline === timeline.id
                                    ? 'border-blue-500 bg-blue-500/20'
                                    : 'border-white/20 bg-white/10 hover:border-white/40'
                                }`}
                              >
                                <div className="text-white font-semibold">{timeline.name}</div>
                                <div className="text-gray-300 text-sm">{timeline.desc}</div>
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* Step 3: Features */}
                  {currentStep === 3 && (
                    <motion.div
                      key="step3"
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -50 }}
                    >
                      <h2 className="text-3xl font-bold text-white mb-6">Select Features</h2>
                      <p className="text-gray-300 mb-8">Choose additional features to enhance your AI solution</p>
                      
                      <FeatureSelector
                        features={features}
                        selectedFeatures={projectData.selectedFeatures}
                        onToggle={handleFeatureToggle}
                      />
                    </motion.div>
                  )}

                  {/* Step 4: Requirements */}
                  {currentStep === 4 && (
                    <motion.div
                      key="step4"
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -50 }}
                    >
                      <h2 className="text-3xl font-bold text-white mb-6">Project Requirements</h2>
                      <p className="text-gray-300 mb-8">Tell us more about your specific requirements and goals</p>
                      
                      <div className="space-y-6">
                        <div>
                          <label className="block text-white font-semibold mb-3">Detailed Requirements</label>
                          <textarea
                            value={projectData.requirements}
                            onChange={(e) => setProjectData(prev => ({ ...prev, requirements: e.target.value }))}
                            rows={8}
                            placeholder="Describe your project requirements, goals, target audience, integration needs, and any specific features you need..."
                            className="w-full p-4 bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl text-white placeholder-gray-400 focus:border-white/40 focus:outline-none resize-none"
                          />
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* Step 5: Contact Info */}
                  {currentStep === 5 && (
                    <motion.div
                      key="step5"
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -50 }}
                    >
                      <h2 className="text-3xl font-bold text-white mb-6">Contact Information</h2>
                      <p className="text-gray-300 mb-8">Provide your contact details to receive the project proposal</p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-white font-semibold mb-3">Full Name *</label>
                          <input
                            type="text"
                            value={projectData.contactInfo.name}
                            onChange={(e) => setProjectData(prev => ({
                              ...prev,
                              contactInfo: { ...prev.contactInfo, name: e.target.value }
                            }))}
                            className="w-full p-4 bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl text-white placeholder-gray-400 focus:border-white/40 focus:outline-none"
                            placeholder="Enter your full name"
                          />
                        </div>
                        
                        <div>
                          <label className="block text-white font-semibold mb-3">Email Address *</label>
                          <input
                            type="email"
                            value={projectData.contactInfo.email}
                            onChange={(e) => setProjectData(prev => ({
                              ...prev,
                              contactInfo: { ...prev.contactInfo, email: e.target.value }
                            }))}
                            className="w-full p-4 bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl text-white placeholder-gray-400 focus:border-white/40 focus:outline-none"
                            placeholder="Enter your email"
                          />
                        </div>
                        
                        <div>
                          <label className="block text-white font-semibold mb-3">Company Name</label>
                          <input
                            type="text"
                            value={projectData.contactInfo.company}
                            onChange={(e) => setProjectData(prev => ({
                              ...prev,
                              contactInfo: { ...prev.contactInfo, company: e.target.value }
                            }))}
                            className="w-full p-4 bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl text-white placeholder-gray-400 focus:border-white/40 focus:outline-none"
                            placeholder="Enter company name"
                          />
                        </div>
                        
                        <div>
                          <label className="block text-white font-semibold mb-3">Phone Number</label>
                          <input
                            type="tel"
                            value={projectData.contactInfo.phone}
                            onChange={(e) => setProjectData(prev => ({
                              ...prev,
                              contactInfo: { ...prev.contactInfo, phone: e.target.value }
                            }))}
                            className="w-full p-4 bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl text-white placeholder-gray-400 focus:border-white/40 focus:outline-none"
                            placeholder="Enter phone number"
                          />
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Navigation */}
                <div className="flex justify-between mt-8 pt-6 border-t border-white/20">
                  {currentStep > 1 && (
                    <button
                      onClick={prevStep}
                      className="px-6 py-3 bg-white/10 backdrop-blur-lg border border-white/20 text-white font-medium rounded-xl hover:border-white/40 transition-all duration-300 flex items-center"
                    >
                      <ArrowLeft size={20} className="mr-2" />
                      Previous
                    </button>
                  )}
                  
                  {currentStep < 5 ? (
                    <button
                      onClick={nextStep}
                      disabled={
                        (currentStep === 1 && !projectData.selectedType) ||
                        (currentStep === 2 && (!projectData.complexity || !projectData.timeline))
                      }
                      className="ml-auto px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
                    >
                      Next Step
                      <ArrowRight size={20} className="ml-2" />
                    </button>
                  ) : (
                    <button
                      onClick={handleSubmit}
                      disabled={isSubmitting || !projectData.contactInfo.name || !projectData.contactInfo.email}
                      className="ml-auto px-8 py-4 bg-gradient-to-r from-green-500 to-blue-600 text-white font-bold rounded-xl hover:from-green-600 hover:to-blue-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                          Creating Proposal...
                        </>
                      ) : (
                        <>
                          <Send size={20} className="mr-2" />
                          Generate Proposal
                        </>
                      )}
                    </button>
                  )}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Pricing Calculator */}
              {projectData.selectedType && (
                <PricingCalculator
                  projectData={projectData}
                  locationMultiplier={locationMultiplier}
                />
              )}

              {/* Project Summary */}
              {currentStep >= 2 && (
                <ProjectSummary
                  projectData={projectData}
                  totalPrice={calculateTotal()}
                />
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
