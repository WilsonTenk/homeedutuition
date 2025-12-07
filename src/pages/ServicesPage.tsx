import React from 'react';
import { SERVICES } from '../constants';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const ServicesPage: React.FC = () => {
  return (
    <div className="pt-24 min-h-screen bg-slate-50">
      <section className="bg-primary-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white bg-[size:40px_40px] opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6">Our Programs</h1>
          <p className="text-xl text-primary-200 max-w-2xl mx-auto">
            Comprehensive tuition tailored to national and international curriculums.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 gap-12">
          {SERVICES.map((service, index) => (
            <div key={service.id} className={`flex flex-col lg:flex-row items-center gap-12 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              <div className="w-full lg:w-1/2">
                <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 h-full flex flex-col justify-center items-center text-center lg:items-start lg:text-left hover:shadow-2xl transition-shadow duration-300">
                  <div className="h-20 w-20 rounded-2xl bg-accent-50 text-accent-600 flex items-center justify-center mb-6">
                    <service.icon size={40} />
                  </div>
                  <h3 className="text-3xl font-bold text-primary-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                    {service.description}
                  </p>
                  <Link 
                    to={`/services/${service.id}`}
                    className="inline-flex items-center text-accent-600 font-bold hover:text-accent-700 transition-colors text-lg"
                  >
                    View Curriculum Details <ArrowRight className="ml-2" size={20} />
                  </Link>
                </div>
              </div>
              <div className="w-full lg:w-1/2">
                {/* Placeholder visual for each service - could be dynamic images in real app */}
                <div className="aspect-video rounded-3xl bg-primary-100 flex items-center justify-center overflow-hidden relative">
                   <div className="absolute inset-0 bg-primary-900/10"></div>
                   <service.icon className="text-primary-200 w-32 h-32 opacity-50" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;