import { motion } from 'framer-motion';
import { CalendarX, UserX, TrendingDown, AlertTriangle } from 'lucide-react';
import useScrollReveal from './useScrollReveal';

const problems = [
  {
    icon: CalendarX,
    title: 'Agenda desorganizada',
    description: 'Horários misturados, conflitos de agenda e confusão que fazem você perder o controle do dia.',
    color: 'bg-red-50 text-red-500',
  },
  {
    icon: UserX,
    title: 'Clientes faltando',
    description: 'Sem lembrete automático, as faltas se repetem e você perde tempo e dinheiro.',
    color: 'bg-orange-50 text-orange-500',
  },
  {
    icon: TrendingDown,
    title: 'Perda de dinheiro',
    description: 'Sem controle financeiro, você não sabe quanto ganha e não consegue crescer.',
    color: 'bg-yellow-50 text-yellow-600',
  },
  {
    icon: AlertTriangle,
    title: 'Falta de profissionalismo',
    description: 'Anotar tudo no papel ou no WhatsApp passa uma imagem amadora para suas clientes.',
    color: 'bg-pink-50 text-pink-500',
  },
];

function ProblemCard({ problem, index }) {
  const [ref, isVisible] = useScrollReveal(0.2);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative p-6 rounded-2xl border border-border bg-card hover:shadow-xl hover:shadow-black/5 hover:-translate-y-1 transition-all duration-500"
    >
      <div className={`w-12 h-12 rounded-2xl ${problem.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
        <problem.icon className="w-6 h-6" />
      </div>
      <h3 className="text-lg font-semibold text-foreground mb-2">{problem.title}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed">{problem.description}</p>
    </motion.div>
  );
}

export default function ProblemsSection() {
  const [ref, isVisible] = useScrollReveal();

  return (
    <section id="problemas" className="py-20 sm:py-28 relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-red-50 text-red-500 text-xs font-semibold mb-4 tracking-wide uppercase">
            Isso te parece familiar?
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
            O dia a dia de uma lash<br />designer é{' '}
            <span className="text-gradient">desafiador</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto">
            Se você se identifica com esses problemas, saiba que não está sozinha.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((problem, i) => (
            <ProblemCard key={i} problem={problem} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}