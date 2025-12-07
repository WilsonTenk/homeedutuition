import React from 'react';
import About from '../components/About';
import Stats from '../components/Stats';
import { ShieldCheck, Target, Heart } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <div className="pt-24">
      {/* Header */}
      <section className="bg-primary-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white bg-[size:40px_40px] opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6">About Home Edu Tuition</h1>
          <p className="text-xl text-primary-200 max-w-2xl mx-auto">
            Empowering students across Ghana with personalized education that builds confidence and delivers results.
          </p>
        </div>
      </section>

      <About />
      <Stats />

      {/* Values */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-primary-900">Our Core Values</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 text-center">
              <div className="w-16 h-16 bg-blue-100 text-primary-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <ShieldCheck size={32} />
              </div>
              <h3 className="text-xl font-bold text-primary-900 mb-3">Integrity & Trust</h3>
              <p className="text-gray-600">We vet every tutor thoroughly to ensure your child is in safe, capable hands.</p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 text-center">
              <div className="w-16 h-16 bg-pink-100 text-accent-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target size={32} />
              </div>
              <h3 className="text-xl font-bold text-primary-900 mb-3">Excellence</h3>
              <p className="text-gray-600">We don't settle for average. Our goal is to help every student achieve their personal best.</p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 text-center">
              <div className="w-16 h-16 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart size={32} />
              </div>
              <h3 className="text-xl font-bold text-primary-900 mb-3">Passion</h3>
              <p className="text-gray-600">We love teaching. That enthusiasm translates into better engagement for your child.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;