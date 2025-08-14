import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, 
  Brain, 
  Zap, 
  Eye, 
  MessageSquare, 
  Code, 
  Star, 
  Globe, 
  Users, 
  TrendingUp,
  Sparkles,
  Play,
  Shield,
  Award,
  Rocket
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from '../hooks/useTranslation';

// 3D Particle System Component
const ParticleSystem = () => {
  const [particles, setParticles] = useState<Array<{id: number, x: number, y: number, size: number, speed: number}>>([]);

  useEffect(() => {
    const generateParticles = () => {
      const newParticles = Array.from({ length: 50 }, (_, i) => ({
        id: i,
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size: Math.random() * 4 + 1,
        speed: Math.random() * 2 + 0.5
      }));
      setParticles(newParticles);
    };

    generateParticles();
    window.addEventListener('resize', generateParticles);
    return () => window.removeEventListener('resize', generateParticles);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute bg-blue-400/20 rounded-full"
          style={{
            width: particle.size,
            height: particle.size,
          }}
          animate={{
            x: [particle.x, particle.x + 100, particle.x - 50, particle.x],
            y: [particle.y, particle.y - 100, particle.y + 50, particle.y],
          }}
          transition={{
            duration: 20 + Math.random() * 10,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      ))}
    </div>
  );
};

// Floating AI Model Cards
const AIModelCard = ({ icon, title, description, color, delay }: any) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.8 }}
    whileHover={{ scale: 1.05, rotateY: 5 }}
    className={`relative group cursor-pointer`}
  >
    <div className={`absolute inset-0 bg-gradient-to-r ${color} rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-xl`}></div>
    <div className="relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 hover:border-white/40 transition-all duration-300">
      <div className={`text-4xl mb-4 ${color.includes('blue') ? 'text-blue-400' : color.includes('purple') ? 'text-purple-400' : 'text-cyan-400'}`}>
        {icon}
      </div>
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-gray-300 text-sm">{description}</p>
    </div>
  </motion.div>
);

// Stats Counter Component
const StatsCounter = ({ end, label, suffix = "" }: { end: number; label: string; suffix?: string }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prev) => {
        if (prev < end) {
          return Math.min(prev + Math.ceil(end / 100), end);
        }
        return end;
      });
    }, 30);

    return () => clearInterval(timer);
  }, [end]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="text-center"
    >
      <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
        {count}{suffix}
      </div>
      <div className="text-gray-300 text-sm md:text-base">{label}</div>
    </motion.div>
  );
};

export default function Homepage() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "CTO, TechFlow Inc",
      content: "Nexariza transformed our customer service with an AI chatbot that reduced response time by 80%. The location-based pricing made it incredibly affordable for our startup.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Marcus Rodriguez",
      role: "Founder, DataDriven Solutions",
      content: "The computer vision system they built for our manufacturing line detected defects with 99.2% accuracy. ROI was achieved in just 3 months.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Dr. Amina Hassan",
      role: "Head of Innovation, HealthTech Labs",
      content: "Their NLP model for medical document analysis saved our team 40 hours per week. The free open-source approach aligned perfectly with our budget constraints.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150&h=150&fit=crop&crop=face"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Particle Background */}
      <ParticleSystem />
      
      {/* Geometric Patterns */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-80 h-80 border border-blue-500/40 rounded-full animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 border border-purple-500/40 rounded-2xl animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-cyan-500/40 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
      </div>

      {/* Hero Section */}
      <section className="relative z-10 min-h-screen flex items-center justify-center px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 60 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="mb-8"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: isLoaded ? 1 : 0 }}
              transition={{ delay: 0.6, duration: 1, type: "spring", bounce: 0.3 }}
              className="inline-flex items-center glass-effect rounded-full px-8 py-4 mb-12 shadow-premium"
            >
              <Sparkles className="text-yellow-400 mr-3 animate-pulse" size={22} />
              <span className="text-white font-semibold text-lg">Ahmad Yasin - Founder & AI Architect</span>
            </motion.div>
            
            <h1 className="text-6xl md:text-9xl font-bold mb-8 leading-tight heading-premium">
              <span className="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent block">
                {t('home.hero.title').split(' ').slice(0, 2).join(' ')}
              </span>
              <span className="text-gray-300 text-4xl md:text-6xl block my-4">for the</span>
              <motion.span
                className="text-gradient-primary block"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                {t('home.hero.title').split(' ').slice(-2).join(' ')}
              </motion.span>
            </h1>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: isLoaded ? 1 : 0 }}
              transition={{ delay: 1.2, duration: 1 }}
              className="text-xl md:text-3xl text-premium max-w-5xl mx-auto mb-16 leading-relaxed"
            >
              {t('home.hero.subtitle')}
            </motion.p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 40 }}
            transition={{ delay: 1.8, duration: 1 }}
            className="flex flex-col sm:flex-row gap-8 justify-center mb-20"
          >
            <Link to="/project-builder">
              <motion.button
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-10 py-5 gradient-premium-multi text-white font-bold rounded-2xl overflow-hidden transition-premium shadow-premium-lg hover-lift"
              >
                <div className="absolute inset-0 gradient-premium-blue opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <span className="relative flex items-center text-lg">
                  {t('home.hero.experienceFuture')}
                  <Rocket className="ml-3 group-hover:translate-x-2 transition-transform duration-300" size={22} />
                </span>
              </motion.button>
            </Link>
            
            <Link to="/voice-bot">
              <motion.button
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-10 py-5 glass-effect border-2 border-white/25 text-white font-bold rounded-2xl hover:border-white/50 transition-premium shadow-premium hover-lift"
              >
                <span className="relative flex items-center text-lg">
                  {t('home.hero.voiceConsultation')}
                  <MessageSquare className="ml-3 group-hover:animate-pulse" size={22} />
                </span>
              </motion.button>
            </Link>

            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsVideoPlaying(true)}
              className="group relative px-10 py-5 gradient-premium-secondary text-white font-bold rounded-2xl transition-premium shadow-premium hover-lift"
            >
              <span className="relative flex items-center text-lg">
                {t('home.hero.watchDemo')}
                <Play className="ml-3 group-hover:scale-125 transition-transform duration-300" size={22} />
              </span>
            </motion.button>
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isLoaded ? 1 : 0 }}
            transition={{ delay: 2.2, duration: 1 }}
            className="flex flex-wrap justify-center items-center gap-12 text-gray-400"
          >
            <div className="flex items-center glass-effect px-4 py-2 rounded-full">
              <Shield className="text-green-400 mr-3" size={22} />
              <span className="font-medium">100% Open Source</span>
            </div>
            <div className="flex items-center glass-effect px-4 py-2 rounded-full">
              <Globe className="text-blue-400 mr-3" size={22} />
              <span className="font-medium">Global Pricing</span>
            </div>
            <div className="flex items-center glass-effect px-4 py-2 rounded-full">
              <Award className="text-purple-400 mr-3" size={22} />
              <span className="font-medium">Expert Team</span>
            </div>
            <div className="flex items-center glass-effect px-4 py-2 rounded-full">
              <Zap className="text-yellow-400 mr-3" size={22} />
              <span className="font-medium">Fast Deployment</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Floating AI Models Section */}
      <section className="relative z-10 py-32 px-6 lg:px-8 content-visibility-auto">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-7xl font-bold heading-premium text-gradient-primary mb-8">
              AI Technologies We Master
            </h2>
            <p className="text-2xl text-premium max-w-4xl mx-auto">
              Cutting-edge AI models and frameworks, all using free and open-source solutions
            </p>
          </motion.div>

          <div className="grid-premium">
            <AIModelCard
              icon={<Brain />}
              title="Gemini Pro"
              description="Advanced multimodal AI for text, code, and analysis with free API access"
              color="gradient-premium-blue"
              delay={0.1}
            />
            <AIModelCard
              icon={<Eye />}
              title="Computer Vision"
              description="Open-source image recognition and processing using TensorFlow and OpenCV"
              color="gradient-premium-purple"
              delay={0.2}
            />
            <AIModelCard
              icon={<MessageSquare />}
              title="NLP & Chatbots"
              description="Natural language processing with Hugging Face transformers and free models"
              color="gradient-premium-secondary"
              delay={0.3}
            />
            <AIModelCard
              icon={<Code />}
              title="Custom Models"
              description="Tailored AI solutions using PyTorch, scikit-learn, and open datasets"
              color="gradient-premium-multi"
              delay={0.4}
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative z-10 py-32 px-6 lg:px-8 content-visibility-auto">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass-effect rounded-3xl p-16 shadow-premium-lg"
          >
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
              <StatsCounter end={500} label="Projects Completed" suffix="+" />
              <StatsCounter end={98} label="Client Satisfaction" suffix="%" />
              <StatsCounter end={40} label="Countries Served" suffix="+" />
              <StatsCounter end={24} label="Support Hours" suffix="/7" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="relative z-10 py-32 px-6 lg:px-8 content-visibility-auto">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-7xl font-bold heading-premium text-gradient-secondary mb-8">
              What Clients Say
            </h2>
            <p className="text-2xl text-premium max-w-4xl mx-auto">
              Real results from real businesses using our AI solutions
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, x: 120 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -120 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="card-premium p-12 text-center shadow-premium-lg"
              >
                <div className="flex justify-center mb-6">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="text-yellow-400 fill-current mx-1" size={24} />
                  ))}
                </div>
                
                <blockquote className="text-2xl text-premium mb-8 italic font-medium">
                  "{testimonials[currentTestimonial].content}"
                </blockquote>
                
                <div className="flex items-center justify-center">
                  <img
                    src={testimonials[currentTestimonial].image}
                    alt={testimonials[currentTestimonial].name}
                    className="w-16 h-16 rounded-full mr-6 border-2 border-white/20"
                  />
                  <div className="text-left">
                    <div className="text-white font-bold text-lg">{testimonials[currentTestimonial].name}</div>
                    <div className="text-gray-400">{testimonials[currentTestimonial].role}</div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="flex justify-center mt-12 space-x-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-4 h-4 rounded-full transition-premium ${
                    index === currentTestimonial ? 'bg-blue-400 scale-125' : 'bg-gray-600 hover:bg-gray-500'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-32 px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass-effect rounded-3xl p-16 shadow-premium-lg border-premium"
          >
            <h2 className="text-5xl md:text-6xl font-bold heading-premium text-white mb-8">
              Ready to Transform Your Business?
            </h2>
            <p className="text-2xl text-premium mb-12 max-w-3xl mx-auto">
              Join hundreds of companies already using our AI solutions. Get started with a free consultation and personalized quote.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/project-builder">
                <motion.button
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-premium px-12 py-5 text-lg shadow-premium-lg hover-lift"
                >
                  Start Your AI Project
                </motion.button>
              </Link>
              
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-12 py-5 glass-effect border-2 border-white/25 text-white font-bold rounded-2xl hover:border-white/50 transition-premium shadow-premium text-lg hover-lift"
                >
                  Get Free Consultation
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Video Modal */}
      <AnimatePresence>
        {isVideoPlaying && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-xl"
            onClick={() => setIsVideoPlaying(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="relative max-w-5xl w-full mx-6"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="aspect-video gradient-premium-multi rounded-3xl flex items-center justify-center shadow-premium-lg">
                <div className="text-center text-white">
                  <Play size={80} className="mx-auto mb-6" />
                  <p className="text-3xl font-bold mb-4">Demo Video Coming Soon</p>
                  <p className="text-xl text-gray-200">Watch our AI solutions in action</p>
                </div>
              </div>
              <button
                onClick={() => setIsVideoPlaying(false)}
                className="absolute -top-6 -right-6 w-12 h-12 glass-effect rounded-full flex items-center justify-center text-white hover:border-white/40 transition-premium text-xl font-bold"
              >
                ×
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
