'use client';

import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import ProtectedRoute from '@/components/ProtectedRoute';
import Card from '@/components/Card';

export default function SubjectsPage() {
  const t = useTranslations('subjects');
  const [subjects, setSubjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/subjects')
      .then((res) => res.json())
      .then((data) => {
        setSubjects(data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <ProtectedRoute>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">{t('title')}</h1>
          <button className="bg-primary-600 text-white px-4 py-2 rounded-md hover:bg-primary-700">
            {t('add')}
          </button>
        </div>

        <div className="grid gap-4">
          {subjects.map((subject: any) => (
            <Card key={subject.id}>
              <h3 className="text-xl font-semibold">{subject.name}</h3>
              <p className="text-gray-600">{subject.code}</p>
            </Card>
          ))}
        </div>
      </div>
    </ProtectedRoute>
  );
}
