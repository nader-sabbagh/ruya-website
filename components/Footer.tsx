
import React from 'react';
import { Mail, Phone, Instagram, Linkedin, Twitter } from 'lucide-react';
import { Theme } from '../types';
import Logo from './Logo';

interface FooterProps {
  theme: Theme;
}

const Footer: React.FC<FooterProps> = ({ theme }) => {
  return (
    <footer className={`py-40 px-6 border-t ${theme === 'dark' ? 'border-white/5' : 'border-black/5'}`}>
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-24 mb-32">
          <div>
            <h2 className="text-6xl md:text-8xl font-bold tracking-tighter mb-16 leading-tight">
              Start the <span className="italic font-light text-[#e65c2e]">conversation.</span>
            </h2>
            <div className="space-y-12">
              <a href="mailto:nader@ruyacreative.co" className="block group">
                <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#e65c2e] mb-4">Inquiries</p>
                <p className="text-3xl md:text-4xl font-light tracking-tight group-hover:translate-x-4 transition-transform duration-500">nader@ruyacreative.co</p>
              </a>
              
              <div className="grid sm:grid-cols-2 gap-12">
                <a href="tel:+96171399833" className="block group">
                  <p className="text-[10px] font-bold uppercase tracking-[0.4em] opacity-40 mb-2">Lebanon</p>
                  <p className="text-xl font-medium group-hover:text-[#e65c2e] transition-colors tracking-tight">+961 71 399 833</p>
                </a>
                
                <a href="tel:+966543664367" className="block group">
                  <p className="text-[10px] font-bold uppercase tracking-[0.4em] opacity-40 mb-2">Saudi Arabia</p>
                  <p className="text-xl font-medium group-hover:text-[#e65c2e] transition-colors tracking-tight">+966 54 366 4367</p>
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-end lg:items-end">
            <div className="flex gap-6 mb-16">
              {[Instagram, Linkedin, Twitter].map((Icon, i) => (
                <a key={i} href="#" className={`w-14 h-14 flex items-center justify-center rounded-full border transition-all ${
                  theme === 'dark' ? 'border-white/10 hover:border-[#e65c2e] hover:text-[#e65c2e]' : 'border-black/5 hover:border-[#e65c2e] hover:text-[#e65c2e]'
                }`}>
                  <Icon size={20} />
                </a>
              ))}
            </div>
            
            <div className="lg:text-right">
              <Logo theme={theme} size="md" className="mb-6 lg:ml-auto" />
              <p className="text-lg font-light opacity-50 leading-relaxed max-w-sm italic">
                Crafting cultural resonance through strategic creativity and deep regional insight.
              </p>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-[#e65c2e]/10 flex flex-col md:flex-row items-center justify-between gap-8">
          <p className="text-[10px] font-bold uppercase tracking-[0.4em] opacity-30">
            © 2025 Ru'ya Creative. All Rights Reserved.
          </p>
          <div className="flex gap-12 text-[10px] font-bold uppercase tracking-[0.3em] opacity-30">
            <a href="#" className="hover:opacity-100 hover:text-[#e65c2e] transition-all">Privacy</a>
            <a href="#" className="hover:opacity-100 hover:text-[#e65c2e] transition-all">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
