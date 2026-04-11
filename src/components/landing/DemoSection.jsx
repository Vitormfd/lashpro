import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Users, BarChart3 } from 'lucide-react';
import useScrollReveal from './useScrollReveal';

const SCREENS = [
  {
    id: 'agenda',
    label: 'Agenda',
    icon: Calendar,
    image: 'https://media.base44.com/images/public/69da5a23a15e4d2a1afc6188/0a328b862_generated_fcac1463.png',
    caption: 'Visualize seus compromissos de forma clara e organizada',
  },
  {
    id: 'clientes',
    label: 'Clientes',
    icon: Users,
    image: 'https://media.base44.com/images/public/69da5a23a15e4d2a1afc6188/f8f142a65_generated_65bfa460.png',
    caption: 'Gerencie suas clientes com histórico completo',
  },
  {
    id: 'dashboard',
    label: 'Dashboard',
    icon: BarChart3,
    image: 'https://media.base44.com/images/public/69da5a23a15e4d2a1afc6188/a1c4d6f1c_generated_ff5946dc.png',
    caption: 'Acompanhe seus ganhos em tempo real',
  },
];

export default function DemoSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [ref, isVisible] = useScrollReveal();

  useEffect(() => {
    if (!isVisible) return;
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % SCREENS.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [isVisible]);

  return (
    <section id="demo" className="py-20 sm:py-28 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-accent/30 via-transparent to-accent/30" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-4 tracking-wide uppercase">
            Veja na prática
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
            Simples, bonito e{' '}
            <span className="text-gradient">poderoso</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto">
            Conheça as telas que vão transformar sua rotina profissional.
          </p>
        </motion.div>

        {/* Tab buttons */}
        <div className="flex justify-center gap-2 sm:gap-4 mb-12">
          {SCREENS.map((screen, i) => (
            <button
              key={screen.id}
              onClick={() => setActiveIndex(i)}
              className={`relative flex items-center gap-2 px-4 sm:px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                activeIndex === i
                  ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/25'
                  : 'bg-card border border-border text-muted-foreground hover:text-foreground hover:bg-accent'
              }`}
            >
              <screen.icon className="w-4 h-4" />
              <span className="hidden sm:inline">{screen.label}</span>
            </button>
          ))}
        </div>

        {/* Screen display */}
        <div className="relative flex justify-center">
          <div className="relative w-72 sm:w-80">
            {/* Phone frame */}
            <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 via-pink-300/15 to-primary/10 rounded-[3rem] blur-2xl" />
            <div className="relative bg-foreground/90 rounded-[2.5rem] p-2 shadow-2xl shadow-black/20">
              <div className="relative overflow-hidden rounded-[2rem] bg-white aspect-[3/4]">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={SCREENS[activeIndex].id}
                    src={SCREENS[activeIndex].image}
                    alt={SCREENS[activeIndex].label}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.4, ease: 'easeInOut' }}
                    className="w-full h-full object-cover"
                  />
                </AnimatePresence>
              </div>
              {/* Notch */}
              <div className="absolute top-2 left-1/2 -translate-x-1/2 w-24 h-5 bg-foreground/90 rounded-full" />
            </div>
          </div>
        </div>

        {/* Caption */}
        <AnimatePresence mode="wait">
          <motion.p
            key={SCREENS[activeIndex].id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="text-center mt-8 text-muted-foreground"
          >
            {SCREENS[activeIndex].caption}
          </motion.p>
        </AnimatePresence>

        {/* Progress bar */}
        <div className="flex justify-center gap-2 mt-6">
          {SCREENS.map((_, i) => (
            <div key={i} className="relative w-16 h-1 rounded-full bg-border overflow-hidden">
              {activeIndex === i && (
                <motion.div
                  initial={{ width: '0%' }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 4, ease: 'linear' }}
                  className="absolute inset-y-0 left-0 bg-primary rounded-full"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}