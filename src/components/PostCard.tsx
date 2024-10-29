import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, Tag } from 'lucide-react';
import { format } from 'date-fns';
import type { Post } from '../types';

interface PostCardProps {
  post: Post;
}

export default function PostCard({ post }: PostCardProps) {
  return (
    <article className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-[1.02]">
      <Link to={`/post/${post.slug}`}>
        <img
          src={post.coverImage}
          alt={post.title}
          className="w-full h-48 object-cover"
        />
      </Link>
      <div className="p-6">
        <div className="flex flex-wrap gap-2 mb-4">
          {post.categories.map((category) => (
            <Link
              key={category}
              to={`/category/${category.toLowerCase()}`}
              className="text-xs font-semibold bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-200 px-3 py-1 rounded-full"
            >
              {category}
            </Link>
          ))}
        </div>
        <Link to={`/post/${post.slug}`}>
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
            {post.title}
          </h2>
        </Link>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          {post.excerpt}
        </p>
        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 space-x-4">
          <div className="flex items-center">
            <User size={16} className="mr-1" />
            <Link to={`/author/${post.author.id}`} className="hover:text-blue-600 dark:hover:text-blue-400">
              {post.author.name}
            </Link>
          </div>
          <div className="flex items-center">
            <Calendar size={16} className="mr-1" />
            {format(new Date(post.date), 'MMM d, yyyy')}
          </div>
          <div className="flex items-center">
            <Tag size={16} className="mr-1" />
            {post.tags.length} tags
          </div>
        </div>
      </div>
    </article>
  );
}