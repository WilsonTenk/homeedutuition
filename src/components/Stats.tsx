import React from 'react';
import { STATS } from '../constants';

const Stats: React.FC = () => {
  return (
    <section className="bg-primary-900 py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8">
          {STATS.map((stat, index) => (
            <div key={index} className="text-center group cursor-default">
              <div className="mb-2 relative inline-block">
                <p className="text-5xl md:text-6xl font-black text-white tracking-tight group-hover:scale-110 transition-transform duration-300">
                  {stat.value}
                </p>
                {stat.suffix && <span className="absolute -top-2 -right-6 text-3xl text-accent-500 font-bold">{stat.suffix}</span>}
              </div>
              <p className="text-primary-200 text-sm md:text-base font-semibold uppercase tracking-widest mt-2 border-t border-primary-700 inline-block pt-4 px-2">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;