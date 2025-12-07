import React, { useState } from 'react';
import Button from '../components/Button';
import { UploadCloud, CheckCircle, Briefcase, GraduationCap } from 'lucide-react';

const TutorApplication: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [fileName, setFileName] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFileName(e.target.files[0].name);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    window.scrollTo(0, 0);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-slate-50 pt-32 pb-20 px-4">
        <div className="max-w-2xl mx-auto bg-white rounded-3xl p-12 text-center shadow-xl border border-gray-100">
          <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle size={48} className="text-green-600" />
          </div>
          <h2 className="text-3xl font-bold text-primary-900 mb-4">Application Received</h2>
          <p className="text-gray-600 mb-8">
            Thank you for applying to join the Home Edu Tuition team. We have received your details and CV. Our recruitment team will review your application and contact you if your profile matches our current needs.
          </p>
          <a href="/" className="text-accent-600 font-bold hover:underline">Return Home</a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-primary-900 mb-4">Join Our Team</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We are always looking for passionate, qualified, and experienced tutors to help students excel. Apply now to become a partner in education.
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
          <div className="bg-primary-900 p-6 md:p-8 text-white">
            <div className="flex items-center gap-3">
              <Briefcase className="text-accent-500" />
              <h2 className="text-xl font-bold">Tutor Application Form</h2>
            </div>
            <p className="text-primary-200 text-sm mt-2 ml-9">Please fill out all details accurately to increase your chances of selection.</p>
          </div>

          <form onSubmit={handleSubmit} className="p-6 md:p-10 space-y-8">
            
            {/* Personal Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700">Full Name</label>
                <input required type="text" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-gray-200 focus:ring-2 focus:ring-accent-500 outline-none" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700">Date of Birth</label>
                <input required type="date" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-gray-200 focus:ring-2 focus:ring-accent-500 outline-none" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700">Email Address</label>
                <input required type="email" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-gray-200 focus:ring-2 focus:ring-accent-500 outline-none" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700">Phone Number</label>
                <input required type="tel" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-gray-200 focus:ring-2 focus:ring-accent-500 outline-none" />
              </div>
              <div className="space-y-2 md:col-span-2">
                <label className="text-sm font-bold text-gray-700">Residential Address / Location</label>
                <input required type="text" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-gray-200 focus:ring-2 focus:ring-accent-500 outline-none" placeholder="e.g. Madina, Accra" />
              </div>
            </div>

            <hr className="border-gray-100" />

            {/* Expertise */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <GraduationCap className="text-accent-600" size={20} />
                <h3 className="text-lg font-bold text-primary-900">Qualification & Experience</h3>
              </div>
              
              <div className="grid grid-cols-1 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">Highest Education Qualification</label>
                  <select className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-gray-200 focus:ring-2 focus:ring-accent-500 outline-none">
                    <option>Bachelor's Degree</option>
                    <option>Master's Degree</option>
                    <option>PhD</option>
                    <option>Diploma / HND</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">Subjects You Can Teach</label>
                  <textarea required rows={3} className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-gray-200 focus:ring-2 focus:ring-accent-500 outline-none" placeholder="e.g. Core Math, Elective Math, Physics (SHS Level)"></textarea>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">Teaching Experience (Years)</label>
                  <input required type="number" min="0" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-gray-200 focus:ring-2 focus:ring-accent-500 outline-none" />
                </div>
              </div>
            </div>

            <hr className="border-gray-100" />

            {/* CV Upload */}
            <div className="space-y-4">
              <label className="text-sm font-bold text-gray-700">Upload CV / Resume (PDF or Word)</label>
              <div className="relative">
                <input 
                  type="file" 
                  accept=".pdf,.doc,.docx" 
                  onChange={handleFileChange}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10" 
                />
                <div className="w-full border-2 border-dashed border-gray-300 rounded-xl p-8 flex flex-col items-center justify-center bg-slate-50 hover:bg-slate-100 transition-colors">
                  <div className="w-12 h-12 bg-white rounded-full shadow-sm flex items-center justify-center mb-3 text-accent-600">
                    <UploadCloud size={24} />
                  </div>
                  <p className="text-primary-900 font-medium">
                    {fileName ? fileName : "Click to upload or drag and drop"}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">PDF, DOC up to 5MB</p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <Button type="submit" className="w-full h-14 text-lg">Submit Application</Button>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
};

export default TutorApplication;