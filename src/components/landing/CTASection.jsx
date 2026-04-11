import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import useScrollReveal from './useScrollReveal';
import ConversionButtons from './ConversionButtons';

export default function CTASection() {
  const [ref, isVisible] = useScrollReveal();

  return (
    <section className="py-20 sm:py-28 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="relative rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden"
        >
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-foreground via-foreground/95 to-foreground/90" />
          <div className="absolute inset-0">
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl" />
          </div>

          <div className="relative px-6 sm:px-12 lg:px-20 py-16 sm:py-20 lg:py-24 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isVisible ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/10 mb-8"
            >
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-xs font-medium text-white/80">Oferta especial por tempo limitado</span>
            </motion.div>

            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
              Pronta para transformar<br />seu negócio?
            </h2>
            <p className="mt-6 text-lg text-white/70 max-w-lg mx-auto">
              Junte-se a mais de 2.000 lash designers que já estão faturando mais com o LashPro.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <ConversionButtons checkoutText="Comecar agora" compact />
            </div>

            <p className="mt-6 text-sm text-white/50">
              7 dias grátis • Sem cartão de crédito • Cancele quando quiser
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}