import React from 'react';
import { ArrowUpRight, ArrowDownRight } from 'lucide-react';

interface Transaction {
  id: string;
  merchant: string;
  amount: number;
  category: string;
  date: string;
  type: 'income' | 'expense';
}

interface TransactionCardProps {
  transaction: Transaction;
}

export function TransactionCard({ transaction }: TransactionCardProps) {
  const isIncome = transaction.type === 'income';

  return (
    <div className="flex items-center justify-between p-4 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow">
      <div className="flex items-center space-x-4">
        <div
          className={`w-12 h-12 rounded-xl flex items-center justify-center ${
            isIncome
              ? 'bg-green-100 dark:bg-green-900/20'
              : 'bg-red-100 dark:bg-red-900/20'
          }`}
        >
          {isIncome ? (
            <ArrowDownRight className="w-6 h-6 text-green-600 dark:text-green-400" />
          ) : (
            <ArrowUpRight className="w-6 h-6 text-red-600 dark:text-red-400" />
          )}
        </div>
        <div>
          <h3 className="font-semibold text-gray-900 dark:text-white">
            {transaction.merchant}
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {transaction.category} • {transaction.date}
          </p>
        </div>
      </div>
      <div
        className={`text-lg font-bold ${
          isIncome
            ? 'text-green-600 dark:text-green-400'
            : 'text-red-600 dark:text-red-400'
        }`}
      >
        {isIncome ? '+' : '-'}${Math.abs(transaction.amount).toFixed(2)}
      </div>
    </div>
  );
}
