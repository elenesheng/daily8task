'use client';

import { useState, useEffect } from 'react';
import { Lang } from '../utils/i118n';

const LANGUAGE_KEY = 'app-language';

export const useLanguage = () => {
  const [language, setLanguage] = useState<Lang>('en');

  useEffect(() => {
    const savedLanguage = localStorage.getItem(LANGUAGE_KEY);
    if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'ro')) {
      setLanguage(savedLanguage as Lang);
    }
  }, []);

  const changeLanguage = (newLanguage: Lang) => {
    setLanguage(newLanguage);
    localStorage.setItem(LANGUAGE_KEY, newLanguage);
  };

  return { language, changeLanguage };
};
