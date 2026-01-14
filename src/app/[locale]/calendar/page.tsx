'use client';

import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import ProtectedRoute from '@/components/ProtectedRoute';
import Card from '@/components/Card';

export default function CalendarPage() {
  const t = useTranslations('calendar');
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/calendar')
      .then((res) => res.json())
      .then((data) => {
        setEvents(data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <ProtectedRoute>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold">{t('title')}</h1>

        <div className="grid gap-4">
          {events.map((event: any) => (
            <Card key={event.id}>
              <h3 className="text-xl font-semibold">{event.title}</h3>
              {event.description && (
                <p className="text-gray-600 mt-2">{event.description}</p>
              )}
              <p className="text-sm text-gray-500 mt-2">
                {new Date(event.startDate).toLocaleString()} -{' '}
                {new Date(event.endDate).toLocaleString()}
              </p>
              {event.location && (
                <p className="text-sm text-gray-500">📍 {event.location}</p>
              )}
            </Card>
          ))}
        </div>
      </div>
    </ProtectedRoute>
  );
}
