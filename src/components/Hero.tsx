import React from 'react';
import Button from './Button';
import { ArrowRight, Star, ShieldCheck, GraduationCap, PlayCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Hero: React.FC = () => {
  const navigate = useNavigate();

  const handleQuoteClick = () => {
    navigate('/');
    setTimeout(() => {
        document.getElementById('quote')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <section id="home" className="relative bg-primary-900 pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden min-h-screen flex items-center">
      {/* Background Tech Grid */}
      <div className="absolute inset-0 bg-grid-white bg-[size:40px_40px] opacity-10"></div>
      
      {/* Ambient Glows */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent-600/20 rounded-full mix-blend-screen filter blur-[120px] animate-blob"></div>
      <div 
        className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/20 rounded-full mix-blend-screen filter blur-[100px] animate-blob"
        style={{ animationDelay: '4s' }}
      ></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <div className="text-center lg:text-left relative">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm text-accent-300 text-xs font-bold uppercase tracking-widest mb-8 hover:bg-white/10 transition-colors cursor-default">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-500"></span>
              </span>
              Now Enrolling for 2025
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.1] mb-8">
              Expert Tuition at <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 via-pink-500 to-purple-500 animate-shimmer bg-[length:200%_100%]">
                Your Doorstep.
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light">
              We match your child with top-tier tutors for <span className="text-white font-semibold">GES, Cambridge & IB</span> curricula. From Primary 1 to SHS, we build confidence and grades.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                variant="primary" 
                className="h-14 px-8 text-lg shadow-lg shadow-accent-600/25 hover:shadow-accent-600/40 border border-transparent"
                onClick={handleQuoteClick}
              >
                Find a Tutor
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <button 
                className="h-14 px-8 rounded-full border border-white/20 text-white font-semibold hover:bg-white/10 hover:border-white/40 transition-all flex items-center justify-center gap-3"
                onClick={() => navigate('/about')}
              >
                <PlayCircle size={20} />
                About Us
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="mt-12 pt-8 border-t border-white/10 flex flex-wrap gap-8 justify-center lg:justify-start">
              <div>
                <p className="text-3xl font-bold text-white">98%</p>
                <p className="text-sm text-gray-400 uppercase tracking-wider">Pass Rate</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-white">60+</p>
                <p className="text-sm text-gray-400 uppercase tracking-wider">Active Families</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex -space-x-3">
                  {[1,2,3,4].map((i) => (
                    <div key={i} className="h-10 w-10 rounded-full border-2 border-primary-900 bg-gray-700 overflow-hidden">
                      <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="User" className="h-full w-full object-cover" />
                    </div>
                  ))}
                </div>
                <div className="text-left">
                  <div className="flex text-yellow-400">
                    <Star size={14} fill="currentColor" />
                    <Star size={14} fill="currentColor" />
                    <Star size={14} fill="currentColor" />
                    <Star size={14} fill="currentColor" />
                    <Star size={14} fill="currentColor" />
                  </div>
                  <p className="text-xs text-gray-400">Trusted by Parents</p>
                </div>
              </div>
            </div>
          </div>

          {/* Visual Content */}
          <div className="relative mt-12 lg:mt-0 perspective-1000">
            {/* Main Image Container */}
            <div className="relative z-10 w-full aspect-[4/5] md:aspect-square rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl bg-primary-800/50 group">
              <div className="absolute inset-0 bg-gradient-to-br from-accent-600/20 to-primary-900/80 mix-blend-overlay z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                alt="Student succeeding" 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              
              {/* Floating Glass Card 1 (Top Right) */}
              <div className="absolute top-8 right-8 bg-white/10 backdrop-blur-xl border border-white/20 p-4 rounded-2xl shadow-xl animate-float z-20 max-w-[180px]">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-green-500/20 rounded-lg text-green-400">
                    <ShieldCheck size={20} />
                  </div>
                  <span className="font-bold text-white text-sm">Vetted Tutors</span>
                </div>
                <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-green-400 w-[100%]"></div>
                </div>
              </div>

              {/* Floating Glass Card 2 (Bottom Left) */}
              <div 
                className="absolute bottom-8 left-8 bg-primary-900/80 backdrop-blur-xl border border-white/10 p-5 rounded-2xl shadow-2xl animate-float z-20 flex items-center gap-4 pr-8"
                style={{ animationDelay: '2s' }}
              >
                <div className="h-12 w-12 rounded-full bg-gradient-to-br from-accent-500 to-purple-600 flex items-center justify-center text-white shadow-lg">
                  <GraduationCap size={24} />
                </div>
                <div>
                  <p className="text-white font-bold">Excellent</p>
                  <p className="text-accent-300 text-xs">Results Guaranteed</p>
                </div>
              </div>
            </div>

            {/* Decorative Elements around image */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-accent-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000"></div>
          </div>

        </div>
      </div>

      {/* Curve Separator */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-[calc(100%+1.3px)] h-[60px] lg:h-[100px] fill-slate-50">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;