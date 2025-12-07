import React from 'react';
import { Quote, Star } from 'lucide-react';
import { TESTIMONIALS } from '../constants';

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <span className="text-accent-600 font-bold tracking-widest uppercase text-sm">Testimonials</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-primary-900 mt-2">Trusted by Parents & Students</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div key={t.id} className="bg-slate-50 p-8 rounded-3xl relative hover:-translate-y-2 transition-transform duration-300 ease-out border border-transparent hover:border-accent-200 hover:shadow-xl hover:shadow-accent-900/5 group">
              <div className="flex gap-1 mb-6">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} size={16} className="text-yellow-400 fill-current" />
                ))}
              </div>
              
              <Quote className="absolute top-8 right-8 text-primary-200 h-12 w-12 group-hover:text-accent-200 transition-colors" />
              
              <p className="text-gray-700 mb-8 relative z-10 leading-relaxed font-medium">
                "{t.content}"
              </p>
              
              <div className="flex items-center gap-4 pt-6 border-t border-gray-200">
                <div className="h-12 w-12 rounded-full bg-primary-900 text-white flex items-center justify-center font-bold text-lg shadow-md">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="text-primary-900 font-bold text-base">{t.name}</p>
                  <p className="text-accent-600 text-xs font-bold uppercase tracking-wide">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;