import { motion } from 'framer-motion'
import { WHATSAPP_URL } from '@/lib/conversionLinks'
import WhatsAppIcon from './WhatsAppIcon'

export default function FloatingWhatsAppButton() {
  return (
    <motion.a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noreferrer noopener"
      aria-label="Abrir conversa no WhatsApp"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: 'easeOut', delay: 0.4 }}
      className="fixed bottom-5 right-4 sm:right-6 z-50"
    >
      <motion.div
        animate={{ y: [0, -2, 0], scale: [1, 1.03, 1] }}
        transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
        className="group flex items-center gap-2 rounded-full bg-[#25D366] text-white shadow-2xl shadow-[#25D366]/30 px-4 sm:px-5 py-3.5 sm:py-3 border border-white/30 hover:shadow-[#25D366]/50 hover:scale-[1.03] active:scale-[0.98] transition-all duration-300"
      >
        <WhatsAppIcon className="w-5 h-5" />
        <span className="text-sm font-semibold pr-0.5">WhatsApp</span>
      </motion.div>
    </motion.a>
  )
}
