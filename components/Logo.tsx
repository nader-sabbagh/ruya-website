
import React from 'react';
import { Theme } from '../types';

interface LogoProps {
  theme: Theme;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

const Logo: React.FC<LogoProps> = ({ theme, className = "", size = "md" }) => {
  const sizeClasses = {
    sm: "text-2xl",
    md: "text-3xl",
    lg: "text-5xl",
    xl: "text-7xl md:text-9xl"
  };

  // Note: Placeholder for actual base64 images as requested
  // You can drop your base64 strings into the src of an <img> tag here later
  return (
    <div className={`font-bold tracking-tighter ${sizeClasses[size]} ${className} flex items-center gap-1`}>
      <span className={theme === 'dark' ? 'text-white' : 'text-black'}>RU'YA</span>
      <span className="text-[#e65c2e]">.</span>
    </div>
  );
};

export default Logo;
