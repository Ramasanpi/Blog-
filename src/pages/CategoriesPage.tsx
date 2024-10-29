import React from 'react';
import { Link } from 'react-router-dom';
import { Folder } from 'lucide-react';

const categories = [
  {
    name: 'React',
    slug: 'react',
    count: 12,
    description: 'Modern web development with React',
    color: 'blue'
  },
  {
    name: 'TypeScript',
    slug: 'typescript',
    count: 8,
    description: 'Type-safe JavaScript development',
    color: 'indigo'
  },
  {
    name: 'Web Development',
    slug: 'web-development',
    count: 15,
    description: 'General web development topics',
    color: 'purple'
  },
  {
    name: 'DevOps',
    slug: 'devops',
    count: 6,
    description: 'Development operations and deployment',
    color: 'green'
  },
  {
    name: 'UI/UX',
    slug: 'ui-ux',
    count: 9,
    description: 'User interface and experience design',
    color: 'pink'
  },
  {
    name: 'Backend',
    slug: 'backend',
    count: 7,
    description: 'Server-side development topics',
    color: 'yellow'
  }
];

const colorClasses = {
  blue: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
  indigo: 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200',
  purple: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200',
  green: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
  pink: 'bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-200',
  yellow: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
};

export default function CategoriesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Categories
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300">
          Browse articles by topic
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {categories.map((category) => (
          <Link
            key={category.slug}
            to={`/category/${category.slug}`}
            className="block group"
          >
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition-transform group-hover:scale-[1.02]">
              <div className="flex items-center justify-between mb-4">
                <div className={`p-3 rounded-lg ${colorClasses[category.color as keyof typeof colorClasses]}`}>
                  <Folder size={24} />
                </div>
                <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  {category.count} articles
                </span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                {category.name}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {category.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}