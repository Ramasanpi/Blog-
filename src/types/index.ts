export interface Post {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  coverImage: string;
  date: string;
  author: Author;
  categories: string[];
  tags: string[];
}

export interface Author {
  id: string;
  name: string;
  avatar: string;
  bio: string;
  social: {
    twitter?: string;
    github?: string;
    linkedin?: string;
  };
}

export interface Comment {
  id: string;
  postId: string;
  author: string;
  content: string;
  date: string;
  avatar: string;
}