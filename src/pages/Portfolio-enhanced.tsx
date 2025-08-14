import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ExternalLink, 
  Github, 
  Play, 
  Filter,
  Search,
  Calendar,
  Users,
  Zap,
  Brain,
  Eye,
  Bot,
  Code,
  Globe,
  Shield,
  Smartphone,
  Database,
  Cloud,
  ChevronRight,
  Star,
  Award,
  TrendingUp,
  Heart
} from 'lucide-react';

const ProjectCard = ({ project, index, onOpen }: any) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      className="group cursor-pointer"
      onClick={() => onOpen(project)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl overflow-hidden hover:border-white/40 transition-all duration-500">
        {/* Project Image */}
        <div className="relative h-64 overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          
          {/* Technology Icons */}
          <div className="absolute top-4 left-4 flex space-x-2">
            {project.technologies.slice(0, 3).map((tech: string, idx: number) => {
              const IconComponent = getTechIcon(tech);
              return (
                <div key={idx} className="w-8 h-8 bg-white/20 backdrop-blur-lg rounded-lg flex items-center justify-center">
                  <IconComponent size={16} className="text-white" />
                </div>
              );
            })}
          </div>

          {/* Category Badge */}
          <div className="absolute top-4 right-4">
            <span className="px-3 py-1 bg-purple-500/80 backdrop-blur-lg text-white text-xs font-medium rounded-full">
              {project.category}
            </span>
          </div>

          {/* Play Button */}
          <AnimatePresence>
            {isHovered && (
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0, opacity: 0 }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="w-16 h-16 bg-white/20 backdrop-blur-lg border border-white/30 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Play className="text-white ml-1" size={24} />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Project Info */}
        <div className="p-6">
          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
            {project.title}
          </h3>
          <p className="text-gray-300 text-sm mb-4 line-clamp-2">
            {project.description}
          </p>

          {/* Stats */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-4 text-xs text-gray-400">
              <div className="flex items-center">
                <Calendar size={12} className="mr-1" />
                {project.year}
              </div>
              <div className="flex items-center">
                <Users size={12} className="mr-1" />
                {project.teamSize}
              </div>
              <div className="flex items-center">
                <Zap size={12} className="mr-1" />
                {project.duration}
              </div>
            </div>
          </div>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.slice(0, 4).map((tech: string, idx: number) => (
              <span
                key={idx}
                className="px-2 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-lg border border-blue-500/30"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 4 && (
              <span className="px-2 py-1 bg-gray-500/20 text-gray-300 text-xs rounded-lg">
                +{project.technologies.length - 4} more
              </span>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex space-x-3">
            <button className="flex-1 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm font-medium rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">
              <ExternalLink size={14} className="mr-2" />
              View Project
            </button>
            {project.github && (
              <button className="px-4 py-2 bg-white/10 backdrop-blur-lg border border-white/20 text-white rounded-lg hover:border-white/40 transition-all duration-300">
                <Github size={14} />
              </button>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const ProjectModal = ({ project, isOpen, onClose }: any) => {
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
              <div>
                <h2 className="text-3xl font-bold text-white mb-2">{project.title}</h2>
                <div className="flex items-center space-x-4 text-sm text-gray-400">
                  <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full">
                    {project.category}
                  </span>
                  <span>{project.year}</span>
                  <span>{project.duration}</span>
                </div>
              </div>
              <button
                onClick={onClose}
                className="p-2 bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl text-white hover:border-white/40 transition-all duration-300"
              >
                ✕
              </button>
            </div>

            {/* Image Gallery */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover rounded-2xl"
              />
              <div className="space-y-4">
                {project.gallery?.map((img: string, idx: number) => (
                  <img
                    key={idx}
                    src={img}
                    alt={`${project.title} ${idx + 1}`}
                    className="w-full h-20 object-cover rounded-xl"
                  />
                ))}
              </div>
            </div>

            {/* Project Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-white mb-4">Project Overview</h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  {project.fullDescription}
                </p>

                <h4 className="text-lg font-semibold text-white mb-3">Key Features</h4>
                <ul className="space-y-2 text-gray-300">
                  {project.features?.map((feature: string, idx: number) => (
                    <li key={idx} className="flex items-start">
                      <ChevronRight size={16} className="text-blue-400 mr-2 mt-0.5 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-white mb-4">Technical Details</h3>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-medium text-gray-400 mb-2">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech: string, idx: number) => (
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
                    <h4 className="text-sm font-medium text-gray-400 mb-2">Performance Metrics</h4>
                    <div className="space-y-2">
                      {project.metrics?.map((metric: any, idx: number) => (
                        <div key={idx} className="flex justify-between items-center text-sm">
                          <span className="text-gray-300">{metric.label}</span>
                          <span className="text-green-400 font-medium">{metric.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-medium text-gray-400 mb-2">Team & Timeline</h4>
                    <div className="space-y-2 text-sm text-gray-300">
                      <div>Team Size: {project.teamSize} developers</div>
                      <div>Duration: {project.duration}</div>
                      <div>Completed: {project.year}</div>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-4 mt-8">
                  <button className="flex-1 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">
                    <ExternalLink size={18} className="mr-2" />
                    Live Demo
                  </button>
                  {project.github && (
                    <button className="px-6 py-3 bg-white/10 backdrop-blur-lg border border-white/20 text-white rounded-xl hover:border-white/40 transition-all duration-300 flex items-center">
                      <Github size={18} className="mr-2" />
                      Code
                    </button>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const FilterButton = ({ label, isActive, onClick, icon }: any) => (
  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    onClick={onClick}
    className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 flex items-center space-x-2 ${
      isActive
        ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white'
        : 'bg-white/10 backdrop-blur-lg border border-white/20 text-gray-300 hover:border-white/40'
    }`}
  >
    {icon && <span className="w-4 h-4">{icon}</span>}
    <span>{label}</span>
  </motion.button>
);

function getTechIcon(tech: string) {
  const iconMap: { [key: string]: any } = {
    'React': Code,
    'AI': Brain,
    'Computer Vision': Eye,
    'Chatbot': Bot,
    'Mobile': Smartphone,
    'Web': Globe,
    'Security': Shield,
    'Database': Database,
    'Cloud': Cloud,
    'Node.js': Code,
    'Python': Code,
    'Machine Learning': Brain,
    'Deep Learning': Brain,
    'NLP': Bot,
    'TensorFlow': Brain,
    'OpenCV': Eye,
    'Flask': Code,
    'MongoDB': Database,
    'PostgreSQL': Database,
    'AWS': Cloud,
    'Docker': Cloud,
    'Kubernetes': Cloud
  };
  return iconMap[tech] || Code;
}

export default function Portfolio() {
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedProject, setSelectedProject] = useState(null);

  const filters = [
    { label: 'All', icon: <Filter size={16} /> },
    { label: 'AI Solutions', icon: <Brain size={16} /> },
    { label: 'Computer Vision', icon: <Eye size={16} /> },
    { label: 'Chatbots', icon: <Bot size={16} /> },
    { label: 'Web Apps', icon: <Globe size={16} /> },
    { label: 'Mobile Apps', icon: <Smartphone size={16} /> }
  ];

  const projects = [
    {
      id: 1,
      title: "AI-Powered Customer Service Bot",
      description: "Intelligent chatbot with natural language processing for automated customer support with 95% satisfaction rate.",
      fullDescription: "A comprehensive AI chatbot solution that revolutionized customer service operations. Built using state-of-the-art NLP models and integrated with existing CRM systems to provide seamless customer support experience.",
      category: "AI Solutions",
      technologies: ["Python", "NLP", "Flask", "React", "MongoDB", "Docker"],
      image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=600&h=400&fit=crop",
      year: "2024",
      duration: "3 months",
      teamSize: "4",
      github: true,
      features: [
        "Natural language understanding with 98% accuracy",
        "Multi-language support (12 languages)",
        "Integration with CRM and ticketing systems",
        "Real-time analytics dashboard",
        "Voice message support",
        "Automated escalation to human agents"
      ],
      metrics: [
        { label: "Response Time", value: "< 2 seconds" },
        { label: "Accuracy", value: "98%" },
        { label: "Customer Satisfaction", value: "95%" },
        { label: "Cost Reduction", value: "60%" }
      ],
      gallery: [
        "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=300&h=200&fit=crop",
        "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=300&h=200&fit=crop"
      ]
    },
    {
      id: 2,
      title: "Real-Time Object Detection System",
      description: "Advanced computer vision system for real-time object detection and tracking in security applications.",
      fullDescription: "A cutting-edge computer vision system that provides real-time object detection and tracking capabilities for security and surveillance applications. Optimized for edge devices with minimal latency.",
      category: "Computer Vision",
      technologies: ["Python", "OpenCV", "TensorFlow", "YOLO", "React", "WebRTC"],
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop",
      year: "2024",
      duration: "4 months",
      teamSize: "5",
      github: true,
      features: [
        "Real-time object detection with YOLO v8",
        "Multi-object tracking capabilities",
        "Custom model training pipeline",
        "Edge device optimization",
        "Alert system integration",
        "Analytics and reporting dashboard"
      ],
      metrics: [
        { label: "Detection Speed", value: "60 FPS" },
        { label: "Accuracy", value: "94%" },
        { label: "Latency", value: "< 50ms" },
        { label: "Memory Usage", value: "< 500MB" }
      ],
      gallery: [
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=200&fit=crop",
        "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=300&h=200&fit=crop"
      ]
    },
    {
      id: 3,
      title: "E-Commerce Recommendation Engine",
      description: "Machine learning-powered recommendation system that increased sales by 40% through personalized product suggestions.",
      fullDescription: "An advanced recommendation engine that leverages collaborative filtering, content-based filtering, and deep learning to provide highly personalized product recommendations for e-commerce platforms.",
      category: "AI Solutions",
      technologies: ["Python", "TensorFlow", "Scikit-learn", "Redis", "PostgreSQL", "FastAPI"],
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      year: "2023",
      duration: "5 months",
      teamSize: "6",
      github: false,
      features: [
        "Hybrid recommendation algorithm",
        "Real-time personalization",
        "A/B testing framework",
        "Cold start problem handling",
        "Scalable architecture",
        "Performance monitoring"
      ],
      metrics: [
        { label: "Sales Increase", value: "+40%" },
        { label: "Click-through Rate", value: "+25%" },
        { label: "User Engagement", value: "+35%" },
        { label: "Conversion Rate", value: "+22%" }
      ],
      gallery: [
        "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=300&h=200&fit=crop",
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=300&h=200&fit=crop"
      ]
    },
    {
      id: 4,
      title: "Smart Document Processing",
      description: "AI-powered document analysis and data extraction system with OCR and natural language processing.",
      fullDescription: "An intelligent document processing system that automates data extraction from various document types including invoices, contracts, and forms using advanced OCR and NLP technologies.",
      category: "AI Solutions",
      technologies: ["Python", "Tesseract OCR", "spaCy", "FastAPI", "React", "MongoDB"],
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600&h=400&fit=crop",
      year: "2023",
      duration: "4 months",
      teamSize: "4",
      github: true,
      features: [
        "Advanced OCR with 99% accuracy",
        "Intelligent field extraction",
        "Document classification",
        "Data validation and verification",
        "API integration capabilities",
        "Audit trail and compliance"
      ],
      metrics: [
        { label: "Processing Speed", value: "< 5 seconds" },
        { label: "Accuracy", value: "99%" },
        { label: "Time Saved", value: "80%" },
        { label: "Error Reduction", value: "95%" }
      ],
      gallery: [
        "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=300&h=200&fit=crop",
        "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=300&h=200&fit=crop"
      ]
    },
    {
      id: 5,
      title: "Healthcare Diagnostic Assistant",
      description: "AI-powered medical imaging analysis system for early disease detection with 96% accuracy.",
      fullDescription: "A revolutionary healthcare AI system that assists medical professionals in diagnostic imaging analysis, providing accurate preliminary assessments and highlighting areas of concern in medical scans.",
      category: "Computer Vision",
      technologies: ["Python", "TensorFlow", "DICOM", "Flask", "React", "PostgreSQL"],
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop",
      year: "2024",
      duration: "6 months",
      teamSize: "8",
      github: false,
      features: [
        "Multi-modal medical imaging support",
        "Real-time analysis and reporting",
        "Integration with PACS systems",
        "Compliance with HIPAA standards",
        "Collaborative review tools",
        "Continuous learning capabilities"
      ],
      metrics: [
        { label: "Diagnostic Accuracy", value: "96%" },
        { label: "Analysis Time", value: "< 30 seconds" },
        { label: "False Positive Rate", value: "< 2%" },
        { label: "Radiologist Satisfaction", value: "94%" }
      ],
      gallery: [
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=300&h=200&fit=crop",
        "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=300&h=200&fit=crop"
      ]
    },
    {
      id: 6,
      title: "Voice-Controlled IoT Platform",
      description: "Smart home automation system with voice recognition and AI-powered device management.",
      fullDescription: "A comprehensive IoT platform that enables voice-controlled smart home automation with intelligent device management, energy optimization, and predictive maintenance capabilities.",
      category: "AI Solutions",
      technologies: ["Python", "React Native", "AWS IoT", "Voice Recognition", "Machine Learning"],
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop",
      year: "2023",
      duration: "7 months",
      teamSize: "6",
      github: true,
      features: [
        "Multi-language voice recognition",
        "Intelligent device automation",
        "Energy optimization algorithms",
        "Predictive maintenance alerts",
        "Mobile app integration",
        "Security and privacy protection"
      ],
      metrics: [
        { label: "Voice Accuracy", value: "97%" },
        { label: "Energy Savings", value: "35%" },
        { label: "User Satisfaction", value: "92%" },
        { label: "Response Time", value: "< 1 second" }
      ],
      gallery: [
        "https://images.unsplash.com/photo-1545177606-e8c76cd5a6a3?w=300&h=200&fit=crop",
        "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=300&h=200&fit=crop"
      ]
    }
  ];

  const filteredProjects = projects.filter(project => {
    const matchesFilter = selectedFilter === 'All' || project.category === selectedFilter;
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.technologies.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesFilter && matchesSearch;
  });

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
                Our Portfolio
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
              Discover our cutting-edge AI solutions that have transformed businesses worldwide. 
              Each project showcases innovation, excellence, and measurable results.
            </p>
          </motion.div>

          {/* Portfolio Stats */}
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
              <div className="text-gray-300">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-2">
                98%
              </div>
              <div className="text-gray-300">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent mb-2">
                40+
              </div>
              <div className="text-gray-300">Industries Served</div>
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

      {/* Filter and Search Section */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            {/* Search Bar */}
            <div className="relative max-w-md mx-auto mb-8">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl text-white placeholder-gray-400 focus:border-white/40 focus:outline-none transition-all duration-300"
              />
            </div>

            {/* Filter Buttons */}
            <div className="flex flex-wrap gap-4 justify-center">
              {filters.map((filter) => (
                <FilterButton
                  key={filter.label}
                  label={filter.label}
                  icon={filter.icon}
                  isActive={selectedFilter === filter.label}
                  onClick={() => setSelectedFilter(filter.label)}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                onOpen={setSelectedProject}
              />
            ))}
          </motion.div>

          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <div className="text-gray-400 text-lg">No projects found matching your criteria.</div>
            </motion.div>
          )}
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent mb-6">
              Client Success Stories
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our clients say about working with Nexariza.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Dr. Michael Harrison",
                role: "CTO, MedTech Solutions",
                content: "Nexariza's healthcare AI solution revolutionized our diagnostic process. The 96% accuracy rate has significantly improved patient outcomes.",
                rating: 5,
                avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face"
              },
              {
                name: "Sarah Johnson",
                role: "CEO, RetailMax",
                content: "The recommendation engine delivered a 40% increase in sales within 3 months. The ROI exceeded all our expectations.",
                rating: 5,
                avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=80&h=80&fit=crop&crop=face"
              },
              {
                name: "Robert Chen",
                role: "Head of Security, SecureCorpInc",
                content: "The real-time object detection system has enhanced our security operations dramatically. Fast, accurate, and reliable.",
                rating: 5,
                avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 hover:border-white/40 transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="text-yellow-400 fill-current" size={20} />
                  ))}
                </div>
                
                <p className="text-gray-300 leading-relaxed mb-6">
                  "{testimonial.content}"
                </p>
                
                <div className="flex items-center">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <div className="text-white font-semibold">{testimonial.name}</div>
                    <div className="text-gray-400 text-sm">{testimonial.role}</div>
                  </div>
                </div>
              </motion.div>
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
            <Award className="text-yellow-400 mx-auto mb-6" size={64} />
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready for Your Success Story?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join the hundreds of businesses that have transformed their operations with our AI solutions. 
              Let's create something amazing together.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg"
              >
                Start Your Project
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white/10 backdrop-blur-lg border border-white/20 text-white font-bold rounded-xl hover:border-white/40 transition-all duration-300"
              >
                View All Projects
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}
