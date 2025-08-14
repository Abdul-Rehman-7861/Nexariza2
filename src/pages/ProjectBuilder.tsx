import React, { useState } from 'react';
import { ArrowRight, ArrowLeft, CheckCircle, Bot, Lightbulb, Calculator, Download, Share2 } from 'lucide-react';

const ProjectBuilder = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    businessType: '',
    projectGoal: '',
    budget: '',
    timeline: '',
    features: [],
    complexity: '',
    location: 'US'
  });
  const [aiRecommendation, setAiRecommendation] = useState(null);
  const [estimatedCost, setEstimatedCost] = useState(null);

  const steps = [
    {
      title: "Business Information",
      description: "Tell us about your business and industry"
    },
    {
      title: "Project Goals",
      description: "What do you want to achieve with AI?"
    },
    {
      title: "Requirements",
      description: "Define your specific needs and constraints"
    },
    {
      title: "AI Recommendation",
      description: "Get your personalized AI solution"
    },
    {
      title: "Cost Estimate",
      description: "Review pricing and next steps"
    }
  ];

  const businessTypes = [
    { id: 'ecommerce', label: 'E-commerce', icon: '🛒' },
    { id: 'saas', label: 'SaaS/Tech', icon: '💻' },
    { id: 'healthcare', label: 'Healthcare', icon: '🏥' },
    { id: 'finance', label: 'Finance', icon: '💰' },
    { id: 'manufacturing', label: 'Manufacturing', icon: '🏭' },
    { id: 'education', label: 'Education', icon: '🎓' },
    { id: 'retail', label: 'Retail', icon: '🏪' },
    { id: 'other', label: 'Other', icon: '🏢' }
  ];

  const projectGoals = [
    { id: 'customer_support', label: 'Automate Customer Support', description: 'AI chatbots and support systems' },
    { id: 'process_automation', label: 'Process Automation', description: 'Streamline business workflows' },
    { id: 'data_analysis', label: 'Data Analysis & Insights', description: 'Predictive analytics and reporting' },
    { id: 'quality_control', label: 'Quality Control', description: 'Vision AI for inspection and quality' },
    { id: 'personalization', label: 'Personalization', description: 'Recommendation and personalization engines' },
    { id: 'security', label: 'Security & Fraud Detection', description: 'AI-powered security solutions' }
  ];

  const features = [
    'Multi-language support',
    'Real-time processing',
    'Mobile optimization',
    'API integrations',
    'Analytics dashboard',
    'Custom training',
    'Cloud deployment',
    'On-premise option'
  ];

  const generateRecommendation = () => {
    // AI recommendation logic based on form data
    const recommendations = {
      'customer_support': {
        solution: 'GPT-Powered Chatbot System',
        description: 'Advanced conversational AI with natural language understanding, perfect for automating customer support while maintaining quality interactions.',
        technologies: ['GPT-4', 'Natural Language Processing', 'Sentiment Analysis'],
        timeline: '4-6 weeks',
        roi: '60% reduction in support costs'
      },
      'process_automation': {
        solution: 'Intelligent Process Automation Suite',
        description: 'AI-driven workflow automation that streamlines repetitive tasks and optimizes business processes.',
        technologies: ['Machine Learning', 'RPA', 'Document Processing'],
        timeline: '6-8 weeks',
        roi: '40+ hours saved per week'
      },
      'data_analysis': {
        solution: 'Predictive Analytics Platform',
        description: 'Advanced analytics system that provides actionable insights and forecasts business trends.',
        technologies: ['Machine Learning', 'Data Mining', 'Visualization'],
        timeline: '8-10 weeks',
        roi: '35% improvement in forecasting accuracy'
      },
      'quality_control': {
        solution: 'Vision AI Quality Control System',
        description: 'Computer vision solution for automated quality inspection and defect detection.',
        technologies: ['Computer Vision', 'Deep Learning', 'Image Processing'],
        timeline: '10-12 weeks',
        roi: '99.5% accuracy in defect detection'
      },
      'personalization': {
        solution: 'AI Recommendation Engine',
        description: 'Personalization system that learns user preferences and delivers tailored experiences.',
        technologies: ['Collaborative Filtering', 'Deep Learning', 'Real-time Processing'],
        timeline: '6-8 weeks',
        roi: '30% increase in conversion rates'
      },
      'security': {
        solution: 'AI Security & Fraud Detection',
        description: 'Advanced security system with real-time threat detection and fraud prevention.',
        technologies: ['Anomaly Detection', 'Pattern Recognition', 'Real-time Monitoring'],
        timeline: '8-10 weeks',
        roi: '90% reduction in false positives'
      }
    };

    return recommendations[formData.projectGoal] || recommendations['customer_support'];
  };

  const calculateCost = () => {
    const baseCosts = {
      'customer_support': 8000,
      'process_automation': 12000,
      'data_analysis': 15000,
      'quality_control': 20000,
      'personalization': 10000,
      'security': 18000
    };

    const complexityMultipliers = {
      'simple': 1,
      'moderate': 1.5,
      'complex': 2.2
    };

    const locationMultipliers = {
      'US': 1,
      'EU': 0.9,
      'ASIA': 0.7,
      'OTHER': 0.6
    };

    const baseCost = baseCosts[formData.projectGoal] || 8000;
    const complexityMultiplier = complexityMultipliers[formData.complexity] || 1;
    const locationMultiplier = locationMultipliers[formData.location] || 1;
    
    const featuresCount = formData.features.length;
    const featuresCost = featuresCount * 1500;

    return Math.round((baseCost * complexityMultiplier * locationMultiplier) + featuresCost);
  };

  const handleNext = () => {
    if (currentStep === 3) {
      setAiRecommendation(generateRecommendation());
    }
    if (currentStep === 4) {
      setEstimatedCost(calculateCost());
    }
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const updateFormData = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const toggleFeature = (feature) => {
    setFormData(prev => ({
      ...prev,
      features: prev.features.includes(feature)
        ? prev.features.filter(f => f !== feature)
        : [...prev.features, feature]
    }));
  };

  return (
    <div className="pt-24 pb-16 min-h-screen">
      {/* Header */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 backdrop-blur-sm border border-cyan-500/20 rounded-full px-6 py-2 mb-8">
              <Bot className="h-4 w-4 text-cyan-400" />
              <span className="text-sm text-gray-300">AI Project Builder</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Build Your Perfect
              </span>
              <br />
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                AI Solution
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Answer a few questions and get personalized AI recommendations with accurate cost estimates
            </p>
          </div>

          {/* Progress Bar */}
          <div className="mb-12">
            <div className="flex items-center justify-between mb-4">
              {steps.map((step, index) => (
                <div key={index} className="flex flex-col items-center flex-1">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                      index <= currentStep
                        ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white'
                        : 'bg-gray-600 text-gray-400'
                    }`}
                  >
                    {index < currentStep ? (
                      <CheckCircle className="h-5 w-5" />
                    ) : (
                      <span className="text-sm font-semibold">{index + 1}</span>
                    )}
                  </div>
                  <span className="text-xs text-gray-400 mt-2 text-center hidden md:block">
                    {step.title}
                  </span>
                </div>
              ))}
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2">
              <div
                className="bg-gradient-to-r from-cyan-500 to-purple-600 h-2 rounded-full transition-all duration-500"
                style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Form Content */}
      <section className="py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm border border-white/10 rounded-3xl p-8">
            
            {/* Step 0: Business Information */}
            {currentStep === 0 && (
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">{steps[0].title}</h2>
                <p className="text-gray-400 mb-8">{steps[0].description}</p>
                
                <div className="grid md:grid-cols-4 gap-4">
                  {businessTypes.map((type) => (
                    <button
                      key={type.id}
                      onClick={() => updateFormData('businessType', type.id)}
                      className={`p-6 rounded-2xl border transition-all duration-300 hover:scale-105 ${
                        formData.businessType === type.id
                          ? 'bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border-cyan-500/50 text-cyan-300'
                          : 'bg-white/5 border-white/10 text-gray-300 hover:border-cyan-400/30'
                      }`}
                    >
                      <div className="text-3xl mb-2">{type.icon}</div>
                      <div className="font-semibold">{type.label}</div>
                    </button>
                  ))}
                </div>

                <div className="mt-8">
                  <label className="block text-sm font-medium text-gray-400 mb-2">
                    Business Location
                  </label>
                  <select
                    value={formData.location}
                    onChange={(e) => updateFormData('location', e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-cyan-400 focus:outline-none"
                  >
                    <option value="US">United States</option>
                    <option value="EU">Europe</option>
                    <option value="ASIA">Asia</option>
                    <option value="OTHER">Other</option>
                  </select>
                </div>
              </div>
            )}

            {/* Step 1: Project Goals */}
            {currentStep === 1 && (
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">{steps[1].title}</h2>
                <p className="text-gray-400 mb-8">{steps[1].description}</p>
                
                <div className="space-y-4">
                  {projectGoals.map((goal) => (
                    <button
                      key={goal.id}
                      onClick={() => updateFormData('projectGoal', goal.id)}
                      className={`w-full p-6 rounded-2xl border transition-all duration-300 text-left hover:scale-[1.02] ${
                        formData.projectGoal === goal.id
                          ? 'bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border-cyan-500/50'
                          : 'bg-white/5 border-white/10 hover:border-cyan-400/30'
                      }`}
                    >
                      <div className="text-lg font-semibold text-white mb-2">{goal.label}</div>
                      <div className="text-gray-400">{goal.description}</div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 2: Requirements */}
            {currentStep === 2 && (
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">{steps[2].title}</h2>
                <p className="text-gray-400 mb-8">{steps[2].description}</p>
                
                <div className="space-y-8">
                  {/* Budget */}
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-4">Budget Range</label>
                    <div className="grid md:grid-cols-4 gap-4">
                      {['$5K-$15K', '$15K-$30K', '$30K-$50K', '$50K+'].map((budget) => (
                        <button
                          key={budget}
                          onClick={() => updateFormData('budget', budget)}
                          className={`p-4 rounded-lg border transition-all ${
                            formData.budget === budget
                              ? 'bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border-cyan-500/50 text-cyan-300'
                              : 'bg-white/5 border-white/10 text-gray-300 hover:border-cyan-400/30'
                          }`}
                        >
                          {budget}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Timeline */}
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-4">Preferred Timeline</label>
                    <div className="grid md:grid-cols-4 gap-4">
                      {['2-4 weeks', '1-2 months', '2-4 months', '4+ months'].map((timeline) => (
                        <button
                          key={timeline}
                          onClick={() => updateFormData('timeline', timeline)}
                          className={`p-4 rounded-lg border transition-all ${
                            formData.timeline === timeline
                              ? 'bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border-cyan-500/50 text-cyan-300'
                              : 'bg-white/5 border-white/10 text-gray-300 hover:border-cyan-400/30'
                          }`}
                        >
                          {timeline}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Complexity */}
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-4">Project Complexity</label>
                    <div className="grid md:grid-cols-3 gap-4">
                      {[
                        { id: 'simple', label: 'Simple', desc: 'Basic functionality' },
                        { id: 'moderate', label: 'Moderate', desc: 'Custom features' },
                        { id: 'complex', label: 'Complex', desc: 'Advanced AI systems' }
                      ].map((complexity) => (
                        <button
                          key={complexity.id}
                          onClick={() => updateFormData('complexity', complexity.id)}
                          className={`p-4 rounded-lg border transition-all text-left ${
                            formData.complexity === complexity.id
                              ? 'bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border-cyan-500/50 text-cyan-300'
                              : 'bg-white/5 border-white/10 text-gray-300 hover:border-cyan-400/30'
                          }`}
                        >
                          <div className="font-semibold">{complexity.label}</div>
                          <div className="text-sm opacity-70">{complexity.desc}</div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Features */}
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-4">
                      Additional Features (Select all that apply)
                    </label>
                    <div className="grid md:grid-cols-4 gap-3">
                      {features.map((feature) => (
                        <button
                          key={feature}
                          onClick={() => toggleFeature(feature)}
                          className={`p-3 rounded-lg border transition-all text-sm ${
                            formData.features.includes(feature)
                              ? 'bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border-cyan-500/50 text-cyan-300'
                              : 'bg-white/5 border-white/10 text-gray-300 hover:border-cyan-400/30'
                          }`}
                        >
                          {feature}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: AI Recommendation */}
            {currentStep === 3 && aiRecommendation && (
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">{steps[3].title}</h2>
                <p className="text-gray-400 mb-8">Based on your requirements, here's our AI recommendation</p>
                
                <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-2xl p-8 border border-cyan-500/20">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl p-4">
                      <Lightbulb className="h-8 w-8 text-cyan-400" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">{aiRecommendation.solution}</h3>
                      <p className="text-cyan-400">Recommended for your business</p>
                    </div>
                  </div>

                  <p className="text-gray-300 text-lg mb-8">{aiRecommendation.description}</p>

                  <div className="grid md:grid-cols-3 gap-6">
                    <div>
                      <h4 className="font-semibold text-white mb-3">Technologies</h4>
                      <div className="space-y-2">
                        {aiRecommendation.technologies.map((tech, index) => (
                          <div key={index} className="flex items-center space-x-2">
                            <CheckCircle className="h-4 w-4 text-green-400" />
                            <span className="text-gray-300">{tech}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-white mb-3">Timeline</h4>
                      <p className="text-cyan-400 text-lg font-semibold">{aiRecommendation.timeline}</p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-white mb-3">Expected ROI</h4>
                      <p className="text-green-400 text-lg font-semibold">{aiRecommendation.roi}</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Step 4: Cost Estimate */}
            {currentStep === 4 && estimatedCost && (
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">{steps[4].title}</h2>
                <p className="text-gray-400 mb-8">Your personalized cost estimate and next steps</p>
                
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Cost Breakdown */}
                  <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-2xl p-8 border border-cyan-500/20">
                    <div className="flex items-center space-x-4 mb-6">
                      <Calculator className="h-8 w-8 text-cyan-400" />
                      <h3 className="text-xl font-bold text-white">Cost Estimate</h3>
                    </div>

                    <div className="text-center mb-6">
                      <div className="text-4xl font-bold text-cyan-400 mb-2">
                        ${estimatedCost.toLocaleString()}
                      </div>
                      <p className="text-gray-400">Total project cost</p>
                    </div>

                    <div className="space-y-3">
                      <div className="flex justify-between text-gray-300">
                        <span>Base solution</span>
                        <span>${(estimatedCost * 0.7).toFixed(0)}</span>
                      </div>
                      <div className="flex justify-between text-gray-300">
                        <span>Additional features</span>
                        <span>${(formData.features.length * 1500).toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between text-gray-300">
                        <span>Complexity adjustment</span>
                        <span>${(estimatedCost * 0.2).toFixed(0)}</span>
                      </div>
                      <div className="border-t border-white/10 pt-3 mt-3">
                        <div className="flex justify-between text-white font-semibold">
                          <span>Total</span>
                          <span>${estimatedCost.toLocaleString()}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Next Steps */}
                  <div className="space-y-6">
                    <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                      <h3 className="text-lg font-bold text-white mb-4">What's Included</h3>
                      <div className="space-y-3">
                        {[
                          'Complete AI solution development',
                          'Custom model training',
                          'Integration with existing systems',
                          'Testing and quality assurance',
                          '3 months free support',
                          'Documentation and training'
                        ].map((item, index) => (
                          <div key={index} className="flex items-center space-x-3">
                            <CheckCircle className="h-4 w-4 text-green-400" />
                            <span className="text-gray-300">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-4">
                      <button className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-cyan-500/25">
                        <span className="flex items-center justify-center space-x-2">
                          <Download className="h-5 w-5" />
                          <span>Download Proposal</span>
                        </span>
                      </button>
                      
                      <button className="w-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-cyan-400/50 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300">
                        <span className="flex items-center justify-center space-x-2">
                          <Share2 className="h-5 w-5" />
                          <span>Schedule Consultation</span>
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Navigation */}
            <div className="flex justify-between items-center mt-12 pt-8 border-t border-white/10">
              <button
                onClick={handleBack}
                disabled={currentStep === 0}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold transition-all ${
                  currentStep === 0
                    ? 'text-gray-500 cursor-not-allowed'
                    : 'text-white hover:bg-white/5 border border-white/10 hover:border-cyan-400/50'
                }`}
              >
                <ArrowLeft className="h-4 w-4" />
                <span>Back</span>
              </button>

              <div className="text-sm text-gray-400">
                Step {currentStep + 1} of {steps.length}
              </div>

              <button
                onClick={handleNext}
                disabled={
                  (currentStep === 0 && !formData.businessType) ||
                  (currentStep === 1 && !formData.projectGoal) ||
                  (currentStep === 2 && (!formData.budget || !formData.timeline || !formData.complexity))
                }
                className="flex items-center space-x-2 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 disabled:from-gray-600 disabled:to-gray-700 disabled:cursor-not-allowed text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105"
              >
                <span>{currentStep === steps.length - 1 ? 'Finish' : 'Next'}</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectBuilder;