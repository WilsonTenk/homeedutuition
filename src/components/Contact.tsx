import React from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react';
import { COMPANY_INFO } from '../constants';
import Button from './Button';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          
          {/* Contact Info */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-primary-700 text-xs font-bold mb-6">
              <MessageSquare size={14} />
              Let's Talk
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-primary-900 mb-6">Ready to improve your child's grades?</h2>
            <p className="text-gray-600 text-lg mb-12 leading-relaxed">
              We offer a <span className="font-bold text-accent-600">Free Consultation</span> to assess your needs and match you with the perfect tutor. Reach out today.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-6 group">
                <div className="flex-shrink-0 h-14 w-14 rounded-2xl bg-white text-accent-600 flex items-center justify-center shadow-sm border border-gray-100 group-hover:scale-110 group-hover:bg-accent-600 group-hover:text-white transition-all duration-300">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-primary-900 font-bold text-lg">Call or WhatsApp</p>
                  <p className="text-gray-500 mb-1 text-sm">Available 24/7 for inquiries</p>
                  <a href={`tel:${COMPANY_INFO.phone.replace(/\s/g, '')}`} className="text-accent-600 font-bold text-xl hover:underline">
                    {COMPANY_INFO.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="flex-shrink-0 h-14 w-14 rounded-2xl bg-white text-accent-600 flex items-center justify-center shadow-sm border border-gray-100 group-hover:scale-110 group-hover:bg-accent-600 group-hover:text-white transition-all duration-300">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-primary-900 font-bold text-lg">Email Us</p>
                  <p className="text-gray-500 mb-1 text-sm">Send us your requirements</p>
                  <a href={`mailto:${COMPANY_INFO.email}`} className="text-gray-700 font-medium hover:text-accent-600 transition-colors">
                    {COMPANY_INFO.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="flex-shrink-0 h-14 w-14 rounded-2xl bg-white text-accent-600 flex items-center justify-center shadow-sm border border-gray-100 group-hover:scale-110 group-hover:bg-accent-600 group-hover:text-white transition-all duration-300">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-primary-900 font-bold text-lg">Visit Us</p>
                  <p className="text-gray-600">
                    {COMPANY_INFO.address}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white rounded-3xl shadow-xl shadow-gray-200/50 p-8 lg:p-10 border border-gray-100 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent-50 rounded-bl-full -mr-8 -mt-8 opacity-50"></div>
            
            <h3 className="text-2xl font-bold text-primary-900 mb-8 relative z-10">Send a Message</h3>
            
            <form className="space-y-6 relative z-10" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-semibold text-gray-700">Full Name</label>
                  <input 
                    type="text" 
                    id="name"
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-gray-200 focus:ring-2 focus:ring-accent-500 focus:border-transparent outline-none transition-all placeholder:text-gray-400"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-semibold text-gray-700">Phone Number</label>
                  <input 
                    type="tel" 
                    id="phone"
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-gray-200 focus:ring-2 focus:ring-accent-500 focus:border-transparent outline-none transition-all placeholder:text-gray-400"
                    placeholder="+233..."
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-semibold text-gray-700">Email Address</label>
                <input 
                  type="email" 
                  id="email"
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-gray-200 focus:ring-2 focus:ring-accent-500 focus:border-transparent outline-none transition-all placeholder:text-gray-400"
                  placeholder="john@example.com"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-semibold text-gray-700">How can we help?</label>
                <textarea 
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-gray-200 focus:ring-2 focus:ring-accent-500 focus:border-transparent outline-none transition-all resize-none placeholder:text-gray-400"
                  placeholder="Tell us about your child's needs (Grade, Subject, etc.)"
                ></textarea>
              </div>

              <Button type="submit" className="w-full gap-2 shadow-lg shadow-accent-600/30">
                Send Message
                <Send size={18} />
              </Button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;