import React from 'react';
import { Link } from 'react-router-dom';
import { TrendingUp, PieChart, Target, Shield, Zap, Users, CheckCircle } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Footer } from '../components/Footer';

export function LandingPage() {
  const features = [
    {
      icon: TrendingUp,
      title: 'Track Expenses',
      description: 'Monitor all your spending in one place with automatic categorization',
    },
    {
      icon: PieChart,
      title: 'Smart Analytics',
      description: 'Get insights into your spending habits with beautiful visualizations',
    },
    {
      icon: Target,
      title: 'Set Budgets',
      description: 'Create custom budgets and get alerts when you approach limits',
    },
    {
      icon: Shield,
      title: 'Bank-Level Security',
      description: 'Your financial data is encrypted and protected with industry standards',
    },
  ];

  const steps = [
    {
      number: '1',
      title: 'Create Your Account',
      description: 'Sign up in seconds and set up your profile',
    },
    {
      number: '2',
      title: 'Add Transactions',
      description: 'Manually add expenses or connect your accounts',
    },
    {
      number: '3',
      title: 'Get Insights',
      description: 'View analytics and optimize your spending',
    },
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Small Business Owner',
      content: 'BudgetBuddy helped me save over $5,000 in the first year. The insights are incredible!',
      avatar: 'https://placehold.co/80x80/6366f1/fff?text=SJ',
    },
    {
      name: 'Michael Chen',
      role: 'Freelancer',
      content: 'Finally, a budgeting app that is actually easy to use. Love the clean interface!',
      avatar: 'https://placehold.co/80x80/8b5cf6/fff?text=MC',
    },
    {
      name: 'Emma Davis',
      role: 'Student',
      content: 'Perfect for tracking my student budget. The analytics help me make smarter decisions.',
      avatar: 'https://placehold.co/80x80/ec4899/fff?text=ED',
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                Take control of your{' '}
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent">
                  finances
                </span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
                Smart budgeting made simple. Track expenses, set goals, and build better financial habits with BudgetBuddy.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/register">
                  <Button variant="primary" size="lg" className="w-full sm:w-auto">
                    Get Started Free
                  </Button>
                </Link>
                <Link to="/signin">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto">
                    Sign In
                  </Button>
                </Link>
              </div>
              <div className="mt-8 flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  No credit card required
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  Free forever
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Budget Dashboard"
                className="rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Everything you need to manage your money
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Powerful features to help you take control of your financial future
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 p-6 rounded-3xl shadow-lg hover:shadow-xl transition-shadow border border-gray-200 dark:border-gray-700"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              How it works
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Get started in three simple steps
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-600 text-white text-2xl font-bold rounded-2xl flex items-center justify-center mx-auto mb-4">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Why use BudgetBuddy?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Join thousands of users who trust us with their finances
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 p-8 rounded-3xl shadow-lg border border-gray-200 dark:border-gray-700"
              >
                <p className="text-gray-700 dark:text-gray-300 mb-6 italic">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-blue-600 to-indigo-600 dark:from-blue-700 dark:to-indigo-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to take control of your finances?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Start your journey to financial freedom today
          </p>
          <Link to="/register">
            <Button variant="secondary" size="lg">
              Get Started Now
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
