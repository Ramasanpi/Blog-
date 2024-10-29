import React from 'react';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import CommentSection from '../components/CommentSection';
import ShareButtons from '../components/ShareButtons';

export default function PostPage() {
  const { slug } = useParams();

  // Mock data - replace with actual data fetching
  const post = {
    id: '1',
    title: 'Getting Started with React and TypeScript',
    slug: 'getting-started-react-typescript',
    content: `# Getting Started with React and TypeScript

A comprehensive guide to setting up and using React with TypeScript.

## Installation

\`\`\`bash
npm create vite@latest my-app -- --template react-ts
\`\`\`

## Basic Usage

Here's a simple example of a typed component:

\`\`\`typescript
interface Props {
  name: string;
  age: number;
}

function Greeting({ name, age }: Props) {
  return <h1>Hello, {name}! You are {age} years old.</h1>;
}
\`\`\`
`,
    coverImage: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=1200&q=80',
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
  };

  const comments = [
    {
      id: '1',
      postId: '1',
      author: 'Jane Smith',
      content: 'Great article! Very helpful for beginners.',
      date: '2024-03-11',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80'
    }
  ];

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <img
        src={post.coverImage}
        alt={post.title}
        className="w-full h-64 object-cover rounded-lg mb-8"
      />

      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
        {post.title}
      </h1>

      <div className="flex items-center space-x-4 mb-8">
        <img
          src={post.author.avatar}
          alt={post.author.name}
          className="w-12 h-12 rounded-full"
        />
        <div>
          <p className="font-semibold text-gray-900 dark:text-white">
            {post.author.name}
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {new Date(post.date).toLocaleDateString()}
          </p>
        </div>
      </div>

      <div className="prose dark:prose-invert max-w-none mb-8">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={{
            code({ node, inline, className, children, ...props }) {
              const match = /language-(\w+)/.exec(className || '');
              return !inline && match ? (
                <SyntaxHighlighter
                  language={match[1]}
                  PreTag="div"
                  {...props}
                >
                  {String(children).replace(/\n$/, '')}
                </SyntaxHighlighter>
              ) : (
                <code className={className} {...props}>
                  {children}
                </code>
              );
            }
          }}
        >
          {post.content}
        </ReactMarkdown>
      </div>

      <div className="border-t border-gray-200 dark:border-gray-700 pt-8">
        <ShareButtons
          url={window.location.href}
          title={post.title}
        />
      </div>

      <CommentSection postId={post.id} comments={comments} />
    </article>
  );
}