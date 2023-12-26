import i18n from "i18next"

import { initReactI18next } from "react-i18next"
import ru from './../locales/ru.json'
import en from './../locales/en.json'
// import en from 'locales/en.json'

const resources = {
  en: {
    translation: en
  },
  ru: {
    translation: ru
  }
}

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en",

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  })

export default i18n