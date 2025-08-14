import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, ChevronDown, Check } from 'lucide-react';

interface Language {
  code: string;
  name: string;
  flag: string;
}

const languages: Language[] = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'sv', name: 'Svenska', flag: '🇸🇪' },
  { code: 'zh', name: '中文', flag: '🇨🇳' },
];

interface LanguageTranslatorProps {
  currentLanguage: string;
  onLanguageChange: (language: string) => void;
}

const LanguageTranslator: React.FC<LanguageTranslatorProps> = ({
  currentLanguage,
  onLanguageChange,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isTranslating, setIsTranslating] = useState(false);

  const currentLang = languages.find(lang => lang.code === currentLanguage) || languages[0];

  const handleLanguageSelect = async (languageCode: string) => {
    if (languageCode === currentLanguage) {
      setIsOpen(false);
      return;
    }

    setIsTranslating(true);
    setIsOpen(false);

    // Simulate translation delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    onLanguageChange(languageCode);
    setIsTranslating(false);
  };

  return (
    <div className="relative">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-3 py-2 bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl text-white hover:border-white/40 transition-all duration-300"
        disabled={isTranslating}
      >
        {isTranslating ? (
          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
        ) : (
          <Globe size={18} />
        )}
        <span className="text-sm font-medium">{currentLang.flag}</span>
        <ChevronDown size={16} className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            className="absolute top-full right-0 mt-2 w-48 bg-black/90 backdrop-blur-xl border border-white/20 rounded-xl shadow-2xl overflow-hidden z-50"
          >
            {languages.map((language) => (
              <motion.button
                key={language.code}
                whileHover={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
                onClick={() => handleLanguageSelect(language.code)}
                className="w-full flex items-center justify-between px-4 py-3 text-left text-white hover:bg-white/10 transition-colors duration-200"
              >
                <div className="flex items-center space-x-3">
                  <span className="text-lg">{language.flag}</span>
                  <span className="font-medium">{language.name}</span>
                </div>
                {language.code === currentLanguage && (
                  <Check size={16} className="text-green-400" />
                )}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LanguageTranslator;