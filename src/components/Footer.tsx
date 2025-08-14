import React from 'react';
import { Link } from 'react-router-dom';
import { Zap, Mail, Phone, MapPin, ArrowRight, Twitter, Linkedin, Github } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'AI Solutions', href: '/services' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Contact', href: '/contact' }
  ];

  const services = [
    { name: 'GPT Chatbots', href: '/services' },
    { name: 'Vision AI', href: '/services' },
    { name: 'Process Automation', href: '/services' },
    { name: 'Predictive Analytics', href: '/services' },
    { name: 'Custom AI Development', href: '/services' }
  ];

  const socialLinks = [
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Github, href: '#', label: 'GitHub' }
  ];

  return (
    <footer className="relative mt-20">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-slate-900/50 to-transparent"></div>
      
      <div className="relative">
        {/* Main Footer */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <Link to="/" className="flex items-center space-x-2 mb-6">
                <div className="relative">
                  <Zap className="h-8 w-8 text-cyan-400" />
                  <div className="absolute inset-0 bg-cyan-400/20 rounded-full blur-md"></div>
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Nexariza
                </span>
              </Link>
              
              <p className="text-gray-400 mb-6 leading-relaxed">
                Transforming businesses worldwide with cutting-edge AI solutions. From GPT-powered chatbots to advanced computer vision systems.
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Mail className="h-4 w-4 text-cyan-400" />
                  <span className="text-gray-300">hello@nexariza.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-4 w-4 text-cyan-400" />
                  <span className="text-gray-300">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-4 w-4 text-cyan-400" />
                  <span className="text-gray-300">San Francisco, CA</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-6">Quick Links</h3>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 flex items-center group"
                    >
                      <span>{link.name}</span>
                      <ArrowRight className="h-3 w-3 ml-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-6">AI Solutions</h3>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service.name}>
                    <Link
                      to={service.href}
                      className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 flex items-center group"
                    >
                      <span>{service.name}</span>
                      <ArrowRight className="h-3 w-3 ml-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-6">Stay Updated</h3>
              <p className="text-gray-400 mb-4">
                Get the latest AI insights and updates delivered to your inbox.
              </p>
              
              <div className="flex space-x-2 mb-6">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-cyan-400 focus:outline-none transition-colors"
                />
                <button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105">
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="bg-white/5 hover:bg-white/10 border border-white/10 hover:border-cyan-400/50 p-3 rounded-lg transition-all duration-300 hover:scale-110"
                    aria-label={social.label}
                  >
                    <social.icon className="h-5 w-5 text-gray-400 hover:text-cyan-400 transition-colors" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="text-gray-400 text-sm mb-4 md:mb-0">
                © 2025 Nexariza. All rights reserved. Built with cutting-edge AI technology.
              </div>
              
              <div className="flex items-center space-x-6 text-sm">
                <Link to="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  Privacy Policy
                </Link>
                <Link to="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  Terms of Service
                </Link>
                <Link to="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  Cookie Policy
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500"></div>
      </div>
    </footer>
  );
};

export default Footer;