import en from '../lang/en'
import ru from '../lang/ru'

const supported = ['en', 'ru']
let locale = 'ru'


try {
  // get browser default language
  const { 0: browserLang } = navigator.language.split('-')

  if (supported.includes(browserLang)) locale = browserLang
} catch (e) {
  console.log(e)
}

export default {

  locale,

  // when translation is not available fallback to that locale
  fallbackLocale: 'ru',

  // availabled locales for user selection
  availableLocales: [
    {
      code: 'en',
      flag: 'us',
      label: 'English',
      messages: en
    },
    {
      code: 'ru',
      flag: 'ru',
      label: 'Русский',
      messages: ru
    }
  ]

}