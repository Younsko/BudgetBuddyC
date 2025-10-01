import React, { useState } from 'react';
import { Search, Filter, Plus } from 'lucide-react';
import { TransactionCard } from '../components/TransactionCard';
import { Button } from '../components/ui/Button';

const mockTransactions = [
  { id: '1', merchant: 'Whole Foods', amount: -85.43, category: 'Food', date: 'Oct 1, 2025', type: 'expense' as const },
  { id: '2', merchant: 'Salary', amount: 3500.00, category: 'Income', date: 'Oct 1, 2025', type: 'income' as const },
  { id: '3', merchant: 'Uber', amount: -24.50, category: 'Transport', date: 'Sep 30, 2025', type: 'expense' as const },
  { id: '4', merchant: 'Netflix', amount: -15.99, category: 'Entertainment', date: 'Sep 30, 2025', type: 'expense' as const },
  { id: '5', merchant: 'Amazon', amount: -129.99, category: 'Shopping', date: 'Sep 29, 2025', type: 'expense' as const },
  { id: '6', merchant: 'Starbucks', amount: -8.75, category: 'Food', date: 'Sep 29, 2025', type: 'expense' as const },
  { id: '7', merchant: 'Gas Station', amount: -45.00, category: 'Transport', date: 'Sep 28, 2025', type: 'expense' as const },
  { id: '8', merchant: 'Freelance Project', amount: 850.00, category: 'Income', date: 'Sep 28, 2025', type: 'income' as const },
  { id: '9', merchant: 'Gym Membership', amount: -59.99, category: 'Health', date: 'Sep 27, 2025', type: 'expense' as const },
  { id: '10', merchant: 'Grocery Store', amount: -112.34, category: 'Food', date: 'Sep 27, 2025', type: 'expense' as const },
];

export function Transactions() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredTransactions = mockTransactions.filter((transaction) =>
    transaction.merchant.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Transactions
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            View and manage all your transactions
          </p>
        </div>
        <Button variant="primary" className="w-full sm:w-auto">
          <Plus className="w-5 h-5 mr-2" />
          Add Transaction
        </Button>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search transactions..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-4 py-3 rounded-2xl border-2 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:border-blue-500 dark:focus:border-blue-400"
          />
        </div>
        <Button variant="outline">
          <Filter className="w-5 h-5 mr-2" />
          Filter
        </Button>
      </div>

      <div className="bg-white dark:bg-gray-800 p-6 rounded-3xl shadow-lg border border-gray-200 dark:border-gray-700">
        <div className="space-y-3">
          {filteredTransactions.length > 0 ? (
            filteredTransactions.map((transaction) => (
              <TransactionCard key={transaction.id} transaction={transaction} />
            ))
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500 dark:text-gray-400">No transactions found</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
