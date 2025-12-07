import React from 'react';

const Loading: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="relative">
        <div className="h-16 w-16 rounded-full border-4 border-slate-200"></div>
        <div className="absolute top-0 left-0 h-16 w-16 rounded-full border-4 border-accent-600 border-t-transparent animate-spin"></div>
        <div className="mt-4 text-center text-sm font-bold text-primary-900 tracking-widest uppercase animate-pulse">
          Loading
        </div>
      </div>
    </div>
  );
};

export default Loading;