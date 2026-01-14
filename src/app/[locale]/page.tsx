'use client';

import { useTranslations } from 'next-intl';
import ProtectedRoute from '@/components/ProtectedRoute';
import Card from '@/components/Card';

export default function HomePage() {
  const t = useTranslations('home');

  return (
    <ProtectedRoute>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold">{t('title')}</h1>
        <Card>
          <p className="text-lg">{t('welcome')}</p>
        </Card>
      </div>
    </ProtectedRoute>
  );
}
