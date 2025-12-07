import React, { useState } from 'react';
import { Menu, X, Phone, ArrowRight } from 'lucide-react';
import { COMPANY_INFO, NAV_ITEMS } from '../constants';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleQuoteClick = () => {
    setIsOpen(false);
    if (location.pathname !== '/') {
      navigate('/#quote');
    } else {
      const element = document.getElementById('quote');
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <nav className="absolute top-0 left-0 right-0 z-[100] py-6 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer" onClick={() => navigate('/')}>
              <div className="w-8 h-8 rounded-lg bg-accent-600 flex items-center justify-center text-white font-bold text-lg">
                H
              </div>
              <span className="font-bold text-2xl tracking-tighter text-white">
                HomeEdu<span className="text-accent-500">.</span>
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <div className="flex space-x-8">
                {NAV_ITEMS.map((item) => (
                  <NavLink
                    key={item.label}
                    to={item.href}
                    className={({ isActive }) => `text-sm font-medium transition-colors relative group ${isActive ? 'text-white' : 'text-gray-200 hover:text-white'}`}
                  >
                    {({ isActive }) => (
                      <>
                        {item.label}
                        <span className={`absolute -bottom-1 left-0 h-0.5 bg-accent-500 transition-all duration-300 ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                      </>
                    )}
                  </NavLink>
                ))}
              </div>
              
              <div className="h-6 w-px bg-white/20"></div>

              <button 
                onClick={handleQuoteClick}
                className="group flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-primary-900 text-sm font-bold transition-all hover:bg-accent-50 hover:scale-105"
              >
                <Phone size={16} className="text-accent-600" />
                <span>Get a Quote</span>
                <ArrowRight size={14} className="opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all" />
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-primary-950/95 backdrop-blur-xl md:hidden animate-in slide-in-from-top-10 fade-in duration-200">
          <div className="flex flex-col h-full pt-28 px-6 pb-6">
            <div className="space-y-4">
              {NAV_ITEMS.map((item) => (
                <NavLink
                  key={item.label}
                  to={item.href}
                  onClick={closeMenu}
                  className={({ isActive }) => `block text-3xl font-bold transition-colors py-2 text-left w-full ${isActive ? 'text-accent-500' : 'text-white hover:text-accent-500'}`}
                >
                  {item.label}
                </NavLink>
              ))}
              <button
                onClick={handleQuoteClick}
                className="block text-3xl font-bold text-white hover:text-accent-500 transition-colors py-2 text-left w-full"
              >
                Get a Quote
              </button>
            </div>
            
            <div className="mt-auto">
              <div className="p-6 rounded-3xl bg-white/5 border border-white/10">
                <p className="text-gray-400 text-sm mb-4">Ready to start?</p>
                <a 
                  href={`tel:${COMPANY_INFO.phone.replace(/\s/g, '')}`}
                  className="flex items-center justify-between text-white font-bold text-xl"
                >
                  {COMPANY_INFO.phone}
                  <div className="h-10 w-10 rounded-full bg-accent-600 flex items-center justify-center">
                    <Phone size={20} />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;