import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'white';
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ variant = 'primary', children, className = '', ...props }) => {
  const baseStyles = "inline-flex items-center justify-center px-6 py-3 border text-base font-medium rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all duration-200 transform hover:-translate-y-0.5";
  
  const variants = {
    primary: "border-transparent text-white bg-accent-600 hover:bg-accent-500 focus:ring-accent-500",
    outline: "border-white text-white hover:bg-white hover:text-primary-900 focus:ring-white",
    white: "border-transparent text-primary-900 bg-white hover:bg-gray-50 focus:ring-gray-200",
  };

  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;