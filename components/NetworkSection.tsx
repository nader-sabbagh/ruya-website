
import React from 'react';
import { motion } from 'framer-motion';
import { Theme } from '../types';

interface NetworkSectionProps {
  theme: Theme;
}

const CITIES = ["Riyadh", "Dubai", "Muscat", "Beirut"];

const NetworkSection: React.FC<NetworkSectionProps> = ({ theme }) => {
  return (
    <div className="py-40 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h3 className="text-[10px] font-bold uppercase tracking-[0.6em] text-[#e65c2e] mb-12">
          Global Presence
        </h3>
        
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center items-center gap-x-6 gap-y-4 md:gap-x-12"
        >
          {CITIES.map((city, idx) => (
            <React.Fragment key={city}>
              <span className={`text-4xl md:text-6xl font-bold tracking-tighter ${
                theme === 'dark' ? 'text-white' : 'text-black'
              }`}>
                {city}
              </span>
              {idx < CITIES.length - 1 && (
                <span className="text-2xl md:text-4xl font-light text-[#e65c2e]/40">/</span>
              )}
            </React.Fragment>
          ))}
        </motion.div>
        
        <p className={`mt-16 text-xs font-bold uppercase tracking-[0.4em] opacity-30`}>
          Operating across the MENA region & beyond.
        </p>
      </div>
    </div>
  );
};

export default NetworkSection;
