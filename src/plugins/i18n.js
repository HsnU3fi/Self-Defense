
import Vue from 'vue'
import VueI18n from 'vue-i18n'
Vue.use(VueI18n)
import en from '../locales/en.json'
import fa from '../locales/fa.json'

var locale = JSON.parse(localStorage.getItem("locale")) || "fa";


export const i18n = new VueI18n({
    legacy: false,
    locale:locale,
    // fallbackLocale: import.meta.env.VITE_I18N_FALLBACK_LOCALE || 'en',
    messages: {
        en,
        fa
    }
})

export default i18n