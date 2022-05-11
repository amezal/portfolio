import React, { useState, createContext, useContext } from 'react';

const dictionaryList = {
  en: {
    nav: {
      work: 'Projects',
      resume: 'Resume',
      contact: 'Contact',
    },
    home: 'Hello'
  },
  es: {
    nav: {
      work: 'Proyectos',
      resume: 'Currículum',
      contact: 'Contacto',
    },
    home: 'Hola'
  },
}

const LanguageContext = createContext({
  userLanguage: 'en',
  dictionary: dictionaryList.en,
}
);

export const LanguageProvider = ({ children }) => {
  const defaultLanguage = window.localStorage.getItem('amezal-lang') || navigator.language.split('-')[0];

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