import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { CHECKOUT_URL, WHATSAPP_URL } from '@/lib/conversionLinks'
import WhatsAppIcon from './WhatsAppIcon'

export default function ConversionButtons({
  align = 'center',
  checkoutText = 'Testar gratis por 7 dias',
  showWhatsApp = true,
  compact = false,
}) {
  const justify = align === 'left' ? 'justify-start' : 'justify-center'

  return (
    <div className={`flex flex-col sm:flex-row ${justify} gap-3 sm:gap-4 w-full`}>
      <Button
        asChild
        size="lg"
        className={`group relative overflow-hidden rounded-full border-0 bg-gradient-to-r from-[#E65D8F] via-[#D34E86] to-[#B63E74] text-white shadow-xl shadow-[#B63E74]/35 hover:shadow-2xl hover:shadow-[#B63E74]/45 hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 ${compact ? 'px-7 py-6' : 'px-9 py-7'} text-base font-semibold w-full sm:w-auto`}
      >
        <a href={CHECKOUT_URL} target="_blank" rel="noreferrer noopener" aria-label="Ir para checkout">
          <span className="absolute -inset-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[radial-gradient(circle_at_40%_20%,rgba(255,255,255,0.35),transparent_55%)]" />
          <span className="relative inline-flex items-center">
            {checkoutText}
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </span>
        </a>
      </Button>

      {showWhatsApp && (
        <Button
          asChild
          variant="outline"
          size="lg"
          className={`group rounded-full border-2 border-[#25D366]/45 text-foreground bg-white/65 backdrop-blur-sm hover:bg-[#25D366]/12 hover:border-[#25D366]/70 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 ${compact ? 'px-7 py-6' : 'px-9 py-7'} text-base font-medium w-full sm:w-auto`}
        >
          <a href={WHATSAPP_URL} target="_blank" rel="noreferrer noopener" aria-label="Falar no WhatsApp">
            <WhatsAppIcon className="mr-2 w-4 h-4 text-[#25D366] group-hover:scale-110 transition-transform" />
            Falar no WhatsApp
          </a>
        </Button>
      )}
    </div>
  )
}
