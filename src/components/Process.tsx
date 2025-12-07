
import React from 'react';
import { FileText, UserCheck, PlayCircle, TrendingUp } from 'lucide-react';

const Process: React.FC = () => {
  const steps = [
    {
      icon: FileText,
      title: "Request a Tutor",
      description: "Fill out our brief form with your child's grade, curriculum, and specific struggles."
    },
    {
      icon: UserCheck,
      title: "Perfect Match",
      description: "We match you with a vetted tutor who fits your academic needs and learning style."
    },
    {
      icon: PlayCircle,
      title: "Start Learning",
      description: "Begin with a trial session to ensure the chemistry is right before committing."
    },
    {
      icon: TrendingUp,
      title: "See Results",
      description: "Watch confidence grow and grades improve with consistent, personalized guidance."
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-accent-600 font-bold tracking-widest uppercase text-sm">Simple Process</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-primary-900 mt-2">How It Works</h2>
        </div>

        <div className="relative grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-primary-200 to-transparent -z-10"></div>

          {steps.map((step, index) => (
            <div key={index} className="relative flex flex-col items-center text-center group">
              <div className="w-24 h-24 bg-white rounded-full border-4 border-primary-50 flex items-center justify-center mb-6 shadow-sm group-hover:border-accent-100 group-hover:scale-110 transition-all duration-300">
                <div className="w-16 h-16 bg-primary-900 text-white rounded-full flex items-center justify-center shadow-lg group-hover:bg-accent-600 transition-colors">
                  <step.icon size={28} />
                </div>
                {/* Number Badge */}
                <div className="absolute top-0 right-1/2 -mr-10 w-8 h-8 bg-slate-100 rounded-full border border-white flex items-center justify-center text-sm font-bold text-gray-400 group-hover:bg-accent-600 group-hover:text-white transition-colors">
                  {index + 1}
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-primary-900 mb-3 group-hover:text-accent-600 transition-colors">
                {step.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed px-4">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
