import React from 'react';
import { LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const lineData = [
  { name: 'Jan', spent: 2400, budget: 3000 },
  { name: 'Feb', spent: 1398, budget: 3000 },
  { name: 'Mar', spent: 3800, budget: 3000 },
  { name: 'Apr', spent: 2908, budget: 3000 },
  { name: 'May', spent: 4800, budget: 3000 },
  { name: 'Jun', spent: 2800, budget: 3000 },
];

const pieData = [
  { name: 'Food', value: 450 },
  { name: 'Transport', value: 200 },
  { name: 'Entertainment', value: 150 },
  { name: 'Shopping', value: 300 },
  { name: 'Bills', value: 400 },
];

const COLORS = ['#3b82f6', '#8b5cf6', '#ec4899', '#f59e0b', '#10b981'];

export function SpendingLineChart() {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-3xl shadow-lg border border-gray-200 dark:border-gray-700">
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
        Spending Over Time
      </h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={lineData}>
          <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
          <XAxis dataKey="name" stroke="#9ca3af" />
          <YAxis stroke="#9ca3af" />
          <Tooltip
            contentStyle={{
              backgroundColor: '#1f2937',
              border: 'none',
              borderRadius: '0.75rem',
              color: '#fff',
            }}
          />
          <Legend />
          <Line
            type="monotone"
            dataKey="spent"
            stroke="#3b82f6"
            strokeWidth={3}
            dot={{ fill: '#3b82f6', r: 5 }}
          />
          <Line
            type="monotone"
            dataKey="budget"
            stroke="#10b981"
            strokeWidth={2}
            strokeDasharray="5 5"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export function CategoryPieChart() {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-3xl shadow-lg border border-gray-200 dark:border-gray-700">
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
        Spending by Category
      </h3>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={pieData}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={(entry) => entry.name}
            outerRadius={100}
            fill="#8884d8"
            dataKey="value"
          >
            {pieData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip
            contentStyle={{
              backgroundColor: '#1f2937',
              border: 'none',
              borderRadius: '0.75rem',
              color: '#fff',
            }}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
