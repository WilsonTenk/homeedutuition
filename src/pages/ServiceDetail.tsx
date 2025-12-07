import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { SERVICES } from '../constants';
import Button from '../components/Button';
import { CheckCircle2, ArrowLeft } from 'lucide-react';

const ServiceDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const service = SERVICES.find(s => s.id === id);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  return (
    <div className="pt-24 min-h-screen bg-white">
      {/* Header */}
      <section className="bg-primary-900 text-white py-20 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link to="/services" className="inline-flex items-center text-primary-300 hover:text-white mb-6 transition-colors">
            <ArrowLeft className="mr-2" size={16} /> Back to Programs
          </Link>
          <div className="flex items-center gap-6">
            <div className="h-16 w-16 rounded-xl bg-accent-600 flex items-center justify-center text-white flex-shrink-0">
              <service.icon size={32} />
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold">{service.title}</h1>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* Main Content */}
          <div className="md:col-span-2">
            <div 
              className="prose prose-lg prose-slate prose-headings:text-primary-900 prose-a:text-accent-600 hover:prose-a:text-accent-500 max-w-none"
              dangerouslySetInnerHTML={{ __html: service.longDescription || '' }}
            />
            
            <div className="mt-12 pt-8 border-t border-gray-100">
              <h3 className="text-xl font-bold text-primary-900 mb-6">Program Highlights</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {service.features?.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <CheckCircle2 className="text-green-500 flex-shrink-0" size={20} />
                    <span className="text-gray-700 font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar CTA */}
          <div>
            <div className="bg-slate-50 p-8 rounded-3xl border border-gray-200 sticky top-32">
              <h3 className="text-xl font-bold text-primary-900 mb-4">Enroll Today</h3>
              <p className="text-gray-600 mb-6 text-sm">
                Get a customized quote for {service.title} tuition. Spots fill up fast!
              </p>
              <Link to="/#quote">
                <Button className="w-full">Get a Quote</Button>
              </Link>
              <div className="mt-6 text-center">
                <p className="text-xs text-gray-500">Need to talk first?</p>
                <a href="tel:+233543462378" className="text-accent-600 font-bold text-sm hover:underline">
                  Call Us Now
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;