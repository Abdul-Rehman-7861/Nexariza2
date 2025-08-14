import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Brain, 
  Eye, 
  Bot, 
  MessageSquare,
  Code,
  Globe,
  Smartphone,
  Database,
  Cloud,
  Zap,
  ArrowRight,
  CheckCircle,
  Star,
  Users,
  Clock,
  Shield,
  Award,
  TrendingUp,
  Heart,
  Play,
  ExternalLink,
  Lightbulb,
  Target,
  Rocket,
  Cpu,
  Camera,
  Mic,
  FileText,
  BarChart3,
  Settings,
  Lock,
  Sparkles
} from 'lucide-react';

const ServiceCard = ({ service, index, onSelect }: any) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      className="group cursor-pointer h-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onSelect(service)}
    >
      <div className="relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 h-full overflow-hidden hover:border-white/40 transition-all duration-500 hover:scale-[1.02]">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        {/* Floating Particles */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 pointer-events-none"
            >
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ scale: 0, x: Math.random() * 300, y: Math.random() * 300 }}
                  animate={{ 
                    scale: [0, 1, 0],
                    x: Math.random() * 300,
                    y: Math.random() * 300,
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                  className="absolute w-2 h-2 bg-blue-400/60 rounded-full"
                />
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        <div className="relative z-10">
          {/* Icon */}
          <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${service.iconGradient} mb-6 group-hover:scale-110 transition-transform duration-300`}>
            <service.icon className="text-white" size={32} />
          </div>

          {/* Badge */}
          <div className="inline-flex items-center bg-green-500/20 text-green-300 px-3 py-1 rounded-full text-sm font-medium mb-4">
            <Sparkles size={14} className="mr-2" />
            {service.badge}
          </div>

          {/* Content */}
          <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
            {service.title}
          </h3>
          <p className="text-gray-300 leading-relaxed mb-6">
            {service.description}
          </p>

          {/* Features */}
          <div className="space-y-2 mb-6">
            {service.features.slice(0, 3).map((feature: string, idx: number) => (
              <div key={idx} className="flex items-center text-sm text-gray-300">
                <CheckCircle size={16} className="text-green-400 mr-3 flex-shrink-0" />
                {feature}
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="text-center p-3 bg-white/5 backdrop-blur-lg rounded-xl border border-white/10">
              <div className="text-2xl font-bold text-blue-400">{service.stats.projects}</div>
              <div className="text-xs text-gray-400">Projects</div>
            </div>
            <div className="text-center p-3 bg-white/5 backdrop-blur-lg rounded-xl border border-white/10">
              <div className="text-2xl font-bold text-purple-400">{service.stats.satisfaction}</div>
              <div className="text-xs text-gray-400">Satisfaction</div>
            </div>
          </div>

          {/* Price */}
          <div className="mb-6">
            <div className="text-3xl font-bold text-white mb-1">
              {service.price}
              <span className="text-lg text-gray-400 font-normal"> {service.priceUnit}</span>
            </div>
            <div className="text-sm text-green-400">{service.priceNote}</div>
          </div>

          {/* Action Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group/btn"
          >
            <span>Get Started</span>
            <ArrowRight size={20} className="ml-2 group-hover/btn:translate-x-1 transition-transform" />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

const ServiceModal = ({ service, isOpen, onClose }: any) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-lg z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 50 }}
            className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-start justify-between mb-6">
              <div className="flex items-center">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${service.iconGradient} flex items-center justify-center mr-4`}>
                  <service.icon className="text-white" size={32} />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-white mb-2">{service.title}</h2>
                  <div className="text-blue-400">{service.category}</div>
                </div>
              </div>
              <button
                onClick={onClose}
                className="p-2 bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl text-white hover:border-white/40 transition-all duration-300"
              >
                ✕
              </button>
            </div>

            {/* Service Details */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-white mb-4">Service Overview</h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  {service.fullDescription}
                </p>

                <h4 className="text-lg font-semibold text-white mb-3">Key Features</h4>
                <div className="space-y-2 mb-6">
                  {service.features.map((feature: string, idx: number) => (
                    <div key={idx} className="flex items-start">
                      <CheckCircle size={16} className="text-green-400 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>

                <h4 className="text-lg font-semibold text-white mb-3">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {service.technologies.map((tech: string, idx: number) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-blue-500/20 text-blue-300 text-sm rounded-lg border border-blue-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-white mb-4">Pricing & Timeline</h3>
                
                <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-lg border border-white/20 rounded-2xl p-6 mb-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-white mb-2">
                      {service.price}
                      <span className="text-lg text-gray-400 font-normal"> {service.priceUnit}</span>
                    </div>
                    <div className="text-green-400 mb-4">{service.priceNote}</div>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <div className="text-gray-400">Timeline</div>
                        <div className="text-white font-semibold">{service.timeline}</div>
                      </div>
                      <div>
                        <div className="text-gray-400">Team Size</div>
                        <div className="text-white font-semibold">{service.teamSize}</div>
                      </div>
                    </div>
                  </div>
                </div>

                <h4 className="text-lg font-semibold text-white mb-3">What's Included</h4>
                <div className="space-y-2 mb-6">
                  {service.included.map((item: string, idx: number) => (
                    <div key={idx} className="flex items-center text-sm text-gray-300">
                      <Star size={14} className="text-yellow-400 mr-3 flex-shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <button className="flex-1 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-300">
                    Start Project
                  </button>
                  <button className="px-6 py-3 bg-white/10 backdrop-blur-lg border border-white/20 text-white rounded-xl hover:border-white/40 transition-all duration-300">
                    Get Quote
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const ProcessStep = ({ step, index }: any) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.2, duration: 0.6 }}
    className="text-center group"
  >
    <div className="relative mb-6">
      <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
        <step.icon className="text-white" size={24} />
      </div>
      <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
        {index + 1}
      </div>
    </div>
    <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
    <p className="text-gray-300 leading-relaxed">{step.description}</p>
  </motion.div>
);

export default function Services() {
  const [selectedService, setSelectedService] = useState(null);
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'AI Solutions', 'Computer Vision', 'Chatbots', 'Web Development', 'Mobile Apps'];

  const services = [
    {
      id: 1,
      title: "AI Chatbot Development",
      category: "AI Solutions",
      description: "Intelligent conversational AI that understands context, learns from interactions, and provides personalized responses to your customers 24/7.",
      fullDescription: "Our AI chatbots are built using state-of-the-art natural language processing models that can understand context, maintain conversation flow, and provide intelligent responses. We integrate with your existing systems and train the AI on your specific business data.",
      icon: Bot,
      iconGradient: "from-blue-500 to-cyan-600",
      badge: "Most Popular",
      features: [
        "Natural Language Understanding",
        "Multi-language Support",
        "CRM Integration",
        "Analytics Dashboard",
        "Voice Message Support",
        "24/7 Availability",
        "Learning Capabilities",
        "Custom Personality"
      ],
      technologies: ["Python", "NLP", "Gemini API", "React", "Node.js", "MongoDB"],
      price: "$2,500",
      priceUnit: "starting",
      priceNote: "Location-adjusted pricing available",
      timeline: "2-4 weeks",
      teamSize: "3-4 developers",
      stats: {
        projects: "150+",
        satisfaction: "98%"
      },
      included: [
        "Custom AI training",
        "Web & mobile integration",
        "Analytics dashboard",
        "6 months support",
        "Training & documentation",
        "Deployment assistance"
      ]
    },
    {
      id: 2,
      title: "Computer Vision Solutions",
      category: "Computer Vision",
      description: "Advanced image and video analysis systems for object detection, facial recognition, quality control, and automated visual inspection.",
      fullDescription: "Our computer vision solutions leverage cutting-edge deep learning models to analyze images and videos in real-time. From security applications to industrial quality control, we create systems that see and understand visual data.",
      icon: Eye,
      iconGradient: "from-purple-500 to-pink-600",
      badge: "AI Powered",
      features: [
        "Real-time Object Detection",
        "Facial Recognition",
        "Quality Control Automation",
        "Crowd Analysis",
        "License Plate Recognition",
        "Defect Detection",
        "Activity Recognition",
        "Custom Model Training"
      ],
      technologies: ["Python", "OpenCV", "TensorFlow", "PyTorch", "YOLO", "React"],
      price: "$4,000",
      priceUnit: "starting",
      priceNote: "Custom models from $6,000",
      timeline: "3-6 weeks",
      teamSize: "4-5 developers",
      stats: {
        projects: "80+",
        satisfaction: "96%"
      },
      included: [
        "Custom model development",
        "Real-time processing",
        "API integration",
        "Performance optimization",
        "Training data preparation",
        "Deployment & scaling"
      ]
    },
    {
      id: 3,
      title: "Voice AI Assistant",
      category: "AI Solutions",
      description: "Smart voice-activated assistants with speech recognition, natural language processing, and voice synthesis capabilities.",
      fullDescription: "Create intelligent voice assistants that can understand spoken commands, process natural language, and respond with synthesized speech. Perfect for smart homes, business automation, and accessibility applications.",
      icon: Mic,
      iconGradient: "from-green-500 to-teal-600",
      badge: "Voice Enabled",
      features: [
        "Speech Recognition",
        "Voice Synthesis",
        "Command Processing",
        "Multi-language Support",
        "Device Integration",
        "Custom Wake Words",
        "Offline Capabilities",
        "Privacy Protection"
      ],
      technologies: ["Python", "Web Speech API", "Gemini API", "React Native", "IoT"],
      price: "$3,500",
      priceUnit: "starting",
      priceNote: "IoT integration extra",
      timeline: "3-5 weeks",
      teamSize: "3-4 developers",
      stats: {
        projects: "60+",
        satisfaction: "94%"
      },
      included: [
        "Voice model training",
        "Device integration",
        "Cloud deployment",
        "Voice analytics",
        "Security implementation",
        "Performance optimization"
      ]
    },
    {
      id: 4,
      title: "Document Processing AI",
      category: "AI Solutions",
      description: "Automated document analysis, data extraction, and processing using OCR, NLP, and machine learning technologies.",
      fullDescription: "Streamline your document workflows with AI-powered processing that can extract data from invoices, contracts, forms, and any document type. Reduce manual work by 90% with intelligent automation.",
      icon: FileText,
      iconGradient: "from-orange-500 to-red-600",
      badge: "Automation",
      features: [
        "OCR Technology",
        "Data Extraction",
        "Document Classification",
        "Validation & Verification",
        "Workflow Automation",
        "Audit Trail",
        "API Integration",
        "Batch Processing"
      ],
      technologies: ["Python", "Tesseract OCR", "spaCy", "FastAPI", "MongoDB"],
      price: "$3,000",
      priceUnit: "starting",
      priceNote: "Volume discounts available",
      timeline: "2-4 weeks",
      teamSize: "3 developers",
      stats: {
        projects: "120+",
        satisfaction: "97%"
      },
      included: [
        "Custom extraction rules",
        "Workflow integration",
        "Accuracy validation",
        "Bulk processing",
        "Error handling",
        "Performance monitoring"
      ]
    },
    {
      id: 5,
      title: "Predictive Analytics",
      category: "AI Solutions",
      description: "Advanced machine learning models for forecasting, trend analysis, and business intelligence to drive data-driven decisions.",
      fullDescription: "Harness the power of your data with predictive analytics solutions that forecast trends, identify patterns, and provide actionable insights for strategic business decisions.",
      icon: BarChart3,
      iconGradient: "from-indigo-500 to-purple-600",
      badge: "Data Driven",
      features: [
        "Trend Forecasting",
        "Risk Assessment",
        "Customer Behavior Analysis",
        "Demand Prediction",
        "Anomaly Detection",
        "Real-time Insights",
        "Custom Dashboards",
        "Automated Reports"
      ],
      technologies: ["Python", "Scikit-learn", "TensorFlow", "Pandas", "Tableau", "PostgreSQL"],
      price: "$4,500",
      priceUnit: "starting",
      priceNote: "Custom models available",
      timeline: "4-8 weeks",
      teamSize: "4-5 data scientists",
      stats: {
        projects: "90+",
        satisfaction: "95%"
      },
      included: [
        "Data analysis & modeling",
        "Interactive dashboards",
        "Automated reporting",
        "Model validation",
        "Performance monitoring",
        "Training & handover"
      ]
    },
    {
      id: 6,
      title: "AI-Powered Web Apps",
      category: "Web Development",
      description: "Modern web applications enhanced with artificial intelligence, featuring smart automation and intelligent user experiences.",
      fullDescription: "Build next-generation web applications that leverage AI for personalization, automation, and enhanced user experiences. From recommendation engines to intelligent search.",
      icon: Globe,
      iconGradient: "from-cyan-500 to-blue-600",
      badge: "Full Stack",
      features: [
        "AI-Enhanced UX",
        "Personalization Engine",
        "Intelligent Search",
        "Automated Content",
        "Smart Recommendations",
        "Real-time Analytics",
        "Progressive Web App",
        "Mobile Responsive"
      ],
      technologies: ["React", "Next.js", "Node.js", "AI APIs", "PostgreSQL", "Redis"],
      price: "$2,000",
      priceUnit: "starting",
      priceNote: "AI features from $1,000 extra",
      timeline: "3-6 weeks",
      teamSize: "3-4 developers",
      stats: {
        projects: "200+",
        satisfaction: "99%"
      },
      included: [
        "Responsive design",
        "AI integration",
        "Database setup",
        "Deployment",
        "SEO optimization",
        "Performance optimization"
      ]
    }
  ];

  const processSteps = [
    {
      icon: MessageSquare,
      title: "Consultation",
      description: "We understand your business needs, goals, and requirements through detailed consultation sessions."
    },
    {
      icon: Lightbulb,
      title: "Strategy",
      description: "Our experts design a comprehensive AI strategy tailored to your specific use case and budget."
    },
    {
      icon: Code,
      title: "Development",
      description: "We build your solution using cutting-edge technologies and best practices with regular updates."
    },
    {
      icon: Rocket,
      title: "Deployment",
      description: "Full deployment, testing, and training to ensure your team can effectively use the new system."
    }
  ];

  const filteredServices = activeCategory === 'All' 
    ? services 
    : services.filter(service => service.category === activeCategory);

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
                AI Services
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
              Transform your business with cutting-edge AI solutions. From intelligent chatbots to computer vision, 
              we deliver powerful AI applications using free and open-source technologies.
            </p>
          </motion.div>

          {/* Service Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
          >
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent mb-2">
                500+
              </div>
              <div className="text-gray-300">AI Solutions Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-2">
                98%
              </div>
              <div className="text-gray-300">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent mb-2">
                2-8
              </div>
              <div className="text-gray-300">Weeks Delivery</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-400 to-red-500 bg-clip-text text-transparent mb-2">
                24/7
              </div>
              <div className="text-gray-300">Support Available</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap gap-4 justify-center mb-12"
          >
            {categories.map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white'
                    : 'bg-white/10 backdrop-blur-lg border border-white/20 text-gray-300 hover:border-white/40'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredServices.map((service, index) => (
              <ServiceCard
                key={service.id}
                service={service}
                index={index}
                onSelect={setSelectedService}
              />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent mb-6">
              Our Process
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From concept to deployment, we follow a proven process to deliver exceptional AI solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <ProcessStep key={index} step={step} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-xl border border-white/20 rounded-3xl p-12"
          >
            <Rocket className="text-blue-400 mx-auto mb-6" size={64} />
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Start Your AI Journey?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss your project requirements and create a custom AI solution that transforms your business operations.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg"
              >
                Get Free Consultation
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white/10 backdrop-blur-lg border border-white/20 text-white font-bold rounded-xl hover:border-white/40 transition-all duration-300"
              >
                View Portfolio
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Service Modal */}
      <ServiceModal
        service={selectedService}
        isOpen={!!selectedService}
        onClose={() => setSelectedService(null)}
      />
    </div>
  );
}
