import React from 'react';
import { TrendingUp, TrendingDown, Wallet, CreditCard } from 'lucide-react';
import { SpendingLineChart } from '../components/Chart';
import { TransactionCard } from '../components/TransactionCard';

const mockTransactions = [
  { id: '1', merchant: 'Whole Foods', amount: -85.43, category: 'Food', date: 'Oct 1, 2025', type: 'expense' as const },
  { id: '2', merchant: 'Salary', amount: 3500.00, category: 'Income', date: 'Oct 1, 2025', type: 'income' as const },
  { id: '3', merchant: 'Uber', amount: -24.50, category: 'Transport', date: 'Sep 30, 2025', type: 'expense' as const },
  { id: '4', merchant: 'Netflix', amount: -15.99, category: 'Entertainment', date: 'Sep 30, 2025', type: 'expense' as const },
  { id: '5', merchant: 'Amazon', amount: -129.99, category: 'Shopping', date: 'Sep 29, 2025', type: 'expense' as const },
];

export function Dashboard() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          Dashboard
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Welcome back! Here's your financial overview
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-6 rounded-3xl shadow-lg text-white">
          <div className="flex items-center justify-between mb-4">
            <Wallet className="w-8 h-8" />
            <TrendingUp className="w-5 h-5" />
          </div>
          <p className="text-blue-100 text-sm mb-1">Total Balance</p>
          <h3 className="text-3xl font-bold">$12,450.00</h3>
        </div>

        <div className="bg-gradient-to-br from-green-500 to-green-600 p-6 rounded-3xl shadow-lg text-white">
          <div className="flex items-center justify-between mb-4">
            <TrendingUp className="w-8 h-8" />
            <span className="text-green-100 text-sm">+12%</span>
          </div>
          <p className="text-green-100 text-sm mb-1">Income (This Month)</p>
          <h3 className="text-3xl font-bold">$3,500.00</h3>
        </div>

        <div className="bg-gradient-to-br from-red-500 to-red-600 p-6 rounded-3xl shadow-lg text-white">
          <div className="flex items-center justify-between mb-4">
            <TrendingDown className="w-8 h-8" />
            <span className="text-red-100 text-sm">-8%</span>
          </div>
          <p className="text-red-100 text-sm mb-1">Expenses (This Month)</p>
          <h3 className="text-3xl font-bold">$1,255.91</h3>
        </div>

        <div className="bg-gradient-to-br from-purple-500 to-purple-600 p-6 rounded-3xl shadow-lg text-white">
          <div className="flex items-center justify-between mb-4">
            <CreditCard className="w-8 h-8" />
            <span className="text-purple-100 text-sm">75%</span>
          </div>
          <p className="text-purple-100 text-sm mb-1">Budget Used</p>
          <h3 className="text-3xl font-bold">$2,250 / $3,000</h3>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <SpendingLineChart />

        <div className="bg-white dark:bg-gray-800 p-6 rounded-3xl shadow-lg border border-gray-200 dark:border-gray-700">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
            Recent Transactions
          </h3>
          <div className="space-y-3">
            {mockTransactions.slice(0, 5).map((transaction) => (
              <TransactionCard key={transaction.id} transaction={transaction} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
