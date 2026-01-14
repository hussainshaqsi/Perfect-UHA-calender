'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';
import ProtectedRoute from '@/components/ProtectedRoute';
import Card from '@/components/Card';

export default function SettingsPage() {
  const t = useTranslations('settings');
  const router = useRouter();
  const pathname = usePathname();
  const currentLocale = pathname.split('/')[1];

  const handleLanguageChange = (newLocale: string) => {
    const newPath = pathname.replace(`/${currentLocale}`, `/${newLocale}`);
    router.push(newPath);
  };

  return (
    <ProtectedRoute>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold">{t('title')}</h1>

        <Card>
          <h2 className="text-xl font-semibold mb-4">{t('language')}</h2>
          <div className="flex space-x-4">
            <button
              onClick={() => handleLanguageChange('en')}
              className={`px-4 py-2 rounded-md ${
                currentLocale === 'en'
                  ? 'bg-primary-600 text-white'
                  : 'bg-gray-200'
              }`}
            >
              English
            </button>
            <button
              onClick={() => handleLanguageChange('fr')}
              className={`px-4 py-2 rounded-md ${
                currentLocale === 'fr'
                  ? 'bg-primary-600 text-white'
                  : 'bg-gray-200'
              }`}
            >
              Français
            </button>
            <button
              onClick={() => handleLanguageChange('ar')}
              className={`px-4 py-2 rounded-md ${
                currentLocale === 'ar'
                  ? 'bg-primary-600 text-white'
                  : 'bg-gray-200'
              }`}
            >
              العربية
            </button>
          </div>
        </Card>
      </div>
    </ProtectedRoute>
  );
}
