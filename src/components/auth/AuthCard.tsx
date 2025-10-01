import React from 'react';

interface AuthCardProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}

export function AuthCard({ title, subtitle, children }: AuthCardProps) {
  return (
    <div className="w-full max-w-md mx-auto">
      <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            {title}
          </h1>
          {subtitle && (
            <p className="text-gray-600 dark:text-gray-400">{subtitle}</p>
          )}
        </div>
        {children}
      </div>
    </div>
  );
}
