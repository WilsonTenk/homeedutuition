import React from 'react';
import Blog from '../components/Blog';

const BlogPage: React.FC = () => {
  return (
    <div className="pt-24 min-h-screen bg-slate-50">
      <section className="bg-primary-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white bg-[size:40px_40px] opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6">Our Blog</h1>
          <p className="text-xl text-primary-200 max-w-2xl mx-auto">
            Insights, study tips, and educational news for parents and students.
          </p>
        </div>
      </section>

      <Blog />
    </div>
  );
};

export default BlogPage;