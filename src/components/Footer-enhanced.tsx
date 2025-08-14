import { motion } from 'framer-motion';
import { 
  Mail, Phone, MapPin, Clock, 
  Twitter, Linkedin, Github, Instagram,
  ArrowUp, Sparkles, Bot, Heart,
  ExternalLink, Star
} from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useTranslation();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = {
    services: [
      { name: 'AI Chatbots', href: '/services#chatbots' },
      { name: 'Computer Vision', href: '/services#vision' },
      { name: 'Voice AI', href: '/services#voice' },
      { name: 'Custom Solutions', href: '/services#custom' },
    ],
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Portfolio', href: '/portfolio' },
      { name: 'Project Builder', href: '/project-builder' },
      { name: 'Contact', href: '/contact' },
    ],
    resources: [
      { name: 'Documentation', href: '#' },
      { name: 'API Reference', href: '#' },
      { name: 'Case Studies', href: '#' },
      { name: 'Blog', href: '#' },
    ],
    legal: [
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '#' },
      { name: 'Cookie Policy', href: '#' },
      { name: 'GDPR Compliance', href: '#' },
    ]
  };

  const socialLinks = [
    { name: 'Twitter', icon: Twitter, href: 'https://twitter.com/nexariza', color: 'hover:text-blue-400' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/company/nexariza', color: 'hover:text-blue-500' },
    { name: 'GitHub', icon: Github, href: 'https://github.com/nexariza', color: 'hover:text-gray-300' },
    { name: 'Instagram', icon: Instagram, href: 'https://instagram.com/nexariza', color: 'hover:text-pink-400' },
  ];

  const contactInfo = [
    { icon: Mail, text: 'contact@nexariza.com', href: 'mailto:contact@nexariza.com' },
    { icon: Phone, text: '+971 50 123 4567', href: 'tel:+971501234567' },
    { icon: MapPin, text: 'Dubai, UAE', href: '#' },
    { icon: Clock, text: '24/7 Support', href: '#' },
  ];

  return (
    <footer className="relative bg-black border-t border-white/5 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/50 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-10, 10, -10],
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="pt-16 pb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-center space-x-3 mb-6">
                  <motion.div
                    className="relative"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                      <Bot className="w-6 h-6 text-white" />
                    </div>
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl opacity-0"
                      whileHover={{ opacity: 0.3 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.div>
                  <div>
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                      Nexariza
                    </h3>
                    <div className="flex items-center space-x-1 text-sm text-gray-400">
                      <span>Powered by AI</span>
                      <Sparkles className="w-3 h-3" />
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Leading AI solutions company transforming businesses with cutting-edge artificial intelligence. 
                  We create intelligent systems that drive innovation and growth.
                </p>

                {/* Contact Info */}
                <div className="space-y-3">
                  {contactInfo.map((contact, index) => (
                    <motion.a
                      key={index}
                      href={contact.href}
                      className="flex items-center space-x-3 text-gray-300 hover:text-blue-400 transition-colors group"
                      whileHover={{ x: 5 }}
                    >
                      <contact.icon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                      <span className="text-sm">{contact.text}</span>
                    </motion.a>
                  ))}
                </div>

                {/* Social Links */}
                <div className="flex space-x-4 mt-6">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-10 h-10 bg-white/10 backdrop-blur-lg rounded-lg flex items-center justify-center text-gray-400 ${social.color} transition-all duration-300 hover:bg-white/20`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <social.icon className="w-4 h-4" />
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-white font-semibold mb-6 flex items-center">
                <Bot className="w-4 h-4 mr-2 text-blue-400" />
                Services
              </h4>
              <ul className="space-y-3">
                {footerLinks.services.map((link, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-blue-400 transition-colors text-sm flex items-center group"
                    >
                      <span className="group-hover:translate-x-1 transition-transform">{link.name}</span>
                      <ExternalLink className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="text-white font-semibold mb-6 flex items-center">
                <Star className="w-4 h-4 mr-2 text-purple-400" />
                Company
              </h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-purple-400 transition-colors text-sm flex items-center group"
                    >
                      <span className="group-hover:translate-x-1 transition-transform">{link.name}</span>
                      <ExternalLink className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="text-white font-semibold mb-6 flex items-center">
                <Sparkles className="w-4 h-4 mr-2 text-green-400" />
                Legal
              </h4>
              <ul className="space-y-3">
                {footerLinks.legal.map((link, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-green-400 transition-colors text-sm flex items-center group"
                    >
                      <span className="group-hover:translate-x-1 transition-transform">{link.name}</span>
                      <ExternalLink className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="border-t border-white/10 pt-8 pb-8"
        >
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
            <div className="text-center">
              <h3 className="text-xl font-semibold text-white mb-2">Stay Updated</h3>
              <p className="text-gray-300 mb-4">Get the latest AI insights and updates delivered to your inbox</p>
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg px-4 py-2 text-white placeholder-gray-400 focus:border-white/40 focus:outline-none"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-lg font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
                >
                  Subscribe
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 pb-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm flex items-center">
              <span>© {currentYear} Nexariza. Made with</span>
              <Heart className="w-4 h-4 mx-1 text-red-400 animate-pulse" />
              <span>by Ahmad Yasin</span>
            </div>
            
            <div className="flex items-center space-x-6">
              <div className="text-gray-400 text-sm">
                Powered by AI • Built for the Future
              </div>
              
              <motion.button
                onClick={scrollToTop}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 will-change-transform"
              >
                <ArrowUp className="w-4 h-4" />
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
