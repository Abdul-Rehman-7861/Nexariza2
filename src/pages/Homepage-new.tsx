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
  const { t } = useTranslation();

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
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 border border-blue-500/30 rounded-full animate-spin-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 border border-purple-500/30 rounded-lg animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-cyan-500/30 rounded-full animate-ping"></div>
      </div>

      {/* Hero Section */}
      <section className="relative z-10 min-h-screen flex items-center justify-center px-4">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="mb-8"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5, duration: 0.8, type: "spring" }}
              className="inline-flex items-center bg-white/10 backdrop-blur-lg border border-white/20 rounded-full px-6 py-3 mb-8"
            >
              <Sparkles className="text-yellow-400 mr-2" size={20} />
              <span className="text-white font-medium">Ahmad Yasin - Founder & AI Architect</span>
            </motion.div>
            
            <h1 className="text-5xl md:text-8xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
                {t('home.hero.title').split(' ').slice(0, 2).join(' ')}
              </span>
              <br />
              <span className="text-gray-300">for the</span>
              <br />
              <motion.span
                className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                {t('home.hero.title').split(' ').slice(-2).join(' ')}
              </motion.span>
            </h1>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed"
            >
              {t('home.hero.subtitle')}
            </motion.p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-6 justify-center mb-16"
          >
            <Link to="/project-builder">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(59, 130, 246, 0.5)" }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold rounded-2xl overflow-hidden transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative flex items-center">
                  {t('home.hero.experienceFuture')}
                  <Rocket className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={20} />
                </span>
              </motion.button>
            </Link>
            
            <Link to="/voice-bot">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(168, 85, 247, 0.5)" }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-8 py-4 bg-white/10 backdrop-blur-lg border-2 border-white/20 text-white font-bold rounded-2xl hover:border-white/40 transition-all duration-300"
              >
                <span className="relative flex items-center">
                  {t('home.hero.voiceConsultation')}
                  <MessageSquare className="ml-2 group-hover:animate-pulse" size={20} />
                </span>
              </motion.button>
            </Link>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsVideoPlaying(true)}
              className="group relative px-8 py-4 bg-gradient-to-r from-green-500 to-cyan-600 text-white font-bold rounded-2xl transition-all duration-300"
            >
              <span className="relative flex items-center">
                {t('home.hero.watchDemo')}
                <Play className="ml-2 group-hover:scale-110 transition-transform duration-300" size={20} />
              </span>
            </motion.button>
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 0.8 }}
            className="flex flex-wrap justify-center items-center gap-8 text-gray-400"
          >
            <div className="flex items-center">
              <Shield className="text-green-400 mr-2" size={20} />
              <span>100% Open Source</span>
            </div>
            <div className="flex items-center">
              <Globe className="text-blue-400 mr-2" size={20} />
              <span>Global Pricing</span>
            </div>
            <div className="flex items-center">
              <Award className="text-purple-400 mr-2" size={20} />
              <span>Expert Team</span>
            </div>
            <div className="flex items-center">
              <Zap className="text-yellow-400 mr-2" size={20} />
              <span>Fast Deployment</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Floating AI Models Section */}
      <section className="relative z-10 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-6">
              AI Technologies We Master
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Cutting-edge AI models and frameworks, all using free and open-source solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <AIModelCard
              icon={<Brain />}
              title="Gemini Pro"
              description="Advanced multimodal AI for text, code, and analysis with free API access"
              color="from-blue-500 to-cyan-600"
              delay={0.1}
            />
            <AIModelCard
              icon={<Eye />}
              title="Computer Vision"
              description="Open-source image recognition and processing using TensorFlow and OpenCV"
              color="from-purple-500 to-pink-600"
              delay={0.2}
            />
            <AIModelCard
              icon={<MessageSquare />}
              title="NLP & Chatbots"
              description="Natural language processing with Hugging Face transformers and free models"
              color="from-green-500 to-teal-600"
              delay={0.3}
            />
            <AIModelCard
              icon={<Code />}
              title="Custom Models"
              description="Tailored AI solutions using PyTorch, scikit-learn, and open datasets"
              color="from-orange-500 to-red-600"
              delay={0.4}
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative z-10 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-12"
          >
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              <StatsCounter end={500} label="Projects Completed" suffix="+" />
              <StatsCounter end={98} label="Client Satisfaction" suffix="%" />
              <StatsCounter end={40} label="Countries Served" suffix="+" />
              <StatsCounter end={24} label="Support Hours" suffix="/7" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="relative z-10 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent mb-6">
              What Clients Say
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Real results from real businesses using our AI solutions
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 text-center"
              >
                <div className="flex justify-center mb-4">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="text-yellow-400 fill-current" size={20} />
                  ))}
                </div>
                
                <blockquote className="text-xl text-gray-300 mb-6 italic">
                  "{testimonials[currentTestimonial].content}"
                </blockquote>
                
                <div className="flex items-center justify-center">
                  <img
                    src={testimonials[currentTestimonial].image}
                    alt={testimonials[currentTestimonial].name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div className="text-left">
                    <div className="text-white font-semibold">{testimonials[currentTestimonial].name}</div>
                    <div className="text-gray-400 text-sm">{testimonials[currentTestimonial].role}</div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial ? 'bg-blue-400' : 'bg-gray-600'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-xl border border-white/20 rounded-3xl p-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join hundreds of companies already using our AI solutions. Get started with a free consultation and personalized quote.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/project-builder">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg"
                >
                  Start Your AI Project
                </motion.button>
              </Link>
              
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-white/10 backdrop-blur-lg border border-white/20 text-white font-bold rounded-xl hover:border-white/40 transition-all duration-300"
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
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
            onClick={() => setIsVideoPlaying(false)}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="relative max-w-4xl w-full mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="aspect-video bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center">
                <div className="text-center text-white">
                  <Play size={64} className="mx-auto mb-4" />
                  <p className="text-xl">Demo Video Coming Soon</p>
                  <p className="text-gray-300">Watch our AI solutions in action</p>
                </div>
              </div>
              <button
                onClick={() => setIsVideoPlaying(false)}
                className="absolute -top-4 -right-4 w-8 h-8 bg-white/20 backdrop-blur-lg rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
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
