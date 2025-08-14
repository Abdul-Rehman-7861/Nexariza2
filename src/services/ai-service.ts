import axios from 'axios';
import { AI_CONFIG } from '../config/ai-config';

export class AIService {
  static async generateResponse(prompt: string): Promise<string> {
    try {
      return await this.callGeminiAPI(prompt);
    } catch (error) {
      console.error('AI Service Error:', error);
      return 'I apologize, but I\'m experiencing technical difficulties. Please try again later.';
    }
  }

  private static async callGeminiAPI(prompt: string): Promise<string> {
    const response = await axios.post(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${AI_CONFIG.GEMINI_API_KEY}`,
      {
        contents: [{
          parts: [{
            text: prompt
          }]
        }]
      }
    );
    
    return response.data.candidates[0].content.parts[0].text;
  }

  // Alternative free AI service using Hugging Face (no API key required for some models)
  private static async callHuggingFace(prompt: string): Promise<string> {
    try {
      const response = await axios.post(
        'https://api-inference.huggingface.co/models/microsoft/DialoGPT-medium',
        {
          inputs: prompt,
        },
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );
      
      return response.data.generated_text || response.data[0]?.generated_text || prompt;
    } catch (error) {
      console.error('Hugging Face API Error:', error);
      return await this.callGeminiAPI(prompt); // Fallback to Gemini
    }
  }

  static async generateProjectRecommendation(requirements: any): Promise<any> {
    const prompt = `
      Based on these project requirements, recommend the best AI solution:
      ${JSON.stringify(requirements)}
      
      Please provide:
      1. Recommended AI models (focus on free/open-source options like Gemini, Hugging Face models)
      2. Technology stack (React, Node.js, free APIs)
      3. Estimated timeline
      4. Key features to implement
      5. Potential challenges
      
      Format as JSON with clear structure.
    `;

    const response = await this.generateResponse(prompt);
    
    try {
      return JSON.parse(response);
    } catch {
      return {
        models: ['Gemini Pro', 'Hugging Face Transformers'],
        techStack: ['React', 'Node.js', 'Gemini API', 'Web Speech API', 'Supabase'],
        timeline: '4-6 weeks',
        features: ['AI Integration', 'Voice Bot', 'Custom UI', 'Free API Development'],
        challenges: ['Free tier limitations', 'Model fine-tuning', 'Scalability with free services']
      };
    }
  }

  static async generateProposal(projectData: any): Promise<string> {
    const prompt = `
      Generate a professional project proposal for:
      Project: ${projectData.title}
      Requirements: ${JSON.stringify(projectData.requirements)}
      Budget: $${projectData.budget}
      Timeline: ${projectData.timeline}
      
      Include executive summary, scope, deliverables, timeline, and pricing.
      Format as structured text suitable for PDF generation.
    `;

    return await this.generateResponse(prompt);
  }
}
