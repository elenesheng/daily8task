import Header from '../../../components/Header';
import { getRouteTranslation, Lang } from '../../../utils/server-i18n';

interface AboutProps {
  params: {
    locale: string;
  };
}

export default function About({ params }: AboutProps) {
  const lang: Lang = params.locale === 'ro' ? 'ro' : 'en';
  const routeKey = 'about';
  const routeTranslation = getRouteTranslation(lang, routeKey);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Header lang={lang} routeKey={routeKey} />
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="text-xl">{routeTranslation?.description}</p>
      </div>
    </main>
  );
}
