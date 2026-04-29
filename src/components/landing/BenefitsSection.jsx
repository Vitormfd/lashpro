import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import useScrollReveal from './useScrollReveal';

const benefits = [
  {
    title: 'Mais organização',
    description: 'Sua agenda sempre em dia, sem conflitos e sem estresse.',
    metric: '3x',
    metricLabel: 'mais produtividade',
  },
  {
    title: 'Mais clientes atendidas',
    description: 'Otimize seus horários e atenda mais sem trabalhar mais.',
    metric: '+40%',
    metricLabel: 'de atendimentos',
  },
  {
    title: 'Mais dinheiro no bolso',
    description: 'Reduza faltas, aumente a recorrência e veja seus ganhos subirem.',
    metric: 'R$ 2k+',
    metricLabel: 'a mais por mês',
  },
  {
    title: 'Mais profissionalismo',
    description: 'Impressione suas clientes com um atendimento de alto nível.',
    metric: '98%',
    metricLabel: 'de satisfação',
  },
];

function BenefitCard({ benefit, index }) {
  const [ref, isVisible] = useScrollReveal(0.2);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative flex flex-col sm:flex-row items-start gap-5 p-6 sm:p-8 rounded-3xl border border-border bg-card hover:bg-accent/50 hover:shadow-xl hover:shadow-primary/5 transition-all duration-500"
    >
      <div className="flex-shrink-0">
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/10 to-pink-100/50 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
          <span className="text-2xl font-bold text-gradient font-heading">{benefit.metric}</span>
        </div>
      </div>
      <div className="flex-1">
        <div className="flex items-center gap-2 mb-1">
          <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
          <h3 className="text-lg font-semibold text-foreground">{benefit.title}</h3>
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed ml-7">{benefit.description}</p>
        <p className="text-xs text-primary font-medium mt-2 ml-7">{benefit.metricLabel}</p>
      </div>
    </motion.div>
  );
}

export default function BenefitsSection() {
  const [ref, isVisible] = useScrollReveal();

  return (
    <section id="beneficios" className="py-20 sm:py-28 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-green-50 text-green-600 text-xs font-semibold mb-4 tracking-wide uppercase">
            Resultados reais
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
            Não é sobre funcionalidades,<br />é sobre{' '}
            <span className="text-gradient">resultados</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto">
            Veja o que muda na sua rotina quando você começa a usar o Easy Studio.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {benefits.map((benefit, i) => (
            <BenefitCard key={i} benefit={benefit} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}