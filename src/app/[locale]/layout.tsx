import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';
import SessionProvider from '@/components/SessionProvider';
import Navigation from '@/components/Navigation';
import '../globals.css';

const locales = ['en', 'fr', 'ar'];

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  if (!locales.includes(locale)) {
    notFound();
  }

  let messages;
  try {
    messages = (await import(`@/messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
    <html lang={locale} dir={locale === 'ar' ? 'rtl' : 'ltr'}>
      <body>
        <SessionProvider>
          <NextIntlClientProvider locale={locale} messages={messages}>
            <Navigation />
            <main className="container mx-auto px-4 py-8">
              {children}
            </main>
          </NextIntlClientProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
