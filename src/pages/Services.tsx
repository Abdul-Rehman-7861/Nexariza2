import React, { useState } from 'react';
import { Bot, Brain, Eye, Zap, MessageSquare, BarChart3, Shield, Globe, ArrowRight, Check, Star } from 'lucide-react';

const Services = () => {
  const [selectedService, setSelectedService] = useState(0);

  const services = [
    {
      icon: MessageSquare,
      title: "GPT-Powered Chatbots",
      price: "From $5,000",
      description: "Intelligent conversational AI that understands context, learns from interactions, and provides human-like customer support 24/7.",
      features: [
        "Natural language understanding",
        "Multi-language support",
        "Context-aware responses",
        "Integration with CRM systems",
        "Analytics dashboard",
        "Custom training on your data"
      ],
      benefits: [
        "Reduce support costs by 60%",
        "24/7 customer availability",
        "Handle 1000+ simultaneous conversations",
        "Improve customer satisfaction by 40%"
      ],
      useCase: "Perfect for e-commerce, SaaS, healthcare, and financial services looking to automate customer support while maintaining quality."
    },
    {
      icon: Eye,
      title: "Vision AI Solutions",
      price: "From $15,000",
      description: "Advanced computer vision systems for quality control, security monitoring, inventory management, and automated inspection.",
      features: [
        "Real-time object detection",
        "Quality control automation",
        "Facial recognition systems",
        "Document processing",
        "Medical image analysis",
        "Custom model training"
      ],
      benefits: [
        "99.5% accuracy in defect detection",
        "Reduce manual inspection by 80%",
        "Process 1000+ images per minute",
        "ROI within 4 months"
      ],
      useCase: "Ideal for manufacturing, healthcare, retail, and security industries requiring precise visual analysis and automation."
    },
    {
      icon: Brain,
      title: "Custom AI Development",
      price: "From $25,000",
      description: "Bespoke AI solutions tailored to your specific business needs, from predictive analytics to intelligent automation systems.",
      features: [
        "Custom algorithm development",
        "Machine learning pipelines",
        "Predictive analytics",
        "Natural language processing",
        "Recommendation engines",
        "AI model optimization"
      ],
      benefits: [
        "Solutions tailored to your needs",
        "Competitive advantage through AI",
        "Scalable architecture",
        "Ongoing support and optimization"
      ],
      useCase: "For enterprises with unique requirements that need specialized AI solutions beyond standard offerings."
    },
    {
      icon: Zap,
      title: "Process Automation",
      price: "From $8,000",
      description: "Intelligent automation that streamlines workflows, reduces manual tasks, and optimizes business processes using AI.",
      features: [
        "Workflow optimization",
        "Document automation",
        "Data processing pipelines",
        "Email automation",
        "Task scheduling",
        "Performance monitoring"
      ],
      benefits: [
        "Save 40+ hours per week",
        "Reduce operational costs by 50%",
        "99.9% accuracy in data processing",
        "Seamless integration with existing tools"
      ],
      useCase: "Perfect for businesses with repetitive tasks, data entry, document processing, and complex workflows."
    },
    {
      icon: BarChart3,
      title: "Predictive Analytics",
      price: "From $12,000",
      description: "AI-powered insights that forecast trends, predict customer behavior, and optimize business decisions with data-driven intelligence.",
      features: [
        "Demand forecasting",
        "Customer behavior analysis",
        "Risk assessment models",
        "Market trend prediction",
        "Performance optimization",
        "Real-time dashboards"
      ],
      benefits: [
        "Improve forecasting accuracy by 35%",
        "Reduce inventory costs by 25%",
        "Increase sales conversion by 30%",
        "Make data-driven decisions"
      ],
      useCase: "Essential for retail, finance, manufacturing, and marketing teams looking to leverage data for strategic advantage."
    },
    {
      icon: Shield,
      title: "AI Security Solutions",
      price: "From $20,000",
      description: "Advanced security systems powered by AI for threat detection, fraud prevention, and cybersecurity monitoring.",
      features: [
        "Anomaly detection",
        "Fraud prevention",
        "Cybersecurity monitoring",
        "Access control systems",
        "Threat intelligence",
        "Incident response automation"
      ],
      benefits: [
        "Detect threats 10x faster",
        "Reduce false positives by 90%",
        "24/7 automated monitoring",
        "Prevent financial losses"
      ],
      useCase: "Critical for financial institutions, e-commerce platforms, and enterprises handling sensitive data."
    }
  ];

  const pricingTiers = [
    {
      name: "Starter",
      price: "$5,000",
      period: "one-time",
      description: "Perfect for small businesses starting their AI journey",
      features: [
        "Basic chatbot implementation",
        "Up to 1,000 conversations/month",
        "Email support",
        "Basic analytics",
        "1 month free maintenance"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$15,000",
      period: "one-time",
      description: "Comprehensive AI solutions for growing businesses",
      features: [
        "Advanced AI implementation",
        "Up to 10,000 interactions/month",
        "Priority support",
        "Advanced analytics",
        "3 months free maintenance",
        "Custom integrations"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "pricing",
      description: "Fully customized AI solutions for large organizations",
      features: [
        "Unlimited AI interactions",
        "24/7 dedicated support",
        "Custom AI development",
        "Advanced security features",
        "12 months free maintenance",
        "On-premise deployment"
      ],
      popular: false
    }
  ];

  return (
    <div className="pt-24 pb-16">
      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 backdrop-blur-sm border border-cyan-500/20 rounded-full px-6 py-2 mb-8">
              <Brain className="h-4 w-4 text-cyan-400" />
              <span className="text-sm text-gray-300">Premium AI Solutions</span>
            </div>
            
            <h1 className="text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Transform Your Business with
              </span>
              <br />
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Cutting-Edge AI Technology
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From intelligent chatbots to advanced computer vision, our AI solutions are designed to 
              automate processes, enhance customer experiences, and drive unprecedented business growth.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Service Selector */}
            <div className="lg:col-span-1">
              <div className="bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sticky top-32">
                <h3 className="text-xl font-semibold text-white mb-6">Our AI Solutions</h3>
                <div className="space-y-2">
                  {services.map((service, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedService(index)}
                      className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-300 ${
                        selectedService === index
                          ? 'bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 text-cyan-300'
                          : 'hover:bg-white/5 text-gray-300 hover:text-white'
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <service.icon className="h-5 w-5" />
                        <div>
                          <div className="font-medium">{service.title}</div>
                          <div className="text-sm opacity-70">{service.price}</div>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Service Details */}
            <div className="lg:col-span-2">
              <div className="bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm border border-white/10 rounded-3xl p-8">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-2xl p-4">
                      {React.createElement(services[selectedService].icon, {
                        className: "h-8 w-8 text-cyan-400"
                      })}
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-white">{services[selectedService].title}</h2>
                      <p className="text-cyan-400 font-semibold text-lg">{services[selectedService].price}</p>
                    </div>
                  </div>
                </div>

                <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                  {services[selectedService].description}
                </p>

                {/* Features */}
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-white mb-4">Key Features</h3>
                  <div className="grid md:grid-cols-2 gap-3">
                    {services[selectedService].features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <Check className="h-4 w-4 text-green-400 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Benefits */}
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-white mb-4">Business Benefits</h3>
                  <div className="grid md:grid-cols-2 gap-3">
                    {services[selectedService].benefits.map((benefit, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <Star className="h-4 w-4 text-yellow-400 flex-shrink-0" />
                        <span className="text-gray-300">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Use Case */}
                <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-2xl p-6 mb-8">
                  <h3 className="text-lg font-semibold text-white mb-2">Perfect For</h3>
                  <p className="text-gray-300">{services[selectedService].useCase}</p>
                </div>

                {/* CTA */}
                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                  <button className="flex-1 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-cyan-500/25">
                    <span className="flex items-center justify-center space-x-2">
                      <span>Get Started</span>
                      <ArrowRight className="h-5 w-5" />
                    </span>
                  </button>
                  <button className="flex-1 bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/10 hover:border-cyan-400/50 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300">
                    Schedule Demo
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Transparent <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Pricing</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Choose the perfect AI solution package for your business needs and budget
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <div
                key={index}
                className={`relative bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm border rounded-3xl p-8 transition-all duration-300 hover:scale-105 ${
                  tier.popular
                    ? 'border-cyan-400/50 shadow-lg shadow-cyan-500/25'
                    : 'border-white/10 hover:border-cyan-400/30'
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                  <div className="text-4xl font-bold text-cyan-400 mb-2">
                    {tier.price}
                    <span className="text-lg text-gray-400 font-normal">/{tier.period}</span>
                  </div>
                  <p className="text-gray-400">{tier.description}</p>
                </div>

                <div className="space-y-4 mb-8">
                  {tier.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <Check className="h-4 w-4 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>

                <button
                  className={`w-full py-4 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    tier.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white shadow-lg hover:shadow-cyan-500/25'
                      : 'bg-white/5 hover:bg-white/10 border border-white/10 hover:border-cyan-400/50 text-white'
                  }`}
                >
                  {tier.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Our <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Process</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              From consultation to deployment, we ensure a smooth journey to AI transformation
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery",
                description: "We analyze your business needs and identify AI opportunities"
              },
              {
                step: "02",
                title: "Strategy",
                description: "Custom AI solution design tailored to your specific requirements"
              },
              {
                step: "03",
                title: "Development",
                description: "Agile development with regular updates and feedback loops"
              },
              {
                step: "04",
                title: "Deployment",
                description: "Seamless integration with ongoing support and optimization"
              }
            ].map((phase, index) => (
              <div key={index} className="text-center">
                <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-cyan-400">{phase.step}</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{phase.title}</h3>
                <p className="text-gray-400">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;