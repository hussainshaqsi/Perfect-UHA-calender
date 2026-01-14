'use client';

import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import ProtectedRoute from '@/components/ProtectedRoute';
import Card from '@/components/Card';

export default function TasksPage() {
  const t = useTranslations('tasks');
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/tasks')
      .then((res) => res.json())
      .then((data) => {
        setTasks(data);
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
          {tasks.map((task: any) => (
            <Card key={task.id}>
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-xl font-semibold">{task.description}</h3>
                  <p className="text-sm text-gray-500">
                    Priority: {task.priority || 'Normal'}
                  </p>
                </div>
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => {}}
                  className="mt-1"
                />
              </div>
            </Card>
          ))}
        </div>
      </div>
    </ProtectedRoute>
  );
}
