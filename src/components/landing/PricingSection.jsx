import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import useScrollReveal from './useScrollReveal';
import ConversionButtons from './ConversionButtons';

export default function PricingSection() {
  const [ref, isVisible] = useScrollReveal();

  const features = [
    'Agenda ilimitada',
    'Gestão de clientes',
    'Controle financeiro',
    'Lembretes para clientes',
    'Relatórios de faturamento',
    'Suporte via WhatsApp',
  ];

  return (
    <section className="py-20 sm:py-28 relative">
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
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
            Simples e sem surpresas
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto">
            7 dias grátis. Depois, escolha seu plano.
          </p>
        </motion.div>

        <div className="flex justify-center">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 40 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative p-8 sm:p-10 rounded-3xl border-2 border-primary/50 bg-card max-w-md w-full overflow-hidden"
          >
            {/* Background glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-pink-100/10" />

            {/* Badge "Mais popular" */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary text-white text-xs font-semibold tracking-wide uppercase">
                Mais popular
              </span>
            </div>

            <div className="relative">
              <div className="mt-4 mb-6">
                <h3 className="font-heading text-2xl font-bold text-foreground mb-2">
                  Easy Studio Pro
                </h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl sm:text-5xl font-bold text-foreground">
                    <span style={{ color: '#E91E8C' }}>R$ 29,90/mês</span>
                  </span>
                </div>
              </div>

              <div className="space-y-3 mb-8 pb-8 border-b border-border">
                {features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-sm text-foreground">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="mb-8 space-y-2 text-sm text-muted-foreground">
                <p className="flex items-center gap-2">
                  <span>✓</span>
                  <span>7 dias grátis</span>
                </p>
                <p className="flex items-center gap-2">
                  <span>✓</span>
                  <span>Cancele quando quiser</span>
                </p>
              </div>

              <div className="flex justify-center">
                <ConversionButtons checkoutText="Começar gratis agora →" showWhatsApp={false} />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
