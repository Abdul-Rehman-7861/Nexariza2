import React, { useState } from 'react';
import { ExternalLink, Eye, TrendingUp, Users, Zap, ChevronLeft, ChevronRight, Star, Play } from 'lucide-react';

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: "E-commerce AI Chatbot",
      category: "chatbot",
      client: "TechMart Inc.",
      industry: "E-commerce",
      description: "Intelligent customer support chatbot that increased customer satisfaction by 300% and reduced response time by 95%.",
      longDescription: "We developed a sophisticated GPT-powered chatbot for TechMart Inc. that revolutionized their customer support experience. The bot understands complex product queries, processes returns, and provides personalized recommendations based on purchase history.",
      image: "https://images.pexels.com/photos/8849295/pexels-photo-8849295.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      beforeImage: "https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      technologies: ["GPT-4", "Node.js", "React", "MongoDB"],
      results: [
        { metric: "Customer Satisfaction", value: "300%", type: "increase" },
        { metric: "Response Time", value: "95%", type: "reduction" },
        { metric: "Support Costs", value: "60%", type: "reduction" },
        { metric: "Monthly Conversations", value: "50K+", type: "volume" }
      ],
      testimonial: {
        text: "The AI chatbot transformed our customer service. Response times dropped from hours to seconds, and our customers love the instant, accurate support.",
        author: "Sarah Chen",
        position: "CEO, TechMart Inc."
      },
      timeline: "6 weeks",
      budget: "$15,000"
    },
    {
      id: 2,
      title: "Vision AI Quality Control",
      category: "vision",
      client: "ManufactureCorp",
      industry: "Manufacturing",
      description: "Computer vision system that detects defects with 99.7% accuracy, reducing manual inspection time by 80%.",
      longDescription: "Our advanced Vision AI solution for ManufactureCorp uses deep learning models to detect microscopic defects in manufacturing processes. The system processes thousands of items per hour with unprecedented accuracy.",
      image: "https://images.pexels.com/photos/8566472/pexels-photo-8566472.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      beforeImage: "https://images.pexels.com/photos/5473955/pexels-photo-5473955.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      technologies: ["Computer Vision", "TensorFlow", "Python", "AWS"],
      results: [
        { metric: "Defect Detection Accuracy", value: "99.7%", type: "accuracy" },
        { metric: "Inspection Time", value: "80%", type: "reduction" },
        { metric: "Quality Costs", value: "45%", type: "reduction" },
        { metric: "Items Processed/Hour", value: "10K+", type: "volume" }
      ],
      testimonial: {
        text: "The Vision AI system exceeded our expectations. We now catch defects that human inspectors would miss, significantly improving our product quality.",
        author: "Michael Rodriguez",
        position: "Quality Manager, ManufactureCorp"
      },
      timeline: "10 weeks",
      budget: "$35,000"
    },
    {
      id: 3,
      title: "Predictive Analytics Platform",
      category: "analytics",
      client: "RetailChain Plus",
      industry: "Retail",
      description: "AI-powered forecasting system that improved inventory accuracy by 40% and reduced stockouts by 70%.",
      longDescription: "We built a comprehensive predictive analytics platform for RetailChain Plus that analyzes historical sales data, seasonal trends, and external factors to optimize inventory management across 200+ stores.",
      image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      beforeImage: "https://images.pexels.com/photos/6214474/pexels-photo-6214474.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      technologies: ["Machine Learning", "Python", "React", "PostgreSQL"],
      results: [
        { metric: "Inventory Accuracy", value: "40%", type: "increase" },
        { metric: "Stockouts", value: "70%", type: "reduction" },
        { metric: "Inventory Costs", value: "25%", type: "reduction" },
        { metric: "Revenue Increase", value: "$2.5M", type: "value" }
      ],
      testimonial: {
        text: "The predictive analytics platform transformed our inventory management. We now have the right products at the right time, significantly boosting our profitability.",
        author: "Emma Watson",
        position: "Operations Director, RetailChain Plus"
      },
      timeline: "12 weeks",
      budget: "$28,000"
    },
    {
      id: 4,
      title: "Process Automation Suite",
      category: "automation",
      client: "FinanceFlow LLC",
      industry: "Finance",
      description: "Intelligent automation that processes 1000+ documents daily, saving 40 hours of manual work per week.",
      longDescription: "Our comprehensive automation suite for FinanceFlow LLC streamlines document processing, invoice validation, and compliance reporting using advanced NLP and machine learning algorithms.",
      image: "https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      beforeImage: "https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      technologies: ["NLP", "Python", "RPA", "Cloud Functions"],
      results: [
        { metric: "Documents Processed Daily", value: "1000+", type: "volume" },
        { metric: "Manual Work Saved", value: "40 hrs/week", type: "time" },
        { metric: "Processing Accuracy", value: "99.2%", type: "accuracy" },
        { metric: "Operational Savings", value: "$180K/year", type: "value" }
      ],
      testimonial: {
        text: "The automation suite revolutionized our document processing. What used to take days now happens in minutes with incredible accuracy.",
        author: "David Park",
        position: "CFO, FinanceFlow LLC"
      },
      timeline: "8 weeks",
      budget: "$22,000"
    }
  ];

  const categories = [
    { id: 'all', label: 'All Projects', count: projects.length },
    { id: 'chatbot', label: 'Chatbots', count: projects.filter(p => p.category === 'chatbot').length },
    { id: 'vision', label: 'Vision AI', count: projects.filter(p => p.category === 'vision').length },
    { id: 'analytics', label: 'Analytics', count: projects.filter(p => p.category === 'analytics').length },
    { id: 'automation', label: 'Automation', count: projects.filter(p => p.category === 'automation').length }
  ];

  const filteredProjects = filter === 'all' ? projects : projects.filter(p => p.category === filter);

  const getResultIcon = (type) => {
    switch (type) {
      case 'increase': return TrendingUp;
      case 'reduction': return TrendingUp;
      case 'accuracy': return Eye;
      case 'volume': return Users;
      case 'time': return Zap;
      case 'value': return TrendingUp;
      default: return TrendingUp;
    }
  };

  const getResultColor = (type) => {
    switch (type) {
      case 'increase': return 'text-green-400';
      case 'reduction': return 'text-blue-400';
      case 'accuracy': return 'text-purple-400';
      case 'volume': return 'text-cyan-400';
      case 'time': return 'text-yellow-400';
      case 'value': return 'text-green-400';
      default: return 'text-white';
    }
  };

  return (
    <div className="pt-24 pb-16">
      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 backdrop-blur-sm border border-cyan-500/20 rounded-full px-6 py-2 mb-8">
              <Star className="h-4 w-4 text-cyan-400" />
              <span className="text-sm text-gray-300">Success Stories</span>
            </div>
            
            <h1 className="text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                AI Solutions That
              </span>
              <br />
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Deliver Results
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our portfolio of successful AI implementations that have transformed businesses 
              across industries, delivering measurable ROI and operational excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setFilter(category.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  filter === category.id
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg shadow-cyan-500/25'
                    : 'bg-white/5 hover:bg-white/10 border border-white/10 hover:border-cyan-400/50 text-gray-300 hover:text-white'
                }`}
              >
                {category.label} ({category.count})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm border border-white/10 rounded-3xl overflow-hidden hover:border-cyan-400/30 hover:bg-white/10 transition-all duration-500 hover:scale-105 cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <button className="w-full bg-white/20 backdrop-blur-sm text-white py-2 px-4 rounded-lg font-semibold flex items-center justify-center space-x-2">
                        <Play className="h-4 w-4" />
                        <span>View Case Study</span>
                      </button>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-cyan-400 font-semibold">{project.industry}</span>
                    <span className="text-xs text-gray-500">{project.timeline}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded text-xs text-cyan-300 border border-cyan-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500 text-sm">{project.client}</span>
                    <div className="flex items-center space-x-1">
                      <ExternalLink className="h-4 w-4 text-gray-400 group-hover:text-cyan-400 transition-colors" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 border border-white/10 rounded-3xl max-w-4xl max-h-[90vh] overflow-y-auto">
            <div className="p-8">
              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h2 className="text-3xl font-bold text-white mb-2">{selectedProject.title}</h2>
                  <p className="text-cyan-400 font-semibold">{selectedProject.client} • {selectedProject.industry}</p>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="text-gray-400 hover:text-white p-2 hover:bg-white/10 rounded-lg transition-all"
                >
                  ✕
                </button>
              </div>

              {/* Before/After Images */}
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Before</h4>
                  <img
                    src={selectedProject.beforeImage}
                    alt="Before"
                    className="w-full h-48 object-cover rounded-2xl border border-white/10"
                  />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">After</h4>
                  <img
                    src={selectedProject.image}
                    alt="After"
                    className="w-full h-48 object-cover rounded-2xl border border-white/10"
                  />
                </div>
              </div>

              {/* Description */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-white mb-4">Project Overview</h3>
                <p className="text-gray-300 leading-relaxed">{selectedProject.longDescription}</p>
              </div>

              {/* Results */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-white mb-4">Key Results</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {selectedProject.results.map((result, index) => {
                    const Icon = getResultIcon(result.type);
                    return (
                      <div key={index} className="bg-white/5 border border-white/10 rounded-2xl p-4">
                        <div className="flex items-center space-x-3">
                          <Icon className={`h-6 w-6 ${getResultColor(result.type)}`} />
                          <div>
                            <p className="text-sm text-gray-400">{result.metric}</p>
                            <p className={`text-xl font-bold ${getResultColor(result.type)}`}>
                              {result.value}
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Technologies */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-white mb-4">Technologies Used</h3>
                <div className="flex flex-wrap gap-3">
                  {selectedProject.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg text-cyan-300 border border-cyan-500/30 font-semibold"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Testimonial */}
              <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-2xl p-6 border border-cyan-500/20">
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full p-3">
                    <Star className="h-6 w-6 text-cyan-400" />
                  </div>
                  <div>
                    <p className="text-gray-300 italic mb-4">"{selectedProject.testimonial.text}"</p>
                    <div>
                      <p className="text-white font-semibold">{selectedProject.testimonial.author}</p>
                      <p className="text-gray-400 text-sm">{selectedProject.testimonial.position}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Project Details */}
              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
                  <h4 className="font-semibold text-white mb-2">Timeline</h4>
                  <p className="text-cyan-400 text-lg font-semibold">{selectedProject.timeline}</p>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
                  <h4 className="font-semibold text-white mb-2">Investment</h4>
                  <p className="text-green-400 text-lg font-semibold">{selectedProject.budget}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;