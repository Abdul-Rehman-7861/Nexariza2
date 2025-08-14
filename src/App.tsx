import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar-enhanced';
import ChatWidget from './components/ChatWidget';
import Homepage from './pages/Homepage-new';
import About from './pages/About-enhanced';
import Services from './pages/Services-enhanced';
import VoiceBot from './pages/VoiceBot';
import ProjectBuilder from './pages/ProjectBuilder-enhanced';
import Dashboard from './pages/Dashboard';
import Portfolio from './pages/Portfolio-enhanced';
import Contact from './pages/Contact-enhanced';
import Footer from './components/Footer-enhanced';
import { useTranslation } from './hooks/useTranslation';
import { PerformanceService } from './services/performance';
import LoadingSpinner from './components/LoadingSpinner';
import { Suspense, lazy } from 'react';

// Lazy load non-critical pages for better performance
const LazyDashboard = lazy(() => import('./pages/Dashboard'));
const LazyVoiceBot = lazy(() => import('./pages/VoiceBot'));

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoading, setIsLoading] = useState(true);
  const { isTranslating } = useTranslation();

  // Performance monitoring
  useEffect(() => {
    const initializeApp = async () => {
      try {
        // Preload critical images
        await PerformanceService.preloadImages([
          'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
          'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face'
        ]);
        
        // Simulate app initialization
        await new Promise(resolve => setTimeout(resolve, 500));
        setIsLoading(false);
      } catch (error) {
        console.error('App initialization error:', error);
        setIsLoading(false);
      }
    };

    initializeApp();
  }, []);

  // Mouse tracking for interactive effects
  useEffect(() => {
    const handleMouseMove = PerformanceService.throttle((e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    }, 16); // 60fps throttling

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <LoadingSpinner size="lg" text="Loading Nexariza..." />
      </div>
    );
  }

  return (
    <Router>
      <div className="min-h-screen bg-black text-white overflow-x-hidden bg-premium-mesh">
        {/* Translation Loading Overlay */}
        {isTranslating && (
          <div className="fixed inset-0 bg-black/90 backdrop-blur-xl z-[100] flex items-center justify-center">
            <div className="glass-effect rounded-3xl p-12 text-center max-w-sm mx-4">
              <div className="premium-spinner mx-auto mb-6"></div>
              <p className="text-white font-medium">Translating content...</p>
            </div>
          </div>
        )}
        
        <div className="relative">
          {/* Premium Background Effects */}
          <div className="fixed inset-0 overflow-hidden pointer-events-none opacity-60">
            {/* Dynamic Gradient Mesh */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-purple-900/10 to-cyan-900/10"></div>
            
            {/* Interactive Mouse Gradient */}
            <div 
              className="absolute w-[600px] h-[600px] bg-gradient-conic from-blue-500/8 via-purple-500/8 to-cyan-500/8 rounded-full blur-3xl transition-all duration-700 ease-out will-change-transform"
              style={{
                left: mousePosition.x - 300,
                top: mousePosition.y - 300,
              }}
            ></div>
            
            {/* Floating Orbs with Better Performance */}
            <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-blue-500/6 rounded-full blur-3xl animate-float"></div>
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/6 rounded-full blur-3xl animate-float" style={{animationDelay: '1s'}}></div>
            <div className="absolute top-3/4 left-1/2 w-80 h-80 bg-cyan-500/6 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
            
            {/* Subtle Grid Pattern */}
            <div className="absolute inset-0 opacity-[0.02]">
              <div className="w-full h-full" style={{
                backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
                backgroundSize: '40px 40px'
              }}></div>
            </div>
          </div>
          
          <div className="relative z-10">
            <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
            <Suspense fallback={
              <div className="min-h-screen flex items-center justify-center">
                <LoadingSpinner size="lg" text="Loading page..." />
              </div>
            }>
              <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/voice-bot" element={<LazyVoiceBot />} />
                <Route path="/project-builder" element={<ProjectBuilder />} />
                <Route path="/dashboard" element={<LazyDashboard />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </Suspense>
            <Footer />
            <ChatWidget />
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;