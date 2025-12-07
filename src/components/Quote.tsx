import React, { useState } from 'react';
import Button from './Button';
import { Calculator, CheckCircle2, AlertCircle } from 'lucide-react';

const Quote: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [days, setDays] = useState(2);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate network request
    setTimeout(() => {
      setSubmitted(true);
      setLoading(false);
    }, 1500);
  };

  const handleDaysChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseInt(e.target.value);
    if (!isNaN(val)) {
      setDays(val);
    }
  };

  if (submitted) {
    return (
      <section id="quote" className="py-24 bg-primary-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white bg-[size:30px_30px] opacity-5"></div>
        <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
          <div className="mx-auto w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mb-8 shadow-xl shadow-green-900/20">
            <CheckCircle2 size={40} className="text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">Request Received!</h2>
          <p className="text-xl text-primary-100 leading-relaxed mb-8">
            Thank you for choosing Home Edu Tuition! We have successfully received your request. Our team is currently reviewing your requirements and will contact you shortly to finalize your personalized tuition plan.
          </p>
          <Button variant="white" onClick={() => setSubmitted(false)}>
            Submit Another Request
          </Button>
        </div>
      </section>
    );
  }

  return (
    <section id="quote" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          
          {/* Header Info */}
          <div className="w-full lg:w-1/3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-50 text-accent-700 text-xs font-bold mb-6">
              <Calculator size={14} />
              Get Started
            </div>
            <h2 className="text-4xl font-extrabold text-primary-900 mb-6">
              Get Your Tuition Quote
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              Fill out the form to let us know exactly what your child needs. We create custom plans based on curriculum, grade level, and intensity.
            </p>
            
            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200">
              <h4 className="font-bold text-primary-900 mb-2">Why Book with Us?</h4>
              <ul className="space-y-3 text-sm text-gray-600">
                <li className="flex gap-2"><CheckCircle2 size={16} className="text-green-600 flex-shrink-0" /> Free initial assessment</li>
                <li className="flex gap-2"><CheckCircle2 size={16} className="text-green-600 flex-shrink-0" /> Background-checked tutors</li>
                <li className="flex gap-2"><CheckCircle2 size={16} className="text-green-600 flex-shrink-0" /> Replacement guarantee</li>
              </ul>
            </div>
          </div>

          {/* Form */}
          <div className="w-full lg:w-2/3 bg-white rounded-3xl shadow-xl shadow-gray-200/50 border border-gray-100 p-8 lg:p-10">
            <form onSubmit={handleSubmit} className="space-y-8">
              
              {/* Personal Details */}
              <div>
                <h3 className="text-lg font-bold text-primary-900 mb-4 border-b border-gray-100 pb-2">Parent / Guardian Details</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="quote-name" className="text-sm font-semibold text-gray-700">Full Name</label>
                    <input required type="text" id="quote-name" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-gray-200 focus:ring-2 focus:ring-accent-500 focus:border-transparent outline-none" placeholder="Enter your name" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="quote-location" className="text-sm font-semibold text-gray-700">Location / Area</label>
                    <input required type="text" id="quote-location" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-gray-200 focus:ring-2 focus:ring-accent-500 focus:border-transparent outline-none" placeholder="e.g. East Legon, Accra" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="quote-email" className="text-sm font-semibold text-gray-700">Email Address</label>
                    <input required type="email" id="quote-email" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-gray-200 focus:ring-2 focus:ring-accent-500 focus:border-transparent outline-none" placeholder="email@example.com" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="quote-phone" className="text-sm font-semibold text-gray-700">Phone Number</label>
                    <input required type="tel" id="quote-phone" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-gray-200 focus:ring-2 focus:ring-accent-500 focus:border-transparent outline-none" placeholder="054 XXX XXXX" />
                  </div>
                </div>
              </div>

              {/* Tuition Details */}
              <div>
                <h3 className="text-lg font-bold text-primary-900 mb-4 border-b border-gray-100 pb-2">Tuition Requirements</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="space-y-2">
                    <label htmlFor="curriculum" className="text-sm font-semibold text-gray-700">Curriculum</label>
                    <select id="curriculum" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-gray-200 focus:ring-2 focus:ring-accent-500 focus:border-transparent outline-none appearance-none">
                      <option>GES (Local)</option>
                      <option>Cambridge (IGCSE/A-Level)</option>
                      <option>IB (International Baccalaureate)</option>
                      <option>SAT / GRE / TOEFL</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="grade" className="text-sm font-semibold text-gray-700">Student's Grade/Class</label>
                    <input required type="text" id="grade" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-gray-200 focus:ring-2 focus:ring-accent-500 focus:border-transparent outline-none" placeholder="e.g. Grade 5, JHS 2" />
                  </div>
                </div>

                <div className="space-y-2 mb-6">
                  <label htmlFor="subjects" className="text-sm font-semibold text-gray-700">List Specific Subjects</label>
                  <textarea required id="subjects" rows={3} className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-gray-200 focus:ring-2 focus:ring-accent-500 focus:border-transparent outline-none resize-none" placeholder="e.g. Mathematics, Science, French, Coding"></textarea>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
                  <div className="space-y-2">
                    <label htmlFor="num-subjects" className="text-sm font-semibold text-gray-700">Total Number of Subjects</label>
                    <input type="number" min="1" id="num-subjects" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-gray-200 focus:ring-2 focus:ring-accent-500 focus:border-transparent outline-none" placeholder="e.g. 3" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="days" className="text-sm font-semibold text-gray-700">Days per Week (Min 2)</label>
                    <input 
                      type="number" 
                      id="days" 
                      min="2" 
                      max="7"
                      value={days}
                      onChange={handleDaysChange}
                      className={`w-full px-4 py-3 rounded-xl bg-slate-50 border focus:ring-2 focus:ring-accent-500 focus:border-transparent outline-none ${days < 2 ? 'border-red-300 ring-2 ring-red-100' : 'border-gray-200'}`} 
                    />
                    {days < 2 && (
                      <p className="text-red-500 text-xs flex items-center gap-1 mt-1">
                        <AlertCircle size={12} /> Minimum 2 days required
                      </p>
                    )}
                  </div>
                </div>
              </div>

              <Button type="submit" className="w-full h-14 text-lg shadow-lg shadow-accent-600/20" disabled={days < 2 || loading}>
                {loading ? 'Submitting...' : 'Request Quote'}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Quote;