import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare, Calendar, Zap, CheckCircle, Globe, Clock } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: '',
    budget: '',
    message: '',
    timeline: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const projectTypes = [
    'GPT-Powered Chatbot',
    'Vision AI System',
    'Process Automation',
    'Predictive Analytics',
    'Custom AI Development',
    'AI Security Solution'
  ];

  const budgetRanges = [
    '$5K - $15K',
    '$15K - $30K',
    '$30K - $50K',
    '$50K - $100K',
    '$100K+'
  ];

  const timelines = [
    '2-4 weeks',
    '1-2 months',
    '2-4 months',
    '4+ months'
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      details: 'hello@nexariza.com',
      description: 'Get a response within 2 hours'
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: '+1 (555) 123-4567',
      description: 'Mon-Fri 9AM-6PM EST'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      details: 'San Francisco, CA',
      description: 'Schedule an in-person meeting'
    }
  ];

  const features = [
    {
      icon: Zap,
      title: 'Free Consultation',
      description: 'Get expert advice on your AI project at no cost'
    },
    {
      icon: Calendar,
      title: 'Flexible Scheduling',
      description: 'Book a call at your convenience'
    },
    {
      icon: Globe,
      title: 'Global Support',
      description: 'Serving clients worldwide with 24/7 support'
    },
    {
      icon: Clock,
      title: 'Quick Response',
      description: 'We respond to all inquiries within 2 hours'
    }
  ];

  if (isSubmitted) {
    return (
      <div className="pt-24 pb-16 min-h-screen flex items-center justify-center">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm border border-white/10 rounded-3xl p-12">
            <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-full p-6 w-24 h-24 flex items-center justify-center mx-auto mb-8">
              <CheckCircle className="h-12 w-12 text-green-400" />
            </div>
            
            <h1 className="text-4xl font-bold text-white mb-6">Thank You!</h1>
            <p className="text-xl text-gray-300 mb-8">
              Your message has been received. Our AI experts will get back to you within 2 hours with personalized recommendations for your project.
            </p>
            
            <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-2xl p-6 border border-cyan-500/20 mb-8">
              <h3 className="text-lg font-semibold text-white mb-2">What happens next?</h3>
              <div className="space-y-3 text-left">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  <span className="text-gray-300">Our team reviews your requirements</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  <span className="text-gray-300">We prepare a customized proposal</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  <span className="text-gray-300">Schedule a consultation call</span>
                </div>
              </div>
            </div>
            
            <button
              onClick={() => setIsSubmitted(false)}
              className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 hover:scale-105"
            >
              Send Another Message
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-16">
      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 backdrop-blur-sm border border-cyan-500/20 rounded-full px-6 py-2 mb-8">
              <MessageSquare className="h-4 w-4 text-cyan-400" />
              <span className="text-sm text-gray-300">Get In Touch</span>
            </div>
            
            <h1 className="text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Ready to Transform
              </span>
              <br />
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Your Business with AI?
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Get started with a free consultation. Our AI experts will analyze your needs 
              and provide personalized recommendations for your business transformation.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm border border-white/10 rounded-3xl p-8">
              <h2 className="text-2xl font-bold text-white mb-6">Tell Us About Your Project</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Full Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-cyan-400 focus:outline-none transition-colors"
                      placeholder="Your full name"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Email Address *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-cyan-400 focus:outline-none transition-colors"
                      placeholder="your.email@company.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Company Name</label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => handleInputChange('company', e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-cyan-400 focus:outline-none transition-colors"
                    placeholder="Your company name"
                  />
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Project Type</label>
                    <select
                      value={formData.projectType}
                      onChange={(e) => handleInputChange('projectType', e.target.value)}
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-cyan-400 focus:outline-none transition-colors"
                    >
                      <option value="">Select type</option>
                      {projectTypes.map((type) => (
                        <option key={type} value={type} className="bg-slate-800">
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Budget Range</label>
                    <select
                      value={formData.budget}
                      onChange={(e) => handleInputChange('budget', e.target.value)}
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-cyan-400 focus:outline-none transition-colors"
                    >
                      <option value="">Select budget</option>
                      {budgetRanges.map((budget) => (
                        <option key={budget} value={budget} className="bg-slate-800">
                          {budget}
                        </option>
                      ))}
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Timeline</label>
                    <select
                      value={formData.timeline}
                      onChange={(e) => handleInputChange('timeline', e.target.value)}
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-cyan-400 focus:outline-none transition-colors"
                    >
                      <option value="">Select timeline</option>
                      {timelines.map((timeline) => (
                        <option key={timeline} value={timeline} className="bg-slate-800">
                          {timeline}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Project Description *</label>
                  <textarea
                    required
                    rows={6}
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-cyan-400 focus:outline-none resize-none transition-colors"
                    placeholder="Describe your business challenges, current processes, and what you hope to achieve with AI..."
                  />
                </div>

                <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-2xl p-6 border border-cyan-500/20">
                  <h3 className="text-lg font-semibold text-white mb-2">Free AI Consultation Includes:</h3>
                  <div className="grid md:grid-cols-2 gap-3">
                    {[
                      'Business process analysis',
                      'AI opportunity assessment',
                      'Custom solution recommendations',
                      'ROI projections and timeline',
                      'Technology stack suggestions',
                      'Implementation roadmap'
                    ].map((item, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
                >
                  <span className="flex items-center justify-center space-x-2">
                    <Send className="h-5 w-5" />
                    <span>Send Message & Get Free Consultation</span>
                  </span>
                </button>
              </form>
            </div>
          </div>

          {/* Contact Info & Features */}
          <div className="space-y-8">
            {/* Contact Information */}
            <div className="bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-white mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-xl p-3">
                      <info.icon className="h-6 w-6 text-cyan-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">{info.title}</h4>
                      <p className="text-cyan-400 font-medium">{info.details}</p>
                      <p className="text-gray-400 text-sm">{info.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Features */}
            <div className="bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-white mb-6">Why Choose Nexariza?</h3>
              
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg p-2">
                      <feature.icon className="h-4 w-4 text-cyan-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white text-sm">{feature.title}</h4>
                      <p className="text-gray-400 text-sm">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Response Time */}
            <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-2xl p-6 text-center">
              <Clock className="h-8 w-8 text-green-400 mx-auto mb-3" />
              <h3 className="text-lg font-semibold text-white mb-2">Guaranteed Response</h3>
              <p className="text-green-400 text-2xl font-bold mb-1">Within 2 Hours</p>
              <p className="text-gray-400 text-sm">We're committed to quick responses</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;