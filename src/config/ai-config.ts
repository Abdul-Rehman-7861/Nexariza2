// AI Service Configuration - FREE ONLY
export const AI_CONFIG = {
  GEMINI_API_KEY: import.meta.env.VITE_GEMINI_API_KEY || '',
  HUGGING_FACE_API_KEY: import.meta.env.VITE_HUGGING_FACE_API_KEY || '', // Optional for some models
  GOOGLE_CLOUD_PROJECT_ID: import.meta.env.VITE_GOOGLE_CLOUD_PROJECT_ID || '', // Free tier available
};

// Geolocation and Pricing Configuration
export const PRICING_CONFIG = {
  BASE_RATE: 50, // USD per hour
  COUNTRY_MULTIPLIERS: {
    US: 2.0,
    AE: 1.8, // UAE
    GB: 1.5,
    CA: 1.4,
    AU: 1.3,
    DE: 1.2,
    IN: 0.3,
    PK: 0.25,
    BD: 0.2,
    default: 0.8
  }
};

// AI Model Configurations - FREE/OPEN SOURCE ONLY
export const AI_MODELS = {
  GEMINI: {
    name: 'Gemini Pro',
    description: 'Google\'s free multimodal AI for diverse applications',
    pricing: 0, // Free tier available
    use_cases: ['Multimodal AI', 'Code Generation', 'Analysis', 'Text Generation']
  },
  HUGGING_FACE_T5: {
    name: 'Flan-T5 Base',
    description: 'Free text-to-text generation model',
    pricing: 0,
    use_cases: ['Text Generation', 'Question Answering', 'Summarization']
  },
  HUGGING_FACE_DIALOGPT: {
    name: 'DialoGPT Medium',
    description: 'Free conversational AI model',
    pricing: 0,
    use_cases: ['Chatbot', 'Conversation', 'Customer Support']
  },
  WEB_SPEECH_API: {
    name: 'Web Speech API',
    description: 'Browser-native speech recognition and synthesis',
    pricing: 0,
    use_cases: ['Voice Recognition', 'Text-to-Speech', 'Voice Commands']
  }
};

// Voice Bot Configuration - FREE WEB APIs ONLY
export const VOICE_CONFIG = {
  SPEECH_RECOGNITION: {
    language: 'en-US',
    continuous: true,
    interimResults: true
  },
  VOICE_SYNTHESIS: {
    voice: 'default', // Browser native voices
    rate: 1.0,
    pitch: 1.0,
    volume: 1.0,
    lang: 'en-US'
  }
};
