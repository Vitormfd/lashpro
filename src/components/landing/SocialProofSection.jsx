import { motion } from 'framer-motion';
import { Star, Quote, Users } from 'lucide-react';
import useScrollReveal from './useScrollReveal';

const testimonials = [
  {
    name: 'Ana Vitória',
    role: 'Lash Designer — Salvador, BA',
    avatarType: 'initials',
    avatarInitials: 'AV',
    text: 'Em 1 mês usando o Easy Studio, não tive mais nenhuma falta por esquecimento. Minhas clientes adoram receber o lembrete antes da sessão. Mudou minha rotina completamente.',
    rating: 5,
    isComingSoon: false,
  },
  {
    name: 'Marina Silva',
    role: 'Nail Designer — Curitiba, PR',
    avatarType: 'initials',
    avatarInitials: 'MS',
    text: 'Finalmente consigo ver quanto lucro por mês de verdade. Antes eu não fazia ideia se estava no azul ou no vermelho. O dashboard financeiro abriu meus olhos pro negócio.',
    rating: 5,
    isComingSoon: false,
  },
  {
    name: 'Juliana Costa',
    role: 'Lash Designer — Brasília, DF',
    avatarType: 'initials',
    avatarInitials: 'JC',
    text: 'Sistema simples de verdade. Comecei a usar no mesmo dia sem precisar de tutorial. A agenda visual é exatamente o que eu precisava.',
    rating: 5,
    isComingSoon: false,
  },
];

function TestimonialCard({ testimonial, index }) {
  const [ref, isVisible] = useScrollReveal(0.2);

  const cardClasses = testimonial.isComingSoon 
    ? "opacity-60 pointer-events-none" 
    : "group hover:shadow-2xl hover:shadow-primary/5 hover:-translate-y-1";

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className={`relative p-6 sm:p-8 rounded-3xl border border-border bg-card transition-all duration-500 ${cardClasses}`}
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
        {testimonial.avatarType === 'initials' ? (
          <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-semibold text-sm" style={{ backgroundColor: '#E91E8C' }}>
            {testimonial.avatarInitials}
          </div>
        ) : (
          <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center">
            <Users className="w-6 h-6 text-muted-foreground" />
          </div>
        )}
        <div>
          <p className="text-sm font-semibold text-foreground">{testimonial.name}</p>
          <p className="text-xs text-muted-foreground">{testimonial.role}</p>
          {testimonial.isComingSoon && (
            <p className="text-xs text-primary font-medium mt-1">Depoimento em breve</p>
          )}
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
            DEPOIMENTOS REAIS
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
            Quem usa, não volta para<br />
            <span className="text-gradient">o caderninho</span>
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