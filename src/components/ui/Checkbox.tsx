import React from 'react';

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export function Checkbox({ label, className = '', ...props }: CheckboxProps) {
  return (
    <label className="flex items-center cursor-pointer">
      <input
        type="checkbox"
        className={`w-5 h-5 rounded border-2 border-gray-300 dark:border-gray-600
          text-blue-600 focus:ring-2 focus:ring-blue-500/20
          bg-white dark:bg-gray-800 cursor-pointer ${className}`}
        {...props}
      />
      {label && (
        <span className="ml-2 text-sm text-gray-700 dark:text-gray-300">{label}</span>
      )}
    </label>
  );
}
