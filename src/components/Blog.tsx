import React from 'react';
import { BLOG_POSTS } from '../constants';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar } from 'lucide-react';

const Blog: React.FC = () => {
  return (
    <section id="blog" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <div>
            <span className="text-accent-600 font-bold tracking-widest uppercase text-sm">Blog & News</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-primary-900 mt-2">Latest Insights</h2>
          </div>
          <Link to="/blog" className="hidden md:flex items-center gap-2 text-primary-900 font-bold hover:text-accent-600 transition-colors">
            View All Posts <ArrowRight size={20} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post) => (
            <Link key={post.id} to={`/blog/${post.id}`} className="group cursor-pointer">
              <div className="rounded-3xl overflow-hidden mb-6 relative">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-primary-900 uppercase tracking-wide">
                  {post.category}
                </div>
              </div>
              <div className="flex items-center gap-2 text-gray-500 text-xs mb-3">
                <Calendar size={14} />
                <span>{post.date}</span>
              </div>
              <h3 className="text-xl font-bold text-primary-900 mb-3 group-hover:text-accent-600 transition-colors">
                {post.title}
              </h3>
              <p className="text-gray-600 text-sm line-clamp-3">
                {post.excerpt}
              </p>
            </Link>
          ))}
        </div>
        
        <div className="mt-12 text-center md:hidden">
          <Link to="/blog" className="inline-flex items-center gap-2 text-primary-900 font-bold hover:text-accent-600 transition-colors">
            View All Posts <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Blog;