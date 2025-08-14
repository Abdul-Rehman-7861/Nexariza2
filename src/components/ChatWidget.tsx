import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Bot, Phone, Mail, Calendar, Sparkles } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
  quickReplies?: string[];
}

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initial bot message
    if (messages.length === 0) {
      const welcomeMessage: Message = {
        id: '1',
        text: "👋 Hi! I'm Nexariza AI Assistant. How can I help you today?",
        isBot: true,
        timestamp: new Date(),
        quickReplies: [
          "Tell me about AI services",
          "Get pricing information",
          "Schedule a consultation",
          "View portfolio"
        ]
      };
      setMessages([welcomeMessage]);
    }
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSendMessage = async () => {
    if (!inputText.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputText,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsTyping(true);

    // Simulate bot response
    setTimeout(() => {
      const botResponse = generateBotResponse(inputText);
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const handleQuickReply = (reply: string) => {
    setInputText(reply);
    setTimeout(() => handleSendMessage(), 100);
  };

  const generateBotResponse = (userInput: string): Message => {
    const input = userInput.toLowerCase();
    
    let response = "";
    let quickReplies: string[] = [];

    if (input.includes('pricing') || input.includes('cost') || input.includes('price')) {
      response = "💰 Our AI solutions start from $2,500 with location-based pricing. We offer:\n\n• Chatbots: $2,500+\n• Computer Vision: $4,000+\n• Voice AI: $3,500+\n• Custom Solutions: Starting $5,000\n\nWould you like a detailed quote?";
      quickReplies = ["Get detailed quote", "Schedule consultation", "View services"];
    } else if (input.includes('service') || input.includes('ai') || input.includes('solution')) {
      response = "🤖 We specialize in cutting-edge AI solutions:\n\n✨ AI Chatbots & Virtual Assistants\n👁️ Computer Vision & Image Recognition\n🎤 Voice AI & Speech Processing\n📄 Document Processing & OCR\n📊 Predictive Analytics\n🌐 AI-Powered Web Applications\n\nWhich solution interests you most?";
      quickReplies = ["Chatbot development", "Computer vision", "Voice AI", "Get consultation"];
    } else if (input.includes('consultation') || input.includes('schedule') || input.includes('meeting')) {
      response = "📅 Great! I'd be happy to schedule a free consultation with our AI experts. We offer:\n\n• 30-minute strategy session\n• Project scope discussion\n• Custom solution design\n• Pricing proposal\n\nWhat's the best way to contact you?";
      quickReplies = ["Book now", "Call me", "Email me", "WhatsApp"];
    } else if (input.includes('portfolio') || input.includes('project') || input.includes('example')) {
      response = "💼 We've successfully delivered 500+ AI projects! Check out our featured work:\n\n🏥 Healthcare Diagnostic AI (96% accuracy)\n🛒 E-commerce Recommendation Engine (+40% sales)\n🔒 Real-time Security System\n📱 Voice-controlled IoT Platform\n\nWould you like to see detailed case studies?";
      quickReplies = ["View portfolio", "See case studies", "Start my project", "Get quote"];
    } else if (input.includes('contact') || input.includes('phone') || input.includes('email')) {
      response = "📞 Ready to connect? Here are the best ways to reach us:\n\n📧 Email: contact@nexariza.com\n📱 Phone: +971 50 123 4567\n💬 WhatsApp: Available 24/7\n🌐 Live Chat: Right here!\n\nWe typically respond within 2 hours. How would you prefer to continue?";
      quickReplies = ["Call now", "Send email", "WhatsApp", "Continue here"];
    } else if (input.includes('timeline') || input.includes('delivery') || input.includes('time')) {
      response = "⏱️ Our delivery timelines are optimized for your needs:\n\n🚀 Rush delivery: 1-2 weeks\n⚡ Standard: 2-4 weeks\n🎯 Complex projects: 4-8 weeks\n🏢 Enterprise solutions: 8-12 weeks\n\nWe use agile methodology with weekly updates. What's your preferred timeline?";
      quickReplies = ["Rush delivery", "Standard timeline", "Flexible timing", "Discuss requirements"];
    } else {
      response = "🤝 Thanks for your message! I'm here to help with any questions about our AI solutions. I can assist with:\n\n• Service information\n• Pricing details\n• Project consultation\n• Portfolio examples\n• Contact information\n\nWhat would you like to know more about?";
      quickReplies = ["AI services", "Get pricing", "Book consultation", "View portfolio"];
    }

    return {
      id: Date.now().toString(),
      text: response,
      isBot: true,
      timestamp: new Date(),
      quickReplies
    };
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="mb-4 w-80 h-96 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-3 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <Bot size={16} className="text-white" />
                </div>
                <div>
                  <div className="text-white font-semibold">Nexariza AI Assistant</div>
                  <div className="text-blue-100 text-xs">Usually responds in minutes</div>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white/80 hover:text-white transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3 h-64">
              {messages.map((message) => (
                <div key={message.id} className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}>
                  <div className={`max-w-xs p-3 rounded-2xl ${
                    message.isBot 
                      ? 'bg-white/20 text-white' 
                      : 'bg-gradient-to-r from-blue-500 to-purple-600 text-white'
                  }`}>
                    <div className="flex items-start space-x-2">
                      {message.isBot && (
                        <Bot size={16} className="text-blue-300 mt-0.5 flex-shrink-0" />
                      )}
                      <div className="flex-1">
                        <p className="text-sm whitespace-pre-line">{message.text}</p>
                        {message.quickReplies && (
                          <div className="mt-3 space-y-2">
                            {message.quickReplies.map((reply, index) => (
                              <button
                                key={index}
                                onClick={() => handleQuickReply(reply)}
                                className="block w-full text-left text-xs bg-white/20 hover:bg-white/30 px-3 py-2 rounded-lg transition-colors border border-white/10"
                              >
                                {reply}
                              </button>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-white/20 p-3 rounded-2xl">
                    <div className="flex items-center space-x-1">
                      <Bot size={16} className="text-blue-300" />
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce delay-100"></div>
                        <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce delay-200"></div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="border-t border-white/10 p-4">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder="Type your message..."
                  className="flex-1 bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl px-3 py-2 text-white placeholder-gray-400 focus:border-white/40 focus:outline-none text-sm"
                />
                <button
                  onClick={handleSendMessage}
                  disabled={!inputText.trim()}
                  className="p-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send size={16} />
                </button>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white/5 backdrop-blur-lg px-4 py-2 border-t border-white/10">
              <div className="flex justify-center space-x-4">
                <button className="flex items-center space-x-1 text-xs text-blue-300 hover:text-blue-200 transition-colors">
                  <Phone size={12} />
                  <span>Call</span>
                </button>
                <button className="flex items-center space-x-1 text-xs text-blue-300 hover:text-blue-200 transition-colors">
                  <Mail size={12} />
                  <span>Email</span>
                </button>
                <button className="flex items-center space-x-1 text-xs text-blue-300 hover:text-blue-200 transition-colors">
                  <Calendar size={12} />
                  <span>Schedule</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chat Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="relative w-14 h-14 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full shadow-lg shadow-blue-500/25 flex items-center justify-center group overflow-hidden"
      >
        {/* Animated Background */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          animate={{ rotate: 360 }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        />
        
        <div className="relative z-10">
          {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
        </div>

        {/* Notification Badge */}
        {!isOpen && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center"
          >
            <Sparkles size={10} className="text-white" />
          </motion.div>
        )}

        {/* Pulse Effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          style={{ opacity: 0.3 }}
        />
      </motion.button>
    </div>
  );
};

export default ChatWidget;
