'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';

export default function OnboardingPage() {
  const router = useRouter();
  const { data: session } = useSession();
  const [iCalUrl, setICalUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const res = await fetch('/api/user/calendar-sync', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ iCalUrl }),
      });

      if (!res.ok) {
        setError('Failed to save calendar URL');
      } else {
        router.push('/en');
      }
    } catch (err) {
      setError('Failed to save calendar URL');
    } finally {
      setLoading(false);
    }
  };

  const handleSkip = () => {
    router.push('/en');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-2xl w-full bg-white rounded-lg shadow-md p-8">
        <h1 className="text-2xl font-bold mb-6">Welcome to UHA Study Prioritizer!</h1>
        <p className="mb-6">Let's set up your calendar sync to automatically import your courses and events.</p>

        {error && (
          <div className="bg-red-50 text-red-600 p-3 rounded mb-4">{error}</div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">
              iCal/vCal URL
            </label>
            <input
              type="url"
              value={iCalUrl}
              onChange={(e) => setICalUrl(e.target.value)}
              className="w-full px-3 py-2 border rounded-md"
              placeholder="https://calendar.uha.fr/ical/..."
            />
            <p className="text-xs text-gray-500 mt-2">
              You can find this URL in your UHA calendar settings
            </p>
          </div>

          <div className="flex space-x-4">
            <button
              type="submit"
              disabled={loading || !iCalUrl}
              className="flex-1 bg-primary-600 text-white py-2 rounded-md hover:bg-primary-700 disabled:opacity-50"
            >
              {loading ? 'Saving...' : 'Save and Continue'}
            </button>
            <button
              type="button"
              onClick={handleSkip}
              className="flex-1 bg-gray-200 text-gray-700 py-2 rounded-md hover:bg-gray-300"
            >
              Skip for Now
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
