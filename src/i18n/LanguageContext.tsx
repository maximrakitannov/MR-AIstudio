import React, { createContext, useContext, useState, useEffect } from 'react';
import { 
  LanguageCode, 
  LanguageOption, 
  TranslationStrings, 
  SUPPORTED_LANGUAGES, 
  translations 
} from './translations';
import { getStoredLanguage, setStoredLanguage } from '../services/storage';

interface LanguageContextType {
  currentLang: LanguageCode;
  setLanguage: (lang: LanguageCode) => void;
  t: TranslationStrings;
  langOption: LanguageOption;
  supportedLanguages: LanguageOption[];
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentLang, setCurrentLangState] = useState<LanguageCode>(() => {
    const saved = getStoredLanguage();
    if (SUPPORTED_LANGUAGES.some(l => l.code === saved)) {
      return saved as LanguageCode;
    }
    return 'ru';
  });

  const setLanguage = (lang: LanguageCode) => {
    setCurrentLangState(lang);
    setStoredLanguage(lang);
    document.documentElement.lang = lang;
  };

  useEffect(() => {
    document.documentElement.lang = currentLang;
  }, [currentLang]);

  const t = translations[currentLang] || translations.ru;
  const langOption = SUPPORTED_LANGUAGES.find(l => l.code === currentLang) || SUPPORTED_LANGUAGES[0];

  return (
    <LanguageContext.Provider
      value={{
        currentLang,
        setLanguage,
        t,
        langOption,
        supportedLanguages: SUPPORTED_LANGUAGES
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
