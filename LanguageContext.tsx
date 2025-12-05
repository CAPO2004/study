import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'en' | 'ar';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations: Record<Language, Record<string, string>> = {
  en: {
    'nav.home': 'Home',
    'nav.lessons': 'Lessons',
    'nav.examples': 'Examples',
    'nav.quiz': 'Quiz',
    'hero.title': 'CodeTraining',
    'hero.subtitle': 'Master Computer Programming Languages',
    'hero.description': 'Learn programming concepts through interactive lessons, practical examples, and engaging quizzes.',
    'hero.cta': 'Start Learning',
    'vision.title': 'Our Vision',
    'vision.content': 'To make programming education accessible, engaging, and effective for learners of all levels.',
    'mission.title': 'Our Mission',
    'mission.content': 'Provide comprehensive, hands-on training in computer programming languages with clear explanations and practical examples.',
    'about.title': 'About the Developer',
    'about.name': 'Ahmed Adel',
    'about.bio': 'A passionate software developer and educator dedicated to making programming accessible to everyone.',
    'contact.title': 'Contact Us',
    'contact.email': 'Email',
    'contact.phone': 'Phone',
    'contact.social': 'Follow Us',
    'lessons.title': 'Lessons',
    'lessons.subtitle': 'Select a concept to learn',
    'lessons.concept': 'Concept',
    'lessons.topics': 'Topics',
    'lessons.selectTopic': 'Select a topic to start learning',
    'lessons.inputData': 'How to Input Data',
    'lessons.basicOperators': 'Basic Numeric Operators',
    'lessons.conditions': 'Conditions',
    'lessons.loops': 'Loops',
    'lessons.outputData': 'How to Display Output',
    'examples.title': 'Examples',
    'examples.subtitle': 'Solved examples for each concept',
    'examples.selectConcept': 'Select a concept to view examples',
    'quiz.title': 'Quiz',
    'quiz.subtitle': 'Test your knowledge',
    'quiz.selectConcept': 'Select a concept to take the quiz',
    'quiz.question': 'Question',
    'quiz.of': 'of',
    'quiz.submit': 'Submit',
    'quiz.next': 'Next Question',
    'quiz.finish': 'Finish Quiz',
    'quiz.score': 'Your Score',
    'quiz.correct': 'Correct Answers',
    'quiz.incorrect': 'Incorrect Answers',
    'quiz.retake': 'Retake Quiz',
    'quiz.goHome': 'Go to Home',
  },
  ar: {
    'nav.home': 'الرئيسية',
    'nav.lessons': 'الدروس',
    'nav.examples': 'الأمثلة',
    'nav.quiz': 'الاختبار',
    'hero.title': 'كود تريننج',
    'hero.subtitle': 'احترف لغات البرمجة',
    'hero.description': 'تعلم مفاهيم البرمجة من خلال دروس تفاعلية وأمثلة عملية واختبارات شيقة.',
    'hero.cta': 'ابدأ التعلم',
    'vision.title': 'رؤيتنا',
    'vision.content': 'جعل تعليم البرمجة متاحًا وجذابًا وفعالًا للمتعلمين من جميع المستويات.',
    'mission.title': 'مهمتنا',
    'mission.content': 'توفير تدريب شامل وعملي في لغات البرمجة مع شرح واضح وأمثلة عملية.',
    'about.title': 'عن المطور',
    'about.name': 'أحمد عادل',
    'about.bio': 'مطور برمجيات شغوف ومعلم مكرس لجعل البرمجة في متناول الجميع.',
    'contact.title': 'تواصل معنا',
    'contact.email': 'البريد الإلكتروني',
    'contact.phone': 'الهاتف',
    'contact.social': 'تابعنا',
    'lessons.title': 'الدروس',
    'lessons.subtitle': 'اختر مفهومًا للتعلم',
    'lessons.concept': 'المفهوم',
    'lessons.topics': 'المواضيع',
    'lessons.selectTopic': 'اختر موضوعًا لبدء التعلم',
    'lessons.inputData': 'كيفية إدخال البيانات',
    'lessons.basicOperators': 'العمليات الحسابية الأساسية',
    'lessons.conditions': 'الشروط',
    'lessons.loops': 'الحلقات',
    'lessons.outputData': 'كيفية عرض النتائج',
    'examples.title': 'الأمثلة',
    'examples.subtitle': 'أمثلة محلولة لكل مفهوم',
    'examples.selectConcept': 'اختر مفهومًا لعرض الأمثلة',
    'quiz.title': 'الاختبار',
    'quiz.subtitle': 'اختبر معلوماتك',
    'quiz.selectConcept': 'اختر مفهومًا لإجراء الاختبار',
    'quiz.question': 'السؤال',
    'quiz.of': 'من',
    'quiz.submit': 'إرسال',
    'quiz.next': 'السؤال التالي',
    'quiz.finish': 'إنهاء الاختبار',
    'quiz.score': 'نتيجتك',
    'quiz.correct': 'الإجابات الصحيحة',
    'quiz.incorrect': 'الإجابات الخاطئة',
    'quiz.retake': 'إعادة الاختبار',
    'quiz.goHome': 'العودة للرئيسية',
  },
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('language');
    return (saved as Language) || 'en';
  });

  useEffect(() => {
    localStorage.setItem('language', language);
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
  }, [language]);

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'ar' : 'en');
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
};
