import React from 'react';
import { User, Users, Award, Target, Globe, Zap, Brain, Star } from 'lucide-react';

const About = () => {
  const team = [
    {
      name: "Ahmad Yasin",
      role: "Founder & AI Architect",
      expertise: ["GPT Integration", "Vision AI", "Machine Learning", "Automation"],
      image: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      bio: "Leading AI innovator with 8+ years of experience in building enterprise-grade AI solutions. Specialized in GPT models, computer vision, and intelligent automation systems."
    },
    {
      name: "Sarah Martinez",
      role: "Lead ML Engineer",
      expertise: ["Deep Learning", "NLP", "Computer Vision", "MLOps"],
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      bio: "Former Google AI researcher with expertise in advanced machine learning algorithms and scalable AI infrastructure."
    },
    {
      name: "David Chen",
      role: "AI Solutions Architect",
      expertise: ["System Design", "Cloud AI", "Integration", "Optimization"],
      image: "https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      bio: "Enterprise architect specializing in large-scale AI deployments and seamless system integrations for Fortune 500 companies."
    }
  ];

  const values = [
    {
      icon: Brain,
      title: "Innovation First",
      description: "We leverage cutting-edge AI technologies to solve complex business challenges with creative solutions."
    },
    {
      icon: Star,
      title: "Excellence Driven",
      description: "Every solution we deliver meets the highest standards of quality, performance, and reliability."
    },
    {
      icon: Users,
      title: "Client Partnership",
      description: "We work closely with our clients as strategic partners, ensuring their success is our success."
    },
    {
      icon: Globe,
      title: "Global Impact",
      description: "Our AI solutions are designed to scale globally while adapting to local market needs."
    }
  ];

  const achievements = [
    { number: "500+", label: "AI Projects Completed" },
    { number: "98%", label: "Client Satisfaction Rate" },
    { number: "150+", label: "Global Enterprise Clients" },
    { number: "2.5M+", label: "Hours Automated" }
  ];

  return (
    <div className="pt-24 pb-16">
      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 backdrop-blur-sm border border-cyan-500/20 rounded-full px-6 py-2 mb-8">
              <Users className="h-4 w-4 text-cyan-400" />
              <span className="text-sm text-gray-300">Meet the Nexariza Team</span>
            </div>
            
            <h1 className="text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Pioneering the Future of
              </span>
              <br />
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Artificial Intelligence
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              At Nexariza, we're not just building AI solutions—we're crafting the future of intelligent business automation. 
              Our team of world-class experts combines cutting-edge technology with deep industry knowledge to deliver 
              transformative results.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Our <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Expert Team</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Meet the brilliant minds behind Nexariza's innovative AI solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:border-cyan-400/30 hover:bg-white/10 transition-all duration-500 hover:scale-105"
              >
                <div className="relative mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-2xl mx-auto object-cover border-2 border-cyan-400/30 group-hover:border-cyan-400 transition-colors"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all"></div>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2 text-center">{member.name}</h3>
                <p className="text-cyan-400 font-semibold mb-4 text-center">{member.role}</p>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">{member.bio}</p>
                
                <div className="flex flex-wrap gap-2 justify-center">
                  {member.expertise.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full text-xs text-cyan-300 border border-cyan-500/30"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Our <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Core Values</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              The principles that drive everything we do at Nexariza
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="group text-center bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-cyan-400/30 hover:bg-white/10 transition-all duration-500"
              >
                <div className="bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-2xl p-4 w-16 h-16 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <value.icon className="h-8 w-8 text-cyan-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{value.title}</h3>
                <p className="text-gray-400 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 backdrop-blur-sm border border-white/10 rounded-3xl p-12">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">
                Our <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Impact</span>
              </h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Numbers that reflect our commitment to excellence and client success
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {achievements.map((achievement, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-2">
                    {achievement.number}
                  </div>
                  <div className="text-gray-400 font-medium">{achievement.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm border border-white/10 rounded-3xl p-12">
              <Target className="h-16 w-16 text-cyan-400 mx-auto mb-8" />
              <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
              <p className="text-xl text-gray-300 leading-relaxed mb-8">
                To democratize artificial intelligence by making advanced AI solutions accessible, 
                affordable, and actionable for businesses of all sizes. We believe that every organization 
                deserves the power to transform their operations through intelligent automation.
              </p>
              <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl p-6 border border-cyan-500/30">
                <p className="text-cyan-300 font-semibold italic">
                  "AI is not just the future—it's the present opportunity to redefine what's possible."
                </p>
                <p className="text-gray-400 mt-2">— Ahmad Yasin, Founder</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;