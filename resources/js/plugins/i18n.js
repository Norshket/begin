import { createI18n } from 'vue-i18n'

import config from '../configs'

const { locale, availableLocales, fallbackLocale } = config.locales

const messages = {}

availableLocales.forEach((l) => { messages[l.code] = l.messages })

export const i18n = createI18n({
  locale: locale,
  fallbackLocale,
  messages,
})

i18n.locales = availableLocales

export default i18n