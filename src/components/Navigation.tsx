'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { usePathname } from 'next/navigation';
import { signOut } from 'next-auth/react';

export default function Navigation() {
  const t = useTranslations('nav');
  const pathname = usePathname();

  const links = [
    { href: '/', label: t('home') },
    { href: '/subjects', label: t('subjects') },
    { href: '/assessments', label: t('assessments') },
    { href: '/tasks', label: t('tasks') },
    { href: '/calendar', label: t('calendar') },
    { href: '/settings', label: t('settings') },
  ];

  return (
    <nav className="bg-primary-600 text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex space-x-4">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-2 rounded-md text-sm font-medium ${
                  pathname === link.href
                    ? 'bg-primary-700'
                    : 'hover:bg-primary-500'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <button
            onClick={() => signOut()}
            className="px-4 py-2 rounded-md text-sm font-medium bg-primary-700 hover:bg-primary-800"
          >
            {t('logout')}
          </button>
        </div>
      </div>
    </nav>
  );
}
