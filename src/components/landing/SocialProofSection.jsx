import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import useScrollReveal from './useScrollReveal';

const testimonials = [
  {
    name: 'Camila Santos',
    role: 'Designer de unhas — São Paulo',
    avatar: 'https://media.base44.com/images/public/69da5a23a15e4d2a1afc6188/1689a069f_generated_cdd5bd59.png',
    text: 'Antes eu perdia várias clientes por falta. Depois do Easy Studio, os lembretes reduziram muito as ausências e meu faturamento cresceu.',
    rating: 5,
  },
  {
    name: 'Fernanda Oliveira',
    role: 'Esteticista — Rio de Janeiro',
    avatar: 'https://media.base44.com/images/public/69da5a23a15e4d2a1afc6188/30ca23293_generated_93ba14d3.png',
    text: 'O sistema é tão fácil de usar que comecei no mesmo dia. Minhas clientes adoram receber o lembrete automático. Super profissional!',
    rating: 5,
  },
  {
    name: 'Juliana Costa',
    role: 'Designer de sobrancelhas — Belo Horizonte',
    avatar: 'https://media.base44.com/images/public/69da5a23a15e4d2a1afc6188/2839d4a5d_generated_0ce0ebf0.png',
    text: 'Finalmente consigo ver quanto ganho por mês de verdade. O dashboard financeiro mudou minha visão do negócio. Recomendo muito!',
    rating: 5,
  },
];

function TestimonialCard({ testimonial, index }) {
  const [ref, isVisible] = useScrollReveal(0.2);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="group relative p-6 sm:p-8 rounded-3xl border border-border bg-card hover:shadow-2xl hover:shadow-primary/5 hover:-translate-y-1 transition-all duration-500"
    >
      <Quote className="w-8 h-8 text-primary/20 mb-4" />
      
      <p className="text-sm sm:text-base text-foreground leading-relaxed mb-6">
        "{testimonial.text}"
      </p>

      <div className="flex items-center gap-1 mb-4">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
        ))}
      </div>

      <div className="flex items-center gap-3">
        <img
          src={testimonial.avatar}
          alt={testimonial.name}
          className="w-12 h-12 rounded-full object-cover border-2 border-primary/10"
        />
        <div>
          <p className="text-sm font-semibold text-foreground">{testimonial.name}</p>
          <p className="text-xs text-muted-foreground">{testimonial.role}</p>
        </div>
      </div>
    </motion.div>
  );
}

export default function SocialProofSection() {
  const [ref, isVisible] = useScrollReveal();

  return (
    <section id="depoimentos" className="py-20 sm:py-28 relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/40 to-transparent" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-yellow-50 text-yellow-600 text-xs font-semibold mb-4 tracking-wide uppercase">
            Quem já usa, ama
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
            Mais de 2.000 profissionais da beleza<br />
            <span className="text-gradient">transformando seus negócios</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <TestimonialCard key={i} testimonial={t} index={i} />
          ))}
        </div>

      </div>
    </section>
  );
}