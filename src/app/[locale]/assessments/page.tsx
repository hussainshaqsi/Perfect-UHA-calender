'use client';

import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import ProtectedRoute from '@/components/ProtectedRoute';
import Card from '@/components/Card';

export default function AssessmentsPage() {
  const t = useTranslations('assessments');
  const [assessments, setAssessments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/assessments')
      .then((res) => res.json())
      .then((data) => {
        setAssessments(data);
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
          {assessments.map((assessment: any) => (
            <Card key={assessment.id}>
              <h3 className="text-xl font-semibold">{assessment.name}</h3>
              <p className="text-gray-600">{assessment.type}</p>
              <p className="text-sm text-gray-500">
                Due: {new Date(assessment.dueDate).toLocaleDateString()}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </ProtectedRoute>
  );
}
