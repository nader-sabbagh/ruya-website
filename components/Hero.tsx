
import React, { useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { Theme } from '../types';
import Logo from './Logo';

interface HeroProps {
  theme: Theme;
}

const Hero: React.FC<HeroProps> = ({ theme }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    mouseX.set(clientX);
    mouseY.set(clientY);
  };

  const scrollToNext = () => {
    const el = document.getElementById('philosophy');
    if (el) {
      const offset = 80;
      const elementPosition = el.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({ top: elementPosition - offset, behavior: 'smooth' });
    }
  };

  return (
    <div 
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6"
      onMouseMove={handleMouseMove}
    >
      {/* High-Visibility Interactive Grid Pattern */}
      <div className={`absolute inset-0 transition-opacity duration-1000 ${theme === 'dark' ? 'opacity-80' : 'opacity-40'}`}>
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" className="pointer-events-none">
          <defs>
            <pattern id="grid" width="80" height="80" patternUnits="userSpaceOnUse">
              <path d="M 80 0 L 0 0 0 80" fill="none" stroke={theme === 'dark' ? '#ffffff' : '#000000'} strokeWidth="1" strokeOpacity="0.25" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Dynamic Cursor Glow */}
      <motion.div 
        className="absolute pointer-events-none z-0"
        style={{
          left: smoothX,
          top: smoothY,
          x: "-50%",
          y: "-50%",
          width: "40vw",
          height: "40vw",
          borderRadius: "100%",
          background: `radial-gradient(circle, ${theme === 'dark' ? 'rgba(230,92,46,0.18)' : 'rgba(230,92,46,0.12)'} 0%, transparent 70%)`,
          filter: "blur(60px)"
        }}
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.98, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col items-center z-10 text-center"
      >
        <Logo theme={theme} size="xl" className="mb-20" />
        
        <div className="overflow-hidden mb-10">
          <motion.h2 
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
            className={`text-xs md:text-sm font-bold tracking-[0.8em] uppercase text-[#e65c2e]`}
          >
            The Art of Seeing Differently
          </motion.h2>
        </div>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 1.5 }}
          className="max-w-4xl mx-auto text-3xl md:text-5xl font-light leading-[1.2] px-4 tracking-tight"
        >
          We are a creative consultancy <br className="hidden md:block" /> 
          <span className="font-medium italic border-b-2 border-[#e65c2e]/40 pb-1">rooted in the Arab world.</span>
        </motion.p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-12 flex flex-col items-center gap-4 cursor-pointer group"
        onClick={scrollToNext}
      >
        <span className="text-[10px] uppercase tracking-[0.5em] opacity-40 group-hover:opacity-100 group-hover:text-[#e65c2e] transition-all">Explore</span>
        <div className={`w-px h-16 ${theme === 'dark' ? 'bg-white/10' : 'bg-black/10'} relative overflow-hidden`}>
          <motion.div 
            animate={{ y: [-64, 64] }}
            transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
            className="absolute top-0 left-0 w-full h-1/2 bg-[#e65c2e]" 
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
