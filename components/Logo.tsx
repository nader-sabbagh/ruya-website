
import React, { useState } from 'react';
import { Theme } from '../types';

interface LogoProps {
  theme: Theme;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

const Logo: React.FC<LogoProps> = ({ theme, className = "", size = "md" }) => {
  const [imgError, setImgError] = useState(false);

  // Mapping sizes to height for images to keep layout consistent
  const heightClasses = {
    sm: "h-18",
    md: "h-24",
    lg: "h-36",
    xl: "h-48 md:h-72"
  };

  // Mapping sizes to font size for the text fallback
  const textClasses = {
    sm: "text-6xl",
    md: "text-9xl",
    lg: "text-15xl",
    xl: "text-21xl md:text-27xl"
  };

  // The component looks for these specific filenames in your root directory
  // You can upload .png, .svg, or .webp. If you use a different extension, 
  // just change it here or upload them as .png even if they are renamed svgs.
  const logoSrc = theme === 'dark' ? '/logo-dark.png' : '/logo-light.png';

  return (
    <div className={`${className} flex items-center`}>
      {!imgError ? (
        <img 
          src={logoSrc} 
          alt="Ru'ya Creative"
          className={`${heightClasses[size]} w-auto object-contain transition-opacity duration-500`}
          onError={() => setImgError(true)}
        />
      ) : (
        <div className={`font-bold tracking-tighter ${textClasses[size]} flex items-center gap-1`}>
          <span className={theme === 'dark' ? 'text-white' : 'text-black'}>RU'YA</span>
          <span className="text-[#e65c2e]">.</span>
        </div>
      )}
    </div>
  );
};

export default Logo;
