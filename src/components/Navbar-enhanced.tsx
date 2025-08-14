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
      className={`nav-premium transition-all duration-500 ${
        scrolled 
          ? 'bg-black/98 backdrop-blur-xl border-b border-white/15 shadow-premium-lg' 
          : 'bg-black/85 backdrop-blur-lg border-b border-white/8'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center py-5">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-4 group">
            <motion.div 
              className="relative"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            >
              <div className="w-12 h-12 gradient-premium-multi rounded-2xl flex items-center justify-center shadow-premium">
                <Zap className="h-7 w-7 text-white" />
              </div>
              <motion.div 
                className="absolute inset-0 gradient-premium-multi rounded-2xl blur-lg opacity-40"
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              ></motion.div>
            </motion.div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold heading-premium text-gradient-primary">
                Nexariza
              </span>
              <span className="text-xs text-gray-400 -mt-1 font-medium">AI Solutions</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-2">
            {navigation.map((item) => (
              <motion.div key={item.name} className="relative">
                <Link
                  to={item.href}
                  className={`relative px-5 py-3 rounded-2xl transition-premium group flex items-center space-x-3 ${
                    location.pathname === item.href
                      ? 'text-blue-400 glass-effect border-blue-500/40 shadow-premium'
                      : 'text-gray-300 hover:text-white hover:glass-effect border border-transparent hover:border-white/25'
                  }`}
                >
                  <span className="text-base">{item.icon}</span>
                  <span className="font-semibold">{item.name}</span>
                  {item.badge && (
                    <motion.span 
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="px-3 py-1 gradient-premium-blue text-white text-xs font-bold rounded-full shadow-premium"
                    >
                      {item.badge}
                    </motion.span>
                  )}
                  {location.pathname === item.href && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 gradient-premium-blue opacity-20 rounded-2xl border border-blue-500/40"
                      transition={{ type: "spring", bounce: 0.15, duration: 0.8 }}
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
              className="p-3 glass-effect rounded-2xl text-white hover:border-white/40 transition-premium hover-lift"
            >
              {darkMode ? <Sun size={22} /> : <Moon size={22} />}
            </motion.button>
            
            <Link to="/voice-bot">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-premium flex items-center space-x-2 group shadow-premium"
              >
                <Bot size={18} />
                <span>{t('nav.tryVoiceAI')}</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </Link>
            
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 gradient-premium-multi text-white font-bold rounded-2xl hover-lift transition-premium shadow-premium flex items-center space-x-2"
              >
                <Sparkles size={18} />
                <span>{t('nav.getStarted')}</span>
              </motion.button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-3">
            <LanguageTranslator
              currentLanguage={currentLanguage}
              onLanguageChange={changeLanguage}
            />
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setDarkMode(!darkMode)}
              className="p-3 glass-effect rounded-2xl text-white"
            >
              {darkMode ? <Sun size={22} /> : <Moon size={22} />}
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
              className="p-3 glass-effect rounded-2xl text-white"
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0, y: -20 }}
            animate={{ opacity: 1, height: 'auto', y: 0 }}
            exit={{ opacity: 0, height: 0, y: -20 }}
            className="lg:hidden bg-black/95 backdrop-blur-xl border-t border-white/15"
          >
            <div className="px-6 py-8 space-y-4">
              {navigation.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05, duration: 0.3 }}
                >
                  <Link
                    to={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center space-x-4 px-6 py-4 rounded-2xl transition-premium ${
                      location.pathname === item.href
                        ? 'text-blue-400 glass-effect border border-blue-500/40'
                        : 'text-gray-300 hover:text-white hover:glass-effect border border-transparent'
                    }`}
                  >
                    <span className="text-xl">{item.icon}</span>
                    <span className="font-semibold">{item.name}</span>
                    {item.badge && (
                      <span className="px-3 py-1 gradient-premium-blue text-white text-xs font-bold rounded-full">
                        {item.badge}
                      </span>
                    )}
                  </Link>
                </motion.div>
              ))}
              
              {/* Mobile CTA Buttons */}
              <div className="pt-6 border-t border-white/15 space-y-4">
                <Link to="/voice-bot" onClick={() => setIsOpen(false)}>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full btn-premium flex items-center justify-center space-x-3 shadow-premium"
                  >
                    <Bot size={18} />
                    <span>{t('nav.tryVoiceAI')}</span>
                  </motion.button>
                </Link>
                
                <Link to="/contact" onClick={() => setIsOpen(false)}>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full px-6 py-4 gradient-premium-multi text-white font-bold rounded-2xl flex items-center justify-center space-x-3 shadow-premium"
                  >
                    <Sparkles size={18} />
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
