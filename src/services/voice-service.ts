import { VOICE_CONFIG } from '../config/ai-config';

export class VoiceService {
  private static recognition: SpeechRecognition | null = null;
  private static synthesis: SpeechSynthesis = window.speechSynthesis;
  private static isListening: boolean = false;

  // Initialize Web Speech API (Free)
  static initialize(): boolean {
    try {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      
      if (!SpeechRecognition) {
        console.warn('Speech Recognition not supported in this browser');
        return false;
      }

      this.recognition = new SpeechRecognition();
      this.recognition.continuous = VOICE_CONFIG.SPEECH_RECOGNITION.continuous;
      this.recognition.interimResults = VOICE_CONFIG.SPEECH_RECOGNITION.interimResults;
      this.recognition.lang = VOICE_CONFIG.SPEECH_RECOGNITION.language;

      return true;
    } catch (error) {
      console.error('Failed to initialize voice service:', error);
      return false;
    }
  }

  // Start listening using Web Speech API
  static startListening(
    onResult: (transcript: string, isFinal: boolean) => void,
    onError?: (error: string) => void
  ): Promise<void> {
    return new Promise((resolve, reject) => {
      if (!this.recognition) {
        const initialized = this.initialize();
        if (!initialized) {
          reject('Speech recognition not available');
          return;
        }
      }

      if (this.isListening) {
        resolve();
        return;
      }

      this.recognition!.onresult = (event) => {
        const result = event.results[event.results.length - 1];
        const transcript = result[0].transcript;
        const isFinal = result.isFinal;
        
        onResult(transcript, isFinal);
      };

      this.recognition!.onerror = (event) => {
        const error = `Speech recognition error: ${event.error}`;
        console.error(error);
        this.isListening = false;
        onError?.(error);
      };

      this.recognition!.onend = () => {
        this.isListening = false;
      };

      this.recognition!.start();
      this.isListening = true;
      resolve();
    });
  }

  // Stop listening
  static stopListening(): void {
    if (this.recognition && this.isListening) {
      this.recognition.stop();
      this.isListening = false;
    }
  }

  // Text-to-Speech using Web Speech API (Free)
  static speak(text: string, options?: {
    voice?: string;
    rate?: number;
    pitch?: number;
    volume?: number;
  }): Promise<void> {
    return new Promise((resolve, reject) => {
      if (!this.synthesis) {
        reject('Speech synthesis not supported');
        return;
      }

      // Cancel any ongoing speech
      this.synthesis.cancel();

      const utterance = new SpeechSynthesisUtterance(text);
      
      // Set voice options
      utterance.rate = options?.rate || VOICE_CONFIG.VOICE_SYNTHESIS.rate;
      utterance.pitch = options?.pitch || VOICE_CONFIG.VOICE_SYNTHESIS.pitch;
      utterance.volume = options?.volume || VOICE_CONFIG.VOICE_SYNTHESIS.volume;
      utterance.lang = VOICE_CONFIG.VOICE_SYNTHESIS.lang;

      // Get available voices and set preferred voice
      const voices = this.synthesis.getVoices();
      if (voices.length > 0) {
        // Try to find a good English voice
        const preferredVoice = voices.find(voice => 
          voice.lang.startsWith('en') && voice.name.includes('Female')
        ) || voices.find(voice => voice.lang.startsWith('en')) || voices[0];
        
        utterance.voice = preferredVoice;
      }

      utterance.onend = () => resolve();
      utterance.onerror = (event) => {
        console.error('Speech synthesis error:', event.error);
        reject(event.error);
      };

      this.synthesis.speak(utterance);
    });
  }

  // Get available voices
  static getAvailableVoices(): SpeechSynthesisVoice[] {
    return this.synthesis.getVoices();
  }

  // Check if currently listening
  static isCurrentlyListening(): boolean {
    return this.isListening;
  }

  // Check if speech synthesis is supported
  static isSynthesisSupported(): boolean {
    return 'speechSynthesis' in window;
  }

  // Check if speech recognition is supported
  static isRecognitionSupported(): boolean {
    return 'SpeechRecognition' in window || 'webkitSpeechRecognition' in window;
  }

  // Create a conversational session with voice input/output
  static async createVoiceSession(
    onMessage: (message: string) => void,
    onResponse: (response: string) => Promise<void>
  ): Promise<() => void> {
    if (!this.isRecognitionSupported() || !this.isSynthesisSupported()) {
      throw new Error('Voice features not supported in this browser');
    }

    let isActive = true;

    const handleVoiceInput = async (transcript: string, isFinal: boolean) => {
      if (isFinal && isActive) {
        onMessage(transcript);
        
        // Here you would typically call your AI service
        // For now, we'll create a simple response
        const response = await this.generateVoiceResponse(transcript);
        await onResponse(response);
        
        if (isActive) {
          await this.speak(response);
        }
      }
    };

    await this.startListening(handleVoiceInput);

    // Return cleanup function
    return () => {
      isActive = false;
      this.stopListening();
      this.synthesis.cancel();
    };
  }

  // Generate a simple response (you can integrate with your AI service here)
  private static async generateVoiceResponse(input: string): Promise<string> {
    // Simple responses for demonstration
    const responses = {
      greeting: "Hello! I'm Nexariza's AI assistant. How can I help you with your AI project today?",
      pricing: "Our pricing is very competitive and location-adapted. Would you like me to calculate a personalized quote for your project?",
      services: "We offer AI solutions including chatbots, computer vision, NLP, and custom AI development. What type of AI solution are you looking for?",
      default: "That's interesting! Could you tell me more about your specific AI requirements so I can provide better assistance?"
    };

    const lowerInput = input.toLowerCase();
    
    if (lowerInput.includes('hello') || lowerInput.includes('hi')) {
      return responses.greeting;
    } else if (lowerInput.includes('price') || lowerInput.includes('cost') || lowerInput.includes('quote')) {
      return responses.pricing;
    } else if (lowerInput.includes('service') || lowerInput.includes('what do you') || lowerInput.includes('help')) {
      return responses.services;
    } else {
      return responses.default;
    }
  }
}
