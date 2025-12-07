import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { BLOG_POSTS } from '../constants';
import { ArrowLeft, Calendar, User } from 'lucide-react';

const BlogPost: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const post = BLOG_POSTS.find(p => p.id === id);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <div className="pt-24 min-h-screen bg-white">
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Link to="/blog" className="inline-flex items-center text-gray-500 hover:text-accent-600 mb-8 transition-colors">
          <ArrowLeft className="mr-2" size={16} /> Back to Blog
        </Link>

        <div className="mb-8">
          <span className="text-accent-600 font-bold tracking-wider text-sm uppercase mb-2 block">{post.category}</span>
          <h1 className="text-3xl md:text-5xl font-extrabold text-primary-900 mb-6 leading-tight">
            {post.title}
          </h1>
          <div className="flex items-center gap-6 text-gray-500 text-sm">
            <div className="flex items-center gap-2">
              <Calendar size={16} />
              {post.date}
            </div>
            <div className="flex items-center gap-2">
              <User size={16} />
              {post.author}
            </div>
          </div>
        </div>

        <div className="w-full aspect-video rounded-3xl overflow-hidden mb-12 shadow-lg">
          <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
        </div>

        <div 
          className="prose prose-lg prose-slate prose-headings:text-primary-900 prose-headings:font-bold prose-a:text-accent-600 hover:prose-a:text-accent-500 prose-img:rounded-2xl"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </article>
    </div>
  );
};

export default BlogPost;