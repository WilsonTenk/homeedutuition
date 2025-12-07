import React from 'react';
import { SERVICES } from '../constants';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-accent-600 font-bold tracking-widest uppercase text-sm mb-3">Our Expertise</h2>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-primary-900 leading-tight">
              Comprehensive Support <br/> For Every Stage.
            </h3>
          </div>
          <p className="text-gray-600 text-lg max-w-md">
            Whether it's standardized tests or daily homework, we have a specialized curriculum for your needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service) => (
            <Link 
              key={service.id}
              to={`/services/${service.id}`}
              className="group bg-white rounded-3xl p-8 shadow-sm hover:shadow-2xl hover:shadow-primary-900/5 transition-all duration-300 border border-gray-100 relative overflow-hidden block"
            >
              <div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ArrowUpRight className="text-accent-600 h-6 w-6" />
              </div>
              
              <div className="h-16 w-16 rounded-2xl bg-primary-50 text-primary-900 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-accent-600 group-hover:text-white transition-all duration-300">
                <service.icon size={32} strokeWidth={1.5} />
              </div>
              
              <h4 className="text-2xl font-bold text-gray-900 mb-3">
                {service.title}
              </h4>
              
              <p className="text-gray-500 leading-relaxed mb-6 group-hover:text-gray-600">
                {service.description}
              </p>

              <div className="text-accent-600 font-bold text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
                Read More <ArrowUpRight size={16} />
              </div>

              <div className="w-full h-1 bg-gray-100 rounded-full overflow-hidden mt-6">
                <div className="h-full bg-accent-600 w-0 group-hover:w-full transition-all duration-500 ease-out"></div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;