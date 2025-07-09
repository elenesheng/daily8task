'use client';
import Link from 'next/link';
import { getRouteTranslation, Lang } from '../utils/i118n';
import { LanguageSwitcher } from './LanguageSwitcher';

export default function Header({
  lang,
  routeKey,
}: {
  lang: Lang;
  routeKey: string;
}) {
  const routeTranslation = getRouteTranslation(lang, routeKey);

  return (
    <header className="flex flex-col items-center gap-4 py-4">
      <nav className="flex gap-6 mb-2">
        <Link href={`/${lang}`} className="hover:underline">
          Home
        </Link>
        <Link href={`/${lang}/about`} className="hover:underline">
          About
        </Link>
      </nav>
      <LanguageSwitcher lang={lang} />
      <h1 className="text-4xl font-bold">
        {routeTranslation?.title || 'Page Not Found'}
      </h1>
    </header>
  );
}
