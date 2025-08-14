import React from 'react';
import { motion } from 'framer-motion';
import { 
  ExternalLink, 
  Github, 
  Play, 
  Filter,
  Search,
  Calendar,
  Users,
  Zap,
  Brain,
  Eye,
  Bot,
  Code,
  Globe,
  Shield,
  Smartphone,
  Database,
  Cloud,
  ChevronRight,
  Star,
  Award,
  TrendingUp,
  Heart
} from 'lucide-react';

const TeamMember = ({ name, role, expertise, image, bio, social, delay }: any) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.8 }}
    className="group"
  >
    <div className="relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 hover:border-white/40 transition-all duration-500 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      <div className="relative z-10">
        {/* Profile Image */}
        <div className="relative mb-6">
          <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-white/20 group-hover:border-white/40 transition-all duration-300">
            <img 
              src={image} 
              alt={name}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
          </div>
          <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center">
            <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
          </div>
        </div>

        {/* Info */}
        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold text-white mb-2">{name}</h3>
          <div className="text-blue-400 font-medium mb-3">{role}</div>
          <p className="text-gray-300 text-sm leading-relaxed mb-4">{bio}</p>
        </div>

        {/* Expertise Tags */}
        <div className="flex flex-wrap gap-2 justify-center mb-6">
          {expertise.map((skill: string, index: number) => (
            <span
              key={index}
              className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs border border-purple-500/30"
            >
              {skill}
            </span>
          ))}
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-4">
          {social.linkedin && (
            <a
              href={social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-blue-500/20 text-blue-400 rounded-lg hover:bg-blue-500/30 transition-colors"
            >
              <Linkedin size={18} />
            </a>
          )}
          {social.github && (
            <a
              href={social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-gray-500/20 text-gray-400 rounded-lg hover:bg-gray-500/30 transition-colors"
            >
              <Github size={18} />
            </a>
          )}
          {social.email && (
            <a
              href={`mailto:${social.email}`}
              className="p-2 bg-green-500/20 text-green-400 rounded-lg hover:bg-green-500/30 transition-colors"
            >
              <Mail size={18} />
            </a>
          )}
        </div>
      </div>
    </div>
  </motion.div>
);

const CompanyValue = ({ icon, title, description, color, delay }: any) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.6 }}
    className="text-center group"
  >
    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
      {icon}
    </div>
    <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
    <p className="text-gray-300 leading-relaxed">{description}</p>
  </motion.div>
);

const Achievement = ({ number, label, description, delay }: any) => (
  <motion.div
    initial={{ opacity: 0, x: -30 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.6 }}
    className="flex items-start space-x-4 p-6 bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300"
  >
    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-white font-bold text-lg">
      {number}
    </div>
    <div>
      <h4 className="text-lg font-semibold text-white mb-1">{label}</h4>
      <p className="text-gray-300 text-sm">{description}</p>
    </div>
  </motion.div>
);

export default function About() {
  const teamMembers = [
    {
      name: "Ahmad Yasin",
      role: "Founder & Chief AI Architect",
      bio: "Visionary leader with 8+ years in AI development. Pioneer in democratizing AI solutions using free and open-source technologies. Expert in GPT, Computer Vision, and automation systems.",
      expertise: ["AI Strategy", "GPT Models", "Computer Vision", "Automation", "Open Source AI", "Team Leadership"],
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      social: {
        linkedin: "https://linkedin.com/in/ahmadyasin",
        github: "https://github.com/ahmadyasin",
        email: "ahmad@nexariza.com"
      }
    },
    {
      name: "Dr. Sarah Mitchell",
      role: "Head of Machine Learning",
      bio: "PhD in Computer Science with specialization in deep learning. 6+ years developing enterprise AI solutions. Expert in natural language processing and neural networks.",
      expertise: ["Deep Learning", "NLP", "PyTorch", "Research", "Model Optimization"],
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      social: {
        linkedin: "https://linkedin.com/in/sarahmitchell",
        github: "https://github.com/sarahmitchell",
        email: "sarah@nexariza.com"
      }
    },
    {
      name: "Marcus Chen",
      role: "Senior Computer Vision Engineer",
      bio: "Computer vision specialist with 5+ years in image recognition and processing. Expert in OpenCV, TensorFlow, and real-time video analysis systems.",
      expertise: ["Computer Vision", "OpenCV", "TensorFlow", "Image Processing", "Real-time Systems"],
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      social: {
        linkedin: "https://linkedin.com/in/marcuschen",
        github: "https://github.com/marcuschen",
        email: "marcus@nexariza.com"
      }
    },
    {
      name: "Elena Rodriguez",
      role: "Full-Stack AI Developer",
      bio: "Full-stack developer specializing in AI-powered web applications. Expert in React, Node.js, and integrating AI models into scalable web solutions.",
      expertise: ["React", "Node.js", "AI Integration", "API Development", "Cloud Architecture"],
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150&h=150&fit=crop&crop=face",
      social: {
        linkedin: "https://linkedin.com/in/elenarodriguez",
        github: "https://github.com/elenarodriguez",
        email: "elena@nexariza.com"
      }
    }
  ];

  const companyValues = [
    {
      icon: <Heart className="text-white" size={32} />,
      title: "Passion for Innovation",
      description: "We're driven by the endless possibilities of AI and its potential to transform businesses and lives.",
      color: "from-red-500 to-pink-600",
      delay: 0.1
    },
    {
      icon: <Globe className="text-white" size={32} />,
      title: "Global Accessibility",
      description: "Making AI solutions accessible worldwide with location-based pricing and free open-source technologies.",
      color: "from-blue-500 to-cyan-600",
      delay: 0.2
    },
    {
      icon: <Zap className="text-white" size={32} />,
      title: "Lightning Fast Delivery",
      description: "Rapid deployment without compromising quality. We understand that time-to-market is crucial.",
      color: "from-yellow-500 to-orange-600",
      delay: 0.3
    },
    {
      icon: <Award className="text-white" size={32} />,
      title: "Excellence in Everything",
      description: "Commitment to delivering world-class AI solutions that exceed expectations and drive real results.",
      color: "from-purple-500 to-indigo-600",
      delay: 0.4
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                About Nexariza
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
              We're on a mission to democratize AI technology, making cutting-edge artificial intelligence 
              accessible to businesses worldwide through innovative, cost-effective, and open-source solutions.
            </p>
          </motion.div>

          {/* Company Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
          >
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent mb-2">
                2019
              </div>
              <div className="text-gray-300">Founded</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-2">
                500+
              </div>
              <div className="text-gray-300">Projects</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent mb-2">
                40+
              </div>
              <div className="text-gray-300">Countries</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-400 to-red-500 bg-clip-text text-transparent mb-2">
                98%
              </div>
              <div className="text-gray-300">Satisfaction</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-12 text-center"
          >
            <Target className="text-blue-400 mx-auto mb-6" size={64} />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Our Mission</h2>
            <p className="text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto">
              "To democratize artificial intelligence by creating innovative, accessible, and cost-effective AI solutions 
              that empower businesses of all sizes to harness the transformative power of technology. We believe that 
              cutting-edge AI should not be limited to tech giants – every business deserves access to intelligent 
              automation and insights."
            </p>
            <div className="mt-8 flex items-center justify-center space-x-2 text-gray-400">
              <span>—</span>
              <span className="font-medium">Ahmad Yasin, Founder</span>
              <span>—</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent mb-6">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              World-class AI experts passionate about building innovative solutions with cutting-edge technology
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <TeamMember
                key={index}
                {...member}
                delay={index * 0.1}
              />
            ))}
          </div>

          {/* Founder Spotlight */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mt-20"
          >
            <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-xl border border-white/20 rounded-3xl p-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="inline-flex items-center bg-white/10 backdrop-blur-lg border border-white/20 rounded-full px-4 py-2 mb-6">
                    <Rocket className="text-blue-400 mr-2" size={20} />
                    <span className="text-white font-medium">Founder Spotlight</span>
                  </div>
                  
                  <h3 className="text-3xl font-bold text-white mb-4">Ahmad Yasin</h3>
                  <div className="text-blue-400 text-lg mb-6">Founder & Chief AI Architect</div>
                  
                  <div className="space-y-4 text-gray-300">
                    <p>
                      Ahmad founded Nexariza with a vision to make AI accessible to every business, regardless of size or budget. 
                      His expertise spans across multiple AI domains including natural language processing, computer vision, 
                      and automation systems.
                    </p>
                    <p>
                      Under his leadership, Nexariza has pioneered the use of free and open-source AI technologies, 
                      delivering enterprise-grade solutions at a fraction of traditional costs.
                    </p>
                  </div>

                  <div className="flex items-center space-x-6 mt-8">
                    <div className="flex items-center text-gray-300">
                      <Calendar className="mr-2" size={18} />
                      <span>8+ Years Experience</span>
                    </div>
                    <div className="flex items-center text-gray-300">
                      <MapPin className="mr-2" size={18} />
                      <span>Based in UAE</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <Achievement
                    number="1"
                    label="Pioneered Open-Source AI"
                    description="First to create enterprise AI solutions using 100% free technologies"
                    delay={0.1}
                  />
                  <Achievement
                    number="2"
                    label="Global Location Pricing"
                    description="Innovative pricing model adapted to local market conditions"
                    delay={0.2}
                  />
                  <Achievement
                    number="3"
                    label="500+ Successful Projects"
                    description="Delivered AI solutions across 40+ countries with 98% satisfaction"
                    delay={0.3}
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
              Our Values
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The principles that guide everything we do at Nexariza
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {companyValues.map((value, index) => (
              <CompanyValue
                key={index}
                {...value}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Technology Philosophy */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-12"
          >
            <div className="text-center mb-12">
              <Lightbulb className="text-yellow-400 mx-auto mb-6" size={64} />
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Our Technology Philosophy</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Brain className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Open Source First</h3>
                <p className="text-gray-300">
                  We believe in the power of open-source technology to drive innovation and reduce costs for our clients.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Scalable Solutions</h3>
                <p className="text-gray-300">
                  Every solution we build is designed to grow with your business, from startup to enterprise scale.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Globe className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Global Mindset</h3>
                <p className="text-gray-300">
                  We understand diverse markets and adapt our solutions to work effectively across different regions.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-xl border border-white/20 rounded-3xl p-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Work With Us?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join the hundreds of businesses already benefiting from our AI solutions. 
              Let's discuss how we can transform your business with cutting-edge technology.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg"
              >
                Start Your Project
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white/10 backdrop-blur-lg border border-white/20 text-white font-bold rounded-xl hover:border-white/40 transition-all duration-300"
              >
                Schedule a Call
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
