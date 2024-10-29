import React from 'react';
import { Github, Twitter, Linkedin } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          About BlogFolio
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300">
          A modern platform for sharing knowledge and connecting with readers
        </p>
      </div>

      <div className="prose dark:prose-invert max-w-none">
        <p>
          Welcome to BlogFolio, a space where technology meets creativity. Our platform
          is designed to provide a seamless experience for both writers and readers,
          focusing on clean design and excellent readability.
        </p>

        <h2>Our Mission</h2>
        <p>
          We believe in the power of sharing knowledge. Our mission is to create a
          platform where experts can share their insights and experiences with the
          world, fostering a community of continuous learning and growth.
        </p>

        <h2>The Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 not-prose mt-8">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80"
              alt="John Doe"
              className="w-32 h-32 rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-bold text-center text-gray-900 dark:text-white mb-2">
              John Doe
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-center mb-4">
              Founder & Lead Developer
            </p>
            <div className="flex justify-center space-x-4">
              <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-blue-500">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-blue-500">
                <Github size={20} />
              </a>
              <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-blue-500">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80"
              alt="Jane Smith"
              className="w-32 h-32 rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-bold text-center text-gray-900 dark:text-white mb-2">
              Jane Smith
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-center mb-4">
              Content Director
            </p>
            <div className="flex justify-center space-x-4">
              <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-blue-500">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-blue-500">
                <Github size={20} />
              </a>
              <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-blue-500">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}