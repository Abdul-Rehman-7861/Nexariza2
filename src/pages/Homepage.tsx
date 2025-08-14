import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Bot, Zap, Brain, Sparkles, Globe, Users, Award, TrendingUp, Play, Star, Check } from 'lucide-react';

const Homepage = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const testimonials = [
    {
      name: "Sarah Chen",
      company: "TechVision Inc",
      text: "Nexariza transformed our customer service with their AI chatbot. 300% increase in customer satisfaction!",
      rating: 5,
      avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    },
    {
      name: "Michael Rodriguez",
      company: "GlobalCorp",
      text: "Their Vision AI solution revolutionized our quality control. ROI was evident within 3 months.",
      rating: 5,
      avatar: "https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    },
    {
      name: "Emily Watson",
      company: "StartupHub",
      text: "The AI automation suite saved us 40 hours per week. Incredible value and professional service.",
      rating: 5,
      avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    }
  ];

  const stats = [
    { number: "500+", label: "AI Projects Delivered", icon: Bot },
    { number: "98%", label: "Client Satisfaction", icon: Star },
    { number: "2.5M+", label: "Hours Automated", icon: Zap },
    { number: "150+", label: "Global Clients", icon: Globe }
  ];

  const features = [
    {
      icon: Brain,
      title: "GPT-Powered Solutions",
      description: "Advanced language models for intelligent automation and customer engagement"
    },
    {
      icon: Bot,
      title: "Vision AI Systems",
      description: "Computer vision solutions for quality control, security, and analytics"
    },
    {
      icon: Sparkles,
      title: "Custom AI Development",
      description: "Tailored AI solutions built specifically for your business needs"
    },
    {
      icon: TrendingUp,
      title: "Automation Excellence",
      description: "Streamline operations with intelligent process automation"
    }
  ];

  return (
    <div className="relative min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center relative z-10">
            {/* Floating Badge */}
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 backdrop-blur-sm border border-cyan-500/20 rounded-full px-6 py-2 mb-8 group hover:scale-105 transition-transform">
              <Sparkles className="h-4 w-4 text-cyan-400 animate-pulse" />
              <span className="text-sm text-gray-300">AI Solutions That Transform Businesses</span>
              <ArrowRight className="h-4 w-4 text-cyan-400 group-hover:translate-x-1 transition-transform" />
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-white via-cyan-200 to-purple-200 bg-clip-text text-transparent">
                Luxury AI Solutions
              </span>
              <br />
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
                That Scale Dreams
              </span>
            </h1>

            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Transform your business with premium AI solutions crafted by experts. From GPT-powered chatbots to Vision AI systems, 
              we deliver cutting-edge technology that drives results.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-16">
              <Link
                to="/voice-bot"
                className="group relative bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
              >
                <span className="flex items-center space-x-2">
                  <Bot className="h-5 w-5" />
                  <span>Try Voice AI Demo</span>
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-600/0 to-purple-700/0 group-hover:from-cyan-600/20 group-hover:to-purple-700/20 transition-all duration-300"></div>
              </Link>

              <Link
                to="/project-builder"
                className="group bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/10 hover:border-cyan-400/50 text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 hover:scale-105"
              >
                <span className="flex items-center space-x-2">
                  <Play className="h-5 w-5" />
                  <span>Build Your AI Solution</span>
                </span>
              </Link>
            </div>

            {/* Floating Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-cyan-400/30 transition-all duration-300 hover:scale-105"
                >
                  <stat.icon className="h-8 w-8 text-cyan-400 mb-4 mx-auto group-hover:scale-110 transition-transform" />
                  <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div 
            className="absolute w-2 h-2 bg-cyan-400 rounded-full animate-pulse"
            style={{
              left: `${mousePosition.x * 0.01}%`,
              top: `${mousePosition.y * 0.01}%`,
              transform: 'translate(-50%, -50%)'
            }}
          />
          <div className="absolute top-20 left-10 w-1 h-1 bg-purple-400 rounded-full animate-ping"></div>
          <div className="absolute top-40 right-20 w-1 h-1 bg-cyan-400 rounded-full animate-ping delay-1000"></div>
          <div className="absolute bottom-20 left-1/4 w-1 h-1 bg-pink-400 rounded-full animate-ping delay-2000"></div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Premium AI <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Solutions</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Cutting-edge artificial intelligence solutions designed to transform your business operations and drive unprecedented growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-cyan-400/30 hover:bg-white/10 transition-all duration-500 hover:scale-105"
              >
                <div className="bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-2xl p-4 w-16 h-16 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <feature.icon className="h-8 w-8 text-cyan-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Client <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Success Stories</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Discover how our AI solutions have transformed businesses worldwide
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm border border-white/10 rounded-3xl p-8 md:p-12 text-center">
              <div className="flex justify-center mb-6">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed italic">
                "{testimonials[currentTestimonial].text}"
              </p>
              
              <div className="flex items-center justify-center space-x-4">
                <img
                  src={testimonials[currentTestimonial].avatar}
                  alt={testimonials[currentTestimonial].name}
                  className="w-16 h-16 rounded-full border-2 border-cyan-400/30"
                />
                <div>
                  <div className="text-white font-semibold">{testimonials[currentTestimonial].name}</div>
                  <div className="text-gray-400">{testimonials[currentTestimonial].company}</div>
                </div>
              </div>
            </div>

            {/* Testimonial Navigation */}
            <div className="flex justify-center space-x-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial
                      ? 'bg-cyan-400 scale-125'
                      : 'bg-white/20 hover:bg-white/40'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 backdrop-blur-sm border border-white/10 rounded-3xl p-12 text-center relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Transform Your Business with AI?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Join hundreds of companies that have already revolutionized their operations with our premium AI solutions.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                <Link
                  to="/contact"
                  className="group bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
                >
                  <span className="flex items-center space-x-2">
                    <span>Get Your Free AI Consultation</span>
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
                <Link
                  to="/portfolio"
                  className="group text-cyan-400 hover:text-cyan-300 font-semibold py-4 px-8 rounded-full border border-cyan-400/30 hover:border-cyan-400 transition-all duration-300 hover:scale-105"
                >
                  View Our Portfolio
                </Link>
              </div>
            </div>

            {/* Background Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 opacity-50"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;