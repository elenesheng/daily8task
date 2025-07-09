'use client';
import { useRouter, usePathname } from 'next/navigation';
import { Lang } from '../utils/i118n';

export function LanguageSwitcher({ lang }: { lang: Lang }) {
  const router = useRouter();
  const pathname = usePathname();

  const switchLang = (newLang: Lang) => {
    const segments = pathname.startsWith('/')
      ? pathname.slice(1).split('/')
      : pathname.split('/');
    segments[0] = newLang;
    const newPath = '/' + segments.join('/');
    router.push(newPath);
    localStorage.setItem('app-language', newLang);
  };

  return (
    <div className="flex gap-2">
      <button onClick={() => switchLang('en')} disabled={lang === 'en'}>
        EN
      </button>
      <button onClick={() => switchLang('ro')} disabled={lang === 'ro'}>
        RO
      </button>
    </div>
  );
}
