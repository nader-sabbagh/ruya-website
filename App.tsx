
import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { Theme } from './types';
import Hero from './components/Hero';
import Philosophy from './components/Philosophy';
import Services from './components/Services';
import WhySection from './components/WhySection';
import NetworkSection from './components/NetworkSection';
import Footer from './components/Footer';
import Logo from './components/Logo';

const App: React.FC = () => {
  const [theme, setTheme] = useState<Theme>('dark');
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const navHeight = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - navHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    if (theme === 'dark') {
      document.body.style.backgroundColor = '#0D0D0D'; // Deeper Obsidian instead of pure black
      document.body.classList.add('bg-[#0D0D0D]', 'text-zinc-100', 'dark');
      document.body.classList.remove('bg-[#FBF9F6]', 'text-zinc-900');
    } else {
      document.body.style.backgroundColor = '#FBF9F6'; // Warm Premium Paper tone
      document.body.classList.add('bg-[#FBF9F6]', 'text-zinc-900');
      document.body.classList.remove('bg-[#0D0D0D]', 'text-zinc-100', 'dark');
    }
  }, [theme]);

  return (
    <div className={`min-h-screen selection:bg-[#e65c2e] selection:text-white transition-colors duration-700 relative`}>
      {/* Background Decorative Liquid Glows */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <motion.div 
          animate={{ 
            x: [0, 50, 0], 
            y: [0, -30, 0],
            scale: [1, 1.1, 1] 
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className={`absolute top-[-15%] right-[-10%] w-[70vw] h-[70vw] rounded-full blur-[140px] transition-colors duration-1000 ${
            theme === 'dark' ? 'bg-[#e65c2e]/10' : 'bg-[#e65c2e]/5'
          }`} 
        />
        <motion.div 
          animate={{ 
            x: [0, -40, 0], 
            y: [0, 60, 0],
            scale: [1, 1.2, 1] 
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          className={`absolute bottom-[-20%] left-[-15%] w-[60vw] h-[60vw] rounded-full blur-[140px] transition-colors duration-1000 ${
            theme === 'dark' ? 'bg-[#e65c2e]/5' : 'bg-orange-200/20'
          }`} 
        />
      </div>

      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-[#e65c2e] z-50 origin-left"
        style={{ scaleX }}
      />

      {/* Theme Toggle */}
      <button
        onClick={toggleTheme}
        className={`fixed bottom-8 right-8 z-50 p-4 rounded-full shadow-2xl backdrop-blur-xl transition-all duration-500 hover:scale-110 border ${
          theme === 'dark' 
            ? 'bg-white/5 border-white/10 text-white hover:bg-white/15' 
            : 'bg-black/5 border-black/10 text-black hover:bg-black/10'
        }`}
        aria-label="Toggle Theme"
      >
        {theme === 'dark' ? <Sun size={24} /> : <Moon size={24} />}
      </button>

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-40 backdrop-blur-xl transition-all duration-700 ${
        theme === 'dark' ? 'bg-black/40 border-b border-white/5' : 'bg-[#FBF9F6]/40 border-b border-black/5'
      }`}>
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="hover:opacity-70 transition-opacity">
            <Logo theme={theme} size="sm" />
          </button>
          
          <div className="hidden md:flex items-center gap-10 text-[10px] font-bold uppercase tracking-[0.4em]">
            {[
              { label: 'Philosophy', id: 'philosophy' },
              { label: 'Services', id: 'services' },
              { label: 'Value', id: 'why' },
              { label: 'Locations', id: 'network' },
              { label: 'Connect', id: 'contact' }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="hover:text-[#e65c2e] transition-all relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#e65c2e] transition-all group-hover:w-full" />
              </button>
            ))}
          </div>
        </div>
      </nav>

      <main className="relative z-10">
        <Hero theme={theme} />
        <section id="philosophy">
          <Philosophy theme={theme} />
        </section>
        <section id="services">
          <Services theme={theme} />
        </section>
        <section id="why">
          <WhySection theme={theme} />
        </section>
        <section id="network">
          <NetworkSection theme={theme} />
        </section>
      </main>

      <section id="contact">
        <Footer theme={theme} />
      </section>
    </div>
  );
};

export default App;
