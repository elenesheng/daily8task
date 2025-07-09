'use client';
import { useParams } from 'next/navigation';
import { getRouteKey, getRouteTranslation, Lang } from '../utils/i118n';

export function useRouteTranslation() {
  const params = useParams();
  const locale = params.locale as string;
  const lang: Lang = locale === 'ro' ? 'ro' : 'en';

  const pathname = window.location.pathname;
  const routeKey = getRouteKey(pathname);
  const routeTranslation = getRouteTranslation(lang, routeKey);

  return { lang, routeKey, routeTranslation };
}
