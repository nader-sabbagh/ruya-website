
import React from 'react';
import { motion } from 'framer-motion';
import { Theme, ServiceItem } from '../types';
import { ChessKnight, Lightbulb, Camera, Handshake } from './Icons';

const SERVICES: Omit<ServiceItem, 'details'>[] = [
  {
    title: "Strategy Consultancy",
    description: "Portfolio strategies, program design, sponsorship & revenue models.",
    icon: "chess"
  },
  {
    title: "Creative & Storytelling",
    description: "Concept creation, experience design, brand & pitch decks.",
    icon: "lightbulb"
  },
  {
    title: "Production & Technical",
    description: "Show/event oversight, budgeting, AVL & stage design.",
    icon: "production"
  },
  {
    title: "Partnerships",
    description: "Expert network, stakeholder alignment & partnerships recommendations.",
    icon: "partnerships"
  }
];

interface ServicesProps {
  theme: Theme;
}

const Services: React.FC<ServicesProps> = ({ theme }) => {
  return (
    <div className={`py-40 px-6 ${theme === 'dark' ? 'bg-[#0f0f0f]' : 'bg-zinc-100/50'}`}>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-baseline justify-between mb-24 gap-8">
          <div className="max-w-2xl">
            <h3 className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#e65c2e] mb-4">Core Competencies</h3>
            <h2 className="text-6xl md:text-8xl font-bold tracking-tighter">Expertise.</h2>
          </div>
          <p className="text-xl font-light opacity-50 italic md:max-w-xs leading-relaxed">
            Integrated thinking for complex cultural landscapes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES.map((service, idx) => (
            <ServiceCard key={service.title} service={service} theme={theme} idx={idx} />
          ))}
        </div>
      </div>
    </div>
  );
};

interface ServiceCardProps {
  service: any;
  theme: Theme;
  idx: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, theme, idx }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: idx * 0.1, duration: 0.8 }}
    viewport={{ once: true }}
    className={`group p-12 rounded-none border-l-2 transition-all ${
      theme === 'dark' 
        ? 'bg-black/40 border-white/10 hover:border-[#e65c2e]' 
        : 'bg-white border-black/5 hover:border-[#e65c2e] hover:shadow-2xl'
    }`}
  >
    <div className="mb-10 text-[#e65c2e] opacity-80 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-500">
      {service.icon === 'chess' && <ChessKnight />}
      {service.icon === 'lightbulb' && <Lightbulb />}
      {service.icon === 'production' && <Camera />}
      {service.icon === 'partnerships' && <Handshake />}
    </div>
    
    <h4 className="text-3xl font-bold mb-6 tracking-tight">{service.title}</h4>
    <p className="text-lg font-light opacity-60 leading-relaxed max-w-md">
      {service.description}
    </p>
  </motion.div>
);

export default Services;
