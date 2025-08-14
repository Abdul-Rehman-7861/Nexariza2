import { useState, useEffect, useCallback } from 'react';

interface Translations {
  [key: string]: {
    [key: string]: string;
  };
}

const translations: Translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.services': 'Services',
    'nav.voiceBot': 'Voice Bot',
    'nav.projectBuilder': 'Project Builder',
    'nav.portfolio': 'Portfolio',
    'nav.dashboard': 'Dashboard',
    'nav.contact': 'Contact',
    'nav.getStarted': 'Get Started',
    'nav.tryVoiceAI': 'Try Voice AI',
    
    // Homepage
    'home.hero.title': 'Innovative AI for the Next Era',
    'home.hero.subtitle': 'Premium AI solutions powered by cutting-edge technology. From GPT-powered chatbots to computer vision systems, we democratize AI with 100% free and open-source solutions tailored to your location and budget.',
    'home.hero.experienceFuture': 'Experience the Future',
    'home.hero.voiceConsultation': 'Voice Consultation',
    'home.hero.watchDemo': 'Watch Demo',
    
    // Services
    'services.title': 'AI Services',
    'services.subtitle': 'Transform your business with cutting-edge AI solutions. From intelligent chatbots to computer vision, we deliver powerful AI applications using free and open-source technologies.',
    'services.chatbot.title': 'AI Chatbot Development',
    'services.chatbot.description': 'Intelligent conversational AI that understands context, learns from interactions, and provides personalized responses to your customers 24/7.',
    'services.vision.title': 'Computer Vision Solutions',
    'services.vision.description': 'Advanced image and video analysis systems for object detection, facial recognition, quality control, and automated visual inspection.',
    
    // About
    'about.title': 'About Nexariza',
    'about.subtitle': 'We\'re on a mission to democratize AI technology, making cutting-edge artificial intelligence accessible to businesses worldwide through innovative, cost-effective, and open-source solutions.',
    'about.mission': 'Our Mission',
    'about.team': 'Meet Our Team',
    
    // Contact
    'contact.title': 'Get In Touch',
    'contact.subtitle': 'Ready to transform your business with AI? Let\'s discuss your project and create something amazing together. Our expert team is here to bring your vision to life.',
    'contact.form.name': 'Full Name',
    'contact.form.email': 'Email Address',
    'contact.form.company': 'Company Name',
    'contact.form.phone': 'Phone Number',
    'contact.form.submit': 'Submit Request',
    
    // Common
    'common.loading': 'Loading...',
    'common.error': 'An error occurred',
    'common.success': 'Success!',
    'common.cancel': 'Cancel',
    'common.save': 'Save',
    'common.close': 'Close',
    'common.next': 'Next',
    'common.previous': 'Previous',
    'common.viewMore': 'View More',
    'common.learnMore': 'Learn More',
  },
  de: {
    // Navigation
    'nav.home': 'Startseite',
    'nav.about': 'Über uns',
    'nav.services': 'Dienstleistungen',
    'nav.voiceBot': 'Sprach-Bot',
    'nav.projectBuilder': 'Projekt-Builder',
    'nav.portfolio': 'Portfolio',
    'nav.dashboard': 'Dashboard',
    'nav.contact': 'Kontakt',
    'nav.getStarted': 'Loslegen',
    'nav.tryVoiceAI': 'Sprach-KI testen',
    
    // Homepage
    'home.hero.title': 'Innovative KI für die nächste Ära',
    'home.hero.subtitle': 'Premium-KI-Lösungen mit modernster Technologie. Von GPT-gestützten Chatbots bis hin zu Computer-Vision-Systemen demokratisieren wir KI mit 100% kostenlosen und Open-Source-Lösungen, die auf Ihren Standort und Ihr Budget zugeschnitten sind.',
    'home.hero.experienceFuture': 'Erleben Sie die Zukunft',
    'home.hero.voiceConsultation': 'Sprachberatung',
    'home.hero.watchDemo': 'Demo ansehen',
    
    // Services
    'services.title': 'KI-Dienstleistungen',
    'services.subtitle': 'Transformieren Sie Ihr Unternehmen mit modernsten KI-Lösungen. Von intelligenten Chatbots bis hin zu Computer Vision liefern wir leistungsstarke KI-Anwendungen mit kostenlosen und Open-Source-Technologien.',
    'services.chatbot.title': 'KI-Chatbot-Entwicklung',
    'services.chatbot.description': 'Intelligente Konversations-KI, die Kontext versteht, aus Interaktionen lernt und Ihren Kunden rund um die Uhr personalisierte Antworten bietet.',
    'services.vision.title': 'Computer-Vision-Lösungen',
    'services.vision.description': 'Fortschrittliche Bild- und Videoanalysesysteme für Objekterkennung, Gesichtserkennung, Qualitätskontrolle und automatisierte visuelle Inspektion.',
    
    // About
    'about.title': 'Über Nexariza',
    'about.subtitle': 'Wir haben es uns zur Aufgabe gemacht, KI-Technologie zu demokratisieren und modernste künstliche Intelligenz für Unternehmen weltweit durch innovative, kostengünstige und Open-Source-Lösungen zugänglich zu machen.',
    'about.mission': 'Unsere Mission',
    'about.team': 'Lernen Sie unser Team kennen',
    
    // Contact
    'contact.title': 'Kontakt aufnehmen',
    'contact.subtitle': 'Bereit, Ihr Unternehmen mit KI zu transformieren? Lassen Sie uns über Ihr Projekt sprechen und gemeinsam etwas Großartiges schaffen. Unser Expertenteam ist hier, um Ihre Vision zum Leben zu erwecken.',
    'contact.form.name': 'Vollständiger Name',
    'contact.form.email': 'E-Mail-Adresse',
    'contact.form.company': 'Firmenname',
    'contact.form.phone': 'Telefonnummer',
    'contact.form.submit': 'Anfrage senden',
    
    // Common
    'common.loading': 'Wird geladen...',
    'common.error': 'Ein Fehler ist aufgetreten',
    'common.success': 'Erfolgreich!',
    'common.cancel': 'Abbrechen',
    'common.save': 'Speichern',
    'common.close': 'Schließen',
    'common.next': 'Weiter',
    'common.previous': 'Zurück',
    'common.viewMore': 'Mehr anzeigen',
    'common.learnMore': 'Mehr erfahren',
  },
  fr: {
    // Navigation
    'nav.home': 'Accueil',
    'nav.about': 'À propos',
    'nav.services': 'Services',
    'nav.voiceBot': 'Bot vocal',
    'nav.projectBuilder': 'Constructeur de projet',
    'nav.portfolio': 'Portfolio',
    'nav.dashboard': 'Tableau de bord',
    'nav.contact': 'Contact',
    'nav.getStarted': 'Commencer',
    'nav.tryVoiceAI': 'Essayer l\'IA vocale',
    
    // Homepage
    'home.hero.title': 'IA innovante pour la prochaine ère',
    'home.hero.subtitle': 'Solutions IA premium alimentées par une technologie de pointe. Des chatbots alimentés par GPT aux systèmes de vision par ordinateur, nous démocratisons l\'IA avec des solutions 100% gratuites et open-source adaptées à votre localisation et à votre budget.',
    'home.hero.experienceFuture': 'Découvrez l\'avenir',
    'home.hero.voiceConsultation': 'Consultation vocale',
    'home.hero.watchDemo': 'Voir la démo',
    
    // Services
    'services.title': 'Services IA',
    'services.subtitle': 'Transformez votre entreprise avec des solutions IA de pointe. Des chatbots intelligents à la vision par ordinateur, nous livrons des applications IA puissantes utilisant des technologies gratuites et open-source.',
    'services.chatbot.title': 'Développement de chatbot IA',
    'services.chatbot.description': 'IA conversationnelle intelligente qui comprend le contexte, apprend des interactions et fournit des réponses personnalisées à vos clients 24h/24 et 7j/7.',
    'services.vision.title': 'Solutions de vision par ordinateur',
    'services.vision.description': 'Systèmes avancés d\'analyse d\'images et de vidéos pour la détection d\'objets, la reconnaissance faciale, le contrôle qualité et l\'inspection visuelle automatisée.',
    
    // About
    'about.title': 'À propos de Nexariza',
    'about.subtitle': 'Nous avons pour mission de démocratiser la technologie IA, rendant l\'intelligence artificielle de pointe accessible aux entreprises du monde entier grâce à des solutions innovantes, rentables et open-source.',
    'about.mission': 'Notre mission',
    'about.team': 'Rencontrez notre équipe',
    
    // Contact
    'contact.title': 'Entrer en contact',
    'contact.subtitle': 'Prêt à transformer votre entreprise avec l\'IA ? Discutons de votre projet et créons quelque chose d\'extraordinaire ensemble. Notre équipe d\'experts est là pour donner vie à votre vision.',
    'contact.form.name': 'Nom complet',
    'contact.form.email': 'Adresse e-mail',
    'contact.form.company': 'Nom de l\'entreprise',
    'contact.form.phone': 'Numéro de téléphone',
    'contact.form.submit': 'Envoyer la demande',
    
    // Common
    'common.loading': 'Chargement...',
    'common.error': 'Une erreur s\'est produite',
    'common.success': 'Succès !',
    'common.cancel': 'Annuler',
    'common.save': 'Enregistrer',
    'common.close': 'Fermer',
    'common.next': 'Suivant',
    'common.previous': 'Précédent',
    'common.viewMore': 'Voir plus',
    'common.learnMore': 'En savoir plus',
  },
  sv: {
    // Navigation
    'nav.home': 'Hem',
    'nav.about': 'Om oss',
    'nav.services': 'Tjänster',
    'nav.voiceBot': 'Röstbot',
    'nav.projectBuilder': 'Projektbyggare',
    'nav.portfolio': 'Portfolio',
    'nav.dashboard': 'Instrumentpanel',
    'nav.contact': 'Kontakt',
    'nav.getStarted': 'Kom igång',
    'nav.tryVoiceAI': 'Prova röst-AI',
    
    // Homepage
    'home.hero.title': 'Innovativ AI för nästa era',
    'home.hero.subtitle': 'Premium AI-lösningar drivna av banbrytande teknik. Från GPT-drivna chatbots till datorseendesystem demokratiserar vi AI med 100% gratis och öppen källkod-lösningar skräddarsydda för din plats och budget.',
    'home.hero.experienceFuture': 'Upplev framtiden',
    'home.hero.voiceConsultation': 'Röstkonsultation',
    'home.hero.watchDemo': 'Se demo',
    
    // Services
    'services.title': 'AI-tjänster',
    'services.subtitle': 'Transformera ditt företag med banbrytande AI-lösningar. Från intelligenta chatbots till datorseende levererar vi kraftfulla AI-applikationer med gratis och öppen källkod-teknologier.',
    'services.chatbot.title': 'AI-chatbot utveckling',
    'services.chatbot.description': 'Intelligent konversations-AI som förstår sammanhang, lär sig från interaktioner och ger personliga svar till dina kunder 24/7.',
    'services.vision.title': 'Datorseende-lösningar',
    'services.vision.description': 'Avancerade bild- och videoanalyssystem för objektdetektering, ansiktsigenkänning, kvalitetskontroll och automatiserad visuell inspektion.',
    
    // About
    'about.title': 'Om Nexariza',
    'about.subtitle': 'Vi har som uppdrag att demokratisera AI-teknik och göra banbrytande artificiell intelligens tillgänglig för företag världen över genom innovativa, kostnadseffektiva och öppen källkod-lösningar.',
    'about.mission': 'Vårt uppdrag',
    'about.team': 'Träffa vårt team',
    
    // Contact
    'contact.title': 'Kom i kontakt',
    'contact.subtitle': 'Redo att transformera ditt företag med AI? Låt oss diskutera ditt projekt och skapa något fantastiskt tillsammans. Vårt expertteam är här för att förverkliga din vision.',
    'contact.form.name': 'Fullständigt namn',
    'contact.form.email': 'E-postadress',
    'contact.form.company': 'Företagsnamn',
    'contact.form.phone': 'Telefonnummer',
    'contact.form.submit': 'Skicka förfrågan',
    
    // Common
    'common.loading': 'Laddar...',
    'common.error': 'Ett fel uppstod',
    'common.success': 'Framgång!',
    'common.cancel': 'Avbryt',
    'common.save': 'Spara',
    'common.close': 'Stäng',
    'common.next': 'Nästa',
    'common.previous': 'Föregående',
    'common.viewMore': 'Visa mer',
    'common.learnMore': 'Lär dig mer',
  },
  zh: {
    // Navigation
    'nav.home': '首页',
    'nav.about': '关于我们',
    'nav.services': '服务',
    'nav.voiceBot': '语音机器人',
    'nav.projectBuilder': '项目构建器',
    'nav.portfolio': '作品集',
    'nav.dashboard': '仪表板',
    'nav.contact': '联系我们',
    'nav.getStarted': '开始使用',
    'nav.tryVoiceAI': '试用语音AI',
    
    // Homepage
    'home.hero.title': '下一个时代的创新AI',
    'home.hero.subtitle': '由尖端技术驱动的高端AI解决方案。从GPT驱动的聊天机器人到计算机视觉系统，我们通过100%免费和开源的解决方案使AI民主化，根据您的位置和预算量身定制。',
    'home.hero.experienceFuture': '体验未来',
    'home.hero.voiceConsultation': '语音咨询',
    'home.hero.watchDemo': '观看演示',
    
    // Services
    'services.title': 'AI服务',
    'services.subtitle': '用尖端AI解决方案改变您的业务。从智能聊天机器人到计算机视觉，我们使用免费和开源技术提供强大的AI应用程序。',
    'services.chatbot.title': 'AI聊天机器人开发',
    'services.chatbot.description': '智能对话AI，理解上下文，从交互中学习，并为您的客户提供24/7个性化响应。',
    'services.vision.title': '计算机视觉解决方案',
    'services.vision.description': '用于物体检测、面部识别、质量控制和自动化视觉检查的先进图像和视频分析系统。',
    
    // About
    'about.title': '关于Nexariza',
    'about.subtitle': '我们的使命是通过创新、经济高效的开源解决方案，使尖端人工智能技术民主化，让全世界的企业都能使用。',
    'about.mission': '我们的使命',
    'about.team': '认识我们的团队',
    
    // Contact
    'contact.title': '联系我们',
    'contact.subtitle': '准备用AI改变您的业务？让我们讨论您的项目，一起创造令人惊叹的东西。我们的专家团队在这里将您的愿景变为现实。',
    'contact.form.name': '全名',
    'contact.form.email': '电子邮件地址',
    'contact.form.company': '公司名称',
    'contact.form.phone': '电话号码',
    'contact.form.submit': '提交请求',
    
    // Common
    'common.loading': '加载中...',
    'common.error': '发生错误',
    'common.success': '成功！',
    'common.cancel': '取消',
    'common.save': '保存',
    'common.close': '关闭',
    'common.next': '下一步',
    'common.previous': '上一步',
    'common.viewMore': '查看更多',
    'common.learnMore': '了解更多',
  },
};

export const useTranslation = () => {
  const [currentLanguage, setCurrentLanguage] = useState('en');
  const [isTranslating, setIsTranslating] = useState(false);

  const t = useCallback((key: string): string => {
    return translations[currentLanguage]?.[key] || translations.en[key] || key;
  }, [currentLanguage]);

  const changeLanguage = useCallback(async (language: string) => {
    if (language === currentLanguage) return;
    
    setIsTranslating(true);
    
    // Simulate translation loading
    await new Promise(resolve => setTimeout(resolve, 500));
    
    setCurrentLanguage(language);
    setIsTranslating(false);
    
    // Store language preference
    localStorage.setItem('preferred-language', language);
  }, [currentLanguage]);

  useEffect(() => {
    // Load saved language preference
    const savedLanguage = localStorage.getItem('preferred-language');
    if (savedLanguage && translations[savedLanguage]) {
      setCurrentLanguage(savedLanguage);
    }
  }, []);

  return {
    t,
    currentLanguage,
    changeLanguage,
    isTranslating,
    availableLanguages: Object.keys(translations),
  };
};