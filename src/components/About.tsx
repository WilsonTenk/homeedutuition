import React from 'react';
import { Check, Users, Trophy } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Content */}
          <div className="w-full lg:w-1/2 order-2 lg:order-1">
            <div className="inline-block px-4 py-1.5 bg-accent-50 text-accent-700 rounded-full text-sm font-bold tracking-wide mb-6">
              WHO WE ARE
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-primary-900 mb-6 leading-tight">
              We Don't Just Teach.<br/>
              We <span className="text-accent-600">Inspire Confidence.</span>
            </h2>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Home Edu Tuition is Ghana's trusted partner for academic excellence. We understand that every child learns differently. That's why we move beyond the classroom model to provide personalized, one-on-one attention that builds both grades and self-belief.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
              <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-blue-100 rounded-lg text-primary-700"><Users size={20}/></div>
                  <h4 className="font-bold text-primary-900">Expert Tutors</h4>
                </div>
                <p className="text-sm text-gray-500">Rigorous vetting process to ensure safety & quality.</p>
              </div>
              <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-pink-100 rounded-lg text-accent-700"><Trophy size={20}/></div>
                  <h4 className="font-bold text-primary-900">Proven Results</h4>
                </div>
                <p className="text-sm text-gray-500">Track record of improving grades within 3 months.</p>
              </div>
            </div>

            <ul className="space-y-4">
              {["Personalized Learning Plans", "Regular Progress Reports", "Exam-Focused Preparation"].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-accent-600 flex items-center justify-center text-white">
                    <Check size={14} strokeWidth={3} />
                  </div>
                  <span className="text-gray-700 font-medium text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Image Grid - Masonry style */}
          <div className="w-full lg:w-1/2 order-1 lg:order-2">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4 mt-12">
                <img 
                  src="https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                  alt="Tutor helping student" 
                  className="rounded-3xl shadow-lg w-full h-64 object-cover hover:scale-[1.02] transition-transform duration-500"
                />
                <div className="bg-primary-900 p-6 rounded-3xl text-white text-center flex flex-col justify-center h-48 shadow-xl">
                  <span className="text-4xl font-bold text-accent-500 mb-1">100%</span>
                  <span className="text-sm font-medium opacity-80">Dedication to<br/>Student Success</span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-accent-50 p-6 rounded-3xl flex items-center justify-center h-48 border border-accent-100">
                   <p className="text-accent-900 font-bold text-xl text-center">"From Average to Excellent"</p>
                </div>
                <img 
                  src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                  alt="Happy student" 
                  className="rounded-3xl shadow-lg w-full h-64 object-cover hover:scale-[1.02] transition-transform duration-500"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;