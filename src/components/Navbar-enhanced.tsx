import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Bot, Moon, Sun, Zap, Sparkles, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import LanguageTranslator from './LanguageTranslator';
import { useTranslation } from '../hooks/useTranslation';

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
}

const Navbar: React.FC<NavbarProps> = ({ darkMode, setDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t, currentLanguage, changeLanguage } = useTranslation();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: t('nav.home'), href: '/', icon: '🏠' },
    { name: t('nav.about'), href: '/about', icon: '👥' },
    { name: t('nav.services'), href: '/services', icon: '🤖' },
    { name: t('nav.voiceBot'), href: '/voice-bot', icon: '🎤', badge: 'AI' },
    { name: t('nav.projectBuilder'), href: '/project-builder', icon: '🛠️', badge: 'New' },
    { name: t('nav.portfolio'), href: '/portfolio', icon: '💼' },
    { name: t('nav.dashboard'), href: '/dashboard', icon: '📊' },
    { name: t('nav.contact'), href: '/contact', icon: '📞' },
  ];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-black/95 backdrop-blur-xl border-b border-white/10 shadow-2xl' 
          : 'bg-black/80 backdrop-blur-lg border-b border-white/5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <motion.div 
              className="relative"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-xl flex items-center justify-center">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-xl blur-md opacity-50"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              ></motion.div>
            </motion.div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Nexariza
              </span>
              <span className="text-xs text-gray-400 -mt-1">AI Solutions</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navigation.map((item) => (
              <motion.div key={item.name} className="relative">
                <Link
                  to={item.href}
                  className={`relative px-4 py-2 rounded-xl transition-all duration-300 group flex items-center space-x-2 ${
                    location.pathname === item.href
                      ? 'text-blue-400 bg-blue-500/20 backdrop-blur-lg border border-blue-500/30'
                      : 'text-gray-300 hover:text-white hover:bg-white/10 backdrop-blur-lg border border-transparent hover:border-white/20'
                  }`}
                >
                  <span className="text-sm">{item.icon}</span>
                  <span className="font-medium">{item.name}</span>
                  {item.badge && (
                    <motion.span 
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="px-2 py-0.5 bg-gradient-to-r from-green-400 to-blue-500 text-white text-xs font-bold rounded-full"
                    >
                      {item.badge}
                    </motion.span>
                  )}
                  {location.pathname === item.href && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl border border-blue-500/30"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </Link>
              </motion.div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <LanguageTranslator
              currentLanguage={currentLanguage}
              onLanguageChange={changeLanguage}
            />
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl text-white hover:border-white/40 transition-all duration-300"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </motion.button>
            
            <Link to="/voice-bot">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-700 text-white font-medium rounded-xl hover:from-blue-700 hover:to-purple-800 transition-all duration-300 flex items-center space-x-2 group shadow-lg shadow-blue-500/25"
              >
                <Bot size={16} />
                <span>{t('nav.tryVoiceAI')}</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </Link>
            
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-2 bg-gradient-to-r from-emerald-500 to-blue-600 text-white font-bold rounded-xl hover:from-emerald-600 hover:to-blue-700 transition-all duration-300 shadow-lg shadow-emerald-500/25 flex items-center space-x-2"
              >
                <Sparkles size={16} />
                <span>{t('nav.getStarted')}</span>
              </motion.button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-4">
            <LanguageTranslator
              currentLanguage={currentLanguage}
              onLanguageChange={changeLanguage}
            />
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl text-white"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl text-white"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-black/80 backdrop-blur-xl border-t border-white/10"
          >
            <div className="px-4 py-6 space-y-3">
              {navigation.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    to={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-300 ${
                      location.pathname === item.href
                        ? 'text-blue-400 bg-blue-500/20 border border-blue-500/30'
                        : 'text-gray-300 hover:text-white hover:bg-white/10 border border-transparent'
                    }`}
                  >
                    <span className="text-lg">{item.icon}</span>
                    <span className="font-medium">{item.name}</span>
                    {item.badge && (
                      <span className="px-2 py-0.5 bg-gradient-to-r from-green-400 to-blue-500 text-white text-xs font-bold rounded-full">
                        {item.badge}
                      </span>
                    )}
                  </Link>
                </motion.div>
              ))}
              
              {/* Mobile CTA Buttons */}
              <div className="pt-4 border-t border-white/10 space-y-3">
                <Link to="/voice-bot" onClick={() => setIsOpen(false)}>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-700 text-white font-medium rounded-xl flex items-center justify-center space-x-2 shadow-lg"
                  >
                    <Bot size={16} />
                    <span>{t('nav.tryVoiceAI')}</span>
                  </motion.button>
                </Link>
                
                <Link to="/contact" onClick={() => setIsOpen(false)}>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full px-4 py-3 bg-gradient-to-r from-emerald-500 to-blue-600 text-white font-bold rounded-xl flex items-center justify-center space-x-2 shadow-lg"
                  >
                    <Sparkles size={16} />
                    <span>{t('nav.getStarted')}</span>
                  </motion.button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
