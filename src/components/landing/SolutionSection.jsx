import { motion } from 'framer-motion';
import { Calendar, Users, BarChart3, Bell, Shield, Smartphone } from 'lucide-react';
import useScrollReveal from './useScrollReveal';

const features = [
  {
    icon: Calendar,
    title: 'Agenda Inteligente',
    description: 'Organize seus horários de forma visual e prática. Nunca mais perca um compromisso.',
    gradient: 'from-primary/10 to-pink-100/50',
  },
  {
    icon: Users,
    title: 'Gestão de Clientes',
    description: 'Histórico completo de cada cliente: procedimentos, preferências e contato.',
    gradient: 'from-violet-100/50 to-primary/10',
  },
  {
    icon: BarChart3,
    title: 'Controle Financeiro',
    description: 'Saiba exatamente quanto você ganha por dia, semana e mês. Relatórios simples.',
    gradient: 'from-green-100/50 to-emerald-50/30',
  },
  {
    icon: Bell,
    title: 'Lembretes Automáticos',
    description: 'Suas clientes recebem lembretes antes do horário. Adeus, faltas!',
    gradient: 'from-amber-100/50 to-orange-50/30',
  },
  {
    icon: Shield,
    title: 'Dados Seguros',
    description: 'Todas as informações protegidas na nuvem. Acesse de qualquer lugar.',
    gradient: 'from-blue-100/50 to-sky-50/30',
  },
  {
    icon: Smartphone,
    title: 'Funciona no Celular',
    description: 'Use direto do seu celular, sem precisar instalar nada. Simples assim.',
    gradient: 'from-rose-100/50 to-pink-50/30',
  },
];

function FeatureCard({ feature, index }) {
  const [ref, isVisible] = useScrollReveal(0.15);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group relative p-6 sm:p-8 rounded-3xl border border-border bg-card overflow-hidden hover:shadow-2xl hover:shadow-primary/5 hover:-translate-y-1 transition-all duration-500"
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
      <div className="relative">
        <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-primary/15 transition-all duration-300">
          <feature.icon className="w-7 h-7 text-primary" />
        </div>
        <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
      </div>
    </motion.div>
  );
}

export default function SolutionSection() {
  const [ref, isVisible] = useScrollReveal();

  return (
    <section id="solucao" className="py-20 sm:py-28 relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 right-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-60 h-60 bg-pink-200/10 rounded-full blur-3xl" />
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
            A solução
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
            Tudo que você precisa,<br />
            <span className="text-gradient">em um só lugar</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto">
            O LashPro foi feito por quem entende a rotina de uma lash designer.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <FeatureCard key={i} feature={feature} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}