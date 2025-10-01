import React from 'react';
import { SpendingLineChart, CategoryPieChart } from '../components/Chart';
import { TrendingUp, TrendingDown, DollarSign } from 'lucide-react';

export function Analytics() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          Analytics
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Insights into your spending patterns and financial health
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-3xl shadow-lg border border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/20 rounded-2xl flex items-center justify-center">
              <DollarSign className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
            <span className="text-sm font-medium text-green-600 dark:text-green-400">+5.2%</span>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">$4,350.00</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">Average Monthly Spending</p>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-3xl shadow-lg border border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-green-100 dark:bg-green-900/20 rounded-2xl flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-green-600 dark:text-green-400" />
            </div>
            <span className="text-sm font-medium text-green-600 dark:text-green-400">+12.8%</span>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">$1,240.00</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">Money Saved This Month</p>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-3xl shadow-lg border border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-red-100 dark:bg-red-900/20 rounded-2xl flex items-center justify-center">
              <TrendingDown className="w-6 h-6 text-red-600 dark:text-red-400" />
            </div>
            <span className="text-sm font-medium text-red-600 dark:text-red-400">-3.4%</span>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">$450.00</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">Biggest Category (Food)</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <SpendingLineChart />
        <CategoryPieChart />
      </div>

      <div className="bg-white dark:bg-gray-800 p-6 rounded-3xl shadow-lg border border-gray-200 dark:border-gray-700">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
          Spending Insights
        </h3>
        <div className="space-y-4">
          <div className="flex items-start space-x-4">
            <div className="w-2 h-2 mt-2 bg-blue-600 rounded-full"></div>
            <div>
              <p className="font-medium text-gray-900 dark:text-white">
                Your food spending is 15% higher than last month
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Consider meal planning to reduce restaurant expenses
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <div className="w-2 h-2 mt-2 bg-green-600 rounded-full"></div>
            <div>
              <p className="font-medium text-gray-900 dark:text-white">
                Great job! You stayed within budget for transportation
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                You saved $50 compared to your average
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <div className="w-2 h-2 mt-2 bg-purple-600 rounded-full"></div>
            <div>
              <p className="font-medium text-gray-900 dark:text-white">
                Entertainment spending is on track
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                You have $100 left in your entertainment budget for this month
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
