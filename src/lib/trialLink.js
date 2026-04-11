const DEFAULT_TRIAL_APP_URL = '/'

const appendDemoParam = (baseUrl) => {
  try {
    const parsed = new URL(baseUrl, window.location.origin)
    parsed.searchParams.set('demo', '1')
    return parsed.toString()
  } catch {
    const sep = String(baseUrl).includes('?') ? '&' : '?'
    return `${baseUrl}${sep}demo=1`
  }
}

export const getTrialDemoUrl = () => {
  const configured = import.meta.env.VITE_TRIAL_APP_URL || DEFAULT_TRIAL_APP_URL
  return appendDemoParam(configured)
}
