import en from '../translations/en/translations.json';
import ro from '../translations/ro/translations.json';

export type Lang = 'en' | 'ro';

export function getTranslations(lang: Lang) {
  return lang === 'en' ? en : ro;
}

export function getRouteKey(pathname: string): string {
  const pathWithoutLang = pathname.replace(/^\/(en|ro)/, '') || '/';
  if (pathWithoutLang === '/' || pathWithoutLang === '') {
    return 'home';
  }
  return pathWithoutLang.slice(1);
}

export function getRouteTranslation(lang: Lang, routeKey: string) {
  const translations = getTranslations(lang);
  return translations[routeKey as keyof typeof translations];
}
