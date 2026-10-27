const CHECKOUT_FALLBACK = 'https://buy.stripe.com/7sYaEYb31ck32Zbb3O6kg01'
const SIGNUP_FALLBACK = 'https://easystudio.com.br/?mode=signup'
const WHATSAPP_NUMBER = '5574999348744'
const WHATSAPP_MESSAGE_FALLBACK = 'Oi, vim pela pagina e quero entender melhor como funciona o sistema'

export const CHECKOUT_URL = import.meta.env.VITE_CHECKOUT_URL || CHECKOUT_FALLBACK
export const SIGNUP_URL = import.meta.env.VITE_SIGNUP_URL || SIGNUP_FALLBACK

const TRACKING_PARAMS = ['fbclid', 'utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term']

// O app fica em outro domínio: sem repassar o fbclid e as UTMs do anúncio,
// o pixel do app não consegue atribuir o cadastro à campanha.
export const getSignupUrl = () => {
  if (typeof window === 'undefined') return SIGNUP_URL
  try {
    const target = new URL(SIGNUP_URL)
    const current = new URLSearchParams(window.location.search)
    for (const key of TRACKING_PARAMS) {
      const value = current.get(key)
      if (value && !target.searchParams.has(key)) target.searchParams.set(key, value)
    }
    return target.toString()
  } catch {
    return SIGNUP_URL
  }
}

const WHATSAPP_MESSAGE = import.meta.env.VITE_WHATSAPP_MESSAGE || WHATSAPP_MESSAGE_FALLBACK

export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`
