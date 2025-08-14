import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mic, MicOff, Volume2, VolumeX, MessageSquare, Download, Settings } from 'lucide-react';
import { VoiceService } from '../services/voice-service';
import { AIService } from '../services/ai-service';

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

interface VoiceSettings {
  rate: number;
  pitch: number;
  volume: number;
  voice: string;
}

export default function VoiceBot() {
  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [currentTranscript, setCurrentTranscript] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [voiceSettings, setVoiceSettings] = useState<VoiceSettings>({
    rate: 1.0,
    pitch: 1.0,
    volume: 1.0,
    voice: 'default'
  });
  const [showSettings, setShowSettings] = useState(false);
  const [availableVoices, setAvailableVoices] = useState<SpeechSynthesisVoice[]>([]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initialize voice service
    VoiceService.initialize();
    
    // Load available voices
    const updateVoices = () => {
      const voices = VoiceService.getAvailableVoices();
      setAvailableVoices(voices);
    };
    
    updateVoices();
    if (speechSynthesis.onvoiceschanged !== undefined) {
      speechSynthesis.onvoiceschanged = updateVoices;
    }

    // Welcome message
    const welcomeMessage: Message = {
      id: Date.now().toString(),
      text: "Hello! I'm Nexariza's AI Voice Assistant. I can help you with AI project planning, pricing, and recommendations. How can I assist you today?",
      isUser: false,
      timestamp: new Date()
    };
    setMessages([welcomeMessage]);
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const startListening = async () => {
    if (!VoiceService.isRecognitionSupported()) {
      alert('Speech recognition is not supported in your browser. Please use Chrome or Edge.');
      return;
    }

    try {
      setIsListening(true);
      setCurrentTranscript('');
      
      await VoiceService.startListening(
        (transcript, isFinal) => {
          setCurrentTranscript(transcript);
          
          if (isFinal && transcript.trim()) {
            handleUserMessage(transcript);
            setCurrentTranscript('');
          }
        },
        (error) => {
          console.error('Speech recognition error:', error);
          setIsListening(false);
        }
      );
    } catch (error) {
      console.error('Failed to start listening:', error);
      setIsListening(false);
    }
  };

  const stopListening = () => {
    VoiceService.stopListening();
    setIsListening(false);
    setCurrentTranscript('');
  };

  const handleUserMessage = async (text: string) => {
    const userMessage: Message = {
      id: Date.now().toString(),
      text,
      isUser: true,
      timestamp: new Date()
    };

    setMessages((prev: Message[]) => [...prev, userMessage]);
    setIsProcessing(true);

    try {
      // Generate AI response using Gemini
      const aiResponse = await generateAIResponse(text);
      
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: aiResponse,
        isUser: false,
        timestamp: new Date()
      };

      setMessages((prev: Message[]) => [...prev, botMessage]);
      
      // Speak the response
      await speakResponse(aiResponse);
    } catch (error) {
      console.error('Error generating response:', error);
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: "I apologize, but I'm experiencing technical difficulties. Please try again.",
        isUser: false,
        timestamp: new Date()
      };
      setMessages((prev: Message[]) => [...prev, errorMessage]);
    } finally {
      setIsProcessing(false);
    }
  };

  const generateAIResponse = async (userInput: string): Promise<string> => {
    const context = `You are Nexariza's AI voice assistant. Nexariza is a premium AI solutions provider specializing in:
    - Custom AI development (GPT, Gemini, Computer Vision)
    - AI-powered web applications
    - Voice bots and chatbots
    - Business automation with AI
    - Competitive pricing with location-based adaptation

    User input: "${userInput}"

    Provide a helpful, professional response about Nexariza's services. Keep responses conversational and under 150 words for voice output.`;

    return await AIService.generateResponse(context);
  };

  const speakResponse = async (text: string) => {
    if (!VoiceService.isSynthesisSupported()) {
      return;
    }

    try {
      setIsSpeaking(true);
      await VoiceService.speak(text, voiceSettings);
    } catch (error) {
      console.error('Speech synthesis error:', error);
    } finally {
      setIsSpeaking(false);
    }
  };

  const generateSummary = async () => {
    const conversationText = messages
      .map((msg: Message) => `${msg.isUser ? 'User' : 'Assistant'}: ${msg.text}`)
      .join('\n');

    const summaryPrompt = `Generate a concise summary of this consultation:
    ${conversationText}
    
    Include key topics discussed, requirements mentioned, and any recommendations provided.`;

    try {
      const summary = await AIService.generateResponse(summaryPrompt);
      
      // Create downloadable summary
      const blob = new Blob([summary], { type: 'text/plain' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `nexariza-consultation-summary-${new Date().toISOString().split('T')[0]}.txt`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error generating summary:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-500 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-3/4 right-1/4 w-32 h-32 bg-purple-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-1/4 left-1/2 w-32 h-32 bg-cyan-500 rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent mb-4">
            AI Voice Consultation
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Experience the future of AI consultation with our advanced voice-powered assistant. 
            Get personalized project recommendations and instant solutions.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Chat Interface */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white/10 backdrop-blur-lg rounded-3xl border border-white/20 h-[600px] flex flex-col"
            >
              {/* Chat Header */}
              <div className="flex items-center justify-between p-6 border-b border-white/10">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-white font-medium">AI Assistant Active</span>
                </div>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={generateSummary}
                    className="p-2 text-gray-400 hover:text-white transition-colors"
                    title="Download Summary"
                  >
                    <Download size={20} />
                  </button>
                  <button
                    onClick={() => setShowSettings(!showSettings)}
                    className="p-2 text-gray-400 hover:text-white transition-colors"
                    title="Voice Settings"
                  >
                    <Settings size={20} />
                  </button>
                </div>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-6 space-y-4">
                <AnimatePresence>
                  {messages.map((message) => (
                    <motion.div
                      key={message.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-sm p-4 rounded-2xl ${
                          message.isUser
                            ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white ml-auto'
                            : 'bg-white/20 text-gray-100 mr-auto'
                        }`}
                      >
                        <p className="text-sm leading-relaxed">{message.text}</p>
                        <span className="text-xs opacity-70 mt-2 block">
                          {message.timestamp.toLocaleTimeString()}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>

                {/* Current Transcript */}
                {currentTranscript && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex justify-end"
                  >
                    <div className="max-w-sm p-4 rounded-2xl bg-gradient-to-r from-blue-500/50 to-purple-600/50 text-white border-2 border-blue-400 ml-auto">
                      <p className="text-sm leading-relaxed">{currentTranscript}</p>
                      <span className="text-xs opacity-70 mt-2 block">Speaking...</span>
                    </div>
                  </motion.div>
                )}

                {/* Processing Indicator */}
                {isProcessing && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex justify-start"
                  >
                    <div className="bg-white/20 text-gray-100 p-4 rounded-2xl mr-auto">
                      <div className="flex items-center space-x-2">
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"></div>
                          <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                          <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                        </div>
                        <span className="text-sm">AI is thinking...</span>
                      </div>
                    </div>
                  </motion.div>
                )}

                <div ref={messagesEndRef} />
              </div>

              {/* Voice Controls */}
              <div className="p-6 border-t border-white/10">
                <div className="flex items-center justify-center space-x-4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={isListening ? stopListening : startListening}
                    className={`relative p-6 rounded-full transition-all duration-300 ${
                      isListening
                        ? 'bg-red-500 hover:bg-red-600 animate-pulse'
                        : 'bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700'
                    }`}
                  >
                    {isListening ? <MicOff size={32} className="text-white" /> : <Mic size={32} className="text-white" />}
                    
                    {isListening && (
                      <div className="absolute inset-0 rounded-full border-4 border-red-300 animate-ping"></div>
                    )}
                  </motion.button>

                  <div className="text-center">
                    <p className="text-white font-medium">
                      {isListening ? 'Listening...' : 'Click to speak'}
                    </p>
                    <p className="text-gray-400 text-sm">
                      {isSpeaking ? 'AI is speaking' : 'Voice consultation ready'}
                    </p>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setIsSpeaking(!isSpeaking)}
                    className={`p-4 rounded-full transition-all duration-300 ${
                      isSpeaking ? 'bg-green-500' : 'bg-gray-600 hover:bg-gray-700'
                    }`}
                  >
                    {isSpeaking ? <Volume2 size={24} className="text-white" /> : <VolumeX size={24} className="text-white" />}
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Voice Settings */}
            <AnimatePresence>
              {showSettings && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 p-6"
                >
                  <h3 className="text-xl font-bold text-white mb-4">Voice Settings</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Speech Rate</label>
                      <input
                        type="range"
                        min="0.5"
                        max="2"
                        step="0.1"
                        value={voiceSettings.rate}
                        onChange={(e) => setVoiceSettings(prev => ({ ...prev, rate: parseFloat(e.target.value) }))}
                        className="w-full"
                      />
                      <span className="text-xs text-gray-400">{voiceSettings.rate}x</span>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Pitch</label>
                      <input
                        type="range"
                        min="0"
                        max="2"
                        step="0.1"
                        value={voiceSettings.pitch}
                        onChange={(e) => setVoiceSettings(prev => ({ ...prev, pitch: parseFloat(e.target.value) }))}
                        className="w-full"
                      />
                      <span className="text-xs text-gray-400">{voiceSettings.pitch}</span>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Volume</label>
                      <input
                        type="range"
                        min="0"
                        max="1"
                        step="0.1"
                        value={voiceSettings.volume}
                        onChange={(e) => setVoiceSettings(prev => ({ ...prev, volume: parseFloat(e.target.value) }))}
                        className="w-full"
                      />
                      <span className="text-xs text-gray-400">{Math.round(voiceSettings.volume * 100)}%</span>
                    </div>

                    {availableVoices.length > 0 && (
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">Voice</label>
                        <select
                          value={voiceSettings.voice}
                          onChange={(e) => setVoiceSettings(prev => ({ ...prev, voice: e.target.value }))}
                          className="w-full p-2 bg-white/10 border border-white/20 rounded-lg text-white"
                        >
                          {availableVoices
                            .filter(voice => voice.lang.startsWith('en'))
                            .map((voice, index) => (
                            <option key={index} value={voice.name} className="bg-gray-800">
                              {voice.name} ({voice.lang})
                            </option>
                          ))}
                        </select>
                      </div>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Quick Actions */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 p-6"
            >
              <h3 className="text-xl font-bold text-white mb-4">Quick Actions</h3>
              
              <div className="space-y-3">
                <button
                  onClick={() => handleUserMessage("What AI services do you offer?")}
                  className="w-full p-3 text-left bg-white/10 hover:bg-white/20 rounded-lg transition-all duration-300 text-gray-300 hover:text-white"
                >
                  <MessageSquare size={16} className="inline mr-2" />
                  Ask about services
                </button>
                
                <button
                  onClick={() => handleUserMessage("How much does an AI project cost?")}
                  className="w-full p-3 text-left bg-white/10 hover:bg-white/20 rounded-lg transition-all duration-300 text-gray-300 hover:text-white"
                >
                  <MessageSquare size={16} className="inline mr-2" />
                  Get pricing info
                </button>
                
                <button
                  onClick={() => handleUserMessage("I need a custom AI solution for my business")}
                  className="w-full p-3 text-left bg-white/10 hover:bg-white/20 rounded-lg transition-all duration-300 text-gray-300 hover:text-white"
                >
                  <MessageSquare size={16} className="inline mr-2" />
                  Custom solution
                </button>
                
                <button
                  onClick={() => handleUserMessage("How long does AI development take?")}
                  className="w-full p-3 text-left bg-white/10 hover:bg-white/20 rounded-lg transition-all duration-300 text-gray-300 hover:text-white"
                >
                  <MessageSquare size={16} className="inline mr-2" />
                  Timeline questions
                </button>
              </div>
            </motion.div>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 p-6"
            >
              <h3 className="text-xl font-bold text-white mb-4">Features</h3>
              
              <div className="space-y-3 text-sm text-gray-300">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span>Real-time voice recognition</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span>AI-powered responses</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <span>Multi-language support</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  <span>Conversation summaries</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                  <span>Personalized recommendations</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
