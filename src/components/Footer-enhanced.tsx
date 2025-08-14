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
    <footer className="relative bg-black border-t border-white/8 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-8">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/8 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/8 rounded-full blur-3xl animate-float" style={{animationDelay: '1.5s'}}></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-15, 15, -15],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="pt-20 pb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="flex items-center space-x-4 mb-8">
                  <motion.div
                    className="relative"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.8 }}
                  >
                    <div className="w-12 h-12 gradient-premium-multi rounded-2xl flex items-center justify-center shadow-premium">
                      <Bot className="w-7 h-7 text-white" />
                    </div>
                    <motion.div
                      className="absolute inset-0 gradient-premium-multi rounded-2xl opacity-0"
                      whileHover={{ opacity: 0.4 }}
                      transition={{ duration: 0.5 }}
                    />
                  </motion.div>
                  <div>
                    <h3 className="text-3xl font-bold heading-premium text-gradient-primary">
                      Nexariza
                    </h3>
                    <div className="flex items-center space-x-2 text-gray-400">
                      <span className="font-medium">Powered by AI</span>
                      <Sparkles className="w-4 h-4 animate-pulse" />
                    </div>
                  </div>
                </div>
                
                <p className="text-premium mb-8 leading-relaxed text-lg">
                  Leading AI solutions company transforming businesses with cutting-edge artificial intelligence. 
                  We create intelligent systems that drive innovation and growth.
                </p>

                {/* Contact Info */}
                <div className="space-y-4">
                  {contactInfo.map((contact, index) => (
                    <motion.a
                      key={index}
                      href={contact.href}
                      className="flex items-center space-x-4 text-gray-300 hover:text-blue-400 transition-premium group"
                      whileHover={{ x: 8 }}
                    >
                      <contact.icon className="w-5 h-5 group-hover:scale-125 transition-transform" />
                      <span className="font-medium">{contact.text}</span>
                    </motion.a>
                  ))}
                </div>

                {/* Social Links */}
                <div className="flex space-x-4 mt-8">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-12 h-12 glass-effect rounded-2xl flex items-center justify-center text-gray-400 ${social.color} transition-premium hover-lift shadow-premium`}
                      whileHover={{ scale: 1.15, rotate: 8 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <social.icon className="w-5 h-5" />
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
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="border-t border-white/12 pt-12 pb-12"
        >
          <div className="glass-effect rounded-3xl p-10 border-premium shadow-premium-lg">
            <div className="text-center">
              <h3 className="text-2xl font-bold heading-premium text-white mb-4">Stay Updated</h3>
              <p className="text-premium mb-8 text-lg">Get the latest AI insights and updates delivered to your inbox</p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 form-input-premium"
                />
                <motion.button
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-premium px-8 py-4 shadow-premium"
                >
                  Subscribe
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <div className="border-t border-white/12 pt-10 pb-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            <div className="text-gray-400 flex items-center">
              <span>© {currentYear} Nexariza. Made with</span>
              <Heart className="w-5 h-5 mx-2 text-red-400 animate-pulse" />
              <span className="font-medium">by Ahmad Yasin</span>
            </div>
            
            <div className="flex items-center space-x-6">
              <div className="text-gray-400 font-medium">
                Powered by AI • Built for the Future
              </div>
              
              <motion.button
                onClick={scrollToTop}
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.9 }}
                className="w-12 h-12 gradient-premium-multi rounded-full flex items-center justify-center text-white shadow-premium hover-lift transition-premium"
              >
                <ArrowUp className="w-5 h-5" />
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
