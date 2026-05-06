const CHECKOUT_FALLBACK = 'https://buy.stripe.com/7sYaEYb31ck32Zbb3O6kg01'
const WHATSAPP_NUMBER_FALLBACK = '5521992320083'
const WHATSAPP_MESSAGE_FALLBACK = 'Oi, vim pela pagina e quero entender melhor como funciona o sistema'

export const CHECKOUT_URL = import.meta.env.VITE_CHECKOUT_URL || CHECKOUT_FALLBACK

const WHATSAPP_NUMBER = import.meta.env.VITE_WHATSAPP_NUMBER || WHATSAPP_NUMBER_FALLBACK
const WHATSAPP_MESSAGE = import.meta.env.VITE_WHATSAPP_MESSAGE || WHATSAPP_MESSAGE_FALLBACK

export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`
