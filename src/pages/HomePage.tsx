import React, { useState } from 'react';
import PostCard from '../components/PostCard';
import SearchBar from '../components/SearchBar';
import Pagination from '../components/Pagination';

const POSTS_PER_PAGE = 6;

export default function HomePage() {
  const [currentPage, setCurrentPage] = useState(1);
  
  // Mock data - replace with actual data fetching
  const posts = [
    {
      id: '1',
      title: 'Getting Started with React and TypeScript',
      slug: 'getting-started-react-typescript',
      excerpt: 'Learn how to set up a new React project with TypeScript and best practices for type safety.',
      content: '...',
      coverImage: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=800&q=80',
      date: '2024-03-10',
      author: {
        id: '1',
        name: 'John Doe',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=100&q=80',
        bio: 'Senior Developer',
        social: {
          twitter: 'johndoe',
          github: 'johndoe'
        }
      },
      categories: ['React', 'TypeScript'],
      tags: ['web development', 'frontend']
    },
    // Add more mock posts here
  ];

  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Latest Articles
        </h1>
        <SearchBar />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
}