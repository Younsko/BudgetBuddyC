import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export function Input({ label, error, className = '', ...props }: InputProps) {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          {label}
        </label>
      )}
      <input
        className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-200
          ${error
            ? 'border-red-500 focus:border-red-600'
            : 'border-gray-300 focus:border-blue-500 dark:border-gray-600 dark:focus:border-blue-400'
          }
          bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100
          placeholder:text-gray-400 dark:placeholder:text-gray-500
          focus:outline-none focus:ring-4 focus:ring-blue-500/10 dark:focus:ring-blue-400/10
          ${className}`}
        {...props}
      />
      {error && (
        <p className="mt-1 text-sm text-red-500">{error}</p>
      )}
    </div>
  );
}
