
import React from 'react';
import { motion } from 'framer-motion';
import { Globe, ShieldCheck, Zap, Users } from 'lucide-react';
import { Theme } from '../types';

interface WhySectionProps {
  theme: Theme;
}

const WHYS = [
  {
    title: "Regional Insight",
    icon: <Globe size={28} />,
    description: "Locally rooted context delivered with international rigor."
  },
  {
    title: "Cultural Authenticity",
    icon: <ShieldCheck size={28} />,
    description: "Respecting heritage while pushing modern boundaries."
  },
  {
    title: "Integrated Strategy",
    icon: <Zap size={28} />,
    description: "Seamless transitions from broad strategy to meticulous execution."
  },
  {
    title: "Agile Network",
    icon: <Users size={28} />,
    description: "Expert squads assembled specifically for your brief."
  }
];

const WhySection: React.FC<WhySectionProps> = ({ theme }) => {
  return (
    <div className="py-40 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#e65c2e] mb-6">Value Proposition</h3>
            <h2 className="text-6xl md:text-8xl font-bold tracking-tighter mb-10 italic">Why Us.</h2>
            <p className="text-2xl font-light opacity-60 leading-relaxed mb-12">
              From live theatre and large-scale events to cultural strategy and creative direction, 
              we design moments that move people and ideas that last. Our work sits at the intersection of storytelling, 
              space, and execution — turning vision into experiences you can feel, not just explain.
            </p>
            <div className={`h-1 w-24 bg-[#e65c2e]`} />
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
            {WHYS.map((why, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                className="group"
              >
                <div className="text-[#e65c2e] mb-6 opacity-70 group-hover:opacity-100 transition-opacity underline decoration-1 underline-offset-8 decoration-[#e65c2e]/30">
                  {why.icon}
                </div>
                <h4 className="text-xl font-bold mb-4 tracking-tight uppercase">{why.title}</h4>
                <p className="text-base font-light opacity-50 leading-relaxed italic">{why.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhySection;
