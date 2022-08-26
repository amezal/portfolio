import React, { useState, createContext, useContext } from 'react';
import es from './es';
import en from './en';

const dictionaryList = {
  es,
  en
}

const LanguageContext = createContext({
  userLanguage: 'en',
  dictionary: dictionaryList.en,
}
);

export const LanguageProvider = ({ children }) => {
  let userDefaultLanguage = navigator.language.split('-')[0];
  if (userDefaultLanguage !== 'es' && userDefaultLanguage !== 'en') {
    userDefaultLanguage = 'en';
  }
  const defaultLanguage = window.localStorage.getItem('amezal-lang') || userDefaultLanguage;

  const [userLanguage, setUserLanguage] = useState(defaultLanguage || 'en');

  const provider = {
    userLanguage,
    dictionary: dictionaryList[userLanguage],
    changeLanguage: selected => {
      setUserLanguage(selected);
      window.localStorage.setItem('amezal-lang', selected);
    }
  }

  return (
    <LanguageContext.Provider value={provider}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => useContext(LanguageContext);