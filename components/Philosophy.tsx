
import React from 'react';
import { motion, useInView, Variants } from 'framer-motion';
import { Theme } from '../types';

interface PhilosophyProps { theme: Theme; }

const Philosophy: React.FC<PhilosophyProps> = ({ theme }) => {
  const containerRef = React.useRef(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.2 });

  const text = "A creative & cultural consultancy crafting strategy, stories, and experiences rooted in the Arab world.";
  const words = text.split(" ");

  // Added explicit Variants type to fix ease string literal inference
  const container: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: 0.2 }
    }
  };

  // Added explicit Variants type to satisfy Framer Motion's Easing type requirements
  const item: Variants = {
    hidden: { opacity: 0, y: 15, filter: "blur(4px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <div ref={containerRef} className="py-40 px-6 flex flex-col items-center justify-center min-h-[80vh] relative overflow-hidden">
      {/* Subtle Background Watermark */}
      <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15vw] font-bold opacity-[0.03] pointer-events-none select-none tracking-tighter ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
        RU'YA
      </div>

      <motion.div 
        variants={container}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="text-center max-w-5xl relative z-10"
      >
        <motion.h3 
          variants={item}
          className="text-[11px] font-bold uppercase tracking-[0.6em] text-[#e65c2e] mb-16"
        >
          Our Mission
        </motion.h3>
        
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-[1.15] mb-16 flex flex-wrap justify-center gap-x-[0.3em] gap-y-[0.1em]">
          {words.map((word, i) => (
            <motion.span 
              key={i} 
              variants={item}
              className={word === "rooted" || word === "Arab" || word === "world." ? "italic font-light opacity-70 text-[#e65c2e]" : ""}
            >
              {word}
            </motion.span>
          ))}
        </h2>
        
        <motion.div variants={item} className="flex justify-center items-center gap-4">
            <div className={`h-px w-20 ${theme === 'dark' ? 'bg-white/10' : 'bg-black/10'}`} />
            <div className="w-1.5 h-1.5 rounded-full bg-[#e65c2e]" />
            <div className={`h-px w-20 ${theme === 'dark' ? 'bg-white/10' : 'bg-black/10'}`} />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Philosophy;
