import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Heart } from 'lucide-react';
import { COMPANY_INFO, NAV_ITEMS } from '../constants';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Brand */}
          <div className="space-y-6">
            <h3 className="text-3xl font-extrabold text-white tracking-tight">
              HomeEdu<span className="text-accent-500">.</span>
            </h3>
            <p className="text-sm leading-relaxed text-gray-400">
              Premier home tuition service in Ghana. We bridge the gap between school struggles and academic excellence through personalized, expert tutoring.
            </p>
            <div className="flex gap-4">
              <a href="#" className="h-10 w-10 rounded-full bg-primary-800 flex items-center justify-center hover:bg-accent-600 text-white transition-all duration-300"><Facebook size={18} /></a>
              <a href="#" className="h-10 w-10 rounded-full bg-primary-800 flex items-center justify-center hover:bg-accent-600 text-white transition-all duration-300"><Twitter size={18} /></a>
              <a href="https://www.instagram.com/homeedutuition/" target="_blank" rel="noreferrer" className="h-10 w-10 rounded-full bg-primary-800 flex items-center justify-center hover:bg-accent-600 text-white transition-all duration-300"><Instagram size={18} /></a>
              <a href="#" className="h-10 w-10 rounded-full bg-primary-800 flex items-center justify-center hover:bg-accent-600 text-white transition-all duration-300"><Linkedin size={18} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6 text-lg">Quick Links</h4>
            <ul className="space-y-4 text-sm">
              {NAV_ITEMS.map((item) => (
                <li key={item.label}>
                  <Link to={item.href} className="hover:text-accent-400 transition-colors flex items-center gap-2">
                    <span className="h-1 w-1 bg-accent-500 rounded-full"></span>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold mb-6 text-lg">Our Programs</h4>
            <ul className="space-y-4 text-sm">
              <li><Link to="/services/ges" className="hover:text-accent-400 transition-colors">GES Curriculum</Link></li>
              <li><Link to="/services/cambridge" className="hover:text-accent-400 transition-colors">Cambridge Curriculum</Link></li>
              <li><Link to="/services/ib" className="hover:text-accent-400 transition-colors">IB Programme</Link></li>
              <li><Link to="/services/coding" className="hover:text-accent-400 transition-colors">Coding for Kids</Link></li>
              <li><Link to="/services/test-prep" className="hover:text-accent-400 transition-colors">Test Prep (SAT/GRE)</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-bold mb-6 text-lg">Newsletter</h4>
            <p className="text-xs text-gray-400 mb-4">
              Join our learning community—insights, updates, and more!
            </p>
            <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Your email address" 
                className="w-full px-4 py-3 rounded-lg bg-primary-800 border border-primary-700 focus:border-accent-500 focus:outline-none text-white text-sm transition-colors"
              />
              <button className="w-full px-4 py-3 bg-accent-600 hover:bg-accent-500 text-white rounded-lg text-sm font-bold uppercase tracking-wide transition-all shadow-lg shadow-accent-900/20">
                Subscribe
              </button>
            </form>
          </div>

        </div>

        <div className="border-t border-primary-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} {COMPANY_INFO.name}. All rights reserved.</p>
          <p className="flex items-center gap-1 mt-2 md:mt-0">
            Designed with <Heart size={12} className="text-accent-500 fill-current" /> in Accra
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;