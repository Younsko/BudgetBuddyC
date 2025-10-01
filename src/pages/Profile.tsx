import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { User, Mail, Calendar, Settings, Bell, Shield } from 'lucide-react';
import { Button } from '../components/ui/Button';

export function Profile() {
  const { user } = useAuth();

  const profileSections = [
    {
      icon: User,
      title: 'Personal Information',
      items: [
        { label: 'Full Name', value: user?.name || 'Test User' },
        { label: 'Email', value: user?.email || 'test@test.com' },
        { label: 'Member Since', value: 'January 2025' },
      ],
    },
    {
      icon: Settings,
      title: 'Preferences',
      items: [
        { label: 'Currency', value: 'USD ($)' },
        { label: 'Language', value: 'English' },
        { label: 'Timezone', value: 'UTC-5 (EST)' },
      ],
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          Profile
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Manage your account settings and preferences
        </p>
      </div>

      <div className="bg-gradient-to-br from-blue-500 to-indigo-600 p-8 rounded-3xl shadow-lg text-white">
        <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6">
          <div className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-3xl flex items-center justify-center">
            <User className="w-12 h-12 text-white" />
          </div>
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-2xl font-bold mb-2">{user?.name || 'Test User'}</h2>
            <p className="text-blue-100 flex items-center justify-center md:justify-start">
              <Mail className="w-4 h-4 mr-2" />
              {user?.email || 'test@test.com'}
            </p>
            <p className="text-blue-100 flex items-center justify-center md:justify-start mt-1">
              <Calendar className="w-4 h-4 mr-2" />
              Member since January 2025
            </p>
          </div>
          <Button variant="secondary" size="sm">
            Edit Profile
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {profileSections.map((section, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 p-6 rounded-3xl shadow-lg border border-gray-200 dark:border-gray-700"
          >
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/20 rounded-2xl flex items-center justify-center">
                <section.icon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                {section.title}
              </h3>
            </div>
            <div className="space-y-3">
              {section.items.map((item, itemIndex) => (
                <div key={itemIndex} className="flex justify-between items-center py-2">
                  <span className="text-gray-600 dark:text-gray-400">{item.label}</span>
                  <span className="font-medium text-gray-900 dark:text-white">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-3xl shadow-lg border border-gray-200 dark:border-gray-700">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900/20 rounded-2xl flex items-center justify-center">
              <Bell className="w-5 h-5 text-purple-600 dark:text-purple-400" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white">
              Notifications
            </h3>
          </div>
          <div className="space-y-3">
            <label className="flex items-center justify-between">
              <span className="text-gray-700 dark:text-gray-300">Email Notifications</span>
              <input type="checkbox" defaultChecked className="w-5 h-5 rounded text-blue-600" />
            </label>
            <label className="flex items-center justify-between">
              <span className="text-gray-700 dark:text-gray-300">Budget Alerts</span>
              <input type="checkbox" defaultChecked className="w-5 h-5 rounded text-blue-600" />
            </label>
            <label className="flex items-center justify-between">
              <span className="text-gray-700 dark:text-gray-300">Transaction Updates</span>
              <input type="checkbox" className="w-5 h-5 rounded text-blue-600" />
            </label>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-3xl shadow-lg border border-gray-200 dark:border-gray-700">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-10 h-10 bg-green-100 dark:bg-green-900/20 rounded-2xl flex items-center justify-center">
              <Shield className="w-5 h-5 text-green-600 dark:text-green-400" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white">
              Security
            </h3>
          </div>
          <div className="space-y-3">
            <Button variant="outline" className="w-full justify-start">
              Change Password
            </Button>
            <Button variant="outline" className="w-full justify-start">
              Two-Factor Authentication
            </Button>
            <Button variant="outline" className="w-full justify-start text-red-600 dark:text-red-400">
              Delete Account
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
